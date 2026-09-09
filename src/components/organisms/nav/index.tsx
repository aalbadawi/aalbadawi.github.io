import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { languagesList } from '@/util/nav-items'
import { useDarkMode } from '@/util/dark-mode'
import LanguageList from './language'
import ShortcutsModal from '../../molecules/shortcuts-modal'

const Nav = (): React.JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const router = useRouter()
  const { t, i18n } = useTranslation()

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false)

  const searchParams = useSearchParams()
  const navParam = searchParams?.get('nav') || '0'
  const [activePage, setActivePage] = useState<number>(
    parseInt(navParam, 10) || 0,
  )

  useEffect(() => {
    const pageFromUrl = parseInt(searchParams?.get('nav') || '0', 10) || 0
    setActivePage(pageFromUrl)
  }, [searchParams])

  useEffect(() => {
    const handleNavEvent = (e: Event) => {
      const customEvent = e as CustomEvent<number>
      if (typeof customEvent.detail === 'number') {
        setActivePage(customEvent.detail)
      }
    }

    window.addEventListener('pageScrolled', handleNavEvent)
    window.addEventListener('pageNavClicked', handleNavEvent)
    return () => {
      window.removeEventListener('pageScrolled', handleNavEvent)
      window.removeEventListener('pageNavClicked', handleNavEvent)
    }
  }, [])

  const navigationElements = [
    { name: 'home', index: 0, icon: 'fas fa-home', keyHint: '1' },
    { name: 'about', index: 1, icon: 'fas fa-user', keyHint: '2' },
    { name: 'portfolio', index: 2, icon: 'fas fa-briefcase', keyHint: '3' },
    { name: 'contact', index: 3, icon: 'fas fa-envelope', keyHint: '4' },
  ]

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(
        searchParams ? searchParams.toString() : '',
      )
      params.set(name, value)

      setIsMobileMenuOpen(false)
      return params.toString()
    },
    [searchParams],
  )

  const handlePageChange = useCallback(
    (navNumber: number) => {
      const targetPage = Math.min(Math.max(navNumber, 0), 3)
      setActivePage(targetPage)
      const pathname = '/'
      router.push(
        `${pathname}?${createQueryString('nav', targetPage.toString())}`,
      )
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('pageNavClicked', { detail: targetPage }),
        )
      }
      setIsMobileMenuOpen(false)
    },
    [createQueryString, router],
  )

  const toggleLanguage = useCallback(() => {
    const currentLang = i18n.language || 'en'
    const nextLang = currentLang.startsWith('ar') ? 'en' : 'ar'
    i18n.changeLanguage(nextLang)
    setIsLanguageMenuOpen(false)
  }, [i18n])

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement
      const isInput =
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          (activeEl as HTMLElement).isContentEditable)

      // Open / Close Shortcuts Modal with ⌘K, Ctrl+K, or ?
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsShortcutsOpen((prev) => !prev)
        return
      }

      if (e.key === '?' && !isInput) {
        e.preventDefault()
        setIsShortcutsOpen((prev) => !prev)
        return
      }

      if (isInput) return

      switch (e.key.toLowerCase()) {
        case '1':
        case 'h':
          e.preventDefault()
          handlePageChange(0)
          break
        case '2':
        case 'a':
          e.preventDefault()
          handlePageChange(1)
          break
        case '3':
        case 'p':
          e.preventDefault()
          handlePageChange(2)
          break
        case '4':
        case 'c':
          e.preventDefault()
          handlePageChange(3)
          break
        case 'j':
          e.preventDefault()
          handlePageChange(activePage + 1)
          break
        case 'k':
          e.preventDefault()
          handlePageChange(activePage - 1)
          break
        case 'd':
          e.preventDefault()
          toggleDarkMode()
          break
        case 't':
        case 'l':
          e.preventDefault()
          toggleLanguage()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePage, handlePageChange, toggleDarkMode, toggleLanguage])

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#080b12]/85 dark:shadow-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            href="/?nav=0"
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(0)
            }}
            className="group flex items-center space-x-2.5 rtl:space-x-reverse"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-transform duration-200 group-hover:scale-105">
              <i className="text-orange-300 fas fa-code" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center space-x-1.5 md:flex rtl:space-x-reverse">
            {navigationElements.map((item) => {
              const isActive = activePage === item.index
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handlePageChange(item.index)}
                  className={`group relative inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500/10 font-semibold text-orange-600 dark:bg-orange-500/15 dark:text-orange-400'
                      : 'text-slate-600 hover:bg-slate-100/70 hover:text-orange-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-orange-400'
                  }`}
                >
                  <i className={`${item.icon} text-[11px]`} />
                  <span>{t(`nav.element.${item.name}`)}</span>
                  <span className="hidden group-hover:inline-block rounded border border-slate-200 bg-white/80 px-1 py-0.2 text-[9px] font-mono text-slate-400 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400">
                    {item.keyHint}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-orange-500" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right Controls: Shortcuts + Theme + Language + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Keyboard Shortcuts Trigger Button */}
            <button
              onClick={() => setIsShortcutsOpen(true)}
              type="button"
              aria-label={t('shortcuts.help') || 'Show Keyboard Shortcuts'}
              title={`${t('shortcuts.title') || 'Keyboard Shortcuts'} (⌘K or ?)`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-100/80 px-2.5 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-orange-400 hover:text-orange-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              <i className="fas fa-keyboard text-xs text-orange-500 dark:text-orange-400" />
              <kbd className="hidden md:inline-block px-1.5 py-0.5 rounded border border-slate-300 bg-white font-mono text-[10px] font-bold text-slate-700 shadow-xs dark:border-slate-700 dark:bg-slate-900 dark:text-orange-400">
                ⌘K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              type="button"
              aria-label="Toggle theme (D)"
              title="Toggle theme (D)"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 text-xs text-slate-700 backdrop-blur-sm transition-all hover:border-orange-400 hover:text-orange-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={toggleLanguageMenu}
                aria-label="Select Language (T)"
                title="Select Language (T)"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-100/80 px-2.5 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-orange-400 hover:text-orange-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
              >
                {/* <i className="fas fa-globe text-orange-500 text-xs dark:text-orange-400" /> */}
                <span>
                  {languagesList.find((lang) =>
                    i18n.language?.startsWith(lang.value),
                  )?.name || languagesList[0].name}
                </span>
                <i className="fas fa-chevron-down text-[9px] opacity-75" />
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div
                  className="absolute right-0 top-10 z-50 min-w-[130px] rounded-xl border border-slate-200 bg-white/95 p-1 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/95"
                  id="language-dropdown-menu"
                >
                  <LanguageList
                    setIsLanguageMenuOpen={setIsLanguageMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                  />
                </div>
              )}
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 p-1.5 text-xs text-slate-700 backdrop-blur-sm transition-all hover:bg-slate-200/80 dark:border-white/10 dark:bg-zinc-800/80 dark:text-slate-200 dark:hover:bg-white/10 md:hidden"
              aria-controls="navbar-mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <i
                className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xs`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div
            className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-lg dark:border-white/10 dark:bg-zinc-900/95 md:hidden"
            id="navbar-mobile-menu"
          >
            <ul className="flex flex-col space-y-1 font-medium">
              {navigationElements.map((item) => {
                const isActive = activePage === item.index
                return (
                  <li key={item.name}>
                    <button
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-orange-500 text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
                      }`}
                      type="button"
                      onClick={() => handlePageChange(item.index)}
                    >
                      <i className={`${item.icon} text-xs`} />
                      <span>{t(`nav.element.${item.name}`)}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </header>

      {/* Keyboard Shortcuts Modal */}
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        onNavigate={handlePageChange}
        onToggleTheme={toggleDarkMode}
        onToggleLanguage={toggleLanguage}
      />
    </>
  )
}
export default Nav
