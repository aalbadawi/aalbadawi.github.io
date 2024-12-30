import React from 'react'
import { useTranslation } from 'react-i18next'

import { aboutMe } from '@/constants'

import Card from '../molecules/card/card'

export default function About() {
  const { t } = useTranslation()

  // Function to download the CV
  const downloadCV = () => {
    const cvUrl = '/my_resume.pdf' // URL of the CV file in the public folder

    // Create an anchor element
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'AmerAlbadawi_CV.pdf' // The name that will appear when the user downloads the file

    // Programmatically trigger the click event to download the file
    link.click()
  }

  return (
    <div className="flex flex-col h-auto min-h-screen w-full md:flex-row">
      {/* Left Section - Card */}
      <div className="mt-5 flex flex-col items-center justify-center w-full md:w-1/3 px-4">
        <Card
          {...aboutMe}
          name={t('component.element.name')}
          brief={t('page.about.brief')}
        />
      </div>

      {/* Right Section - About Content */}
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700">
          <div
            className="flex flex-col p-6 bg-white rounded-lg overflow-y-auto h-[50vh] md:h-[70vh] lg:h-auto"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            {/* Title and Description */}
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
              {t('page.about.title')}
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-center">
              {t('page.about.paragraph')}
            </p>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-gray-900 dark:text-white">
              <div className="flex flex-col items-center">
                <dt className="mb-2 text-3xl font-extrabold text-red-600">
                  20K+
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 text-center">
                  {t('page.about.work-experience')}
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="mb-2 text-3xl font-extrabold text-red-600">
                  5+
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 text-center">
                  {t('page.about.projects-contributed')}
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="mb-2 text-3xl font-extrabold text-red-600">
                  10+
                </dt>
                <dd className="text-gray-500 dark:text-gray-400 text-center">
                  {t('page.about.tech-frameworks')}
                </dd>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-10 text-right">
              <button
                onClick={downloadCV}
                type="button"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-200 group-hover:from-red-500 group-hover:to-purple-600 dark:text-white dark:focus:ring-orange-800"
              >
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 flex items-center">
                  {/* Font Awesome Icon */}
                  <i className="fas fa-file-pdf mr-2 text-lg"></i>
                  {t('page.about.downloadCV')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
