'use client'

import './card.css'

import Image from 'next/image'
import React, { useState } from 'react'

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
  const email = 'albadawiamer5@gmail.com'

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="card-body flex w-full items-center justify-center p-2 sm:p-4">
      <div className="card-container relative w-full max-w-md rounded-2xl border border-gray-200 bg-white/95 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl dark:border-gray-700/80 dark:bg-gray-800/95">
        {/* Availability Status Badge */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </span>
        </div>

        {/* Profile Image with Gradient Ring */}
        <div className="relative mx-auto my-5 flex h-36 w-36 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 opacity-75 blur-sm transition-opacity duration-300 hover:opacity-100" />
          <Image
            width={140}
            height={140}
            className="relative h-32 w-32 rounded-full border-2 border-white object-cover shadow-inner dark:border-gray-900"
            src={profilePic || '/images/amer-pic.png'}
            alt={name}
            priority
          />
        </div>

        {/* Card Content */}
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            {name}
          </h2>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Senior Software Engineer
          </p>

          {/* Brief Description */}
          <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
            {brief}
          </p>

          {/* Quick Connect Actions */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-gray-700 dark:bg-gray-700/60 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-orange-400"
              title="Click to copy email address"
            >
              <i
                className={`fas ${copied ? 'fa-check text-green-500' : 'fa-copy'}`}
              />
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/albadawiamer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-700/60 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
              aria-label="Amer Albadawi LinkedIn"
            >
              <i className="fab fa-linkedin-in text-sm" />
            </a>

            <a
              href="https://github.com/aalbadawi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-700/60 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-purple-400"
              aria-label="Amer Albadawi GitHub"
            >
              <i className="fab fa-github text-sm" />
            </a>
          </div>

          {lastWord && (
            <p className="mt-3 text-xs font-medium text-orange-400">
              {lastWord}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

