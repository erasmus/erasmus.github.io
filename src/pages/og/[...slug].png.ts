// Emits one social-preview card per page into dist/og/. Static build, so every
// PNG is rasterised once at build time and served as a plain file.
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderCard, type CardSpec } from '../../lib/og';
import { SITE } from '../../data/site';
import { SECTIONS } from '../../data/sections';

export const getStaticPaths = (async () => {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const paths: { params: { slug: string }; props: { spec: CardSpec } }[] = [
    { params: { slug: 'default' }, props: { spec: { variant: 'site' } } },
    { params: { slug: 'cv' }, props: { spec: { variant: 'cv' } } },
    ...Object.entries(SECTIONS).map(([slug, section]) => ({
      params: { slug },
      props: {
        spec: {
          variant: 'editorial' as const,
          label: SITE.name,
          title: section.title,
          description: section.description,
          footLeft: 'erasmus.github.io',
        },
      },
    })),
    ...projects.map((project) => ({
      params: { slug: `projects/${project.id}` },
      props: {
        spec: {
          variant: 'project' as const,
          title: project.data.title,
          role: project.data.role,
          org: project.data.org,
          domain: project.data.domain,
          image: project.data.image?.src,
          tile: project.data.tile,
        },
      },
    })),
    ...posts.map((post) => ({
      params: { slug: `writing/${post.id}` },
      props: {
        spec: {
          variant: 'editorial' as const,
          label: 'Writing',
          title: post.data.title,
          description: post.data.description,
          footLeft: SITE.name,
          footRight: post.data.date.toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC',
          }),
        },
      },
    })),
  ];

  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderCard(props.spec as CardSpec);
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
