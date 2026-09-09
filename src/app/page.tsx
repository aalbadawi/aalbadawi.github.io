'use client'

import { useSearchParams } from 'next/navigation'
import type { RefObject } from 'react'
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import ReactPageScroller from 'react-page-scroller'

import Footer from '../components/organisms/footer'
import About from '../components/pages/about'
import HomePage from '../components/pages/home-page'
import Portfolio from '../components/pages/portfolio'

function AppContent(): React.JSX.Element {
  const searchParams = useSearchParams()
  const [customPageNumber, setCustomPageNumber] = useState<number | undefined>(undefined)

  const bannerRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  const scrollIntoView = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  const getCustomPageNumber = useCallback(() => {
    const navNumber: string = searchParams?.get('nav') || '0'
    const parsed = parseInt(navNumber, 10)
    return isNaN(parsed) ? 0 : Math.min(Math.max(parsed, 0), 3)
  }, [searchParams])

  useEffect(() => {
    const pageNumber = getCustomPageNumber()
    setCustomPageNumber(pageNumber)

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
        scrollIntoView(footerRef)
        break
      default:
        break
    }
  }, [searchParams, getCustomPageNumber])

  useEffect(() => {
    const handleNavEvent = (e: Event) => {
      const customEvent = e as CustomEvent<number>
      if (typeof customEvent.detail === 'number') {
        const page = Math.min(Math.max(customEvent.detail, 0), 3)
        setCustomPageNumber(page)
      }
    }

    window.addEventListener('pageNavClicked', handleNavEvent)
    return () => {
      window.removeEventListener('pageNavClicked', handleNavEvent)
    }
  }, [])

  const handlePageChange = (page: number) => {
    // Clear customPageNumber so natural scroll gestures are handled smoothly without fighting scroller state
    setCustomPageNumber(undefined)
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `/?nav=${page}`)
      window.dispatchEvent(
        new CustomEvent('pageScrolled', { detail: page })
      )
    }
  }

  return (
    <>
      <div className="flex w-full max-w-full overflow-x-hidden flex-col lg:hidden">
        <div ref={bannerRef} className="min-h-screen w-full">
          <HomePage />
        </div>
        <div ref={aboutRef} className="w-full">
          <About />
        </div>
        <div ref={portfolioRef} id="portfolio-main" className="min-h-screen w-full">
          <Portfolio />
        </div>
        <div
          id="footer-main"
          ref={footerRef}
          className="w-full bg-transparent"
        >
          <Footer />
        </div>
      </div>
      <div className="hidden w-screen lg:flex">
        <ReactPageScroller
          renderAllPagesOnFirstRender={true}
          animationTimer={750}
          animationTimerBuffer={350}
          customPageNumber={customPageNumber}
          pageOnChange={handlePageChange}
        >
          <HomePage />
          <About />
          <Portfolio />
          <Footer />
        </ReactPageScroller>
      </div>
    </>
  )
}

export default function App(): React.JSX.Element {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-[#0d1117]" />}>
      <AppContent />
    </Suspense>
  )
}


