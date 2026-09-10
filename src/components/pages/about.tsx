'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { aboutMe } from '@/constants'
import Card from '../molecules/card/card'

interface StatItem {
  id: string
  value: string
  labelEn: string
  labelAr: string
  icon: string
  competencyTitleEn: string
  competencyTitleAr: string
  competenciesEn: string[]
  competenciesAr: string[]
}

interface Skill {
  name: string
  category: 'frontend' | 'mobile' | 'backend' | 'devops'
  level: string
  icon: string
}

interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  skills: string[]
}

const STATS_DATA: StatItem[] = [
  {
    id: 'work-hours',
    value: '20K+',
    labelEn: 'Software Development Hours',
    labelAr: 'ساعات التطوير البرمجي',
    icon: 'fas fa-code-branch',
    competencyTitleEn: 'Software Engineering',
    competencyTitleAr: 'كفاءات التطوير البرمجي',
    competenciesEn: [
      'Enterprise Full-Stack Architecture',
      'Micro-Frontends & Reusable UI Systems',
      'Clean Code & Performance Profiling',
    ],
    competenciesAr: [
      'هندسة الأنظمة وتطوير Full-Stack',
      'بناء أنظمة التصميم وMicro-Frontends',
      'جودة الأكواد وتحسين أداء التطبيقات',
    ],
  },
  {
    id: 'experience-years',
    value: '9+ Yrs',
    labelEn: 'Years of IT Experience',
    labelAr: 'سنوات الخبرة التقنية',
    icon: 'fas fa-calendar-alt',
    competencyTitleEn: 'Leadership & Experience',
    competencyTitleAr: 'الخبرة والقيادة التقنية',
    competenciesEn: [
      'Enterprise Agile Technical Leadership',
      'Mission-Critical Telecom Platforms',
      'Zero-Downtime Production Deliveries',
    ],
    competenciesAr: [
      'قيادة هندسية وإدارة بمنهجية Agile',
      'منظومات الاتصالات الكبرى (STC / Jawwy)',
      'إطلاقات إنتاجية آمنة (Zero-Downtime)',
    ],
  },
  {
    id: 'projects',
    value: '15+',
    labelEn: 'Key Software Deliveries',
    labelAr: 'المشاريع والمنظومات',
    icon: 'fas fa-project-diagram',
    competencyTitleEn: 'Solutions & Deliveries',
    competencyTitleAr: 'المنظومات والحلول الرقمية',
    competenciesEn: [
      'Web & Mobile (React Native / Next.js / Angular)',
      'Enterprise Software Systems & Portals',
      'REST APIs & Database Integrations',
    ],
    competenciesAr: [
      'تطبيقات الويب والموبايل (React Native / Next.js / Angular)',
      'الأنظمة والمنصات المؤسسية المتكاملة',
      'تكامل واجهات REST APIs وقواعد البيانات',
    ],
  },
  {
    id: 'tech-stack',
    value: '10+',
    labelEn: 'Technologies & Frameworks',
    labelAr: 'التقنيات والأطر البرمجية',
    icon: 'fas fa-layer-group',
    competencyTitleEn: 'Core Technologies',
    competencyTitleAr: 'أبرز التقنيات والأطر',
    competenciesEn: [
      'TypeScript, JavaScript, React.js, Next.js',
      'Angular, React Native, Node.js',
      'Tailwind CSS, Bootstrap, SQL, REST APIs',
    ],
    competenciesAr: [
      'TypeScript, JavaScript, React.js, Next.js',
      'Angular, React Native, Node.js',
      'Tailwind CSS, Bootstrap, SQL, REST APIs',
    ],
  },
]

const SKILLS_LIST: Skill[] = [
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'Expert',
    icon: 'fas fa-file-code',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 'Expert',
    icon: 'fab fa-js',
  },
  {
    name: 'React.js & Next.js',
    category: 'frontend',
    level: 'Expert',
    icon: 'fab fa-react',
  },
  {
    name: 'Angular',
    category: 'frontend',
    level: 'Expert',
    icon: 'fab fa-angular',
  },
  {
    name: 'React Native',
    category: 'mobile',
    level: 'Advanced',
    icon: 'fas fa-mobile-alt',
  },
  {
    name: 'Tailwind CSS & Bootstrap',
    category: 'frontend',
    level: 'Expert',
    icon: 'fab fa-css3-alt',
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    icon: 'fab fa-node-js',
  },
  {
    name: 'REST APIs',
    category: 'backend',
    level: 'Advanced',
    icon: 'fas fa-network-wired',
  },
  {
    name: 'SQL',
    category: 'backend',
    level: 'Advanced',
    icon: 'fas fa-database',
  },
]

const EXPERIENCE_LIST: Experience[] = [
  {
    company: 'STC',
    role: 'Senior Software Engineer — Jawwy Digital Transformation',
    period: 'Aug 2026 — Present · 2 mos',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      "Spearhead the design and development of core application features and change requests (CRs) for STC's digital brand (Jawwy), delivering high-conversion subscriber flows and resilient architectures.",
      'Engineer responsive, performance-tuned web and mobile interfaces using React Native, React.js, and TypeScript to ensure flawless cross-platform user journeys.',
      'Champion clean code standards, modular components, and seamless REST API integrations across multidisciplinary engineering pods.',
    ],
    skills: [
      'React Native',
      'React.js',
      'TypeScript',
      'REST APIs',
    ],
  },
  {
    company: 'stc',
    role: 'Senior Software Engineer — WFMS | ALMONJEZ',
    period: 'May 2018 — Jul 2026 · 8 yrs 3 mos',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      'Directed end-to-end frontend architecture and platform enhancements for the ALMONJEZ enterprise Workforce Management System (WFMS) utilizing Angular, TypeScript, and SQL.',
      'Governed release lifecycle execution through rigorous testing suites, ensuring complete system stability and zero-downtime production deployments.',
      'Led technical incident response, diagnosing complex edge cases and driving continuous platform optimization to maintain 99.9%+ operational reliability.',
    ],
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'SQL',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Information Technology Analyst',
    period: 'Aug 2024 — Present · 2 yrs 2 mos',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      'Provide senior technical leadership across strategic enterprise client initiatives, transforming intricate business requirements into high-performance web and mobile software.',
      'Oversee frontend code governance, architectural standardization, and cross-platform UI/UX consistency across on-site development teams in Riyadh.',
    ],
    skills: [
      'React.js',
      'React Native',
      'Angular',
      'TypeScript',
      'REST APIs',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Senior Software Engineer',
    period: 'Aug 2019 — Jul 2024 · 5 yrs',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      'Led core enterprise web portal development for ALMONJEZ, driving a comprehensive Angular framework migration and modern interface revamp.',
      'Designed and published standardized reusable component libraries, accelerating sprint velocity and substantially reducing defect turnaround times.',
    ],
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS & Bootstrap',
    ],
  },
  {
    company: 'Wipro',
    role: 'Project Engineer',
    period: 'Mar 2017 — Jul 2019 · 2 yrs 5 mos',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      'Built and maintained performant enterprise dashboards and operational interfaces using Angular, interfacing directly with key stakeholders to align technical deliverables.',
      'Monitored critical batch workflows and collection operations, executing proactive triage and root-cause analysis to ensure high platform availability.',
    ],
    skills: [
      'Angular',
      'JavaScript',
      'REST APIs',
      'SQL',
    ],
  },
  {
    company: 'stc',
    role: 'IT Business Support Applications & Operations',
    period: 'Mar 2017 — Mar 2018 · 1 yr 1 mo',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      'Defined and centralized application requirements while providing specialized operational support for enterprise billing and collection management platforms.',
      'Monitored real-time system performance, diagnosing operational anomalies and coordinating rapid resolutions across cross-functional engineering teams.',
    ],
    skills: [
      'SQL',
      'REST APIs',
    ],
  },
  {
    company: 'Zain KSA',
    role: 'Cellular Network & Drive Test Engineer (Graduation Project)',
    period: 'Aug 2015 — Oct 2015 · 3 mos',
    location: 'Riyadh, Saudi Arabia · On-site',
    description: [
      'Conducted mobile network drive tests and cellular RF signal measurements across major Riyadh clusters as part of an engineering graduation project.',
      'Analyzed coverage KPIs and signal diagnostics to assist optimization teams in enhancing wireless network reliability.',
    ],
    skills: [
      'Technical Analysis',
    ],
  },
]

const CORE_MODULES = [
  'Software Engineering & Algorithms',
  'Data Structures & Object-Oriented Design',
  'Computer Networks & Distributed Protocols',
  'Digital Signal Processing & Microprocessors',
  'Database Systems & IT Architecture',
  'Embedded Computing & Systems',
]

const CERTIFICATIONS = [
  {
    name: 'Angular Enterprise Architecture Masterclass',
    icon: 'fab fa-angular text-red-500',
  },
  {
    name: 'React & Next.js Full-Stack Engineering',
    icon: 'fab fa-react text-blue-500',
  },
  {
    name: 'React Native & Mobile Development',
    icon: 'fas fa-mobile-alt text-cyan-500',
  },
  {
    name: 'TypeScript Advanced Design Patterns',
    icon: 'fas fa-file-code text-blue-600',
  },
  {
    name: 'Modern JavaScript (ES6+ / ESNext)',
    icon: 'fab fa-js text-yellow-500',
  },
  {
    name: 'Node.js, REST APIs & SQL Architecture',
    icon: 'fab fa-node-js text-emerald-500',
  },
]

export default function About() {
  const { t, i18n } = useTranslation()
  const isArabic = Boolean(i18n.language?.startsWith('ar'))

  const [activeTab, setActiveTab] = useState<
    'overview' | 'skills' | 'experience' | 'education'
  >('overview')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handleScroll = (e: Event) => e.stopPropagation()
    el.addEventListener('wheel', handleScroll, { passive: true })
    el.addEventListener('touchmove', handleScroll, { passive: true })
    return () => {
      el.removeEventListener('wheel', handleScroll)
      el.removeEventListener('touchmove', handleScroll)
    }
  }, [activeTab])

  const toggleCardFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleDownloadCV = () => {
    setIsDownloading(true)
    const link = document.createElement('a')
    link.href = '/my_resume.pdf'
    link.download = 'AmerAlbadawi_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setIsDownloading(false)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000)
    }, 600)
  }

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((s) => s.category === selectedCategory)

  const tabs = [
    {
      id: 'overview',
      label: t('page.about.tab.overview') || 'Overview',
      icon: 'fas fa-user',
    },
    {
      id: 'skills',
      label: t('page.about.tab.skills') || 'Skills Matrix',
      icon: 'fas fa-laptop-code',
    },
    {
      id: 'experience',
      label: t('page.about.tab.experience') || 'Experience',
      icon: 'fas fa-briefcase',
    },
    {
      id: 'education',
      label: t('page.about.tab.education') || 'Education',
      icon: 'fas fa-graduation-cap',
    },
  ]

  const skillCategories = [
    { id: 'all', label: t('page.about.skills.all') || 'All Domains' },
    {
      id: 'frontend',
      label: t('page.about.skills.frontend') || 'Frontend & UI',
    },
    { id: 'mobile', label: t('page.about.skills.mobile') || 'Mobile Development' },
    {
      id: 'backend',
      label: t('page.about.skills.backend') || 'Backend & APIs',
    },
  ]

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20 pb-10 sm:px-6 sm:pt-24 md:flex-row md:items-start md:py-16 md:pt-24 lg:px-8 lg:pt-28">
      {/* Left Section - Profile Card */}
      <aside className="flex w-full flex-col items-center justify-start pb-6 md:w-1/3 md:pb-0">
        <Card
          {...aboutMe}
          name={t('component.element.name')}
          brief={t('page.about.brief')}
        />
      </aside>

      <main className="flex w-full flex-col items-center justify-start p-2 sm:p-4 md:w-2/3">
        <article className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200/90 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1422]/85 dark:shadow-black/40 sm:p-8">
          {/* Navigation Tab Header */}
          <div className="mb-5 flex border-b border-slate-200/80 pb-3 dark:border-white/10">
            <nav className="flex flex-wrap gap-2 sm:gap-3" aria-label="Tabs">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer sm:text-sm ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                  >
                    <i
                      className={`${tab.icon} text-xs ${isActive ? 'text-white' : 'text-orange-500'}`}
                    />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <section
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
              className="space-y-4"
            >
              <div
                ref={scrollRef}
                className="custom-scrollbar max-h-[340px] overflow-y-auto px-1 py-1 pr-3 sm:max-h-[380px] space-y-4"
              >
                <header>
                  <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {t('page.about.title')}
                  </h1>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                    {t('page.about.paragraph')}
                  </p>
                </header>

                {/* 3D Flip Cards Grid */}
                <dl className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                  {STATS_DATA.map((stat) => {
                    const isFlipped = Boolean(flippedCards[stat.id])
                    const label = isArabic ? stat.labelAr : stat.labelEn
                    const competencyTitle = isArabic
                      ? stat.competencyTitleAr
                      : stat.competencyTitleEn
                    const competencies = isArabic
                      ? stat.competenciesAr
                      : stat.competenciesEn

                    return (
                      <div
                        key={stat.id}
                        className="perspective-1000 h-[175px] sm:h-[180px] w-full cursor-pointer select-none"
                        onClick={() => toggleCardFlip(stat.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            toggleCardFlip(stat.id)
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isFlipped}
                        aria-label={label}
                      >
                        <div
                          className={`relative h-full w-full rounded-2xl transition-transform duration-500 transform-style-preserve-3d ${
                            isFlipped ? 'rotate-y-180' : ''
                          }`}
                        >
                          {/* FRONT FACE */}
                          <div className="backface-hidden group absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md dark:border-white/10 dark:bg-zinc-800/40 dark:hover:border-orange-500/50">
                            <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-orange-500/25 bg-orange-50/80 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white dark:border-orange-500/30 dark:bg-orange-950/40 dark:text-orange-400 dark:group-hover:bg-orange-500 dark:group-hover:text-white shadow-2xs">
                              <i className="fas fa-repeat text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                            </div>

                            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition-transform duration-200 group-hover:scale-110 dark:bg-orange-500/20 dark:text-orange-400">
                              <i
                                className={`${stat.icon} text-lg`}
                                aria-hidden="true"
                              />
                            </div>
                            <dt className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                              {stat.value}
                            </dt>
                            <dd className="mt-1 text-xs font-semibold leading-snug text-slate-600 dark:text-slate-300">
                              {label}
                            </dd>
                          </div>

                          {/* BACK FACE */}
                          <div
                            className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-start rounded-2xl border border-orange-500/40 bg-white/95 p-3.5 text-left shadow-lg backdrop-blur-xl dark:border-orange-500/40 dark:bg-[#0f1422]/95"
                            style={{ direction: isArabic ? 'rtl' : 'ltr' }}
                          >
                            <div className="flex items-center justify-between border-b border-slate-200/80 pb-1.5 dark:border-white/10">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 truncate">
                                {competencyTitle}
                              </span>
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-orange-500 dark:bg-zinc-800">
                                <i className="fas fa-repeat text-[9px]" />
                              </div>
                            </div>

                            <ul className="mt-2.5 space-y-2">
                              {competencies.map((comp, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-1.5 text-[11px] font-medium leading-snug text-slate-700 dark:text-slate-200"
                                >
                                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                  <span>{comp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </dl>
              </div>
            </section>
          )}

          {/* TAB 2: TECHNICAL SKILLS MATRIX */}
          {activeTab === 'skills' && (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t('page.about.tab.skills') ||
                    'Technical Competencies & Matrix'}
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`rounded-xl px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-orange-500 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-zinc-800 dark:text-slate-300'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div
                ref={scrollRef}
                className="custom-scrollbar max-h-[340px] overflow-y-auto pr-2 sm:max-h-[380px]"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-md dark:border-white/5 dark:bg-zinc-800/50 dark:hover:border-blue-500/40 dark:hover:bg-zinc-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                          <i className={skill.icon} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </p>
                          <p className="text-[11px] capitalize text-slate-500 dark:text-slate-400">
                            {skill.category}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-orange-100/90 px-2.5 py-0.5 text-[10px] font-bold text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: CAREER EXPERIENCE TIMELINE */}
          {activeTab === 'experience' && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-white/10">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t('page.about.tab.experience') ||
                      'Career History & Leadership'}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t('page.about.experience.subtitle') ||
                      'Enterprise Engineering & Telecommunication Impact • Scrollable Timeline'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                  <i className="fas fa-arrows-alt-v text-[10px]" />
                  <span>
                    {t('page.about.experience.scrollable') || 'Scrollable'}
                  </span>
                </span>
              </div>

              <div
                ref={scrollRef}
                className="custom-scrollbar max-h-[340px] overflow-y-auto px-1 py-1 pr-3 sm:max-h-[380px]"
              >
                <div className="relative ml-2 border-l-2 border-orange-200 pl-4 sm:ml-3 sm:pl-6 dark:border-orange-900/50">
                  {EXPERIENCE_LIST.map((exp) => (
                    <div
                      key={`${exp.company}-${exp.role}-${exp.period}`}
                      className="relative mb-5 last:mb-1"
                    >
                      <span className="absolute -left-[25px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-orange-500 ring-4 ring-orange-100 sm:-left-[33px] dark:ring-zinc-900">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </span>

                      <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-sm transition-all hover:border-orange-300 hover:shadow-md dark:border-white/5 dark:bg-zinc-800/40 dark:hover:border-orange-500/30">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                              {exp.role}
                            </h3>
                            <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="inline-block rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-zinc-700 dark:text-slate-300">
                              {exp.period}
                            </span>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              {exp.location}
                            </p>
                          </div>
                        </div>

                        <ul className="mt-3 list-inside list-disc space-y-1.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                          {exp.description.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-blue-100 bg-blue-50/90 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TAB 4: EDUCATION & ACADEMIC CREDENTIALS */}
          {activeTab === 'education' && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-white/10">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t('page.about.tab.education') || 'Education & Credentials'}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t('page.about.education.subtitle') ||
                      'Academic Background • Specialized Masterclasses'}
                  </p>
                </div>
              </div>

              <div
                ref={scrollRef}
                className="custom-scrollbar max-h-[340px] overflow-y-auto px-1 py-1 pr-3 sm:max-h-[380px] flex flex-col gap-4"
              >
                {/* Bachelor's Degree Card */}
                <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm dark:border-white/5 dark:bg-zinc-800/40">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                      <i className="fas fa-graduation-cap text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                            {t('page.about.education.higherEducation') ||
                              'Higher Education'}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {t('page.about.education.degree') ||
                              'Bachelor of Science in Engineering (B.Sc.)'}
                          </h3>
                        </div>
                        <span className="rounded-full bg-orange-100/90 px-3 py-0.5 text-xs font-semibold text-orange-800 dark:bg-orange-950/40 dark:text-orange-300">
                          2010 — 2015
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t('page.about.education.major') ||
                          'Major in Telecommunication & Electronics Engineering'}
                      </p>
                      {t('page.about.education.note') && (
                        <p className="mt-2 text-xs italic text-orange-600 dark:text-orange-400">
                          {t('page.about.education.note')}
                        </p>
                      )}
                      <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/5">
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {t('page.about.education.modules') ||
                            'Engineering Foundations & Core Disciplines:'}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {CORE_MODULES.map((area) => (
                            <span
                              key={area}
                              className="rounded-xl border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-zinc-800 dark:text-slate-200"
                            >
                              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Certifications Card */}
                <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm dark:border-white/5 dark:bg-zinc-800/40">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                      <i className="fas fa-certificate text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                            {t('page.about.education.certificationsCategory') ||
                              'Professional Certifications'}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {t('page.about.education.certificationsTitle') ||
                              'Specialized Engineering & Development Masterclasses'}
                          </h3>
                        </div>
                        <span className="rounded-full bg-blue-100/90 px-3 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                          {t('page.about.education.verified') || 'Verified'}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t('page.about.education.certificationsSubtitle') ||
                          'Full-Stack, Mobile & Modern Architecture Certifications'}
                      </p>
                      <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/5">
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {t('page.about.education.certificationsList') ||
                            'Key Certifications & Courses:'}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {CERTIFICATIONS.map((cert) => (
                            <span
                              key={cert.name}
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-zinc-800 dark:text-slate-200"
                            >
                              <i className={`${cert.icon} text-xs`} />
                              {cert.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Card Pinned Footer: Always-Visible Download CV CTA at the Bottom */}
          <footer className="mt-4 flex items-center justify-end border-t border-slate-200/80 pt-3 dark:border-white/10">
            <button
              onClick={handleDownloadCV}
              type="button"
              disabled={isDownloading || downloaded}
              aria-label="Download CV as PDF"
              className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer ${
                isDownloading || downloaded
                  ? 'cursor-not-allowed opacity-80'
                  : ''
              }`}
            >
              {isDownloading ? (
                <>
                  <i className="fas fa-spinner fa-spin text-xs" />
                  <span>{t('page.about.downloading') || 'Downloading...'}</span>
                </>
              ) : downloaded ? (
                <>
                  <i className="fas fa-check text-xs" />
                  <span>{t('page.about.downloaded') || 'Downloaded!'}</span>
                </>
              ) : (
                <>
                  <i className="fas fa-file-pdf text-xs" />
                  <span>{t('page.about.downloadCV')}</span>
                </>
              )}
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}
