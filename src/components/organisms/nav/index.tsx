import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { languagesList } from "@/util/nav-items";
import LanguageList from "./language";
import { useDarkMode } from "../../../util/dark-mode"

const Nav = (): React.JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const navParam = searchParams?.get('nav') || '0';
  const activePage = parseInt(navParam, 10) || 0;

  const navigationElements = [
    { name: "home", index: 0, icon: "fas fa-home" },
    { name: "about", index: 1, icon: "fas fa-user" },
    { name: "portfolio", index: 2, icon: "fas fa-briefcase" },
    { name: "contact", index: 3, icon: "fas fa-envelope" },
  ];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams ? searchParams.toString() : '');
      params.set(name, value);

      setIsMobileMenuOpen(false);
      return params.toString();
    },
    [searchParams],
  );

  const handlePageChange = useCallback(
    (navNumber: number) => {
      const pathname = "/";
      router.push(
        `${pathname}?${createQueryString("nav", navNumber.toString())}`,
      );
      setIsMobileMenuOpen(false);
    },
    [createQueryString, router],
  );

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/60 bg-white/85 backdrop-blur-md transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/85 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/?nav=0"
          className="group flex items-center space-x-2.5 rtl:space-x-reverse"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-pink-600 text-base font-extrabold text-white shadow-md transition-transform group-hover:scale-105">
            AB
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Amer Albadawi
            </span>
            <span className="text-[10px] font-medium text-orange-600 dark:text-orange-400">
              Senior Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center space-x-1 md:flex rtl:space-x-reverse">
          {navigationElements.map((item) => {
            const isActive = activePage === item.index;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handlePageChange(item.index)}
                className={`relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-orange-600 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-orange-400'
                }`}
              >
                <i className={`${item.icon} text-[11px]`} />
                <span>{t(`nav.element.${item.name}`)}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Theme + Language + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50/80 text-sm text-gray-700 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-gray-300 dark:hover:bg-zinc-700"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleLanguageMenu}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-gray-300 dark:hover:bg-zinc-700"
            >
              <i className="fas fa-globe text-orange-500 text-xs" />
              <span>
                {languagesList.find((lang) => lang.value === i18n.language)?.name ||
                  languagesList['0'].name}
              </span>
              <i className="fas fa-chevron-down text-[10px] text-gray-400" />
            </button>

            {/* Language Dropdown */}
            {isLanguageMenuOpen && (
              <div
                className="absolute right-0 top-11 z-50 min-w-[130px] rounded-xl border border-gray-200 bg-white p-1 shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50/80 p-2 text-sm text-gray-600 shadow-sm transition-all hover:bg-gray-100 md:hidden dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-gray-300 dark:hover:bg-zinc-700"
            aria-controls="navbar-mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="border-t border-gray-200/80 bg-white/95 px-4 py-4 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-zinc-900/95"
          id="navbar-mobile-menu"
        >
          <ul className="flex flex-col space-y-1 font-medium">
            {navigationElements.map((item) => {
              const isActive = activePage === item.index;
              return (
                <li key={item.name}>
                  <button
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-orange-600 dark:text-gray-200 dark:hover:bg-zinc-800'
                    }`}
                    type="button"
                    onClick={() => handlePageChange(item.index)}
                  >
                    <i className={`${item.icon} text-xs`} />
                    <span>{t(`nav.element.${item.name}`)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
export default Nav;
