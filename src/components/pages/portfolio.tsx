'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

interface Company {
  id: string
  name: string
  role: string
  period: string
  link: string
  imageSrc: string
  alt: string
  tech: string[]
  highlights: string[]
}

const Portfolio = () => {
  const { t } = useTranslation()

  const companies: Company[] = [
    {
      id: 'stc',
      name: 'STC (Saudi Telecom Company)',
      role: 'Senior Software Engineer',
      period: '2022 — Present',
      link: 'https://www.stc.com.sa',
      imageSrc: '/images/companies/stc-logo.png',
      alt: 'STC Logo',
      tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Micro-Frontends'],
      highlights: [
        'Architected and delivered high-performance web platforms and digital services for millions of telecom subscribers.',
        'Championed micro-frontends and state management optimization, enhancing load speed by over 40%.',
        'Led sprint planning and mentored engineers on TypeScript & React best practices.',
      ],
    },
    {
      id: 'wipro',
      name: 'Wipro Arabia Ltd',
      role: 'Senior Software Engineer',
      period: '2020 — 2022',
      link: 'https://www.wipro.com',
      imageSrc: '/images/companies/wipro-logo.png',
      alt: 'Wipro Arabia Ltd Logo',
      tech: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'CI/CD'],
      highlights: [
        'Developed robust enterprise dashboards and automated customer operations for telecom clients.',
        'Engineered responsive, accessible front-end interfaces aligned with strict design systems.',
      ],
    },
    {
      id: 'tata',
      name: 'Tata Consultancy Services',
      role: 'Software Engineer / Frontend Lead',
      period: '2018 — 2020',
      link: 'https://www.tcs.com',
      imageSrc: '/images/companies/tata-logo.png',
      alt: 'Tata Consultancy Services Logo',
      tech: ['React', 'JavaScript (ES6+)', 'Bootstrap 5', 'Jest', 'REST APIs'],
      highlights: [
        'Spearheaded modern SPA frontend migrations and component library standardization.',
        'Integrated RESTful microservices with automated testing pipelines.',
      ],
    },
    {
      id: 'zain-ksa',
      name: 'Zain KSA',
      role: 'Trainee Drive Test Engineer',
      period: '2017 — 2018',
      link: 'https://www.sa.zain.com',
      imageSrc: '/images/companies/zain-ksa-logo.jpeg',
      alt: 'Zain KSA Logo',
      tech: ['Drive Testing', 'RF Field Measurements', 'Cellular Networks (2G/3G/4G)', 'KPI Analysis', 'QoS Optimization'],
      highlights: [
        'Conducted cellular network drive tests and RF field measurements across Riyadh clusters to assess coverage, handover, and signal quality.',
        'Logged and analyzed cellular KPIs (RSRP, RSRQ, SINR, Call Drops) using specialized test equipment and analysis software.',
        'Supported RF and network optimization teams in identifying interference issues and optimizing cellular service quality.',
      ],
    },
    {
      id: 'zain-jordan',
      name: 'Zain Jordan',
      role: 'Direct Sales & Youth Segment Representative',
      period: '2015 — 2017',
      link: 'https://www.jo.zain.com',
      imageSrc: '/images/companies/zain-logo.png',
      alt: 'Zain Jordan Logo',
      tech: ['Youth Telecom Packages', 'Direct Sales', 'University Campaigns', 'Customer Acquisition'],
      highlights: [
        'Spearheaded direct sales campaigns across Jordanian universities targeting the youth demographic with specialized student packages.',
        'Conducted on-campus promotional drives and student community outreach to drive youth package adoption.',
        'Achieved high customer acquisition rates through personalized engagement and understanding student telecom requirements.',
      ],
    },
  ]

  const handleCompanyClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    company: Company
  ) => {
    e.preventDefault()

    const techChipsHtml = company.tech
      .map(
        (tech) =>
          `<span style="display:inline-block;background-color:#fff7ed;color:#c2410c;border:1px solid #ffedd5;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:600;margin:2px;">${tech}</span>`
      )
      .join('')

    const highlightsHtml = company.highlights
      .map(
        (h) =>
          `<li style="text-align:left;font-size:12px;color:#4b5563;margin-bottom:6px;line-height:1.5;">${h}</li>`
      )
      .join('')

    Swal.fire({
      title: `<span class="text-xl font-bold text-gray-900">${company.name}</span>`,
      html: `
        <div style="padding: 4px 8px;">
          <p style="font-size:13px;font-weight:600;color:#ea580c;margin-bottom:4px;">${company.role} <span style="font-weight:400;color:#9ca3af;">(${company.period})</span></p>
          <div style="margin:12px 0 16px 0;">
            ${techChipsHtml}
          </div>
          <ul style="margin:0;padding-left:18px;list-style-type:disc;">
            ${highlightsHtml}
          </ul>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Visit Website ↗',
      cancelButtonText: 'Close',
      customClass: {
        popup: 'rounded-2xl',
        confirmButton:
          'bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2.5 rounded-xl font-medium shadow hover:shadow-lg transition-all',
        cancelButton:
          'bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all',
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
    <div className="flex min-h-screen w-full flex-col justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="inline-block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            {t('page.Portfolio.title')}
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
          <p className="mx-auto mt-3 max-w-2xl text-xs text-gray-500 sm:text-sm dark:text-gray-400">
            {t('page.Portfolio.subtitle') ||
              'Leading enterprises and telecommunication giants I have contributed to and delivered key software solutions for.'}
          </p>
        </div>

        {/* Companies Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <a
                href={company.link}
                onClick={(e) => handleCompanyClick(e, company)}
                aria-label={`View contributions for ${company.name}`}
                className="relative flex h-full flex-col items-center justify-between rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-800/80 dark:hover:border-orange-500/50"
              >
                {/* Gradient Accent on Hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-orange-50/80 via-pink-50/40 to-purple-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-orange-950/20 dark:via-pink-950/10 dark:to-purple-950/20" />

                {/* Logo Container with Fixed Aspect Ratio & Contain */}
                <div className="relative flex h-28 w-full items-center justify-center p-2 sm:h-32">
                  <Image
                    width={180}
                    height={100}
                    className="max-h-20 w-auto max-w-[85%] object-contain filter transition-all duration-300 group-hover:scale-105"
                    src={company.imageSrc}
                    alt={company.alt}
                    loading="lazy"
                  />
                </div>

                {/* Company Name & Details Indicator */}
                <div className="mt-3 w-full text-center">
                  <h3 className="line-clamp-1 text-xs font-semibold text-gray-800 transition-colors group-hover:text-orange-600 dark:text-gray-200 dark:group-hover:text-orange-400 sm:text-sm">
                    {company.name}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-orange-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-orange-400">
                    <span>View Role</span>
                    <i className="fas fa-info-circle text-[10px]" />
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

export default Portfolio
