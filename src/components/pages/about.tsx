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
    <div className="flex h-screen w-screen flex-row">
      <div className="mt-5 flex h-full w-full flex-col items-center justify-center self-center md:w-2/4">
        <Card
          flagUrl={''}
          {...aboutMe}
          name={t('component.element.name')}
          brief={t('page.about.brief')}
        />
      </div>
      <div className="hidden w-full flex-col items-center justify-center md:flex">
        <div className="w-[95%] rounded-lg border border-gray-200 bg-zinc-100 shadow dark:border-gray-700 dark:bg-gray-800">
          <div
            className="flex flex-col overflow-scroll rounded-lg bg-zinc-100 p-4 dark:bg-gray-800"
            id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-10">
              {t('page.about.title')}
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400 mt-10 text-ellipsis">
              {t('page.about.paragraph')}
            </p>
            <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-2 text-gray-900 sm:grid-cols-3 sm:p-8 xl:grid-cols-6 dark:text-white">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-red-600">
                  20K+
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {t('page.about.work-experience')}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-red-600">
                  5+
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {t('page.about.projects-contributed')}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold text-red-600">
                  10+
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  {t('page.about.tech-frameworks')}
                </dd>
              </div>
            </dl>
            <dl className="max-w-screen-xl grid-cols-2 gap-8 p-2 text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
              <button
                onClick={downloadCV}
                type="submit"
                className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-200 group-hover:from-red-500 group-hover:to-purple-600 dark:text-white dark:focus:ring-orange-800"
              >
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  Download My CV
                </span>
              </button>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
