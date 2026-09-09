'use client'

import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export function FooterWithSitemap() {
  const { t } = useTranslation()

  const techLinks = [
    {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org',
      icon: 'fas fa-file-code',
      iconColor: 'text-blue-500',
      hoverColor: 'hover:border-blue-400 hover:text-blue-500',
    },
    {
      name: 'React.js',
      url: 'https://react.dev',
      icon: 'fab fa-react',
      iconColor: 'text-cyan-500',
      hoverColor: 'hover:border-cyan-400 hover:text-cyan-500',
    },
    {
      name: 'React Native',
      url: 'https://reactnative.dev',
      icon: 'fas fa-mobile-alt',
      iconColor: 'text-sky-500',
      hoverColor: 'hover:border-sky-400 hover:text-sky-500',
    },
    {
      name: 'Next.js 14',
      url: 'https://nextjs.org',
      icon: 'fas fa-cube',
      iconColor: 'text-gray-900 dark:text-white',
      hoverColor:
        'hover:border-gray-400 hover:text-black dark:hover:text-white',
    },
    {
      name: 'Angular',
      url: 'https://angular.dev',
      icon: 'fab fa-angular',
      iconColor: 'text-red-500',
      hoverColor: 'hover:border-red-400 hover:text-red-500',
    },
    {
      name: 'Node.js',
      url: 'https://nodejs.org',
      icon: 'fab fa-node-js',
      iconColor: 'text-green-500',
      hoverColor: 'hover:border-green-400 hover:text-green-500',
    },
    {
      name: 'Tailwind CSS',
      url: 'https://tailwindcss.com',
      icon: 'fab fa-css3-alt',
      iconColor: 'text-teal-500',
      hoverColor: 'hover:border-teal-400 hover:text-teal-500',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aalbadawi',
      icon: 'fab fa-github',
      hoverColor: 'hover:border-orange-400 hover:text-orange-500',
      iconColor: 'text-gray-800 dark:text-gray-200',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/albadawiamer/',
      icon: 'fab fa-linkedin-in',
      hoverColor: 'hover:border-blue-400 hover:text-blue-500',
      iconColor: 'text-blue-500',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/albadawiamer',
      icon: 'fab fa-x-twitter',
      hoverColor:
        'hover:border-gray-400 hover:text-gray-900 dark:hover:text-white',
      iconColor: 'text-gray-700 dark:text-gray-300',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/albadawi.amer',
      icon: 'fab fa-instagram',
      hoverColor: 'hover:border-pink-400 hover:text-pink-500',
      iconColor: 'text-pink-500',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/albadawiamer',
      icon: 'fab fa-facebook-f',
      hoverColor: 'hover:border-blue-500 hover:text-blue-600',
      iconColor: 'text-blue-600',
    },
  ]

  return (
    <footer className="w-full border-t border-slate-200/60 bg-white/60 py-5 backdrop-blur-xl dark:border-white/5 dark:bg-[#0b0f19]/70 sm:py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 items-start">
          {/* Col 1: Brand & Direct Contact */}
          <div className="space-y-2">
            <Link href="/?nav=0" className="inline-block group">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
                {t('footer.element.title') || 'Amer Albadawi'}
              </span>
            </Link>
            <p className="text-[11px] font-semibold text-orange-600 dark:text-orange-400">
              {t('footer.element.role') || 'Senior Software Engineer'}
            </p>

            <div className="space-y-1.5 pt-1 text-[11px]">
              <a
                href="mailto:albadawiamer5@gmail.com"
                className="flex items-center gap-2 text-slate-600 transition-colors hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 dark:bg-orange-500/15">
                  <i className="fas fa-envelope text-[10px]" />
                </div>
                <span>albadawiamer5@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 dark:bg-orange-500/15">
                  <i className="fas fa-map-marker-alt text-[10px]" />
                </div>
                <span>
                  {t('footer.element.address')}, {t('footer.element.address-2')}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Key Technologies as Icon Badges */}
          <div className="sm:text-right">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t('footer.element.col-3-title') || 'Key Technologies'}
            </h3>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {t('footer.element.col-3-subtitle') || 'Core frameworks & technical stack'}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2 sm:justify-end">
              {techLinks.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-sm shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${tech.hoverColor} dark:border-slate-800 dark:bg-slate-900/90`}
                  aria-label={tech.name}
                  title={tech.name}
                >
                  <i className={`${tech.icon} ${tech.iconColor}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Media Icons */}
        <div className="mt-5 flex flex-col-reverse items-center justify-between gap-3 border-t border-slate-200/50 pt-4 sm:flex-row dark:border-white/5">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {t('footer.element.copyrights')}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-xs shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${social.hoverColor} dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200`}
                aria-label={social.name}
                title={social.name}
              >
                <i className={`${social.icon} ${social.iconColor}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
