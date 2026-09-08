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
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'experience'>('overview')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  // Refs for scroll animations
  const headerRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDListElement>(null)
  const buttonRef = useRef<HTMLElement>(null)

  // Visibility states
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)

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
      label: t('page.about.countries') || 'Experience',
      color: 'text-pink-500',
      icon: 'fas fa-calendar-alt',
    },
    {
      id: 'projects',
      value: '15+',
      label: t('page.about.projects-contributed'),
      color: 'text-purple-500',
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
    { name: 'React.js & Next.js 14', category: 'frontend', level: 'Expert', icon: 'fab fa-react' },
    { name: 'Angular (2-17)', category: 'frontend', level: 'Advanced', icon: 'fab fa-angular' },
    { name: 'React Native', category: 'mobile', level: 'Advanced', icon: 'fas fa-mobile-alt' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', icon: 'fab fa-css3-alt' },
    { name: 'Node.js & Express', category: 'backend', level: 'Advanced', icon: 'fab fa-node-js' },
    { name: 'REST & GraphQL APIs', category: 'backend', level: 'Advanced', icon: 'fas fa-network-wired' },
    { name: 'SQL & PostgreSQL', category: 'backend', level: 'Proficient', icon: 'fas fa-database' },
    { name: 'State Management (Signals/Redux)', category: 'frontend', level: 'Expert', icon: 'fas fa-sitemap' },
    { name: 'Jest & Unit Testing', category: 'devops', level: 'Advanced', icon: 'fas fa-vial' },
    { name: 'Git & CI/CD Pipelines', category: 'devops', level: 'Advanced', icon: 'fab fa-git-alt' },
    { name: 'Micro-Frontends & Architecture', category: 'devops', level: 'Expert', icon: 'fas fa-cubes' },
  ]

  const experienceList: Experience[] = [
    {
      company: 'STC (Saudi Telecom Company)',
      role: 'Senior Software Engineer',
      period: '2022 — Present',
      location: 'Riyadh, Saudi Arabia',
      badgeColor: 'from-purple-500 to-indigo-600',
      description: [
        'Architected and delivered high-performance web platforms and digital services for millions of telecom subscribers.',
        'Championed micro-frontends and state management optimization, enhancing load speed by over 40%.',
        'Led cross-functional sprint planning and mentored junior engineers on TypeScript best practices.',
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Micro-Frontends'],
    },
    {
      company: 'Wipro Arabia Limited',
      role: 'Senior Software Engineer',
      period: '2020 — 2022',
      location: 'Riyadh, Saudi Arabia',
      badgeColor: 'from-orange-500 to-red-500',
      description: [
        'Developed robust enterprise dashboards and automated customer operations for enterprise clients.',
        'Engineered responsive, accessible front-end interfaces aligned with strict design systems.',
      ],
      skills: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'CI/CD'],
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Software Engineer / Frontend Lead',
      period: '2018 — 2020',
      location: 'Saudi Arabia',
      badgeColor: 'from-blue-500 to-cyan-500',
      description: [
        'Spearheaded modern SPA frontend migrations and component library standardization.',
        'Integrated RESTful microservices with automated testing pipelines.',
      ],
      skills: ['React', 'JavaScript (ES6+)', 'Bootstrap 5', 'Jest'],
    },
    {
      company: 'Zain Group (KSA & Jordan)',
      role: 'Software Development Engineer',
      period: '2015 — 2018',
      location: 'Amman, Jordan & KSA',
      badgeColor: 'from-emerald-500 to-teal-600',
      description: [
        'Developed self-service customer portals, billing integration modules, and internal support tools.',
        'Optimized SQL database query performance and streamlined data retrieval workflows.',
      ],
      skills: ['JavaScript', 'Web Services', 'SQL', 'UI/UX Design'],
    },
  ]

  const filteredSkills = selectedCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === selectedCategory)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            setIsHeaderVisible(true)
          } else if (entry.target === statsRef.current) {
            setIsStatsVisible(true)
          } else if (entry.target === buttonRef.current) {
            setIsButtonVisible(true)
          }
        }
      })
    }

    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(observerCallback, observerOptions)
      if (headerRef.current) observer.observe(headerRef.current)
      if (statsRef.current) observer.observe(statsRef.current)
      if (buttonRef.current) observer.observe(buttonRef.current)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

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
    <div className="flex h-full w-full flex-col py-6 md:flex-row md:py-10">
      {/* Left Section - Profile Card */}
      <aside className="flex w-full flex-col items-center justify-start px-4 md:w-1/3">
        <Card
          {...aboutMe}
          name={t('component.element.name')}
          brief={t('page.about.brief')}
        />
      </aside>

      {/* Right Section - Main Interactive Digital CV Content */}
      <main className="flex w-full flex-col items-center justify-start p-3 sm:p-4 md:w-2/3">
        <article className="mx-auto w-full max-w-4xl rounded-2xl border border-gray-200 bg-white/95 p-5 shadow-xl backdrop-blur-md dark:border-gray-700/80 dark:bg-gray-900/95 sm:p-8">
          {/* Navigation Tab Header */}
          <div className="mb-6 flex border-b border-gray-200 pb-2 dark:border-gray-700">
            <nav className="flex space-x-2 sm:space-x-4" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  activeTab === 'overview'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <i className="fas fa-user" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  activeTab === 'skills'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <i className="fas fa-laptop-code" />
                <span>Skills Matrix</span>
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  activeTab === 'experience'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <i className="fas fa-briefcase" />
                <span>Experience</span>
              </button>
            </nav>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <section
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
              className="animate-fade-in"
            >
              {/* Title and Description */}
              <header
                ref={headerRef}
                className={`transition-all duration-700 ${
                  isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <h1 className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
                  {t('page.about.title')}
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                  {t('page.about.paragraph')}
                </p>
              </header>

              {/* Stats Section */}
              <dl
                ref={statsRef}
                className={`mt-6 grid grid-cols-2 gap-4 transition-all duration-700 sm:grid-cols-4 ${
                  isStatsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="group flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50/80 p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/50 hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60 dark:hover:bg-gray-800"
                  >
                    <i
                      className={`${stat.icon} mb-2 text-xl ${stat.color} transition-transform duration-300 group-hover:scale-125`}
                      aria-hidden="true"
                    />
                    <dt className="text-xl font-black text-gray-900 dark:text-white sm:text-2xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Core Competency Highlights */}
              <div className="mt-6 rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50/60 to-pink-50/40 p-4 dark:border-gray-800 dark:from-gray-800/40 dark:to-gray-800/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  Core Competencies
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Full-Stack Architecture',
                    'High-Concurrency Web Systems',
                    'Micro-Frontends & Design Systems',
                    'Mobile & Cross-Platform (React Native)',
                    'Performance & Core Web Vitals',
                    'Engineering Mentorship & Agile Leadership',
                  ].map((competency) => (
                    <span
                      key={competency}
                      className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {competency}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download CV CTA */}
              <footer
                ref={buttonRef}
                className={`mt-6 flex items-center justify-end transition-all duration-700 ${
                  isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <button
                  onClick={handleDownloadCV}
                  type="button"
                  disabled={isDownloading || downloaded}
                  aria-label="Download CV as PDF"
                  className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r ${
                    downloaded
                      ? 'from-emerald-500 to-green-600'
                      : 'from-orange-500 via-red-500 to-pink-600'
                  } p-0.5 text-xs font-medium shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-4 ${
                    isDownloading || downloaded ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <span className="relative flex items-center gap-2 rounded-[10px] bg-white px-5 py-2.5 text-gray-900 transition-all duration-75 group-hover:bg-opacity-0 group-hover:text-white dark:bg-gray-900 dark:text-white">
                    {isDownloading ? (
                      <>
                        <i className="fas fa-spinner fa-spin text-sm" />
                        Downloading...
                      </>
                    ) : downloaded ? (
                      <>
                        <i className="fas fa-check text-sm text-green-500 group-hover:text-white" />
                        Downloaded!
                      </>
                    ) : (
                      <>
                        <i className="fas fa-file-pdf text-sm text-red-500 group-hover:text-white" />
                        {t('page.about.downloadCV')}
                      </>
                    )}
                  </span>
                </button>
              </footer>
            </section>
          )}

          {/* TAB 2: TECHNICAL SKILLS MATRIX */}
          {activeTab === 'skills' && (
            <section className="animate-fade-in space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Technical Expertise & Stack
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'frontend', label: 'Frontend' },
                    { id: 'mobile', label: 'Mobile' },
                    { id: 'backend', label: 'Backend' },
                    { id: 'devops', label: 'Architecture & DevOps' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-orange-600 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-gray-50/60 p-3 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50/30 hover:shadow dark:border-gray-700/60 dark:bg-gray-800/50 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400">
                        <i className={skill.icon} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </p>
                        <p className="text-[11px] capitalize text-gray-500 dark:text-gray-400">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 3: CAREER EXPERIENCE TIMELINE */}
          {activeTab === 'experience' && (
            <section className="animate-fade-in space-y-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Career History & Impact
              </h2>

              <div className="relative border-l-2 border-orange-200 pl-4 sm:pl-6 dark:border-orange-900/50">
                {experienceList.map((exp) => (
                  <div key={exp.company} className="relative mb-8 last:mb-2">
                    {/* Pulsing indicator node */}
                    <span className="absolute -left-[25px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 ring-4 ring-orange-100 sm:-left-[33px] dark:ring-gray-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>

                    <div className="rounded-xl border border-gray-200/80 bg-gray-50/60 p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/40">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                            {exp.role}
                          </h3>
                          <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block rounded-full bg-gray-200/80 px-2.5 py-0.5 text-[11px] font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            {exp.period}
                          </span>
                          <p className="text-[11px] text-gray-400">{exp.location}</p>
                        </div>
                      </div>

                      <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-gray-600 dark:text-gray-300">
                        {exp.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-orange-100/70 px-2 py-0.5 text-[10px] font-medium text-orange-800 dark:bg-orange-950/40 dark:text-orange-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </div>
  )
}

