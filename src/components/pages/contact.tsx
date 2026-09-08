'use client'

import { type FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const submitContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, subject, message } = formData

    // Create mailto link with properly encoded parameters
    const mailtoLink = `mailto:badawii.ab@gmail.com?subject=${encodeURIComponent(`${email} - ${subject}`)}&body=${encodeURIComponent(message)}`
    
    // Open mailto link
    window.location.href = mailtoLink

    // Reset form
    setFormData({
      email: '',
      subject: '',
      message: '',
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <div className="h-full w-screen overflow-scroll bg-white pt-24 dark:bg-gray-900">
      <h1 className="sr-only">Amer Albadawi - Contact Page</h1>
      <section className="h-full w-full bg-white dark:bg-gray-900">
        <div className="px-4 pb-8 sm:px-8 md:px-[15%] lg:px-[20%]">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t('page.contact.title')}
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-white">
            {t('page.contact.sub-title')}
          </p>
          <form onSubmit={submitContactForm} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t('page.contact.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder={t('page.contact.email-placeholder')}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t('page.contact.subject')}
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder={t('page.contact.subject-placeholder')}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t('page.contact.your-message')}
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder={t('page.contact.your-message-placeholder')}
              />
            </div>
            <button
              type="submit"
              className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-200 group-hover:from-red-500 group-hover:to-purple-600 dark:text-white dark:focus:ring-orange-800"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                {t('page.contact.send-message')}
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
