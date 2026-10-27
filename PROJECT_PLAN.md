# The Curious Atlas — Stage 1 Project Plan

Portfolio for Ayushi Pedulwar. Wordmark: AYUSHI.EXE. Headline: "Curious by nature. Strategic by design."

## 1. Technical setup (recommended)

| Piece | Choice | Why |
|---|---|---|
| Framework | React 18 + Vite | Fast dev server, simple build, easy to host anywhere as static files |
| Language | JavaScript (JSX) | Fewer moving parts for a non-developer to maintain |
| Styling | Plain CSS with CSS variables, one `.css` file per component | No build-time magic, easy to tweak colours/spacing |
| Animation | CSS keyframes + transforms, one tiny custom scroll hook | GPU-friendly, no animation library needed |
| Routing | react-router-dom | Only needed for case-study detail pages (`/strategy-lab/market-growth`) |
| Images | WebP (photos/paintings), PNG with alpha (clouds), SVG (icons, grass, petals) | Small files, crisp vectors |
| Fonts | Google Fonts: Cormorant Garamond (headings) + Manrope (body) | Painterly serif + clean readable sans |
| Hosting | Vercel (free tier) connected to a GitHub repo | Push to GitHub → auto-deploys; free HTTPS; custom domain in two clicks |

Dependencies: react, react-dom, react-router-dom. Nothing else.

## 2. Project structure

```
curious-atlas/
  public/
    cv/ayushi-pedulwar-cv-placeholder.pdf
    favicon.svg
  src/
    assets/
      art/        full scene paintings (webp)
      layers/     transparent parallax layers (png/webp with alpha)
      clouds/     cloud sprites
      icons/      svg icons
    content/
      profile.js        name, headline, intro, links  ← edit text here
      strategyLab.js    case-study placeholders        ← add projects here
      visualStudio.js   creative categories            ← add work here
      images.js         ONE file mapping every image name to its file
    components/
      landscape/   Sky, Clouds, Parallax layers, Grass, Petals
      ui/          Button, SectionHeading, NavBar, ScrollIndicator
    scenes/
      Hero, Library, StrategyLab, VisualStudio, Viewpoint
    pages/
      Home.jsx, CaseStudy.jsx
    hooks/
      useScrollProgress.js, useReducedMotion.js
    styles/
      tokens.css   colours, fonts, spacing
      global.css
```

## 3. Image assets

Final sizes. All landscape scenes 2560×1440 unless noted. Export WebP ~80% quality.

| # | Filename | Purpose | Aspect | Notes |
|---|---|---|---|---|
| 1 | art/hero-sky.webp | Hero background sky with distant soft clouds | 16:9 | No foreground; clouds drift over it |
| 2 | art/hero-landscape.webp | Hero meadow, lake, castle town, mountains | 16:9 | Horizon in upper third |
| 3 | layers/hero-canopy.png | Tree branch framing top-left corner | ~3:2, alpha | Sways gently |
| 4 | layers/hero-foreground-grass.png | Grass and flowers strip across bottom | 4:1, alpha | Wind sway |
| 5 | clouds/cloud-01..04.png | Four painterly cloud sprites | ~2:1, alpha | Drift at different speeds |
| 6 | art/library-exterior.webp | Transition: castle-library among trees | 16:9 | Between hero and library |
| 7 | art/library-interior.webp | Library hub background | 16:9 | Warm sunlit shelves, arched windows |
| 8 | art/forest-path.webp | Forest path / torii transition panel | 2:3 portrait | Leads into Strategy Lab |
| 9 | art/strategy-clearing.webp | Strategy Lab backdrop: forest clearing / overlook | 16:9 | Calm, editorial feel |
| 10 | art/studio-interior.webp | Visual Studio backdrop: creative workshop | 16:9 | Warm, playful |
| 11 | art/viewpoint-sunset.webp | About/Contact: mountain viewpoint at sunset | 16:9 | Final scene |
| 12 | art/og-image.jpg | Social-share preview | 1200×630 | Hero crop + title |
| 13 | icons/*.svg | compass, book, lantern, signpost, map, mail, linkedin, download | square | I draw these |
| 14 | petals/leaves | SVG shapes | — | I draw these |

Mobile variants (1280 px wide) are generated automatically at build time from the same files.

## 4. Animation approach

- Clouds: transparent sprites moved with CSS `transform: translateX` keyframes on loops of 60–180 s. Only transform/opacity animate, so the browser never re-lays-out the page.
- Wind: grass, canopy and leaves are SVG groups (or alpha PNGs) with transform-origin at their base and a 4–7 s ease-in-out sway of 1–3°. Staggered delays make it feel natural.
- Parallax: one scroll listener (throttled with requestAnimationFrame) writes a CSS variable per scene. Each layer reads it: `translate3d(0, calc(var(--p) * -40px), 0)`. Sky moves least, foreground most. Only scenes on screen are updated.
- Scroll transitions: scenes stack with soft "atmosphere" bands between them (sky blue → forest green → warm library amber → sunset). Text and cards fade/slide in via IntersectionObserver.
- Petals: a pool of 10 SVG petals with randomised CSS variables for start position, drift and duration; paused when the scene is off-screen.
- Reduced motion: `prefers-reduced-motion` turns off clouds, sway, petals and parallax; fades become instant.

## 5. Risks

1. Performance: large paintings + many moving layers. Mitigation: WebP, ≤2560 px, lazy-load everything below the hero, max ~6 moving elements per scene, pause off-screen, compositor-only animation.
2. Mobile: parallax reduced to 2 layers, no mouse-parallax, use `100svh` for iOS address bar, test on narrow widths.
3. Readability: text sits on soft translucent panels with 4.5:1 contrast, never bare on artwork.
4. Layer separation: AI art comes as flat paintings. Clouds will be keyed out of a flat-blue render; grass/canopy edges feathered with gradient masks or drawn as SVG. Crisp cut-outs can be done later in Figma/Photoshop if wanted.
5. Ephemeral workspace: this cloud session is wiped when idle. Code must be pushed to a GitHub repo early.
6. Static hosting + routing: needs an SPA fallback rule (one line in vercel.json).

## 6. Implementation plan

- Stage 2: scaffold Vite project, tokens, fonts, content files, Hero scene with temporary crops from the concept board, buttons, scroll indicator, cloud drift. Push to GitHub.
- Stage 3: parallax hook, layered hero, grass/canopy sway, petals, reduced-motion.
- Stage 4: Library hub with navigation cards, dust motes, outdoor→indoor transition.
- Stage 5: Strategy Lab section + case-study page template + routing.
- Stage 6: Visual Studio section with category cards and "in progress" labels.
- Stage 7: Viewpoint with About, LinkedIn, email, CV placeholder.
- Stage 8: full QA (responsive, a11y, perf, reduced motion, Lighthouse).
- Stage 9: run/deploy/maintain guide.

## Decisions needed

1. Approve the stack and structure.
2. GitHub repo to push to (create an empty one and share the URL).
3. Artwork route: (a) generate originals via the Figma image tool (uses Figma AI credits, asked per batch), (b) you generate from prompts I write, (c) start with temporary crops of the concept board.
4. Fonts: Cormorant Garamond + Manrope, or an alternative.
