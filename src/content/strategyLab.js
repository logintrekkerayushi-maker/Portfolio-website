/* ---------------------------------------------------------------
   STRATEGY LAB — the project list.

   Each project opens its own standalone page, kept exactly as you
   designed it, from /public/cases/. To add a project: drop the HTML
   file into /public/cases/ and add an entry below.
   --------------------------------------------------------------- */
export const strategyLab = {
  eyebrow: 'Strategy Lab',
  title: 'Field notes from the clearing.',
  intro:
    'Independent strategy projects: a market diagnosed, a brand positioned, a price structure rebuilt. Each one opens as its own report, designed on its own terms.',
  aside: {
    title: 'Reading notes',
    lines: [
      'Every project is an independent study, built on public benchmarks or fictional brands, and says so on its own page.',
      'Reports open in a new tab, each with its own design. The atlas stays open behind them.',
    ],
  },
  projects: [
    {
      category: 'Market & Growth Strategy',
      title: 'The company that said it didn’t need marketing just spent 47% more on it.',
      subtitle:
        'Reconstructing the internal business case behind Wise’s FY2025 marketing-spend increase, from a board that built its identity on not advertising.',
      tags: ['Marketing finance', 'ROI modelling', 'Growth diagnosis', 'Fintech'],
      href: '/cases/wise.html',
      cta: 'Open the report',
    },
    {
      category: 'Consumer Insights & Positioning',
      title: 'Roamly: from product to positioning.',
      subtitle:
        'Brand positioning and go-to-market strategy for a fictional B2B SaaS for independent boutique hotels, to take it from 340 to 1,000 clients.',
      tags: ['Brand positioning', 'Jobs-to-be-Done', 'Go-to-market', 'B2B SaaS'],
      href: '/cases/roamly.html',
      cta: 'Open the report',
    },
    {
      category: 'Business Analytics & Pricing',
      title: 'Voltex Racing: sponsorship pricing strategy.',
      subtitle:
        'How a fictional mid-grid Formula E team could unlock new revenue by replacing a flat-rate sponsorship package with a value-based tiered structure.',
      tags: ['Pricing strategy', 'Van Westendorp', 'Value metrics', 'Sponsor ROI'],
      href: '/cases/voltex-racing.html',
      cta: 'Open the report',
    },

    /* ---------- TEMPLATE for a new project (copy, then fill in) ----------
    {
      category: 'Market & Growth Strategy',   // one of the three lab areas
      title: 'Short, specific title.',
      subtitle: 'One sentence saying what the project does.',
      tags: ['Framework', 'Industry'],
      href: '/cases/my-new-project.html',    // the file you dropped into /public/cases/
      cta: 'Open the report',
      status: 'draft',                       // optional: shows an "In progress" label
    },
    -------------------------------------------------------------------- */
  ],
}
