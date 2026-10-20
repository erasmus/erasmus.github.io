// `note` is the one-line description shown on /cv/. `summary` (a paragraph) and
// `highlights` (bullet points) carry the longform version of a role, used only by the
// text exports: cv.txt, llms.txt, and llms-full.txt. Each position carries the
// longform for its own era, so the SatoshiPay/Pendulum tenure is split: payments
// and Solar Wallet on Product Lead, DTransfer and compliance on Head of Product,
// and the parachain itself on Pendulum.
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
      title: 'Founder', dates: 'Feb 2026 – present',
      note: 'Building trust rails for AI agents.',
      summary: 'Designed, engineered and deployed WaySpace, an agentic knowledge architecture using LLM-based indexing and hybrid search (symbolic parsing + agentic web scraping). Designed an agent identity infrastructure (WayID) to secure human-to-agent interactions.',
    }] },
    { org: 'Concordium', icon: 'Concordium Symbol_Black.svg', logo: 'Concordium_Logo_Black_full.svg', positions: [{
      title: 'Director of Product', dates: 'Dec 2023 – Feb 2026',
      summary: 'Led product specification for protocol-level identity architectures and verifiable credentials, establishing an open standard for AI provenance and data authenticity using zero-knowledge proofs. Managed an 8-person product team alongside 50+ engineers across frontend, backend, protocol, and research/science teams to deliver low-latency core infrastructure, cross-platform SDKs, and a consumer-facing wallet suite and ID app (iOS, Android, browser). Concordium is an identity-first layer-1 blockchain: every account is anchored to a verified real-world identity, yet the network stays privacy-first through zero-knowledge proofs, with a disclosure process that can only be triggered through a regulated legal procedure under Swiss law. Operating that model meant managing a complex, multi-stakeholder setup, including the identity service providers on the network, legal and compliance partners, and the protocol\'s governance participants.',
      highlights: [
        'Unified company product strategy of identity-first L1 blockchain, and hosted internal strategic workshops to align leadership, engineering, and science around it.',
        'Oversaw the product specification, design, and rollout of flagship initiative for protocol-level tokens for stablecoin issuance.',
        'Led iOS and Android app development: revamped the outdated crypto wallet suite (iOS, Android, browser) and launched Concordium ID, a standalone self-custodial identity app that lets users prove single facts about themselves (e.g. over 18) with zero-knowledge proofs while revealing nothing else.',
        'Led product development of an agentic identity system: AI certificates that give AI agents a verifiable identity and bind them to the Concordium user who operates them. Presented as "AI Certificates" at Nordic Blockchain Conference 2024 (https://www.youtube.com/watch?v=b7okSZgwNaY) and "Next-gen Identity: Verifiable Credentials & AI Agents" at Nordic Fintech Week 2024 (https://www.youtube.com/watch?v=cv0z43-CoPs).',
        'Investigated self-sovereign identity in depth, including verifiable credentials held in the wallet for credential proofs across many use cases, and explored organisational identity (LEI, vLEI, GLEIF) for KYC/KYB management.',
        'Managed several protocol updates end to end, covering roadmap rollouts, community management, and communication to validators, node operators, and ecosystem partners.',
        'Worked on governance decisions for the protocol, arranging internal and external workshops with stakeholders.',
        'Drove developer relations and ecosystem growth through keynote talks, technical documentation, and workshops.',
      ],
    }] },
    { org: 'Pendulum', icon: 'Pendulum_logo.svg', logo: 'Pendulum_Logo_wordmark_full.svg', positions: [{
      title: 'Head of Product', dates: 'Nov 2021 – Jun 2023',
      note: 'Headed product development of a forex-focused Polkadot parachain from idea to launch, including Spacewalk, the first bridge between Stellar and Polkadot.',
      summary: 'Pendulum grew out of the cross-border payments work at SatoshiPay/DTransfer: an FX platform needs automated market makers to build optimal currency pools, and Stellar had no advanced smart contract capability at the time. The answer was to migrate to the Polkadot ecosystem and build a parachain from scratch, Pendulum, with Amplitude as its sister chain on Kusama. Headed product from idea to launch: network and framework selection, the parachain auction, protocol and bridge design, tokenomics and governance, and the wallets and interfaces for the network.',
      highlights: [
        'Won a Polkadot parachain slot through a competitive auction. Slots were scarce, and the crowdloan reached its 300,000 DOT hard cap in around three minutes, the fastest parachain auction in Polkadot\'s history at the time. The chain launched on Polkadot Mainnet in February 2023.',
        'Built on the Substrate framework with a WebAssembly-based runtime, enabling forkless upgrades and native cross-chain messaging under the relay chain\'s shared security.',
        'Designed the tokenomics and incentive alignment between the network\'s participants (collators, nominators, and liquidity providers), and developed and participated in the on-chain governance structure (DAO).',
        'Built Spacewalk, the first bridge between Stellar and Polkadot, and secured a Web3 Foundation grant for it (https://github.com/w3f/Grants-Program/blob/master/applications/spacewalk-bridge.md). Implemented as a set of Substrate pallets on the XCLAIM protocol, with sophisticated locking mechanisms and monitoring systems for trust-minimised transfers of Stellar\'s fiat-backed stablecoins into Polkadot.',
        'Worked on a security audit of the entire chain together with Hacken (https://hacken.io/audits/pendulum/).',
        'Worked closely with the Stellar Development Foundation and the Web3 Foundation, securing grants from both to develop technical specifications.',
      ],
    }] },
    { org: 'SatoshiPay', logo: 'satoshipay_full.svg', positions: [
      { title: 'Head of Product', dates: 'Nov 2021 – Jun 2023',
        note: 'Led product development of a cross-border money transfer app on decentralised ledger technology, including compliance (KYC/AML) and financial-services partnerships.',
        summary: 'SatoshiPay evolved into DTransfer, a cross-border FX and money transfer platform on decentralised ledger technology. Managed a complex roadmap for multi-stakeholder projects spanning technical protocol design, tokenomics, compliance, and user-facing apps, with the parachain work continuing under the Pendulum brand (listed separately). Managed a product team of 6 working with 15+ engineers across the Bitcoin, Stellar, and Polkadot ecosystems.',
        highlights: [
          'Built the KYC and AML processes for the transfer product from scratch, including screening systems that took KYC data and handled it according to Stellar protocols, alongside the financial-services partnerships needed to operate.',
          'Served on an advisory group for a Stellar Development Foundation proposal on Stellar Ecosystem Proposal (SEP) standards for cross-border value transfer, covering how stablecoin transfers are managed and the compliance information that must travel with them (SEP-24: https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0024.md; talk, "Creating a Stellar Ecosystem Standard for Send/Receive": https://www.youtube.com/watch?v=MnGIj8X33aI).',
          'Identified the need for automated market makers to run optimal FX pools, which Stellar could not support at the time, and led the decision to build Pendulum on Polkadot.',
        ],
      },
      { title: 'Product Lead', dates: 'Jun 2017 – Nov 2021',
        note: 'Led development of a 1-click payment mechanism, first on Bitcoin then Stellar, and product management of Solar Wallet for desktop, Android, and iOS.',
        summary: 'Oversaw ideation, product development, and delivery of a browser-based one-click payment mechanism for online content: the same frictionless checkout Amazon offers for its own store, but available everywhere on the web. It required no installation for the consumer; a publisher added a JavaScript plugin and a few HTML snippets, and could sell individual articles for just a few cents. Settling in fiat or crypto kept costs to a minimum. It was one of the first payment channel implementations in Bitcoin, built specifically to make micropayments feasible for content publishers. When Bitcoin transaction fees became prohibitively expensive, led a thorough market analysis that resulted in switching the network to the Stellar decentralised ledger, supported by a grant from the Stellar Development Foundation.',
        highlights: [
          'Launched the 1-click payment plugin with Börsenmedien, one of Germany\'s biggest independent financial news publishers; more than 1,000 users signed up. Processed over €100,000 in payments. Other implementations included The Register (UK).',
          'Developed a WordPress plugin for easy integration on WordPress sites.',
          'Built Solar Wallet, a Stellar wallet for iOS, Android, and desktop (Electron), listed as one of the official wallets on the Stellar website.',
          'Worked on Mjolnir, an email/password login method for self-custodial wallets, combining cryptography with careful system design so that users keep custody without managing keys.',
          'Implemented an extract-transform-load (ETL) data processing pipeline at scale, with analytics and monitoring for real-time app and network diagnostics.',
          'Implemented a sophisticated VAT bookkeeping system. Selling digital content across borders is complex because VAT depends on both the buyer\'s and the seller\'s location; this worked out of the box for the publishers using the platform.',
        ],
      },
      { title: 'Product Consultant', dates: 'Apr 2015 – May 2017', note: 'Product and business strategy, product design, project management.' },
    ] },
    { org: 'Coyno', positions: [{
      title: 'Co-Founder', dates: 'Sep 2014 – Dec 2016',
      note: 'Co-founded a Bitcoin tax-bookkeeping startup; secured pre-seed funding from Axel Springer and led user-centric design of complex blockchain accounting.',
      summary: 'Co-founded Coyno, one of the first bookkeeping and coin-tracking apps for Bitcoin, used by over a thousand people. The product turned raw blockchain transaction history into tax-ready accounting, which meant designing a user-centric interface over genuinely complex data.',
      highlights: [
        'Raised funding from Axel Springer, one of Europe\'s biggest media companies, and Plug and Play, the US accelerator and VC.',
        'Built with Meteor, a JavaScript framework, to handle large data pipelines of blockchain transactions.',
      ],
    }] },
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
