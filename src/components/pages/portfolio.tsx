import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t } = useTranslation()

  const companies = [
    {
      name: 'STC',
      link: 'https://www.stc.com',
      imageSrc: '/images/companies/stc-logo.png',
      alt: 'STC',
    },
    {
      name: 'Tata Consultancy Services',
      link: 'https://www.tcs.com',
      imageSrc: '/images/companies/tata-logo.png',
      alt: 'Tata Consultancy Services',
    },
    {
      name: 'Wipro Arabia Ltd',
      link: 'https://www.wipro.com',
      imageSrc: '/images/companies/wipro-logo.png',
      alt: 'Wipro Arabia Ltd',
    },
    {
      name: 'Zain KSA',
      link: 'https://www.sa.zain.com',
      imageSrc: '/images/companies/zain-ksa-logo.jpeg',
      alt: 'Zain KSA',
    },
    {
      name: 'Zain Jordan',
      link: 'https://www.jo.zain.com',
      imageSrc: '/images/companies/zain-logo.png',
      alt: 'Zain Jordan',
    },
    // Add more companies here as needed
  ]

  return (
    <div className="flex h-full w-screen flex-col bg-zinc-50 pt-24">
      <div className="m-2 flex w-full justify-center">
        <h4 className="z-10 animate-title bg-white bg-clip-text py-4 font-display text-2xl text-zinc-700 duration-1000 sm:text-2xl md:text-4xl">
          {t('page.Portfolio.title')}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8">
        {companies.map((company, index) => (
          <div key={index} className="p-4">
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 z-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image
                width={300}
                height={300}
                className="h-80 w-80 object-contain justify-self-center transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:translate-y-1"
                src={company.imageSrc}
                alt={company.alt}
                priority
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
