export const SITE = {
  name: 'Erasmus Hagen',
  lede: 'Building digital products for humans.',
  description:
    'Product and technology in finance and digital identity. Notes on trust, technology, and transcendence.',
  // Professional summary (3–4 sentences) used by cv.txt and llms.txt.
  // Leave empty to omit the section from those files.
  summary: '' as string,
  location: 'Copenhagen, Denmark',
  email: 'ras.hagen@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/erasmus' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/erasmushagen/' },
    { label: 'Bluesky', url: 'https://bsky.app/profile/erasmush.bsky.social' },
  ],
} as const;
