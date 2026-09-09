'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ICardProps {
  name: string
  brief: string
  profilePic: string
  lastWord?: string
}

export default function Card({
  name,
  brief,
  profilePic,
  lastWord = '',
}: ICardProps) {
  const [copied, setCopied] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const email = 'albadawiamer5@gmail.com'

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFlipped) {
        setIsFlipped(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFlipped])

  const { t, i18n } = useTranslation()
  const isArabic = Boolean(i18n.language?.startsWith('ar'))

  const safeT = (key: string, fallback: string) => {
    const res = t(key, fallback)
    if (!res || res === key) {
      return fallback
    }
    return res
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const locationText = safeT(
    'page.card.locationValue',
    isArabic
      ? '🇸🇦 الرياض، المملكة العربية السعودية'
      : '🇸🇦 Riyadh, Saudi Arabia',
  )
  const nationalityText = safeT(
    'page.card.nationalityValue',
    isArabic ? '🇯🇴 أردني' : '🇯🇴 Jordanian',
  )
  const experienceText = safeT(
    'page.card.experienceYearsValue',
    isArabic ? '+9 سنوات في هندسة البرمجيات' : '9+ Years in IT & Software',
  )
  const degreeText = safeT(
    'page.about.education.degree',
    isArabic
      ? 'بكالوريوس الهندسة (B.Sc.)'
      : 'Bachelor of Science in Engineering (B.Sc.)',
  )
  const languagesText = safeT(
    'page.card.languagesValue',
    isArabic
      ? 'العربية (اللغة الأم)، الإنجليزية (بطلاقة)'
      : 'Arabic (Native), English (Fluent)',
  )

  const competencies = [
    isArabic
      ? 'هندسة الأنظمة المتكاملة Full-Stack'
      : 'Enterprise Full-Stack Architecture',
    isArabic
      ? 'تطوير تطبيقات الويب والهاتف (React Native / Angular / Next.js)'
      : 'Web & Mobile Engineering (React Native, Next.js, Angular)',
    isArabic
      ? 'البنى الدقيقة للواجهات وأنظمة التصميم (Micro-Frontends)'
      : 'Micro-Frontends & Reusable Design Systems',
    isArabic
      ? 'تكامل واجهات برمجة التطبيقات (REST & GraphQL)'
      : 'REST & GraphQL API Integrations',
    isArabic
      ? 'القيادة التقنية وجودة الكود البرمجي (Agile Leadership)'
      : 'Agile Software Leadership & Code Quality',
  ]

  return (
    <>
      <div className="card-body flex w-full items-center justify-center p-2 sm:p-4">
        {/* 3D Perspective Card Wrapper */}
        <div className="perspective-1000 w-full max-w-sm">
          <div
            className={`card-container relative w-full transition-transform duration-700 transform-style-preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* ============================================================ */}
            {/* FRONT FACE OF CARD                                          */}
            {/* ============================================================ */}
            <div className="backface-hidden relative w-full rounded-3xl border border-slate-200/90 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#0f1422]/85 dark:shadow-black/40">
              {/* Top Controls: Status Badge + Flip Button */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-400 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  {safeT(
                    'page.card.available',
                    isArabic
                      ? 'متاح للفرص والمشاريع'
                      : 'Available for Opportunities',
                  )}
                </span>

                {/* Flip Trigger Button with Tooltip */}
                <div className="relative group/flip flex items-center justify-center">
                  <button
                    onClick={() => setIsFlipped(true)}
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-50/80 text-orange-600 transition-all hover:bg-orange-500 hover:text-white dark:border-orange-500/30 dark:bg-orange-950/40 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white shadow-sm"
                    aria-label={safeT(
                      'page.card.flipHint',
                      isArabic ? 'انقر لقلب البطاقة' : 'Click to flip card',
                    )}
                  >
                    <i className="fas fa-repeat text-xs transition-transform duration-300 group-hover/flip:rotate-180" />
                  </button>
                  <div className="pointer-events-none absolute bottom-full mb-2 right-0 z-30 opacity-0 group-hover/flip:opacity-100 transition-all duration-200 translate-y-1 group-hover/flip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                    {safeT(
                      'page.card.flipToBack',
                      isArabic
                        ? 'عرض الكفاءات والبيانات'
                        : 'View Competencies & Details',
                    )}
                    <div className="absolute top-full right-3 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                  </div>
                </div>
              </div>

              {/* Profile Image with subtle ring & enlarged dimensions */}
              <div className="relative mx-auto my-5 flex h-40 w-40 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-blue-500 opacity-25 blur-md" />
                <Image
                  width={152}
                  height={152}
                  className="relative h-36 w-36 rounded-full object-cover ring-2 ring-orange-500 ring-offset-4 ring-offset-white dark:ring-offset-[#0f1422] shadow-lg"
                  src={profilePic || '/images/amer-pic.png'}
                  alt={name}
                  priority
                />
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {name}
                </h2>
                <p className="mt-0.5 text-xs font-semibold text-orange-600 dark:text-orange-400">
                  {safeT(
                    'footer.element.role',
                    isArabic ? 'مهندس برمجيات أول' : 'Senior Software Engineer',
                  )}
                </p>

                {/* Quick Highlights Chips */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300">
                    <span>🇸🇦</span>
                    <span>{isArabic ? 'الرياض، السعودية' : 'Riyadh, KSA'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300">
                    <span>{nationalityText}</span>
                  </span>
                </div>

                {/* Brief Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {brief}
                </p>

                {/* Quick Connect Actions with Clear Tooltips */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  {/* Copy Email Button with Tooltip */}
                  <div className="relative group/tip flex items-center justify-center">
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100/90 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400 shadow-sm"
                      aria-label={safeT(
                        'page.card.tooltipCopy',
                        isArabic ? 'نسخ البريد الإلكتروني' : 'Copy Email Address',
                      )}
                    >
                      <i
                        className={`fas ${copied ? 'fa-check text-orange-500' : 'fa-copy'} text-xs`}
                      />
                      <span>
                        {copied
                          ? safeT(
                              'page.card.copied',
                              isArabic ? 'تم النسخ' : 'Copied',
                            )
                          : safeT(
                              'page.card.copy-email',
                              isArabic ? 'نسخ البريد الإلكتروني' : 'Copy Email',
                            )}
                      </span>
                    </button>
                    <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                      {copied
                        ? isArabic
                          ? 'تم النسخ!'
                          : 'Copied!'
                        : safeT(
                            'page.card.tooltipCopy',
                            isArabic ? 'انقر لنسخ البريد' : 'Click to copy email',
                          )}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                    </div>
                  </div>

                  {/* Flip Card / Competencies Button */}
                  <div className="relative group/tip flex items-center justify-center">
                    <button
                      onClick={() => setIsFlipped(true)}
                      type="button"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-orange-400/50 bg-orange-500/10 text-orange-600 transition-all hover:bg-orange-500 hover:text-white hover:scale-105 dark:border-orange-500/40 dark:bg-orange-950/40 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white shadow-sm"
                      aria-label={safeT(
                        'page.card.flipToBack',
                        isArabic
                          ? 'عرض الكفاءات والبيانات'
                          : 'View Competencies & Details',
                      )}
                    >
                      <i className="fas fa-layer-group text-xs" />
                    </button>
                    <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 translate-y-1 group-hover/tip:translate-y-0 whitespace-nowrap rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95">
                      {safeT(
                        'page.card.flipToBack',
                        isArabic
                          ? 'عرض الكفاءات والبيانات'
                          : 'View Competencies & Details',
                      )}
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
                      {safeT(
                        'page.card.tooltipLinkedIn',
                        isArabic ? 'الملف الشخصي على LinkedIn' : 'LinkedIn Profile',
                      )}
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
                      {safeT(
                        'page.card.tooltipGitHub',
                        isArabic ? 'المستودع على GitHub' : 'GitHub Profile',
                      )}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-900/95" />
                    </div>
                  </div>
                </div>

                {lastWord && (
                  <p className="mt-3 text-xs font-medium text-orange-600 dark:text-orange-400">
                    {lastWord}
                  </p>
                )}
              </div>
            </div>

            {/* ============================================================ */}
            {/* BACK FACE OF CARD (FLIPPED)                                 */}
            {/* ============================================================ */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1422]/95 dark:shadow-black/40 sm:p-6">
              {/* Back Face Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                    <i className="fas fa-layer-group text-xs" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
                      {safeT(
                        'page.card.backTitle',
                        isArabic
                          ? 'الكفاءات والملف المهني'
                          : 'Core Competencies & Profile',
                      )}
                    </h3>
                    <p className="text-[10px] text-orange-600 dark:text-orange-400 font-medium">
                      {name} • Senior Software Engineer
                    </p>
                  </div>
                </div>

                {/* Flip Back Button */}
                <button
                  onClick={() => setIsFlipped(false)}
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-100/80 text-xs text-slate-600 transition-all hover:bg-orange-500 hover:text-white dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300 dark:hover:bg-orange-500 dark:hover:text-white shadow-sm"
                  aria-label={safeT(
                    'page.card.flipToFront',
                    isArabic ? 'العودة للواجهة الشخصية' : 'Back to Profile',
                  )}
                >
                  <i className="fas fa-times text-xs" />
                </button>
              </div>

              {/* Core Competencies Chips */}
              <div className="my-2 space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {safeT(
                    'page.about.coreCompetencies',
                    isArabic
                      ? 'كفاءات هندسة البرمجيات'
                      : 'Software Competencies',
                  )}
                </p>
                <div className="flex flex-col gap-1.5">
                  {competencies.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-slate-50/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/5 dark:bg-zinc-800/50 dark:text-slate-200 shadow-2xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 gap-1.5 border-t border-slate-200/80 pt-2 dark:border-white/10">
                <div className="rounded-lg bg-slate-50/80 p-1.5 dark:bg-zinc-800/40">
                  <p className="text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500">
                    {isArabic ? 'الموقع' : 'Location'}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {locationText}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50/80 p-1.5 dark:bg-zinc-800/40">
                  <p className="text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500">
                    {isArabic ? 'الخبرة' : 'Experience'}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {experienceText}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50/80 p-1.5 dark:bg-zinc-800/40">
                  <p className="text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500">
                    {isArabic ? 'المؤهل' : 'Degree'}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {degreeText}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50/80 p-1.5 dark:bg-zinc-800/40">
                  <p className="text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500">
                    {isArabic ? 'اللغات' : 'Languages'}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {languagesText}
                  </p>
                </div>
              </div>

              {/* Back Face Footer Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsFlipped(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-1.5 text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg"
                >
                  <i
                    className={`fas ${isArabic ? 'fa-arrow-right' : 'fa-arrow-left'} text-[10px]`}
                  />
                  <span>
                    {safeT(
                      'page.card.flipToFront',
                      isArabic ? 'العودة للواجهة الشخصية' : 'Back to Profile',
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

