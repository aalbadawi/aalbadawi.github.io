import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

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
    <div className="flex h-full w-screen flex-col bg-gray-50 pt-24">
      <div className="m-2 flex w-full justify-center">
        <h4 className="z-10 animate-title bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-indigo-600 hover:from-indigo-600 hover:to-orange-600 py-2 text-2xl duration-1000 sm:text-2xl md:text-4xl font-sans font-medium hover:underline underline-offset-8">
          {t('page.Portfolio.title')}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 divide-x-4">
        {companies.map((company, index) => (
          <div key={index} className="p-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault() // Prevent default behavior
                Swal.fire({
                  title: `You will be redirected to ${company.name} <p class="text-blue-600">${company.link}</p>`,
                  text: "Do you want to continue?",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonText: "Yes, take me there!",
                  cancelButtonText: "Cancel",
                  customClass: {
                    icon: "text-orange-600", // Apply custom color using Tailwind CSS
                    confirmButton: "bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700",
                    cancelButton: "bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500",
                    actions: "flex justify-between gap-4", // Add spacing between buttons
                  },
                  buttonsStyling: false, // Ensure custom classes are applied
                  allowEscapeKey: false, // Prevent closing with Esc key
                  allowOutsideClick: false, // Prevent clicking outside to close
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.open(company.link, "_blank", "noopener,noreferrer");
                  }
                });
              }}
              
              className="group relative block overflow-hidden rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
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
