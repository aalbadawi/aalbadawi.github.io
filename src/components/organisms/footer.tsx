'use client'

import type { FormEvent } from 'react'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Typewriter from 'typewriter-effect'

import { FooterWithSitemap } from '@/components/molecules/footer-sitemap'
import { typeWriteList } from '@/constants'

const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random())

export default function Footer() {
  const { t } = useTranslation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const submitContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, subject, message } = formData
    const mailtoLink = `mailto:albadawiamer5@gmail.com?subject=${encodeURIComponent(`${email} - ${subject}`)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
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
    <div
      ref={scrollContainerRef}
      className="custom-scrollbar flex min-h-screen w-full flex-col justify-between items-center overflow-y-auto lg:overflow-y-hidden px-4 pt-20 pb-2 sm:px-6 md:pt-24 lg:px-8"
    >
      {/* Typewriter & Message Form Section */}
      <div className="mx-auto w-full max-w-4xl py-2 sm:py-4">
        <div className="text-center mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-0.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            {t('footer.element.tagline') || 'Continuous Growth & Innovation'}
          </span>
          <div className="text-base sm:text-2xl md:text-3xl font-light text-slate-900 dark:text-white min-h-[35px] sm:min-h-[42px]">
            <Typewriter
              options={{
                strings: randomTypeWriteList,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        {/* Quick Message Card */}
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/85 p-5 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1422]/85 dark:shadow-none sm:p-6 md:p-7">
          <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-orange-500/10 blur-2xl dark:bg-orange-500/15" />
          
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl md:text-2xl">
              {t('page.contact.title') || 'Send Me a Message'}
            </h2>
            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
              {t('page.contact.sub-title') || 'Have a project or opportunity in mind? Let’s connect.'}
            </p>
          </div>

          <form onSubmit={submitContactForm} className="space-y-3 max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {t('page.contact.email') || 'Your Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-xs text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-white dark:placeholder-slate-500 sm:text-sm"
                  placeholder={t('page.contact.email-placeholder') || 'name@example.com'}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {t('page.contact.subject') || 'Subject'}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-xs text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-white dark:placeholder-slate-500 sm:text-sm"
                  placeholder={t('page.contact.subject-placeholder') || 'Project Inquiry'}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                {t('page.contact.your-message') || 'Message'}
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-xs text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-white dark:placeholder-slate-500 sm:text-sm"
                placeholder={t('page.contact.your-message-placeholder') || 'Tell me about your project...'}
                required
              />
            </div>

            <div className="text-center pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span>{t('page.contact.send-message') || 'Send Message'}</span>
                <i className="fas fa-paper-plane text-xs" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sitemap & Links */}
      <div className="w-full">
        <FooterWithSitemap />
      </div>
    </div>
  )
}
