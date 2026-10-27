/* ---------------------------------------------------------------
   Every image used by the site is registered here.
   To swap artwork: drop the new file in src/assets/… and change
   the import path on ONE line below. No component edits needed.

   TEMPORARY: the hero images are low-resolution crops from the
   concept board, upscaled 2×. Replace them with final 2560×1440 art.
   --------------------------------------------------------------- */
import heroLandscape from '../assets/art/hero-landscape.webp'
import heroLandscapeMobile from '../assets/art/hero-landscape-mobile.webp'
import cloud01 from '../assets/clouds/cloud-01.png'
import cloud02 from '../assets/clouds/cloud-02.png'
import cloud03 from '../assets/clouds/cloud-03.png'
import cloud04 from '../assets/clouds/cloud-04.png'

export const images = {
  hero: {
    landscape: heroLandscape,             // desktop, 1666×1004 (temporary)
    landscapeMobile: heroLandscapeMobile, // phones, 900×542 (temporary)
    alt: 'A sunlit valley with a lake and a castle town, seen from a flowering meadow under enormous clouds.',
  },
  clouds: [cloud01, cloud02, cloud03, cloud04],
}
