// `image` is a filename in src/assets/img; omit it to fall back to an
// initial monogram until a photo lands. `name` is the displayed first name.
export interface Quote { name: string; quote: string; image?: string }

export const QUOTES: Quote[] = [
  // Arjun Yadav
  { name: 'Arjun Yadav', image: 'arjun.jpeg', quote: 'Erasmus leads with low ego and a strong focus on outcomes.' },
  { name: 'Dr. Torsten Stüber', image: 'torsten.jpeg', quote: 'A consistent beacon of reliability, with an unwavering appetite for novel strategies.' },
  { name: 'Sebastian Nause-Blüml', image: 'sebastian.jpeg', quote: 'One of the best leaders I worked with.' },
  // Dario Perić
  { name: 'Dario Perić', image: 'dario.jpeg', quote: 'Erasmus has a rare way of carrying real, tangible authority that comes through naturally in his actions.' },
  { name: 'Prayag Desale', image: 'prayag.jpeg', quote: 'His clarity of thought in every situation proves invaluable.' },
];
