'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { heroSlides } from '@/content/site'
import { cn } from '@/utils/format'

const AUTOPLAY_DELAY = 6000
const SWIPE_THRESHOLD = 48

function ArrowIcon({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return (
    <svg
      aria-hidden="true"
      className={cn('size-4', direction === 'left' && 'rotate-180')}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const selectSlide = useCallback((index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: changing slides intentionally restarts autoplay
  useEffect(() => {
    if (isPaused || heroSlides.length < 2) return
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, AUTOPLAY_DELAY)
    return () => window.clearTimeout(timer)
  }, [activeIndex, isPaused])

  function finishSwipe(clientX: number) {
    if (touchStartX.current === null) return
    const distance = clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(distance) < SWIPE_THRESHOLD) return
    selectSlide(activeIndex + (distance < 0 ? 1 : -1))
  }

  return (
    <section
      aria-label="CoreCraft introduction"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-[#111f4d] text-white"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchEnd={(event) => finishSwipe(event.changedTouches[0]?.clientX ?? 0)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
      }}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(61,114,252,0.35),transparent_31%),linear-gradient(112deg,#101d47_0%,#182d69_52%,#244caf_100%)]" />
        <div className="hero-grid absolute inset-y-0 right-0 w-[58%] opacity-30" />
        <div className="absolute -right-24 top-10 size-[30rem] rounded-full border border-white/10" />
        <div className="absolute -right-2 top-32 size-72 rounded-full border border-white/10" />
        <div className="absolute bottom-20 right-[14%] size-28 rotate-12 rounded-3xl border border-blue-300/20 bg-blue-300/5" />
      </div>

      <Container className="relative min-h-[39rem] py-16 sm:min-h-[42rem] sm:py-20 lg:min-h-[45rem] lg:py-24">
        <div className="relative min-h-[29rem] sm:min-h-[31rem] lg:min-h-[34rem]">
          {heroSlides.map((slide, index) => {
            const isActive = index === activeIndex
            const Heading = isActive ? 'h1' : 'div'
            return (
              <article
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${heroSlides.length}`}
                aria-roledescription="slide"
                className={cn(
                  'absolute inset-0 grid items-center transition-[opacity,transform] duration-[var(--motion-reveal)] ease-[var(--ease-emphasis)] lg:grid-cols-[minmax(0,0.62fr)_minmax(20rem,0.38fr)] lg:gap-12',
                  isActive
                    ? 'z-10 translate-x-0 opacity-100'
                    : 'pointer-events-none z-0 translate-x-8 opacity-0',
                )}
                key={slide.id}
              >
                <div className="max-w-3xl py-8">
                  <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-blue-200 sm:text-sm">
                    <span aria-hidden="true" className="h-0.5 w-10 bg-brand" />
                    {slide.eyebrow}
                  </p>
                  <Heading
                    aria-label={slide.title}
                    className="max-w-3xl text-[clamp(2.75rem,7vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-white"
                  >
                    {slide.title.split(' ').map((word, wordIndex) => {
                      const highlighted = wordIndex === 1 || (index === 1 && wordIndex === 3)
                      return (
                        <span
                          className={cn(highlighted && 'hero-highlight text-blue-300')}
                          key={`${slide.id}-${word}`}
                        >
                          {word}{' '}
                        </span>
                      )
                    })}
                  </Heading>
                  <p className="mt-7 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
                    {slide.body}
                  </p>
                  <Button
                    className="mt-9 shadow-xl shadow-black/20"
                    endIcon={<ArrowIcon />}
                    href="/contact"
                    size="large"
                  >
                    Contact Now
                  </Button>
                </div>

                <div aria-hidden="true" className="relative hidden min-h-[28rem] lg:block">
                  <div className="absolute inset-8 rounded-[3rem] border border-white/15 bg-gradient-to-br from-white/15 to-white/[0.03] shadow-2xl shadow-black/25 backdrop-blur-sm" />
                  <div className="absolute inset-x-20 bottom-20 top-24 rounded-[2rem] bg-gradient-to-br from-blue-300/25 to-brand/10 ring-1 ring-white/15" />
                  <svg
                    className="absolute inset-0 size-full text-blue-100/80"
                    fill="none"
                    viewBox="0 0 420 440"
                  >
                    <title>Decorative technology illustration</title>
                    <path d="M110 295 210 120l100 175H110Z" stroke="currentColor" strokeWidth="2" />
                    <circle
                      cx="210"
                      cy="218"
                      r="68"
                      stroke="currentColor"
                      strokeDasharray="6 10"
                      strokeWidth="2"
                    />
                    <path
                      d="M173 219h74M210 182v74"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="8"
                    />
                  </svg>
                  <div className="absolute right-2 top-16 rounded-2xl border border-white/20 bg-[#17242c]/90 px-5 py-4 shadow-xl backdrop-blur">
                    <span className="block text-2xl font-bold text-white">Digital first</span>
                    <span className="text-xs tracking-wide text-blue-200">BUILT TO SCALE</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="relative z-20 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
          <fieldset className="flex gap-2 border-0 p-0" aria-label="Choose a slide">
            {heroSlides.map((slide, index) => (
              <button
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                aria-pressed={activeIndex === index}
                className={cn(
                  'h-3 rounded-full transition-[width,background-color] duration-[var(--motion-hover)]',
                  activeIndex === index ? 'w-10 bg-brand' : 'w-3 bg-white/40 hover:bg-white/70',
                )}
                key={slide.id}
                onClick={() => selectSlide(index)}
                type="button"
              />
            ))}
          </fieldset>
          <div className="flex gap-2">
            <button
              aria-label="Previous slide"
              className="hero-control"
              onClick={() => selectSlide(activeIndex - 1)}
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              aria-label="Next slide"
              className="hero-control"
              onClick={() => selectSlide(activeIndex + 1)}
              type="button"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-10 bg-white [clip-path:polygon(0_74%,100%_0,100%_100%,0_100%)] sm:h-16"
      />
    </section>
  )
}
