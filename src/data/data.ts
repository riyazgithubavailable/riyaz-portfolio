export const NAV_LINKS = [
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export interface Skill {
  icon: string
  name: string
  desc: string
  level: number
}

export const SKILLS: Skill[] = [
  { icon: '🌐', name: 'HTML & CSS', desc: 'Semantic, Responsive, Accessibility', level: 90 },
  { icon: '🟨', name: 'JavaScript', desc: 'Vanilla, ES6, DOM manipulation', level: 90 },
  { icon: '⚛️', name: 'React.js', desc: 'Components, Hooks, Optimization', level: 90 },
  { icon: '🔷', name: 'TypeScript', desc: 'Type-safe dev, Interfaces, Generics', level: 82 },
  { icon: '🗃️', name: 'Redux Toolkit', desc: 'Global state, RTK Query, Slices', level: 85 },
  { icon: '💨', name: 'Tailwind CSS', desc: 'Responsive, utility-first styling', level: 88 },
  { icon: '📊', name: 'ApexCharts', desc: 'Dashboards, real-time charts', level: 80 },
  { icon: '🔗', name: 'REST APIs', desc: '.NET integration, Axios, Postman', level: 83 },
  { icon: '🟩', name: 'Node.js / Express', desc: 'Backend basics, REST endpoints', level: 65 },
  { icon: '🍃', name: 'MongoDB', desc: 'NoSQL, document modeling', level: 60 },
]

export interface Project {
  num: string
  date: string
  title: string
  desc: string
  tags: string[]
  liveUrl: string
  githubUrl?: string
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    date: 'DEC 2024',
    title: 'Rewards',
    desc: 'Content management system for merchants in the ICTSBM ecosystem. Enables shop owners to manage reward programs linked to municipal waste-collection with QR/GPS validation workflows.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'ApexCharts', 'Tailwind', '.NET'],
    liveUrl: 'https://rewards.ictsbm.com/',
  },
  {
    num: '02',
    date: 'AUG 2025',
    title: 'DMA',
    desc: 'QR-based employee tracking system for live monitoring of field activities. Features responsive dashboards with attendance logs, movement tracking, task metrics, and workforce analytics.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'ApexCharts', 'Tailwind', '.NET'],
    liveUrl: 'https://dma.ictsbm.com/',
  },
  {
    num: '03',
    date: 'MAR 2024',
    title: 'Personal Finance Tracker',
    desc: 'Finance app with Firebase authentication, transaction tracking, and data visualizations for financial health insights. Built during MERN certification training.',
    tags: ['React', 'Firebase', 'Ant Design', 'CSS'],
    liveUrl: 'https://personal-finance-tracker-mu-wine.vercel.app/',
    // githubUrl: '#',
  },
]

export const STATS = [
  { num: '1.6', label: 'Years Exp' },
  { num: '3+', label: 'Live Projects' },
  { num: '9.24', label: 'CGPA' },
  { num: '8+', label: 'Technologies' },
]

export const CONTACT_ITEMS = [
  { icon: '📞', label: 'Phone', value: '+91 8007795526', href: '#' },
  { icon: '✉️', label: 'Email', value: 'riyazisheikh97@gmail.com', href: 'mailto:riyazisheikh97@gmail.com' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/riyaz-sheikh', href: 'https://www.linkedin.com/in/riyaz-sheikh-4a5b141b3' },
  { icon: '💻', label: 'GitHub', value: 'github.com/riyaz-sheikh', href: 'https://github.com/riyazgithubavailable' },
]
