'use client'

import { useSearchParams } from 'next/navigation'
import type { RefObject } from 'react'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import ReactPageScroller from 'react-page-scroller'

import Footer from '../components/organisms/footer'
import About from '../components/pages/about'
import Contact from '../components/pages/contact'
import HomePage from '../components/pages/home-page'
import Portfolio from '../components/pages/portfolio'

export default function App(): React.JSX.Element {
  const searchParams = useSearchParams()
  const [currentScroll, setCurrentScroll] = useState<number>(0)

  const bannerRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollIntoView = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  const getCustomPageNumber = useCallback(() => {
    const navNumber: string = searchParams?.get('nav') || '0'
    return Number(navNumber > '2' ? 4 : navNumber) || 0
  }, [searchParams]) // Memoizing based on searchParams

  useEffect(() => {
    const pageNumber = getCustomPageNumber()
    setCurrentScroll(pageNumber)

    const navNumber = searchParams?.get('nav')

    switch (navNumber) {
      case '0':
        scrollIntoView(bannerRef)
        break
      case '1':
        scrollIntoView(aboutRef)
        break
      case '2':
        scrollIntoView(portfolioRef)
        break
      case '3':
        scrollIntoView(contactRef)
        break
      default:
        break
    }
  }, [searchParams, getCustomPageNumber]) // Adding getCustomPageNumber to the dependency array

  return (
    <>
      <div className="flex w-screen flex-col lg:hidden">
        <div ref={bannerRef} className="h-screen w-screen">
          <HomePage />
        </div>
        <div ref={aboutRef} className="h-screen w-screen">
          <About />
        </div>

        <div ref={portfolioRef} id="portfolio-main" className="h-full w-screen">
          <Portfolio />
        </div>
        <div ref={contactRef} id="contact-main" className="h-full w-screen">
          <Contact />
        </div>

        <div
          id="footer-main"
          className="h-screen w-screen bg-white dark:bg-zinc-800 sm:bg-transparent"
        >
          <Footer />
        </div>
      </div>
      {/* React Page Scroller Container */}
      <div className="hidden w-screen lg:flex">
        <ReactPageScroller
          renderAllPagesOnFirstRender={false}
          customPageNumber={currentScroll}
        >
          <HomePage />
          <About />
          <Portfolio />
          {/* <PortfolioSecondPage /> */}
          <Contact />
          <Footer />
        </ReactPageScroller>
      </div>
    </>
  )
}
