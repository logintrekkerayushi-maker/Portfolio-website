/* ---------------------------------------------------------------
   The Library hub: words for the central scene.
   The shelf is the navigation: each labelled book is a link.
   --------------------------------------------------------------- */
export const library = {
  eyebrow: 'The Library',
  title: 'Every atlas needs a reading room.',
  intro: 'Pull a book from the shelf to travel on.',
  books: [
    { label: 'Strategy Lab',     href: '#strategy-lab',  tone: 'forest', hint: 'Markets, customers, numbers' },
    { label: 'Visual Studio',    href: '#visual-studio', tone: 'coral',  hint: 'Design and creative direction' },
    { label: 'About me',         href: '#about',         tone: 'navy',   hint: 'The person behind the map' },
    { label: 'Curriculum vitae', href: '#about',         tone: 'ochre',  hint: 'Download at the viewpoint' },
  ],
}

/* The road between the valley and the library. */
export const approach = {
  line: 'Follow the path through the trees.',
  sub: 'Somewhere past the orchard, a library waits.',
}
