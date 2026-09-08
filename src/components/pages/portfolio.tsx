'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

interface Company {
  id: string
  name: string
  link: string
  imageSrc: string
  alt: string
}

const Portfolio = () => {
  const { t } = useTranslation()

  const companies: Company[] = [
    {
      id: 'stc',
      name: 'STC',
      link: 'https://www.stc.com',
      imageSrc: '/images/companies/stc-logo.png',
      alt: 'STC Logo',
    },
    {
      id: 'tata',
      name: 'Tata Consultancy Services',
      link: 'https://www.tcs.com',
      imageSrc: '/images/companies/tata-logo.png',
      alt: 'Tata Consultancy Services Logo',
    },
    {
      id: 'wipro',
      name: 'Wipro Arabia Ltd',
      link: 'https://www.wipro.com',
      imageSrc: '/images/companies/wipro-logo.png',
      alt: 'Wipro Arabia Ltd Logo',
    },
    {
      id: 'zain-ksa',
      name: 'Zain KSA',
      link: 'https://www.sa.zain.com',
      imageSrc: '/images/companies/zain-ksa-logo.jpeg',
      alt: 'Zain KSA Logo',
    },
    {
      id: 'zain-jordan',
      name: 'Zain Jordan',
      link: 'https://www.jo.zain.com',
      imageSrc: '/images/companies/zain-logo.png',
      alt: 'Zain Jordan Logo',
    },
  ]

  const handleCompanyClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    company: Company
  ) => {
    e.preventDefault()

    Swal.fire({
      title: `<span class="text-2xl font-bold">${company.name}</span>`,
      html: `
        <div class="text-gray-600 space-y-3">
          <p class="text-sm">You will be redirected to:</p>
          <p class="text-orange-600 font-semibold text-base break-all">${company.link}</p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continue',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'rounded-2xl',
        confirmButton:
          'bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg',
        cancelButton:
          'bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200',
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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20 md:pt-28">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="inline-block animate-title bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            {t('page.Portfolio.title')}
          </h4>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-purple-500"></div>
        </div>

        {/* Companies Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={company.link}
                onClick={(e) => handleCompanyClick(e, company)}
                aria-label={`Visit ${company.name} website`}
                className="relative block overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Corner Accent */}
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />

                {/* Logo Container */}
                <div className="relative flex h-64 items-center justify-center">
                  <Image
                    width={280}
                    height={280}
                    className="h-auto w-full max-w-xs object-contain transition-transform duration-500 group-hover:scale-110"
                    src={company.imageSrc}
                    alt={company.alt}
                    loading="lazy"
                  />
                </div>

                {/* Company Name */}
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-orange-600">
                    {company.name}
                  </h3>
                  <div className="mx-auto mt-2 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-purple-500 transition-all duration-300 group-hover:w-16" />
                </div>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-gray-600">
                    Visit Website
                  </span>
                  <svg
                    className="h-4 w-4 text-orange-600 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
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
