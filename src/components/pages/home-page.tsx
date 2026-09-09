'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import Particles from '../atoms/particles'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="relative flex h-full w-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

      {/* Decorative top accent line */}
      <div className="animate-glow hidden h-px w-screen max-w-5xl animate-fade-right bg-gradient-to-r from-transparent via-orange-500/40 to-transparent md:block" />

      {/* Interactive Particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={180}
      />

      {/* Executive Hero Statement */}
      <div className="z-10 my-8 max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:border-orange-500/30 dark:bg-orange-950/30 dark:text-orange-400 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
          {t('footer.element.role')}
        </span>

        <h1 className="cursor-default px-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text dark:from-white dark:via-slate-100 dark:to-slate-300">
            {t('page.home.title')}
          </span>
        </h1>
      </div>

      {/* Decorative bottom accent line */}
      <div className="animate-glow hidden h-px w-screen max-w-5xl animate-fade-right bg-gradient-to-r from-transparent via-blue-500/40 to-transparent md:block" />

      {/* Hero Subtitle CTA Card */}
      <div className="absolute inset-x-0 bottom-0 my-12 animate-fade-in text-center px-4">
        <div className="inline-block rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-3 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/80">
          <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
            {t('page.home.description')}{' '}
            <Link
              href="/?nav=1"
              onClick={(e) => {
                e.preventDefault()
                if (typeof window !== 'undefined') {
                  window.history.replaceState(null, '', '/?nav=1')
                  window.dispatchEvent(
                    new CustomEvent('pageNavClicked', { detail: 1 }),
                  )
                }
              }}
              className="font-bold text-orange-600 underline underline-offset-4 duration-300 hover:text-blue-600 dark:text-orange-400 dark:hover:text-blue-400"
            >
              {t('page.home.description-2')}
            </Link>{' '}
            {t('page.home.description-3')}
          </p>
        </div>
      </div>
    </div>
  )
}
