'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

interface ICardProps {
  name: string
  brief: string
  profilePic?: string
}

export default function Card({
  name,
  brief,
  profilePic = '/images/amer-pic.png',
}: ICardProps) {
  const [copied, setCopied] = useState(false)
  const [showBioModal, setShowBioModal] = useState(false)
  const [mounted, setMounted] = useState(false)
  const email = 'albadawiamer5@gmail.com'

  const { t, i18n } = useTranslation()
  const isArabic = Boolean(i18n.language?.startsWith('ar'))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showBioModal) {
        setShowBioModal(false)
      }
    }
    if (showBioModal) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showBioModal])

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const profileDetails = [
    {
      icon: 'fas fa-map-marker-alt',
      iconColor: 'text-orange-500',
      label: isArabic ? 'الموقع الحالي' : 'Location',
      value: isArabic ? '🇸🇦 الرياض، المملكة العربية السعودية' : '🇸🇦 Riyadh, Saudi Arabia',
    },
    {
      icon: 'fas fa-globe-asia',
      iconColor: 'text-blue-500',
      label: isArabic ? 'الجنسية' : 'Nationality',
      value: isArabic ? '🇯🇴 أردني' : '🇯🇴 Jordanian',
    },
    {
      icon: 'fas fa-briefcase',
      iconColor: 'text-orange-500',
      label: isArabic ? 'سنوات الخبرة' : 'Experience',
      value: isArabic ? '+9 سنوات في هندسة البرمجيات' : '9+ Years in IT & Software',
    },
    {
      icon: 'fas fa-graduation-cap',
      iconColor: 'text-blue-500',
      label: isArabic ? 'المؤهل الأكاديمي' : 'Degree',
      value: isArabic ? 'بكالوريوس العلوم في الهندسة (B.Sc.)' : 'Bachelor of Science in Engineering (B.Sc.)',
      subValue: isArabic ? 'تخصص هندسة الاتصالات والإلكترونيات' : 'Major in Telecommunication & Electronics Engineering',
    },
    {
      icon: 'fas fa-language',
      iconColor: 'text-emerald-500',
      label: isArabic ? 'اللغات' : 'Languages',
      value: isArabic ? 'العربية (اللغة الأم)، الإنجليزية (بطلاقة)' : 'Arabic (Native), English (Fluent)',
    },
    {
      icon: 'fas fa-laptop-code',
      iconColor: 'text-orange-500',
      label: isArabic ? 'أبرز التقنيات' : 'Key Technologies',
      value: 'React Native, React, Next.js, Angular, TypeScript, Node.js',
    },
  ]

  return (
    <>
      <div className="card-body flex w-full items-center justify-center p-2 sm:p-4">
        <div className="card-container relative w-full max-w-sm rounded-3xl border border-slate-200/90 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#0f1422]/85 dark:shadow-black/40">
          {/* Availability Status Badge */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {t('page.card.available') || (isArabic ? 'متاح للفرص والمشاريع' : 'Available for Opportunities')}
            </span>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto my-4 flex h-40 w-40 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-blue-500 opacity-25 blur-md" />
            <Image
              width={160}
              height={160}
              className="relative h-36 w-36 rounded-full object-cover ring-2 ring-orange-500 ring-offset-4 ring-offset-white dark:ring-offset-[#0f1422] shadow-lg"
              src={profilePic}
              alt={name}
              priority
            />
          </div>

          {/* Profile Details */}
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {name}
            </h2>
            <p className="mt-0.5 text-xs font-semibold text-orange-600 dark:text-orange-400">
              {t('footer.element.role') || (isArabic ? 'مهندس برمجيات أول' : 'Senior Software Engineer')}
            </p>

            {/* Quick Country / Nationality Chips */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300">
                <span>🇸🇦</span>
                <span>{isArabic ? 'الرياض، السعودية' : 'Riyadh, KSA'}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300">
                <span>🇯🇴</span>
                <span>{isArabic ? 'أردني' : 'Jordanian'}</span>
              </span>
            </div>

            {/* Brief */}
            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {brief}
            </p>

            {/* Quick Actions */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {/* Copy Email Button */}
              <div className="relative group/tip flex items-center justify-center">
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100/90 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400 shadow-sm cursor-pointer"
                  aria-label="Copy Email Address"
                >
                  <i className={`fas ${copied ? 'fa-check text-orange-500' : 'fa-copy'} text-xs`} />
                  <span>
                    {copied
                      ? (isArabic ? 'تم النسخ' : 'Copied')
                      : (isArabic ? 'نسخ البريد الإلكتروني' : 'Copy Email')}
                  </span>
                </button>
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                  {copied ? (isArabic ? 'تم النسخ!' : 'Copied!') : (isArabic ? 'انقر لنسخ البريد' : 'Click to copy email')}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                </div>
              </div>

              {/* Bio Modal Button */}
              <div className="relative group/tip flex items-center justify-center">
                <button
                  onClick={() => setShowBioModal(true)}
                  type="button"
                  className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-slate-200 bg-slate-100/90 text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 hover:scale-105 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400 shadow-sm cursor-pointer"
                  aria-label="Quick Bio & Background"
                >
                  <i className="fas fa-id-card text-xs text-orange-500" />
                </button>
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                  {isArabic ? 'نبذة سريعة وبيانات الملف' : 'Quick Bio & Background'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                </div>
              </div>

              {/* LinkedIn Button */}
              <div className="relative group/tip flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/albadawiamer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/90 text-slate-700 transition-all hover:border-blue-500 hover:text-blue-600 hover:scale-105 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400 shadow-sm"
                  aria-label="Amer Albadawi LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-xs" />
                </a>
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                  {isArabic ? 'الملف الشخصي على LinkedIn' : 'LinkedIn Profile'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                </div>
              </div>

              {/* GitHub Button */}
              <div className="relative group/tip flex items-center justify-center">
                <a
                  href="https://github.com/aalbadawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/90 text-slate-700 transition-all hover:border-orange-500 hover:text-orange-600 hover:scale-105 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400 shadow-sm"
                  aria-label="Amer Albadawi GitHub"
                >
                  <i className="fab fa-github text-xs" />
                </a>
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                  {isArabic ? 'المستودع على GitHub' : 'GitHub Profile'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Modal Portal */}
      {mounted && showBioModal && typeof document !== 'undefined'
        ? createPortal(
            <div
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
              onClick={() => setShowBioModal(false)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="card-bio-modal-title"
            >
              <div
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto custom-scrollbar rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1422]/95 dark:shadow-2xl sm:p-7"
                onClick={(e) => e.stopPropagation()}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                      <i className="fas fa-id-card text-lg" />
                    </div>
                    <div>
                      <h2
                        id="card-bio-modal-title"
                        className="text-base sm:text-lg font-bold text-slate-900 dark:text-white"
                      >
                        {isArabic ? 'الملف المهني والبيانات الشخصية' : 'Professional Profile & Background'}
                      </h2>
                      <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">
                        {name} • {isArabic ? 'مهندس برمجيات أول' : 'Senior Software Engineer'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowBioModal(false)}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 text-xs text-slate-600 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300 dark:hover:bg-white/10 cursor-pointer"
                    aria-label="Close details dialog"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>

                {/* Profile Grid Info */}
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {profileDetails.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3.5 dark:border-white/5 dark:bg-zinc-800/40"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`mt-0.5 text-xs ${item.iconColor}`}>
                          <i className={item.icon} />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {item.label}
                          </p>
                          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                            {item.value}
                          </p>
                          {item.subValue && (
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              {item.subValue}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Brief Quote */}
                <div className="mt-4 rounded-2xl border border-orange-500/20 bg-orange-50/60 p-3.5 dark:border-orange-500/20 dark:bg-orange-950/20">
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    {brief}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-5 flex items-center justify-end gap-2 pt-3 border-t border-slate-200/80 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowBioModal(false)}
                    className="rounded-xl bg-orange-500 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-orange-500/25 transition-all hover:bg-orange-600 cursor-pointer"
                  >
                    {isArabic ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
