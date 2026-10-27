/* ---------------------------------------------------------------
   STRATEGY LAB — projects and case studies.

   Each project follows the same six-part structure. Every paragraph
   below is a short summary written from the full case-study page,
   which is kept unchanged under /public/cases/ and linked from the
   site. To add a new case, copy the TEMPLATE at the bottom.

   status: 'complete'  → full case page + summary
           'draft'     → shows "in progress" and hides empty sections
   --------------------------------------------------------------- */
export const strategyLab = {
  eyebrow: 'Strategy Lab',
  title: 'Field notes from the clearing.',
  intro:
    'Independent strategy projects: a market diagnosed, a brand positioned, a price structure rebuilt. Each one is written up the same way, from the business problem to the recommendation.',
  method: [
    { n: '01', label: 'Business problem' },
    { n: '02', label: 'Context & research' },
    { n: '03', label: 'Analytical approach' },
    { n: '04', label: 'Key insights' },
    { n: '05', label: 'Strategic recommendations' },
    { n: '06', label: 'Supporting evidence' },
  ],
  projects: [
    {
      slug: 'wise-marketing-roi',
      status: 'complete',
      category: 'Market & Growth Strategy',
      title: 'The company that said it didn’t need marketing just spent 47% more on it.',
      subtitle:
        'Reconstructing the internal business case behind Wise’s FY2025 marketing-spend increase, from a board that built its identity on not advertising.',
      tags: ['Marketing finance', 'ROI modelling', 'Growth diagnosis', 'Fintech'],
      meta: [
        ['Discipline', 'Marketing finance & ROI strategy'],
        ['Format', 'Independent analytical exercise'],
        ['Basis', 'Wise’s public annual report and trade press'],
      ],
      note:
        'Independent analytical exercise. Not affiliated with, commissioned by, or endorsed by Wise. Figures cited from Wise’s public annual report and published trade press; the internal reasoning is a reconstruction, not a disclosed process.',
      fullPage: '/cases/wise.html',
      sections: {
        problem: [
          'For over a decade, Wise’s growth story was word-of-mouth, referrals and content rather than paid advertising. In FY2025 that changed: marketing spend rose 47% to £53.8 million.',
          'The question the project asks: what internal case would that shift have required from a board that had spent fourteen years telling investors it did not need to buy growth?',
        ],
        context: [
          'Wise was founded in 2011 on a frustration with hidden fees in international transfers. Its early growth leadership said plainly that product economics did not support paid marketing, so the company grew through referrals, content and SEO, with NPS as the scoreboard.',
          'The FY2025 spend increase was disclosed as an investment “to drive incremental adoption and engagement”. The FY2024 figure used for comparison is derived by reversing the disclosed +47%, so it is implied rather than separately reported.',
        ],
        approach: [
          'Diagnosis: organic and referral growth scales with the existing customer base, but it only reaches people already adjacent to current customers. The project maps how that reach thins out in rings, from existing customers to friends and family, to colleagues and search, and finally to segments beyond the ceiling.',
          'Financial modelling: build the incremental case for paid spend without abandoning the brand’s core identity. Segment the ceiling, test paid as a multiplier in markets where referral density is low, and keep NPS as the guardrail.',
        ],
        insights: [
          'Word-of-mouth has a structural ceiling, and Wise was likely close to it at its current scale.',
          'The hardest part of the pitch is not the maths. It cannot look like an admission that the old strategy failed; paid spend has to be shown as additive to word-of-mouth, not a replacement for it.',
        ],
        recommendations: [
          'As it would be pitched: increase paid marketing spend by up to 50%, targeted specifically at the segments referral and content growth structurally cannot reach.',
          'Measure success not by total new customers but by NPS holding steady or rising among customers acquired this way. Decision logic: run the paid test, read the guardrail, then scale, hold and re-test, or pull back.',
          'Next steps: track NPS by acquisition channel, watch for cannibalisation, set a reversal trigger in advance, and re-test the ceiling annually.',
        ],
        evidence: {
          note: 'The full page separates what is verified public record from what is reconstruction, and lists every source.',
          items: [
            'Marketing-spend chart, FY2024 implied vs FY2025 disclosed',
            'Diagram of how organic reach thins out by ring',
            'Three-step financial model and the board-ready decision tree',
            'Validation table: confirmed facts vs modelled assumptions',
            'Sources and references',
          ],
        },
      },
    },
    {
      slug: 'roamly-positioning',
      status: 'complete',
      category: 'Consumer Insights & Positioning',
      title: 'Roamly: from product to positioning.',
      subtitle:
        'Brand positioning and go-to-market strategy for a fictional B2B SaaS for independent boutique hotels, to take it from 340 to 1,000 clients.',
      tags: ['Brand positioning', 'Jobs-to-be-Done', 'Go-to-market', 'B2B SaaS'],
      meta: [
        ['Discipline', 'Brand strategy & product marketing'],
        ['Format', 'Independent project'],
        ['Frameworks', 'Jobs-to-be-Done, positioning statement, messaging architecture'],
      ],
      note:
        'Roamly is a fictional brand created for portfolio purposes. All figures are illustrative estimates based on published industry benchmarks.',
      fullPage: '/cases/roamly.html',
      sections: {
        problem: [
          'Roamly’s problem was never the product. Every salesperson described it differently: CRM, booking tool, guest experience platform. No consistent story, and no clear reason to choose it.',
          'Starting point: 340 clients, €2.8M ARR, 34% churn, in a European market of 180,000+ independent hotels.',
        ],
        context: [
          'Independent hotels are characterful and underserved, stuck choosing between costly enterprise CRMs, generic SaaS with no hospitality features, or OTAs that take 15–25% commission and own the guest relationship.',
          'Market timing: travellers are shifting toward character over brand, and the technology has not caught up.',
        ],
        approach: [
          'Rather than treating “independent boutique hotels” as a category, the project builds one vivid ideal customer profile using Jobs-to-be-Done: Sofia, an owner-operator with 18–35 rooms who pays commission for guests she already knew and gave up on a generic CRM after three weeks.',
          'From that profile: a positioning statement, a brand territory between warmth and precision, a list of what Roamly is not, and a messaging architecture that turns the statement into language Sofia hears consistently across every channel.',
        ],
        insights: [
          'Sofia doesn’t want a CRM. She wants her guests to feel like they’re coming home. The tech is the enabler; the feeling is the product.',
          'Hotel owners trust other hotel owners above any other source, so acquisition has to earn that trust systematically.',
        ],
        recommendations: [
          'Positioning: the guest relationship platform for independent hospitality, against CRMs and OTAs that treat guests as transactions. Brand character in three words: warm, precise, yours.',
          'Go-to-market across three channels: community-led growth through 50 “Roamly Champions”, content and SEO as the editorial voice of independent hospitality, and partnership distribution through PMS integrations, hotel associations and trade fairs.',
          'An 18-month itinerary from foundation to the 1,000-client milestone, with six KPIs from unaided brand recall to net revenue retention and realistic 12-month targets.',
        ],
        evidence: {
          note: 'The full page carries the competitive landscape, the persona, the messaging table, the channel plan and the measurement framework.',
          items: [
            'Competitive landscape: enterprise CRM, generic SaaS, OTAs, and where Roamly sits',
            'Ideal customer profile and jobs-to-be-done',
            'Positioning statement and messaging architecture',
            'Channel mix and 18-month roadmap',
            'KPI framework with current-state and 12-month targets',
            'Sources and references',
          ],
        },
      },
    },
    {
      slug: 'voltex-sponsorship-pricing',
      status: 'complete',
      category: 'Business Analytics & Pricing',
      title: 'Voltex Racing: sponsorship pricing strategy.',
      subtitle:
        'How a fictional mid-grid Formula E team could unlock new revenue by replacing a flat-rate sponsorship package with a value-based tiered structure.',
      tags: ['Pricing strategy', 'Van Westendorp', 'Value metrics', 'Sponsor ROI'],
      meta: [
        ['Discipline', 'Pricing strategy'],
        ['Industry', 'Motorsport · Formula E'],
        ['Frameworks', 'Van Westendorp Price Sensitivity Meter, value metric mapping'],
      ],
      note:
        'Independent case study created for portfolio purposes. Voltex Racing is a fictional brand. All figures are scenario-modelled estimates based on published industry benchmarks and should be treated as illustrative and directional only.',
      fullPage: '/cases/voltex-racing.html',
      sections: {
        problem: [
          'Voltex has genuine commercial value to offer: 12 race cities, a projected 180 million cumulative broadcast audience, and a 1.2 million digital following. But it sells all of that through a single flat-rate package at €450,000 per season.',
          'A flat €450k package acts as a filter, not a funnel. It excludes every sponsor below that threshold and gives no upsell path to those who want more.',
        ],
        context: [
          'A competitive audit benchmarked publicly available sponsorship structures across F1, Formula E and WEC. Every successful programme used tiered pricing with value-based anchor points; Voltex was the only outlier still on a flat rate.',
          'Two comparable Formula E teams were converting mid-market sponsors at €120,000 to €280,000, a segment Voltex was not approaching at all.',
        ],
        approach: [
          'Value metric framework: map the exposure, activation and strategic value categories sponsors actually pay for, with estimated market ranges per season, so the commercial team has a clear language for what each tier includes.',
          'Pricing methodology: apply the Van Westendorp Price Sensitivity Meter to the primary sponsor profile to find the acceptable price range, the entry point, the indifference point and the ceiling. In a real engagement these thresholds would be validated through structured interviews with sponsor-side procurement and marketing directors.',
        ],
        insights: [
          'Voltex was packaging an estimated €175–465k of exposure value and charging a flat €450k with no activation or strategic premium. Sponsors at the top end were receiving significant value at cost.',
          'The competitive gap is structural, not commercial: a €180k prospect sees no entry point, and an €800k prospect sees no reason to pay more than €450k. Both ends of the market are lost at once.',
        ],
        recommendations: [
          'Four tiers with one commercial logic: Associate Partner at €100k, Official Partner at €220k anchored at the indifference point, Principal Partner at €400k just below the exit threshold, and a bespoke Title Sponsor tier at €900k+.',
          'A sponsor ROI model that translates brand exposure into outcomes a CFO can evaluate, and a projection of season-scale revenue under conservative, target and optimistic adoption scenarios.',
          'Next: a scored prospecting database, a live brand-exposure dashboard, a tier upgrade pathway, and city-specific add-ons that use Formula E’s street-race format.',
        ],
        evidence: {
          note: 'The full page holds every table and model, with assumptions stated beside each one.',
          items: [
            'Market comparison of sponsorship tier structures',
            'Value category ranges with sources',
            'Van Westendorp thresholds for the mid-tier sponsor profile',
            'Four-tier package architecture and anchor-pricing logic',
            'Sponsor ROI model and season-scale revenue projection',
            'Sources and references',
          ],
        },
      },
    },

    /* ---------- TEMPLATE for a new case study (copy, then fill in) ----------
    {
      slug: 'my-new-case',                      // becomes the web address /strategy-lab/my-new-case
      status: 'draft',                          // 'draft' shows an "in progress" note
      category: 'Market & Growth Strategy',     // one of the three lab areas
      title: 'Short, specific title.',
      subtitle: 'One sentence saying what the project does.',
      tags: ['Framework', 'Industry'],
      meta: [['Discipline', '…'], ['Format', '…']],
      note: 'Disclaimer or context, if any.',
      fullPage: null,                           // '/cases/file.html' once the full write-up exists
      sections: {
        problem: ['…'],
        context: ['…'],
        approach: ['…'],
        insights: ['…'],
        recommendations: ['…'],
        evidence: { note: '…', items: ['…'] },
      },
    },
    ------------------------------------------------------------------------ */
  ],
}

export const findProject = (slug) => strategyLab.projects.find((p) => p.slug === slug)
