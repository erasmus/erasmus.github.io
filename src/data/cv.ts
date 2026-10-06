// `note` is the one-line description shown on /cv/. `summary` (a paragraph) and
// `highlights` (bullet points) carry the longform version of a role, used only by the
// text exports: cv.txt, llms.txt, and llms-full.txt.
export interface Position { title: string; dates: string; note?: string; summary?: string; highlights?: string[] }
// `icon` is a filename in src/assets/icons; omit it to fall back to an initial monogram.
// `logo` is a full-wordmark filename in src/assets/logos; on the home page it replaces
// the org name entirely. Omit it (e.g. while a logo is outstanding) to fall back to
// the icon/monogram plus the name in text.
export interface Org { org: string; positions: Position[]; icon?: string; logo?: string }
export interface Edu { institution: string; qualification: string; years: string; note?: string; icon?: string; logo?: string }

// SatoshiPay and Pendulum are one organisation under two brands. The home page folds
// them into a single entry carrying both wordmarks, in this order, and takes the role
// from the first; /cv/ lists the two separately.
export const HOME_MERGED_ORGS = ['SatoshiPay', 'Pendulum'];

export interface Cv { experience: Org[]; education: Edu[]; languages: string[] }

export const CV: Cv = {
  experience: [
    { org: 'Lineage Labs', logo: 'lineage-labs-logo-dark.svg', positions: [{
      title: 'Co-Founder', dates: 'Feb 2026 – present',
      note: 'Building trust rails for AI agents.',
      summary: 'Designed, engineered and deployed WaySpace, an agentic knowledge architecture using LLM-based indexing and hybrid search (symbolic parsing + agentic web scraping). Designed an agent identity infrastructure (WayID) to secure human-to-agent interactions.',
    }] },
    { org: 'Concordium', icon: 'Concordium Symbol_Black.svg', logo: 'Concordium_Logo_Black_full.svg', positions: [{
      title: 'Director of Product', dates: 'Dec 2023 – Feb 2026',
      summary: 'Led product specification for protocol-level identity architectures and verifiable credentials, establishing an open standard for AI provenance and data authenticity using zero-knowledge proofs. Managed an 8-person product team alongside 50+ engineers to deliver low-latency core infrastructure, cross-platform SDKs, and consumer-facing wallet suite and ID app (for iOS, Android, browser).',
      highlights: [
        'Unified company product strategy of identity-first L1 blockchain.',
        'Oversaw the product specification, design, and rollout of flagship initiative for protocol-level tokens for stablecoin issuance.',
        'Revamped the outdated crypto wallet suite (iOS, Android, browser).',
        'Drove developer relations and ecosystem growth through keynote talks, technical documentation, and workshops.',
        'Oversaw product launches of: a novel Self-Sovereign Identity system for AI provenance certificates (using zero-knowledge proofs, DIDs, and Verifiable Credentials) and a standalone identity mobile app (Android, iOS).',
      ],
    }] },
    { org: 'Pendulum', icon: 'Pendulum_logo.svg', logo: 'Pendulum_Logo_wordmark_full.svg', positions: [{ title: 'Head of Product', dates: 'Nov 2021 – Jun 2023', note: 'Headed product development of a forex-focused Polkadot parachain from idea to launch, including Spacewalk, the first bridge between Stellar and Polkadot.' }] },
    { org: 'SatoshiPay', logo: 'satoshipay_full.svg', positions: [
      // The longform covers the whole SatoshiPay/Pendulum tenure under its final title,
      // so it sits on this position rather than being split across the two brands.
      { title: 'Head of Product', dates: 'Nov 2021 – Jun 2023',
        note: 'Led product development of a cross-border money transfer app on decentralised ledger technology, including compliance (KYC/AML) and financial-services partnerships.',
        summary: 'Oversaw engineering for a novel, 1-click online payment mechanism, a forex-optimised blockchain, and automated ETL telemetry pipelines for real-time app and network diagnostics. Managed complex roadmap for multi-stakeholder projects, covering technical protocol design, tokenomics, and user-facing apps (such as Solar, an Electron-based Stellar wallet). Built KYC/AML compliance process from scratch. Served as part of working group defining protocol standards in collaboration with the Stellar Development Foundation.',
        highlights: [
          'Managed product team of 6 working with 15+ engineers.',
          'Worked in Bitcoin, Stellar, and Polkadot ecosystems.',
          'Oversaw product launches of: 1-click paywall system on Germany\'s biggest independent finance news website with 10k+ users joining within the first weeks, Pendulum blockchain (a Substrate-based parachain), which won the fastest parachain auction at the time, and the first payment channel implementations in Bitcoin.',
        ],
      },
      { title: 'Product Lead', dates: 'Jun 2017 – Nov 2021', note: 'Led development of a 1-click payment mechanism, first on Bitcoin then Stellar, and product management of Solar Wallet for desktop, Android, and iOS.' },
      { title: 'Product Consultant', dates: 'Apr 2015 – May 2017', note: 'Product and business strategy, product design, project management.' },
    ] },
    { org: 'Coyno', positions: [{ title: 'Co-Founder', dates: 'Sep 2014 – Dec 2016', note: 'Co-founded a Bitcoin tax-bookkeeping startup; secured pre-seed funding from Axel Springer and led user-centric design of complex blockchain accounting.' }] },
    { org: 'DR – Danmarks Radio', positions: [{ title: 'Concept Developer', dates: '2014', note: 'Created and developed a TV concept for the Danish national broadcaster.' }] },
    { org: 'Goldsmiths, University of London', positions: [{ title: 'Associate Lecturer', dates: '2013', note: 'Taught Interactive Media to an undergraduate class.' }] },
    { org: 'Family office', positions: [{ title: 'Analyst', dates: '2013', note: 'Investment analyst for seed investors and consultant to early-stage digital media and technology start-ups in London.' }] },
  ],
  education: [
    { institution: 'University of Oxford', icon: 'University_of_Oxford.svg', logo: 'University_of_Oxford_full.svg', qualification: 'MSc, Social Science of the Internet', years: '2011–2012', note: 'Multidisciplinary study of the societal, economic, and political impact of the Internet at the Oxford Internet Institute.' },
    { institution: 'Goldsmiths College, University of London', icon: 'Goldsmith_University-logo.svg', logo: 'Goldsmith_University-logo_full.svg', qualification: 'BA, Media & Communications', years: '2008–2011', note: 'Combined critical media and communication theory with hands-on practice in interactive media.' },
    { institution: 'London School of Economics', icon: 'LSE_Logo.svg', logo: 'London_school_of_economics_logo_full.svg', qualification: 'Diploma, Managerial Accounting and Financial Control', years: '2010', note: 'Intensive programme in management accounting, budgeting, and financial control.' },
    { institution: 'Birkbeck, University of London', qualification: 'Diploma, Media Studies / Journalism', years: '2006–2007', note: 'Foundation in media studies and practical journalism.' },
  ],
  languages: ['Danish (native)', 'English (bilingual)', 'German (professional)', 'Portuguese (elementary)'],
};
