/* ---------------------------------------------------------------
   The Library hub: words for the central navigation scene.
   --------------------------------------------------------------- */
export const library = {
  eyebrow: 'The Library',
  title: 'Every atlas needs a reading room.',
  intro:
    'This is the heart of the map. Two wings lead out from here: one for strategy and analysis, one for visual and creative work.',
  wings: [
    {
      id: 'strategy',
      href: '#strategy-lab',
      icon: 'compass',
      label: 'West wing',
      title: 'Strategy Lab',
      description: 'Research-led thinking on markets, customers and numbers.',
      areas: ['Business & marketing strategy', 'Market research & consumer insights', 'Business analytics & pricing'],
      cta: 'Enter the lab',
    },
    {
      id: 'studio',
      href: '#visual-studio',
      icon: 'lantern',
      label: 'East wing',
      title: 'Visual Studio',
      description: 'Creative direction, design and visual storytelling.',
      areas: ['Event visuals & communication', 'Digital design', 'Creative concepts & art direction'],
      cta: 'Enter the studio',
    },
  ],
  footnotes: [
    { href: '#about', icon: 'person', label: 'About me' },
    { href: '#about', icon: 'mail', label: 'Get in touch' },
  ],
}

/* The short outdoor scene between the valley and the library doors. */
export const approach = {
  line: 'Follow the path through the trees.',
  sub: 'Somewhere past the orchard, a library waits.',
}
