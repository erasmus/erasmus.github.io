// Bookmarks for /library/, grouped by category. Each entry picks one of the
// hand-drawn illustrations in src/components/LibraryArt.astro via `art`; add a
// new case there when a new bookmark needs its own picture.
export type LibraryArt =
  | 'color'
  | 'qr'
  | 'svg'
  | 'ux'
  | 'agency'
  | 'electric'
  | 'sea-power';

export interface Bookmark {
  title: string;
  url: string;
  /** Author or maker, shown under the title. */
  by?: string;
  /** One or two sentences on why it is worth the click. */
  note: string;
  /** Overrides the hostname shown on the card, e.g. for video playlists. */
  source?: string;
  art: LibraryArt;
}

export interface Shelf {
  id: string;
  title: string;
  items: Bookmark[];
}

export const LIBRARY: Shelf[] = [
  {
    id: 'design',
    title: 'Design',
    items: [
      {
        title: 'A Dictionary of Color Combinations',
        by: 'Sanzo Wada',
        url: 'https://colorcombinations.org',
        note: 'Wada’s 1930s catalogue of colour pairings, rebuilt as a browsable palette. Still the best place to start a colour scheme.',
        art: 'color',
      },
      {
        title: 'QRFrame',
        by: 'Kyle Zheng',
        url: 'https://qrframe.kylezhe.ng',
        note: 'An excellent QR code generator. Styled, generative codes that still scan — no more grey squares.',
        art: 'qr',
      },
      {
        title: 'SVGOMG',
        by: 'Jake Archibald',
        url: 'https://jakearchibald.github.io/svgomg/',
        note: 'Clean up those SVGs. Drop a file in, strip the editor cruft, and watch the bytes fall away.',
        art: 'svg',
      },
      {
        title: 'Laws of UX',
        by: 'Jon Yablonski',
        url: 'https://lawsofux.com',
        note: 'Simple explainers of the most important concepts in interface psychology, from Fitts’s law to the peak–end rule.',
        art: 'ux',
      },
    ],
  },
  {
    id: 'being',
    title: 'Being',
    items: [
      {
        title: 'High Agency in 30 Minutes',
        by: 'George Mack',
        url: 'https://www.highagency.com/',
        note: 'A worthwhile distillation of what high-agency people do differently, and how to become one of them.',
        art: 'agency',
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    items: [
      {
        title: 'The Electric Slide',
        by: 'Packy McCormick & Sam D’Amico',
        url: 'https://www.notboring.co/p/7653b980-dd32-4d8c-88c6-1543bec70220',
        source: 'notboring.co',
        note: 'Batteries, magnets, motors and power electronics as one “electric stack” — and why whoever builds it shapes the century.',
        art: 'electric',
      },
    ],
  },
  {
    id: 'politics',
    title: 'Politics',
    items: [
      {
        title: 'Maritime vs. Continental Power',
        by: 'Sarah Paine',
        url: 'https://www.youtube.com/watch?v=OS1NZLgKM2c&list=PLd7-bHaQwnthnOed1a85mF7L-Ki3kdiqp',
        source: 'Lecture series · YouTube',
        note: 'Paine’s lecture series on why sea powers and land powers see the world — and fight — so differently.',
        art: 'sea-power',
      },
    ],
  },
];

/** Hostname without the www., for the card's source line. */
export const sourceOf = (b: Bookmark) => b.source ?? new URL(b.url).hostname.replace(/^www\./, '');
