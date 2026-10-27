/* ---------------------------------------------------------------
   Your words live here. Edit this file to change text on the site.
   Items marked PLACEHOLDER must be replaced before publishing.
   --------------------------------------------------------------- */
export const profile = {
  siteName: 'The Curious Atlas',
  wordmark: 'AYUSHI.EXE',
  name: 'Ayushi Pedulwar',
  headline: 'The chaos is\nactually strategic.', // \n = line break; the last line is shown in italics
  tagline: 'A world of ideas, waiting to be discovered.',
  intro:
    'I connect business thinking, analytical problem-solving and creative storytelling to turn ideas into meaningful outcomes.',
  credentials:
    'MSc Marketing & Digital Media, ESCP Business School Madrid · 4+ years in consulting and technology',
  focus: ['Marketing Strategy', 'Business Analytics', 'Creative Direction'],
  links: {
    linkedin: 'https://www.linkedin.com/', // PLACEHOLDER — replace with your profile URL
    email: 'hello@example.com',            // PLACEHOLDER — replace with your email
    cv: '/cv/ayushi-pedulwar-cv.pdf',      // PLACEHOLDER — add the PDF to /public/cv/
  },
}

/* Site navigation. The hrefs point to section ids that arrive in later stages. */
export const navigation = [
  { label: 'Library', href: '#library' },
  { label: 'Strategy Lab', href: '#strategy-lab' },
  { label: 'Visual Studio', href: '#visual-studio' },
  { label: 'About', href: '#about' },
]
