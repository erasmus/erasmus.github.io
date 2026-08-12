export interface Position { title: string; dates: string; note?: string }
// `icon` is a filename in src/assets/icons; omit it to fall back to an initial monogram.
export interface Org { org: string; positions: Position[]; icon?: string }
export interface Edu { institution: string; qualification: string; years: string; icon?: string }

export interface Cv { experience: Org[]; education: Edu[]; languages: string[] }

export const CV: Cv = {
  experience: [
    { org: 'Lineage Labs', positions: [{ title: 'Co-Founder', dates: 'Feb 2026 – present', note: 'Building trust rails for AI agents.' }] },
    { org: 'Concordium', icon: 'Concordium Symbol_Black.svg', positions: [{ title: 'Director of Product', dates: 'Dec 2023 – Feb 2026' }] },
    { org: 'Pendulum', icon: 'Pendulum_logo.svg', positions: [{ title: 'Head of Product', dates: 'Nov 2021 – Jun 2023', note: 'Headed product development of a forex-focused Polkadot parachain from idea to launch, including Spacewalk, the first bridge between Stellar and Polkadot.' }] },
    { org: 'SatoshiPay', positions: [
      { title: 'Head of Product', dates: 'Nov 2021 – Jun 2023', note: 'Led product development of a cross-border money transfer app on decentralised ledger technology, including compliance (KYC/AML) and financial-services partnerships.' },
      { title: 'Product Lead', dates: 'Jun 2017 – Nov 2021', note: 'Led development of a 1-click payment mechanism, first on Bitcoin then Stellar, and product management of Solar Wallet for desktop, Android, and iOS.' },
      { title: 'Product Consultant', dates: 'Apr 2015 – May 2017', note: 'Product and business strategy, product design, project management.' },
    ] },
    { org: 'Propellor Film Tech Hub', positions: [{ title: 'Advisor', dates: 'Feb 2017 – Aug 2018', note: 'Advised the entertainment-industry tech hub on technology and strategy; hosted live meetups and talks.' }] },
    { org: 'De Geist', positions: [{ title: 'Product Designer', dates: 'Jun 2013 – May 2017' }] },
    { org: 'Coyno', positions: [{ title: 'Co-Founder', dates: 'Sep 2014 – Dec 2016', note: 'Co-founded a Bitcoin tax-bookkeeping startup; secured pre-seed funding from Axel Springer and led user-centric design of complex blockchain accounting.' }] },
    { org: 'Bitbond', positions: [{ title: 'Consultant', dates: 'May 2015 – Sep 2015' }] },
    { org: 'DR – Danmarks Radio', positions: [{ title: 'Concept Developer', dates: 'Jan 2014 – Mar 2014', note: 'Created and developed a TV concept for the Danish national broadcaster.' }] },
    { org: 'Goldsmiths, University of London', positions: [{ title: 'Associate Lecturer', dates: 'Oct 2013 – Nov 2013', note: 'Taught Interactive Media to an undergraduate class.' }] },
    { org: 'Lexington Business Angels', positions: [{ title: 'Analyst', dates: 'Sep 2012 – May 2013', note: 'Investment analyst for seed investors and consultant to early-stage digital media and technology start-ups in London.' }] },
  ],
  education: [
    { institution: 'University of Oxford', icon: 'University_of_Oxford.svg', qualification: 'MSc, Social Science of the Internet', years: '2011–2012' },
    { institution: 'Goldsmiths College, University of London', icon: 'Goldsmith_University-logo.svg', qualification: 'BA, Media & Communications', years: '2008–2011' },
    { institution: 'London School of Economics', icon: 'LSE_Logo.svg', qualification: 'Diploma, Managerial Accounting and Financial Control', years: '2010' },
    { institution: 'Birkbeck, University of London', qualification: 'Diploma, Media Studies / Journalism', years: '2006–2007' },
  ],
  languages: ['Danish (native)', 'English (native/bilingual)', 'German (professional)', 'Spanish (elementary)'],
};
