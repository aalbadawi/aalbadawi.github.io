'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

interface ShortcutsModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigate?: (page: number) => void
  onToggleTheme?: () => void
  onToggleLanguage?: () => void
}

export default function ShortcutsModal({
  isOpen,
  onClose,
  onNavigate,
  onToggleTheme,
  onToggleLanguage,
}: ShortcutsModalProps) {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !mounted || typeof document === 'undefined') return null

  const navigationShortcuts = [
    {
      key: '1 / H',
      label: t('shortcuts.home') || 'Go to Home',
      onClick: onNavigate ? () => { onNavigate(0); onClose() } : undefined,
    },
    {
      key: '2 / A',
      label: t('shortcuts.about') || 'Go to About',
      onClick: onNavigate ? () => { onNavigate(1); onClose() } : undefined,
    },
    {
      key: '3 / P',
      label: t('shortcuts.portfolio') || 'Go to Portfolio',
      onClick: onNavigate ? () => { onNavigate(2); onClose() } : undefined,
    },
    {
      key: '4 / C',
      label: t('shortcuts.contact') || 'Go to Contact',
      onClick: onNavigate ? () => { onNavigate(3); onClose() } : undefined,
    },
    { key: '↓ / J', label: t('shortcuts.nextSection') || 'Next Section' },
    { key: '↑ / K', label: t('shortcuts.prevSection') || 'Previous Section' },
  ]

  const actionShortcuts = [
    {
      key: 'D',
      label: t('shortcuts.darkMode') || 'Toggle Dark / Light Theme',
      onClick: onToggleTheme ? () => onToggleTheme() : undefined,
    },
    {
      key: 'T',
      label: t('shortcuts.language') || 'Toggle Language (EN / AR)',
      onClick: onToggleLanguage ? () => onToggleLanguage() : undefined,
    },
    {
      key: '? / ⌘K',
      label: t('shortcuts.help') || 'Show Keyboard Shortcuts',
    },
    {
      key: 'Esc',
      label: t('shortcuts.close') || 'Close',
      onClick: onClose,
    },
  ]

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-modal-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto custom-scrollbar rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1422]/95 dark:shadow-2xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
              <i className="fas fa-keyboard text-lg" />
            </div>
            <div>
              <h2
                id="shortcuts-modal-title"
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white"
              >
                {t('shortcuts.title') || 'Keyboard Shortcuts'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('shortcuts.subtitle') ||
                  'Navigate fast and smoothly using your keyboard'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 text-xs text-slate-600 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Close shortcuts dialog"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {/* Content Columns */}
        <div className="mt-5 space-y-5">
          {/* Navigation Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2.5">
              {t('shortcuts.navigation') || 'Navigation'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navigationShortcuts.map((item) => {
                const isClickable = Boolean(item.onClick)
                const Component = isClickable ? 'button' : 'div'
                return (
                  <Component
                    key={item.key}
                    type={isClickable ? 'button' : undefined}
                    onClick={item.onClick}
                    className={`flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50/60 px-3 py-2 text-xs text-start transition-all dark:border-white/5 dark:bg-zinc-800/40 ${
                      isClickable
                        ? 'cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 dark:hover:border-orange-500/40 dark:hover:bg-zinc-800/80'
                        : ''
                    }`}
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {item.label}
                    </span>
                    <kbd className="inline-flex items-center justify-center min-w-[28px] px-1.5 py-0.5 rounded-lg border border-slate-300 bg-white font-mono text-[11px] font-bold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-orange-400">
                      {item.key}
                    </kbd>
                  </Component>
                )
              })}
            </div>
          </div>

          {/* Actions Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2.5">
              {t('shortcuts.actions') || 'Actions & Controls'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {actionShortcuts.map((item) => {
                const isClickable = Boolean(item.onClick)
                const Component = isClickable ? 'button' : 'div'
                return (
                  <Component
                    key={item.key}
                    type={isClickable ? 'button' : undefined}
                    onClick={item.onClick}
                    className={`flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50/60 px-3 py-2 text-xs text-start transition-all dark:border-white/5 dark:bg-zinc-800/40 ${
                      isClickable
                        ? 'cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 dark:hover:border-orange-500/40 dark:hover:bg-zinc-800/80'
                        : ''
                    }`}
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {item.label}
                    </span>
                    <kbd className="inline-flex items-center justify-center min-w-[28px] px-1.5 py-0.5 rounded-lg border border-slate-300 bg-white font-mono text-[11px] font-bold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-orange-400">
                      {item.key}
                    </kbd>
                  </Component>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 text-center">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {t('shortcuts.dismiss') || 'Press Esc or click outside to dismiss.'}
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

