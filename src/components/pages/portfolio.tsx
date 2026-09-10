'use client'

import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

interface Company {
  id: string
  name: string
  period: string
  fieldEn: string
  fieldAr: string
  overviewEn: string
  overviewAr: string
  link: string
  imageSrc: string
  alt: string
}

const COMPANIES: Company[] = [
  {
    id: 'stc',
    name: 'STC',
    period: '2017 — Present',
    fieldEn: 'Telecommunications & Digital Services',
    fieldAr: 'الاتصالات والتحول الرقمي',
    overviewEn:
      'Saudi Telecom Company (stc) is a leading telecommunications and digital enabler in the Middle East and North Africa, delivering cutting-edge telecom infrastructure, cloud services, and digital solutions.',
    overviewAr:
      'شركة الاتصالات السعودية (stc) هي الرائدة في مجال الاتصالات والخدمات والحلول الرقمية في منطقة الشرق الأوسط وشمال أفريقيا، وتوفر البنية التحتية والمنصات الرقمية المتطورة.',
    link: 'https://www.stc.com.sa',
    imageSrc: '/images/companies/stc-logo.png',
    alt: 'STC Logo',
  },
  {
    id: 'tata',
    name: 'Tata Consultancy Services',
    period: '2019 — Present',
    fieldEn: 'Global IT Consulting & Enterprise Solutions',
    fieldAr: 'استشارات وحلول تقنية المعلومات العالمية',
    overviewEn:
      'Tata Consultancy Services (TCS) is a global leader in IT services, consulting, and business solutions, partnering with major enterprise and telecom organizations worldwide.',
    overviewAr:
      'تاتا للخدمات الاستشارية (TCS) هي شركة عالمية رائدة في خدمات تقنية المعلومات والاستشارات وحلول الأعمال للمؤسسات والشركات الكبرى حول العالم.',
    link: 'https://www.tcs.com',
    imageSrc: '/images/companies/tata-logo.png',
    alt: 'Tata Consultancy Services Logo',
  },
  {
    id: 'wipro',
    name: 'Wipro Arabia Ltd',
    period: '2017 — 2019',
    fieldEn: 'IT Services & System Integration',
    fieldAr: 'خدمات تقنية المعلومات وتكامل الأنظمة',
    overviewEn:
      'Wipro is a prominent global technology and business process services company, delivering integrated digital solutions, systems integration, and enterprise operations support.',
    overviewAr:
      'ويبرو هي شركة عالمية رائدة في مجال تقنية المعلومات والاستشارات وتكامل الأنظمة والعمليات الرقمية للمؤسسات والشركات في المملكة والشرق الأوسط.',
    link: 'https://www.wipro.com',
    imageSrc: '/images/companies/wipro-logo.png',
    alt: 'Wipro Arabia Ltd Logo',
  },
  {
    id: 'zain-ksa',
    name: 'Zain KSA',
    period: '2015',
    fieldEn: 'Telecommunications & Wireless Networks',
    fieldAr: 'الاتصالات والشبكات اللاسلكية',
    overviewEn:
      'Zain KSA is a leading telecommunications operator in Saudi Arabia, providing innovative wireless voice, high-speed mobile broadband data, and 5G cellular network services.',
    overviewAr:
      'زين السعودية هي إحدى كبرى شركات الاتصالات في المملكة العربية السعودية، وتقدم خدمات الاتصالات اللاسلكية وشبكات الجيل الحديث والبيانات.',
    link: 'https://www.sa.zain.com',
    imageSrc: '/images/companies/zain-ksa-logo.jpeg',
    alt: 'Zain KSA Logo',
  },
  {
    id: 'zain-jordan',
    name: 'Zain Jordan',
    period: '2010 — 2011',
    fieldEn: 'Mobile Telecommunications',
    fieldAr: 'الاتصالات وشبكات الهاتف المتنقل',
    overviewEn:
      'Zain Jordan is the pioneer mobile telecommunications operator in Jordan, delivering comprehensive wireless connectivity, consumer telecom packages, and community initiatives.',
    overviewAr:
      'زين الأردن هي أول مشغل اتصالات متنقلة في المملكة الأردنية الهاشمية وتقدم خدمات الاتصال اللاسلكي والحلول الرقمية المتكاملة.',
    link: 'https://www.jo.zain.com',
    imageSrc: '/images/companies/zain-logo.png',
    alt: 'Zain Jordan Logo',
  },
]

export default function Portfolio() {
  const { t, i18n } = useTranslation()
  const isArabic = Boolean(i18n.language?.startsWith('ar'))

  const handleCompanyClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    company: Company,
  ) => {
    e.preventDefault()

    const textAlign = isArabic ? 'right' : 'left'
    const fieldText = isArabic ? company.fieldAr : company.fieldEn
    const overviewText = isArabic ? company.overviewAr : company.overviewEn
    const timelineLabel = isArabic ? 'فترة الخبرة والعمل' : 'Experience Timeline'
    const fieldLabel = isArabic ? 'المجال والقطاع' : 'Industry & Field'

    Swal.fire({
      title: `<span class="text-xl font-bold text-slate-900 dark:text-white">${company.name}</span>`,
      html: `
        <div style="padding: 4px 6px; text-align:${textAlign}; direction:${isArabic ? 'rtl' : 'ltr'};">
          <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-bottom:14px;">
            <span style="display:inline-flex; align-items:center; gap:5px; background-color:#fff7ed; color:#ea580c; border:1px solid #ffedd5; padding:4px 10px; border-radius:10px; font-size:12px; font-weight:700;">
              📅 ${timelineLabel}: ${company.period}
            </span>
            <span style="display:inline-flex; align-items:center; gap:5px; background-color:#f1f5f9; color:#475569; border:1px solid #e2e8f0; padding:4px 10px; border-radius:10px; font-size:12px; font-weight:600;">
              🏢 ${fieldLabel}: ${fieldText}
            </span>
          </div>
          <p style="font-size:13px; color:#4b5563; line-height:1.7; margin:0; text-align:${textAlign};">
            ${overviewText}
          </p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: t('page.portfolio.visit') || 'Visit Website ↗',
      cancelButtonText: t('page.portfolio.close') || 'Close',
      customClass: {
        popup: 'rounded-3xl border border-slate-200 dark:border-white/10 dark:bg-[#0f1422] p-6 shadow-2xl backdrop-blur-xl',
        title: 'text-slate-900 dark:text-white pt-2',
        confirmButton:
          'bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700 transition-all cursor-pointer',
        cancelButton:
          'bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-200 px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all cursor-pointer',
        actions: 'flex justify-center gap-3 mt-6',
      },
      buttonsStyling: false,
      allowEscapeKey: true,
      allowOutsideClick: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(company.link, '_blank', 'noopener,noreferrer')
      }
    })
  }

  return (
    <div className="flex min-h-screen w-full flex-col justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('page.Portfolio.title')}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-600 sm:text-sm dark:text-slate-300">
            {t('page.Portfolio.subtitle') ||
              'Leading enterprises and telecommunication giants I have contributed to and delivered key software solutions for.'}
          </p>
        </div>

        {/* Companies Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {COMPANIES.map((company) => (
            <div key={company.id}>
              <a
                href={company.link}
                onClick={(e) => handleCompanyClick(e, company)}
                aria-label={`View background for ${company.name}`}
                className="group relative flex h-full flex-col items-center justify-between rounded-3xl border border-slate-200/90 bg-white/85 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-xl dark:border-white/10 dark:bg-[#0f1422]/85 dark:hover:border-orange-400"
              >
                {/* Logo Container */}
                <div className="relative flex h-24 w-full items-center justify-center rounded-2xl bg-slate-50/80 p-2 sm:h-28 dark:bg-zinc-800/40">
                  <Image
                    width={180}
                    height={100}
                    className="max-h-16 w-auto max-w-[85%] object-contain filter transition-transform duration-200 group-hover:scale-105"
                    src={company.imageSrc}
                    alt={company.alt}
                    loading="lazy"
                  />
                </div>

                {/* Company Name & Indicator */}
                <div className="mt-4 w-full text-center">
                  <h3 className="line-clamp-1 text-xs font-bold text-slate-900 transition-colors group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-400 sm:text-sm">
                    {company.name}
                  </h3>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-orange-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-orange-400">
                    <span>{t('page.Portfolio.viewRole') || 'View Company'}</span>
                    <i className="fas fa-chevron-right text-[9px]" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

