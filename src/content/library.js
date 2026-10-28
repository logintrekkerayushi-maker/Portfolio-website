/* ---------------------------------------------------------------
   The Library hub: words for the central scene. Each door is a
   handwritten note floating in the painting.
   --------------------------------------------------------------- */
export const library = {
  title: 'Every atlas needs a reading room.',
  intro: 'Three doors lead out of here.',
  doors: [
    { label: 'West wing',  title: 'Strategy Lab',  hint: 'Markets, customers, numbers',     href: '#strategy-lab',  left: 10, top: 12, tilt: -3 },
    { label: 'East wing',  title: 'Visual Studio', hint: 'Design and creative direction',   href: '#visual-studio', left: 62, top: 28, tilt: 2 },
    { label: 'Reading desk', title: 'About me',    hint: 'The person behind the map, and a CV', href: '#about',      left: 24, top: 62, tilt: -2 },
  ],
}

/* The road between the valley and the library. */
export const approach = {
  line: 'Follow the path through the trees.',
  sub: 'Somewhere past the orchard, a library waits.',
}
