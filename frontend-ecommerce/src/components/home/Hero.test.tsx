import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import Hero from './Hero'

describe('Hero', () => {
  afterEach(() => vi.useRealTimers())

  it('renders verified content and keeps inactive slides inaccessible', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Your Digital Growth Partner' }),
    ).toBeVisible()
    expect(document.querySelector('[aria-label="2 of 2"]')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByRole('link', { name: 'Contact Now' })).toHaveAttribute('href', '/contact')
  })

  it('supports arrow and pagination navigation', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(document.querySelector('[aria-label="2 of 2"]')).toHaveAttribute('aria-hidden', 'false')
    await user.click(screen.getByRole('button', { name: /Show slide 1:/ }))
    expect(document.querySelector('[aria-label="1 of 2"]')).toHaveAttribute('aria-hidden', 'false')
  })

  it('supports horizontal swipe gestures', () => {
    render(<Hero />)
    const carousel = screen.getByRole('region', { name: 'CoreCraft introduction' })
    fireEvent.touchStart(carousel, { touches: [{ clientX: 180 }] })
    fireEvent.touchEnd(carousel, { changedTouches: [{ clientX: 80 }] })
    expect(document.querySelector('[aria-label="2 of 2"]')).toHaveAttribute('aria-hidden', 'false')
  })

  it('autoplays after six seconds and pauses while hovered', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const carousel = screen.getByRole('region', { name: 'CoreCraft introduction' })

    fireEvent.mouseEnter(carousel)
    act(() => vi.advanceTimersByTime(6000))
    expect(document.querySelector('[aria-label="1 of 2"]')).toHaveAttribute('aria-hidden', 'false')

    fireEvent.mouseLeave(carousel)
    act(() => vi.advanceTimersByTime(6000))
    expect(document.querySelector('[aria-label="2 of 2"]')).toHaveAttribute('aria-hidden', 'false')
  })
})
