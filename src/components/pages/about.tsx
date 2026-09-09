'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { aboutMe } from '@/constants'

import Card from '../molecules/card/card'

interface StatItem {
  id: string
  value: string
  label: string
  color?: string
  icon: string
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
  badgeColor: string
}

export default function About() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'experience' | 'education'>('overview')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const stats: StatItem[] = [
    {
      id: 'work-hours',
      value: '20K+',
      label: t('page.about.work-experience'),
      color: 'text-orange-500',
      icon: 'fas fa-code-branch',
    },
    {
      id: 'experience-years',
      value: '9+ Yrs',
      label: t('page.about.experience-years') || 'Years of Experience',
      color: 'text-blue-500',
      icon: 'fas fa-calendar-alt',
    },
    {
      id: 'projects',
      value: '15+',
      label: t('page.about.projects-contributed'),
      color: 'text-orange-500',
      icon: 'fas fa-project-diagram',
    },
    {
      id: 'tech-stack',
      value: '12+',
      label: t('page.about.tech-frameworks'),
      color: 'text-blue-500',
      icon: 'fas fa-layer-group',
    },
  ]

  const skillsList: Skill[] = [
    { name: 'TypeScript', category: 'frontend', level: 'Expert', icon: 'fas fa-file-code' },
    { name: 'React & Next.js', category: 'frontend', level: 'Expert', icon: 'fab fa-react' },
    { name: 'Angular', category: 'frontend', level: 'Expert', icon: 'fab fa-angular' },
    { name: 'React Native', category: 'mobile', level: 'Advanced', icon: 'fas fa-mobile-alt' },
    { name: 'Tailwind CSS & UI', category: 'frontend', level: 'Expert', icon: 'fab fa-css3-alt' },
    { name: 'State Management (Signals/RxJS/Redux)', category: 'frontend', level: 'Expert', icon: 'fas fa-sitemap' },
    { name: 'Node.js & Express', category: 'backend', level: 'Advanced', icon: 'fab fa-node-js' },
    { name: 'REST & GraphQL APIs', category: 'backend', level: 'Advanced', icon: 'fas fa-network-wired' },
    { name: 'SQL & PostgreSQL', category: 'backend', level: 'Proficient', icon: 'fas fa-database' },
    { name: 'Micro-Frontends & Systems', category: 'devops', level: 'Expert', icon: 'fas fa-cubes' },
    { name: 'CI/CD Pipelines & Git', category: 'devops', level: 'Advanced', icon: 'fab fa-git-alt' },
    { name: 'Testing (Jest/E2E)', category: 'devops', level: 'Advanced', icon: 'fas fa-vial' },
  ]

  const experienceList: Experience[] = [
    {
      company: 'STC',
      role: 'Senior Software Engineer — Jawwy Digital Transformation',
      period: 'Aug 2026 — Present · 2 mos',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-orange-500 to-blue-600',
      description: [
        "Spearhead the design and development of core application features and change requests (CRs) for STC's digital brand (Jawwy), delivering high-conversion subscriber flows and resilient architectures.",
        'Engineer responsive, performance-tuned web and mobile interfaces using React Native, React.js, and TypeScript to ensure flawless cross-platform user journeys.',
        'Champion modular micro-frontend components, clean code standards, and seamless REST/GraphQL API integrations across multidisciplinary engineering pods.',
      ],
      skills: ['React Native', 'React.js', 'TypeScript', 'Micro-Frontends', 'REST APIs', 'Telecom Systems'],
    },
    {
      company: 'stc',
      role: 'Senior Software Engineer — WFMS | ALMONJEZ',
      period: 'May 2018 — Jul 2026 · 8 yrs 3 mos',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-orange-500 to-blue-600',
      description: [
        'Directed end-to-end frontend architecture and platform enhancements for the ALMONJEZ enterprise Workforce Management System (WFMS) utilizing Angular and TypeScript.',
        'Governed release lifecycle execution through rigorous SIT, E2E, and BAT testing suites, ensuring complete system stability and zero-downtime production deployments.',
        'Led Level 3 (L3) technical incident response, diagnosing complex edge cases and driving continuous platform optimization to maintain 99.9%+ operational reliability.',
      ],
      skills: ['Angular', 'TypeScript', 'RxJS', 'Enterprise WFMS', 'L3 Support', 'E2E/BAT Testing'],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Information Technology Analyst',
      period: 'Aug 2024 — Present · 2 yrs 2 mos',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-blue-600 to-orange-500',
      description: [
        'Provide senior technical leadership across strategic enterprise client initiatives, transforming intricate business requirements into high-performance web and mobile software.',
        'Oversee frontend code governance, architectural standardization, and cross-platform UI/UX consistency across on-site development teams in Riyadh.',
      ],
      skills: ['React.js', 'React Native', 'Angular', 'TypeScript', 'Technical Leadership', 'UI/UX Architecture'],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Senior Software Engineer',
      period: 'Aug 2019 — Jul 2024 · 5 yrs',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-blue-600 to-orange-500',
      description: [
        'Led core enterprise web portal development for ALMONJEZ, driving a comprehensive Angular framework migration and modern interface revamp.',
        'Designed and published standardized reusable component libraries, accelerating sprint velocity and substantially reducing defect turnaround times.',
      ],
      skills: ['Angular', 'TypeScript', 'Component Libraries', 'API Integration', 'Performance Tuning'],
    },
    {
      company: 'Wipro',
      role: 'Project Engineer',
      period: 'Mar 2017 — Jul 2019 · 2 yrs 5 mos',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-orange-500 to-blue-600',
      description: [
        'Built and maintained performant enterprise dashboards and operational interfaces using Angular, interfacing directly with key stakeholders to align technical deliverables.',
        'Monitored critical batch workflows and collection operations, executing proactive triage and root-cause analysis to ensure high platform availability.',
      ],
      skills: ['Angular', 'Enterprise Dashboards', 'Process Automation', 'Incident Management', 'Client Engagement'],
    },
    {
      company: 'stc',
      role: 'IT Business Support Applications & Operations',
      period: 'Mar 2017 — Mar 2018 · 1 yr 1 mo',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-orange-500 to-blue-600',
      description: [
        'Defined and centralized application requirements while providing specialized operational support for enterprise billing and collection management platforms.',
        'Monitored real-time system performance, diagnosing operational anomalies and coordinating rapid resolutions across cross-functional engineering teams.',
      ],
      skills: ['Requirements Architecture', 'Operations Support', 'Application Monitoring', 'System Troubleshooting'],
    },
    {
      company: 'Zain KSA',
      role: 'Cellular Network & Drive Test Engineer (Graduation Project)',
      period: 'Aug 2015 — Oct 2015 · 3 mos',
      location: 'Riyadh, Saudi Arabia · On-site',
      badgeColor: 'from-blue-600 to-orange-500',
      description: [
        'Conducted mobile network drive tests and cellular RF signal measurements across major Riyadh clusters as part of an engineering graduation project.',
        'Analyzed coverage KPIs and signal diagnostics (RSRP, SINR, handover rates) to assist optimization teams in enhancing wireless network reliability.',
      ],
      skills: ['Drive Testing', 'Cellular Networks', 'RF Diagnostics', 'QoS Optimization'],
    },
  ]

  const filteredSkills = selectedCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === selectedCategory)

  // Refs for scroll isolation from ReactPageScroller
  const timelineScrollRef = useRef<HTMLDivElement>(null)
  const skillsScrollRef = useRef<HTMLDivElement>(null)

  // Prevent scroll propagation to ReactPageScroller
  useEffect(() => {
    const handleNativeWheel = (e: WheelEvent) => {
      e.stopPropagation()
    }
    const handleNativeTouch = (e: TouchEvent) => {
      e.stopPropagation()
    }

    const tEl = timelineScrollRef.current
    const sEl = skillsScrollRef.current

    if (tEl) {
      tEl.addEventListener('wheel', handleNativeWheel, { passive: true })
      tEl.addEventListener('touchmove', handleNativeTouch, { passive: true })
    }
    if (sEl) {
      sEl.addEventListener('wheel', handleNativeWheel, { passive: true })
      sEl.addEventListener('touchmove', handleNativeTouch, { passive: true })
    }

    return () => {
      if (tEl) {
        tEl.removeEventListener('wheel', handleNativeWheel)
        tEl.removeEventListener('touchmove', handleNativeTouch)
      }
      if (sEl) {
        sEl.removeEventListener('wheel', handleNativeWheel)
        sEl.removeEventListener('touchmove', handleNativeTouch)
      }
    }
  }, [activeTab])

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
      setTimeout(() => {
        setDownloaded(false)
      }, 3000)
    }, 600)
  }

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
          <div className="mb-6 flex border-b border-slate-200/80 pb-3 dark:border-white/10">
            <nav className="flex flex-wrap gap-2 sm:gap-3" aria-label="Tabs">
              {[
                { id: 'overview', label: t('page.about.tab.overview') || 'Overview', icon: 'fas fa-user' },
                { id: 'skills', label: t('page.about.tab.skills') || 'Skills Matrix', icon: 'fas fa-laptop-code' },
                { id: 'experience', label: t('page.about.tab.experience') || 'Experience', icon: 'fas fa-briefcase' },
                { id: 'education', label: t('page.about.tab.education') || 'Education', icon: 'fas fa-graduation-cap' },
              ].map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                  >
                    <i className={`${tab.icon} text-xs`} />
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
              className="space-y-6"
            >
              {/* Title and Description */}
              <header>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {t('page.about.title')}
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {t('page.about.paragraph')}
                </p>
              </header>

              {/* Stats Section */}
              <dl className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="group flex flex-col items-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md dark:border-white/5 dark:bg-zinc-800/40 dark:hover:border-orange-500/40"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition-transform duration-200 group-hover:scale-110 dark:bg-orange-500/20 dark:text-orange-400">
                      <i className={`${stat.icon} text-base`} aria-hidden="true" />
                    </div>
                    <dt className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Download CV CTA */}
              <footer className="flex items-center justify-end pt-2">
                <button
                  onClick={handleDownloadCV}
                  type="button"
                  disabled={isDownloading || downloaded}
                  aria-label="Download CV as PDF"
                  className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    isDownloading || downloaded ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-sm" />
                      <span>{t('page.about.downloading') || 'Downloading...'}</span>
                    </>
                  ) : downloaded ? (
                    <>
                      <i className="fas fa-check text-sm" />
                      <span>{t('page.about.downloaded') || 'Downloaded!'}</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-file-pdf text-sm" />
                      <span>{t('page.about.downloadCV')}</span>
                    </>
                  )}
                </button>
              </footer>
            </section>
          )}

          {/* TAB 2: TECHNICAL SKILLS MATRIX */}
          {activeTab === 'skills' && (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t('page.about.tab.skills') || 'Technical Competencies & Matrix'}
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: t('page.about.skills.all') || 'All Domains' },
                    { id: 'frontend', label: t('page.about.skills.frontend') || 'Frontend & UI' },
                    { id: 'mobile', label: t('page.about.skills.mobile') || 'Mobile' },
                    { id: 'backend', label: t('page.about.skills.backend') || 'Backend & APIs' },
                    { id: 'devops', label: t('page.about.skills.devops') || 'Architecture & DevOps' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`rounded-xl px-3 py-1 text-xs font-semibold transition-all ${
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
                ref={skillsScrollRef}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="custom-scrollbar max-h-[360px] overflow-y-auto pr-2 sm:max-h-[420px]"
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
                    {t('page.about.tab.experience') || 'Career History & Leadership'}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t('page.about.experience.subtitle') || 'Enterprise Engineering & Telecommunication Impact • Scrollable Timeline'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                  <i className="fas fa-arrows-alt-v text-[10px]" />
                  <span>{t('page.about.experience.scrollable') || 'Scrollable'}</span>
                </span>
              </div>

              {/* Scrollable Experience Timeline */}
              <div
                ref={timelineScrollRef}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="custom-scrollbar max-h-[380px] overflow-y-auto px-1 py-1 pr-3 sm:max-h-[420px]"
              >
                <div className="relative ml-2 border-l-2 border-orange-200 pl-4 sm:ml-3 sm:pl-6 dark:border-orange-900/50">
                  {experienceList.map((exp) => (
                    <div key={`${exp.company}-${exp.role}-${exp.period}`} className="relative mb-5 last:mb-1">
                      {/* Pulsing indicator node */}
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
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">{exp.location}</p>
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
                    {t('page.about.education.subtitle') || 'Academic Background • Specialized Masterclasses'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
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
                            {t('page.about.education.higherEducation') || 'Higher Education'}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {t('page.about.education.degree') || 'Bachelor of Science in Engineering (B.Sc.)'}
                          </h3>
                        </div>
                        <span className="rounded-full bg-orange-100/90 px-3 py-0.5 text-xs font-semibold text-orange-800 dark:bg-orange-950/40 dark:text-orange-300">
                          2010 — 2015
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t('page.about.education.major') || 'Major in Telecommunication & Electronics Engineering'}
                      </p>
                      {t('page.about.education.note') && (
                        <p className="mt-2 text-xs italic text-orange-600 dark:text-orange-400">
                          {t('page.about.education.note')}
                        </p>
                      )}
                      <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/5">
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {t('page.about.education.modules') || 'Engineering Foundations & Core Disciplines:'}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {[
                            'Software Engineering & Algorithms',
                            'Data Structures & Object-Oriented Design',
                            'Computer Networks & Distributed Protocols',
                            'Digital Signal Processing & Microprocessors',
                            'Database Systems & IT Architecture',
                            'Embedded Computing & Systems',
                          ].map((area) => (
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
                            {t('page.about.education.certificationsCategory') || 'Professional Certifications'}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {t('page.about.education.certificationsTitle') || 'Specialized Engineering & Development Masterclasses'}
                          </h3>
                        </div>
                        <span className="rounded-full bg-blue-100/90 px-3 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                          {t('page.about.education.verified') || 'Verified'}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t('page.about.education.certificationsSubtitle') || 'Full-Stack, Mobile & Modern Architecture Certifications'}
                      </p>
                      <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/5">
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {t('page.about.education.certificationsList') || 'Key Certifications & Courses:'}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {[
                            { name: 'Angular Enterprise Architecture Masterclass', icon: 'fab fa-angular text-red-500' },
                            { name: 'React & Next.js Full-Stack Engineering', icon: 'fab fa-react text-blue-500' },
                            { name: 'React Native & Mobile Development', icon: 'fas fa-mobile-alt text-cyan-500' },
                            { name: 'TypeScript Advanced Design Patterns', icon: 'fas fa-file-code text-blue-600' },
                            { name: 'Modern JavaScript (ES6+ / ESNext)', icon: 'fab fa-js text-yellow-500' },
                            { name: 'Micro-Frontends & Scalable Web Systems', icon: 'fas fa-cubes text-orange-500' },
                          ].map((cert) => (
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
        </article>
      </main>
    </div>
  )
}

