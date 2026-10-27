/* ---------------------------------------------------------------
   The journey: places on the trail, chapter notes, and hidden things.
   Edit words here. Secrets marked PLACEHOLDER are for you to write.
   --------------------------------------------------------------- */
export const waypoints = [
  { id: 'top',           label: 'The Valley',    short: 'Valley',   bearing: 0 },
  { id: 'library',       label: 'The Library',   short: 'Library',  bearing: 72 },
  { id: 'strategy-lab',  label: 'The Clearing',  short: 'Clearing', bearing: 144 },
  { id: 'visual-studio', label: 'The Workshop',  short: 'Workshop', bearing: 216 },
  { id: 'about',         label: 'The Viewpoint', short: 'Viewpoint', bearing: 288 },
]

export const chapters = {
  road:     { day: 'Day 1', place: 'The road to the library', sketch: 'path' },
  library:  { day: 'Day 2', place: 'The Library',             sketch: 'book' },
  clearing: { day: 'Day 3', place: 'The Clearing',            sketch: 'compass' },
  workshop: { day: 'Day 4', place: 'The Workshop',            sketch: 'lantern' },
  viewpoint:{ day: 'Day 5', place: 'The Viewpoint',           sketch: 'mountain' },
}

/* Hidden objects. Click one in the world and its note appears.
   Write your own facts here — short, true, in your voice. */
export const secrets = [
  {
    id: 'mushroom',
    object: 'mushroom',
    title: 'Field note No. 1',
    text: 'PLACEHOLDER — a small true thing about you. For example: the first strategy problem you ever got obsessed with.',
  },
  {
    id: 'cat',
    object: 'cat',
    title: 'Field note No. 2',
    text: 'PLACEHOLDER — what you read, watch or collect when you are not working.',
  },
  {
    id: 'boat',
    object: 'boat',
    title: 'Field note No. 3',
    text: 'PLACEHOLDER — a place that changed how you think.',
  },
]
