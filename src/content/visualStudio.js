/* ---------------------------------------------------------------
   VISUAL STUDIO — the workshop in the woods.

   Three categories. Each holds a list of pieces; a piece is a title
   and a link (a page you drop into /public/cases/, or an image you
   add to /public/studio/). An empty list shows "in progress".
   --------------------------------------------------------------- */
export const visualStudio = {
  title: 'The workshop in the woods.',
  intro: 'Where the strategy gets its colours.',
  status: 'The studio is still being set up. Pieces are added as they are finished.',
  categories: [
    {
      id: 'event',
      label: 'Corkboard',
      title: 'Event Visuals & Communication',
      hint: 'Posters, invitations, on-the-day visuals',
      left: 8, top: 14, tilt: -3,
      pieces: [],
    },
    {
      id: 'digital',
      label: 'Desk',
      title: 'Digital Design',
      hint: 'Layouts, decks, social and web visuals',
      left: 58, top: 30, tilt: 2,
      pieces: [],
    },
    {
      id: 'concepts',
      label: 'Window seat',
      title: 'Creative Concepts & Art Direction',
      hint: 'Ideas, moodboards, catalogues',
      left: 18, top: 60, tilt: -2,
      pieces: [
        { title: 'Nordvik: Bold Underfoot, an exhibition catalogue', href: '/cases/nordvik.html', cta: 'Open the catalogue' },
      ],
    },
  ],
}
