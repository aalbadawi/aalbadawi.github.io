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

export default function About() {
  const { t } = useTranslation()
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
      color: 'text-red-600',
      icon: 'fas fa-clock',
    },
    {
      id: 'projects',
      value: '5+',
      label: t('page.about.projects-contributed'),
      color: 'text-red-600',
      icon: 'fas fa-project-diagram',
    },
    {
      id: 'tech-stack',
      value: '10+',
      label: t('page.about.tech-frameworks'),
      color: 'text-red-600',
      icon: 'fas fa-code',
    },
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
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

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(observerCallback, observerOptions);
      if (headerRef.current) observer.observe(headerRef.current);
      if (statsRef.current) observer.observe(statsRef.current);
      if (buttonRef.current) observer.observe(buttonRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
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

    // Simulate download complete after a brief delay
    setTimeout(() => {
      setIsDownloading(false)
      setDownloaded(true)

      // Reset downloaded state after 3 seconds
      setTimeout(() => {
        setDownloaded(false)
      }, 3000)
    }, 500)
  }

  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      {/* Left Section - Profile Card */}
      <aside className="mt-5 flex w-full flex-col items-center justify-center px-4 md:w-1/3">
        <Card
          {...aboutMe}
          name={t('component.element.name')}
          brief={t('page.about.brief')}
        />
      </aside>

      {/* Right Section - About Content */}
      <main className="flex w-full flex-col items-center justify-center p-4 md:w-2/3">
        <article className="mx-auto w-full max-w-3xl rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700">
          <section
            className="flex flex-col rounded-lg bg-white p-6 md:h-[70vh] lg:h-auto dark:bg-gray-900"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            {/* Title and Description */}
            <header
              ref={headerRef}
              className={`transition-all duration-1000 ${
                isHeaderVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {t('page.about.title')}
              </h1>
              <p className="mt-4 text-center text-gray-500 dark:text-white">
                {t('page.about.paragraph')}
              </p>
            </header>

            {/* Stats Section */}
            <dl
              ref={statsRef}
              className={`mt-8 grid grid-cols-1 gap-8 text-gray-900 transition-all duration-1000 sm:grid-cols-2 md:grid-cols-3 dark:text-white ${
                isStatsVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="group flex transform cursor-pointer flex-col items-center rounded-lg p-4 transition-all duration-300 hover:scale-110 hover:bg-orange-50 dark:hover:bg-gray-800"
                >
                  <i
                    className={`${stat.icon} mb-3 text-3xl text-orange-500 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-600 group-hover:rotate-12`}
                    aria-hidden="true"
                  />
                  <dt
                    className={`mb-2 text-3xl font-extrabold transition-all duration-300 ${stat.color || 'text-red-600'} group-hover:animate-pulse group-hover:scale-110`}
                  >
                    {stat.value}
                  </dt>
                  <dd className="text-center text-gray-500 transition-colors duration-300 group-hover:text-gray-900 dark:text-white dark:group-hover:text-gray-100">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Download CV Button */}
            <footer
              ref={buttonRef}
              className={`mt-10 text-right transition-all duration-1000 ${
                isButtonVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <button
                onClick={handleDownloadCV}
                type="button"
                disabled={isDownloading || downloaded}
                aria-label="Download CV as PDF"
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br p-0.5 text-sm font-medium focus:outline-none focus:ring-4 ${
                  downloaded
                    ? 'from-green-500 to-green-600 focus:ring-green-200 dark:focus:ring-green-800'
                    : 'from-orange-500 to-pink-600 hover:text-white focus:ring-orange-200 group-hover:from-red-500 group-hover:to-purple-600 dark:focus:ring-orange-800'
                } text-gray-900 dark:text-white ${
                  isDownloading || downloaded ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <span
                  className={`relative flex items-center rounded-md px-5 py-2.5 transition-all duration-75 ease-in dark:bg-gray-900 ${
                    downloaded
                      ? 'bg-green-50'
                      : 'bg-white group-hover:bg-opacity-0'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <i
                        className="fas fa-spinner fa-spin mr-2 text-lg"
                        aria-hidden="true"
                      />
                      Downloading...
                    </>
                  ) : downloaded ? (
                    <>
                      <i
                        className="fas fa-check mr-2 text-lg text-green-600"
                        aria-hidden="true"
                      />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <i
                        className="fas fa-file-pdf mr-2 text-lg"
                        aria-hidden="true"
                      />
                      {t('page.about.downloadCV')}
                    </>
                  )}
                </span>
              </button>
            </footer>
          </section>
        </article>
      </main>
    </div>
  )
}
