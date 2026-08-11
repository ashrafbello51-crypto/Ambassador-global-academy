export const siteConfig = {
  name: 'Ambassador Global Academy',
  tagline: 'Excellence in Education',
  description: 'A premium international school dedicated to academic excellence, character development, and preparing students for global leadership.',
  url: 'https://ambassadorglobalacademy.org',
  email: 'info@ambassadorglobalacademy.org',
  admissionsEmail: 'admissions@ambassadorglobalacademy.org',
  phones: ['+234 1 2345 6789', '+234 800 123 4567'],
  address: '123 Education Drive, Lagos, Nigeria',
  officeHours: {
    weekdays: '8:00 AM – 4:00 PM',
    saturday: '9:00 AM – 1:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
  stats: {
    years: '25+',
    students: '1500+',
    passRate: '98%',
    teachers: '60+',
    awards: '12',
    placement: '100%',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
} as const

export const programmes = [
  {
    id: 'nursery',
    level: 'Nursery',
    ages: 'Ages 2–4',
    description: 'Play-based learning, social development, and foundational skills in literacy and numeracy.',
  },
  {
    id: 'primary',
    level: 'Primary',
    ages: 'Ages 5–10',
    description: 'Strong foundations across core subjects with creativity and critical thinking development.',
  },
  {
    id: 'junior-secondary',
    level: 'Junior Secondary',
    ages: 'Ages 11–13',
    description: 'Broader curriculum with independent learning skills and subject exploration.',
  },
  {
    id: 'senior-secondary',
    level: 'Senior Secondary',
    ages: 'Ages 14–17',
    description: 'Rigorous academic pathways leading to national and international examinations.',
  },
] as const

export const features = [
  {
    title: 'Academic Excellence',
    description: 'Our rigorous curriculum combines international standards with local relevance.',
    icon: '🎓',
  },
  {
    title: 'Safe Environment',
    description: 'State-of-the-art security systems and dedicated pastoral care.',
    icon: '🛡️',
  },
  {
    title: 'Expert Faculty',
    description: 'Qualified and experienced educators passionate about student potential.',
    icon: '👨‍🏫',
  },
  {
    title: 'Global Perspective',
    description: 'International curricula, exchange programmes, and multicultural learning.',
    icon: '🌍',
  },
  {
    title: 'Proven Results',
    description: 'Consistently top scores and admission to leading universities worldwide.',
    icon: '🏆',
  },
  {
    title: 'Community Spirit',
    description: 'A warm, inclusive community where every student belongs and thrives.',
    icon: '🤝',
  },
] as const