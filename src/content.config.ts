import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    substackUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        role: z.string(),
        org: z.string(),
        years: z.string(),
        domain: z.string(),
        summary: z.string(),
        tile: z.enum(['image', 'logo', 'text']),
        image: image().optional(),
        span: z.enum(['sm', 'md', 'lg', 'xl']).default('sm'),
        links: z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
        featured: z.boolean().default(false),
        order: z.number(),
        // Drafts still render on the site (useful while designing) but are
        // excluded from the machine-readable exports (llms.txt, cv.txt).
        draft: z.boolean().default(false),
      })
      .superRefine((val, ctx) => {
        if ((val.tile === 'image' || val.tile === 'logo') && !val.image) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `tile "${val.tile}" requires an image`,
          });
        }
      }),
});

export const collections = { posts, projects };
