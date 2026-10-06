// Build-time social-preview cards (Open Graph / Twitter / LinkedIn / Bluesky).
//
// Every card is 1200x630 and drawn in the site's own palette and type: paper
// ground, ink text, Newsreader for display, Inter standing in for the system
// sans of the uppercase labels. Satori lays the card out as SVG, resvg
// rasterises it to PNG. Both run during `astro build` only — nothing here ships
// to the browser.
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { Resvg } from '@resvg/resvg-js';
import { SITE } from '../data/site';
import { CV } from '../data/cv';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Mirrors the custom properties in src/styles/global.css.
const PAPER = '#F0EEE6';
const INK = '#1F1E1D';
const MUTED = '#6D6A64';
const RULE = 'rgba(31, 30, 29, 0.15)';
const TILE = 'rgba(31, 30, 29, 0.05)';
const ON_INK = 'rgba(240, 238, 230, 0.75)';
const ON_INK_FAINT = 'rgba(240, 238, 230, 0.45)';
const ON_INK_LABEL = 'rgba(240, 238, 230, 0.6)';

const SANS = 'Inter';
const SERIF = 'Newsreader';

// The card is a 2x rendering of a ~600px design, so a 1px hairline is drawn 2px.
const HAIRLINE = 2;
const PAD = '64px 76px';
// Width of the inverted panel on a project card; the image fills the rest.
const INK_PANEL = 696;

// Astro runs the build from the project root; these files are read from source
// and never emitted, so they stay out of public/.
const ROOT = process.cwd();
const asset = (...parts: string[]) => path.join(ROOT, 'src', 'assets', ...parts);
const readFont = (file: string) => fs.readFileSync(asset('fonts', file));

const FONTS = [
  { name: SERIF, data: readFont('Newsreader-Regular.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: SERIF, data: readFont('Newsreader-SemiBold.ttf'), weight: 600 as const, style: 'normal' as const },
  { name: SANS, data: readFont('Inter-Regular.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: SANS, data: readFont('Inter-Medium.ttf'), weight: 500 as const, style: 'normal' as const },
];

type Style = Record<string, unknown>;
type Node = { type: string; props: Record<string, unknown> };

/** Minimal createElement for Satori, which takes React-shaped element objects. */
function h(type: string, style: Style, ...children: unknown[]): Node {
  const kids = children.flat().filter((c) => c !== null && c !== undefined && c !== false && c !== '');
  // Satori reads an empty children array as multiple nodes and demands a
  // display mode, so childless elements get no children key at all.
  const children_ = kids.length === 0 ? undefined : kids.length === 1 ? kids[0] : kids;
  return { type, props: { style, children: children_ } };
}

const row = (style: Style, ...children: unknown[]) =>
  h('div', { display: 'flex', flexDirection: 'row', ...style }, ...children);
const col = (style: Style, ...children: unknown[]) =>
  h('div', { display: 'flex', flexDirection: 'column', ...style }, ...children);

/** Uppercase letterspaced sans, the site's `.label`. */
const label = (text: string, color = MUTED, size = 21) =>
  h('div', { fontFamily: SANS, fontSize: size, fontWeight: 500, letterSpacing: '0.09em', color }, text.toUpperCase());

/** Satori reads src/width/height off the props of an <img>, not off its style. */
const img = (src: string, width: number, height: number, style: Style = {}): Node => ({
  type: 'img',
  props: { src, width, height, style },
});

const hairline = (color = RULE) => h('div', { height: HAIRLINE, backgroundColor: color, width: '100%' });

/** Longer headlines step down so they stay on three lines or fewer. */
const titleSize = (text: string) =>
  text.length <= 28 ? 70 : text.length <= 46 ? 62 : text.length <= 72 ? 54 : 46;

const clamp = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.]$/, '')}…`;
};

const dataUri = (buffer: Buffer, mime: string) => `data:${mime};base64,${buffer.toString('base64')}`;

const MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
};

/**
 * Resolve an ImageMetadata back to its file on disk. Astro hands endpoints the
 * emitted path (`/_astro/name.hash.png`), which may not exist yet while the
 * build is still running, so the original is matched by stem instead.
 */
function sourceImage(src: string): string | null {
  const stem = decodeURIComponent(src.split('?')[0].split('/').pop() ?? '').split('.')[0];
  if (!stem) return null;
  for (const dir of ['img', 'logos', '']) {
    const base = asset(dir);
    if (!fs.existsSync(base)) continue;
    const hit = fs
      .readdirSync(base)
      .find((f) => f.split('.')[0] === stem && MIME[path.extname(f).toLowerCase()] !== undefined);
    if (hit) return path.join(base, hit);
    const svg = fs.readdirSync(base).find((f) => f === `${stem}.svg`);
    if (svg) return path.join(base, svg);
  }
  return null;
}

/**
 * Turn a source image into a PNG data URI at exactly the size the card needs.
 * Satori decodes neither SVG (rasterised here by resvg) nor WebP (decoded by
 * sharp), and pre-sizing keeps the embedded bytes — and the finished card —
 * small.
 */
async function embed(file: string, box: { width: number; height: number; fit: 'cover' | 'contain' }): Promise<string> {
  const source =
    path.extname(file).toLowerCase() === '.svg'
      ? Buffer.from(
          new Resvg(fs.readFileSync(file, 'utf8'), {
            fitTo: { mode: 'width', value: box.width * 2 },
            background: 'rgba(0, 0, 0, 0)',
          })
            .render()
            .asPng(),
        )
      : fs.readFileSync(file);

  const png = await sharp(source)
    .resize({
      width: box.width,
      height: box.height,
      fit: box.fit === 'cover' ? 'cover' : 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  return dataUri(png, 'image/png');
}

const page = (style: Style, ...children: unknown[]) =>
  col(
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      backgroundColor: PAPER,
      color: INK,
      ...style,
    },
    ...children,
  );

/** The wordmark / place line that sits above every paper card. */
const topRow = () =>
  row(
    { justifyContent: 'space-between', alignItems: 'center' },
    label(SITE.name, INK, 24),
    label(SITE.location.split(',')[0], MUTED),
  );

const footRow = (left: string, right?: string) =>
  col(
    { gap: 20 },
    hairline(),
    row(
      { justifyContent: 'space-between', alignItems: 'center' },
      h('div', { fontFamily: SANS, fontSize: 22, color: MUTED }, left),
      right ? label(right, MUTED, 20) : null,
    ),
  );

/** A — the site default: the lede, set large. Also used for 404. */
function siteCard() {
  return page(
    { padding: PAD, justifyContent: 'space-between' },
    topRow(),
    h(
      'div',
      { fontFamily: SERIF, fontSize: 66, lineHeight: 1.2, color: INK, maxWidth: 900 },
      SITE.lede,
    ),
    footRow('erasmus.github.io', 'Projects · Writing · CV'),
  );
}

/** B — a project: inverted ink panel with the project's own image alongside. */
async function projectCard(d: {
  title: string;
  role: string;
  org: string;
  domain: string;
  image?: string;
  tile: 'image' | 'logo' | 'text';
}) {
  const file = d.image ? sourceImage(d.image) : null;
  const isLogo = d.tile === 'logo';
  const panelWidth = OG_WIDTH - INK_PANEL;
  const box = isLogo
    ? { width: 260, height: 260, fit: 'contain' as const }
    : { width: panelWidth, height: OG_HEIGHT, fit: 'cover' as const };

  const panel = file ? img(await embed(file, box), box.width, box.height, {}) : label(d.org, MUTED);

  return page(
    { flexDirection: 'row' },
    col(
      { width: INK_PANEL, backgroundColor: INK, padding: '60px 60px', justifyContent: 'space-between' },
      label(d.domain, ON_INK_LABEL),
      h(
        'div',
        { fontFamily: SERIF, fontWeight: 600, fontSize: titleSize(d.title), lineHeight: 1.15, color: PAPER },
        d.title,
      ),
      col(
        { gap: 10 },
        h('div', { fontFamily: SANS, fontSize: 24, color: ON_INK }, `${d.role} · ${d.org}`),
        h('div', { fontFamily: SANS, fontSize: 21, color: ON_INK_FAINT }, 'erasmus.github.io/projects'),
      ),
    ),
    row(
      {
        width: panelWidth,
        height: OG_HEIGHT,
        backgroundColor: isLogo || !file ? TILE : PAPER,
        alignItems: 'center',
        justifyContent: 'center',
      },
      panel,
    ),
  );
}

/** C — essays and section indexes: label, headline, standfirst, byline. */
function editorialCard(d: { label: string; title: string; description?: string; footLeft: string; footRight?: string }) {
  return page(
    { padding: PAD, justifyContent: 'space-between' },
    label(d.label, MUTED),
    col(
      { gap: 22 },
      h(
        'div',
        { fontFamily: SERIF, fontWeight: 600, fontSize: titleSize(d.title), lineHeight: 1.15, color: INK, maxWidth: 960 },
        d.title,
      ),
      d.description
        ? h(
            'div',
            { fontFamily: SANS, fontSize: 26, lineHeight: 1.5, color: MUTED, maxWidth: 900 },
            clamp(d.description, 150),
          )
        : null,
    ),
    footRow(d.footLeft, d.footRight),
  );
}

/** D — the CV: portrait, name, current role, and the organisations behind it. */
async function cvCard() {
  const current = CV.experience[0];
  const orgs = CV.experience.slice(0, 4).map((e) => e.org);
  const portrait = await embed(asset('img', 'erasmus-hagen-portrait.jpg'), {
    width: 240,
    height: 240,
    fit: 'cover',
  });

  return page(
    { padding: PAD, justifyContent: 'space-between' },
    label('Curriculum vitae', MUTED),
    row(
      { alignItems: 'center', gap: 52 },
      img(portrait, 240, 240, { borderRadius: 120 }),
      col(
        { gap: 16, flexGrow: 1 },
        h('div', { fontFamily: SERIF, fontWeight: 600, fontSize: 62, lineHeight: 1.1, color: INK }, SITE.name),
        h(
          'div',
          { fontFamily: SANS, fontSize: 26, color: MUTED },
          `${current.positions[0].title}, ${current.org} · ${SITE.location}`,
        ),
        row(
          { gap: 12, flexWrap: 'wrap', marginTop: 10 },
          ...orgs.map((org) =>
            h(
              'div',
              {
                fontFamily: SANS,
                fontSize: 20,
                letterSpacing: '0.06em',
                color: MUTED,
                backgroundColor: TILE,
                padding: '10px 20px',
              },
              org.toUpperCase(),
            ),
          ),
        ),
      ),
    ),
    footRow('erasmus.github.io/cv', 'Projects · Writing · CV'),
  );
}

export type CardSpec =
  | { variant: 'site' }
  | { variant: 'cv' }
  | { variant: 'editorial'; label: string; title: string; description?: string; footLeft: string; footRight?: string }
  | {
      variant: 'project';
      title: string;
      role: string;
      org: string;
      domain: string;
      image?: string;
      tile: 'image' | 'logo' | 'text';
    };

function build(spec: CardSpec): Promise<Node> | Node {
  switch (spec.variant) {
    case 'site':
      return siteCard();
    case 'cv':
      return cvCard();
    case 'project':
      return projectCard(spec);
    case 'editorial':
      return editorialCard(spec);
  }
}

export async function renderCard(spec: CardSpec): Promise<Buffer> {
  const tree = await build(spec);
  const svg = await satori(tree as never, { width: OG_WIDTH, height: OG_HEIGHT, fonts: FONTS });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
  // resvg's PNG is unoptimised; recompressing typically halves the file.
  return sharp(Buffer.from(png)).png({ compressionLevel: 9, effort: 10 }).toBuffer();
}
