'use client'

import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'

import { Reveal, StaggerGroup } from '@/components/motion'
import { Button, SectionHeading } from '@/components/ui'
import { siteSettings } from '@/content/site'

const inquiryTypes = [
  'New website or redesign',
  'Custom software',
  'Mobile application',
  'Digital growth',
  'Cloud and hosting',
  'Something else',
] as const

type Brief = {
  email: string
  inquiry: string
  message: string
  name: string
}

const emptyBrief: Brief = { email: '', inquiry: inquiryTypes[0], message: '', name: '' }

function MailIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="m3 7 7.8 5.2a2.2 2.2 0 0 0 2.4 0L21 7M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M8.5 3.5 11 8 8.7 9.8a15.5 15.5 0 0 0 5.5 5.5L16 13l4.5 2.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3.5 5.5a2 2 0 0 1 2-2h3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20">
      <path
        d="M4 10h12m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function ContactStudio({ initialInquiry }: { initialInquiry?: string }) {
  const [brief, setBrief] = useState<Brief>({
    ...emptyBrief,
    inquiry: inquiryTypes.includes(initialInquiry as (typeof inquiryTypes)[number])
      ? (initialInquiry as (typeof inquiryTypes)[number])
      : emptyBrief.inquiry,
  })
  const [prepared, setPrepared] = useState(false)

  const mailtoHref = useMemo(() => {
    const subject = `Project inquiry: ${brief.inquiry}`
    const body = `Name: ${brief.name}\nEmail: ${brief.email}\nInquiry: ${brief.inquiry}\n\nProject brief:\n${brief.message}`
    return `mailto:${siteSettings.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [brief])

  function updateBrief(field: keyof Brief, value: string) {
    setPrepared(false)
    setBrief((current) => ({ ...current, [field]: value }))
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPrepared(true)
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 size-[32rem] rounded-full bg-blue-100/60 blur-3xl"
      />
      <div className="site-container relative">
        <Reveal>
          <SectionHeading
            description="Choose the quickest channel or shape your idea into a clear project brief. Nothing is submitted silently—the final step opens your own email app so you stay in control."
            eyebrow="Talk to the people who build"
            title="A good project starts with a useful conversation"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" interval={90}>
              <a
                className="motion-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                href={`mailto:${siteSettings.contact.email}`}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-brand">
                  <MailIcon />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink-heading">Email the team</h2>
                <p className="mt-1 break-all text-sm text-ink-body">{siteSettings.contact.email}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Write an email <ArrowIcon />
                </span>
              </a>
              <a
                className="motion-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                href={siteSettings.contact.phoneHref}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-brand">
                  <PhoneIcon />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink-heading">Call directly</h2>
                <p className="mt-1 text-sm text-ink-body">{siteSettings.contact.phoneDisplay}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Start a call <ArrowIcon />
                </span>
              </a>
              <div className="motion-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                <span className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-brand">
                  <PinIcon />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink-heading">Based in Kathmandu</h2>
                <p className="mt-1 text-sm text-ink-body">{siteSettings.contact.address}</p>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  A map is intentionally withheld until the exact office destination is confirmed.
                </p>
              </div>
            </StaggerGroup>
          </div>

          <Reveal
            className="relative overflow-hidden rounded-[2rem] bg-[#111f4d] p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-8 lg:p-10"
            delay={120}
            variant="fade-left"
          >
            <div aria-hidden="true" className="page-banner-grid absolute inset-0 opacity-15" />
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-64 rounded-full bg-blue-400/20 blur-3xl"
            />
            <form className="relative" onSubmit={prepareEmail}>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Project brief
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    What are we building?
                  </h2>
                </div>
                <span className="w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100">
                  Takes about 2 minutes
                </span>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="contact-field">
                  <span>Your name</span>
                  <input
                    autoComplete="name"
                    name="name"
                    onChange={(event) => updateBrief('name', event.target.value)}
                    placeholder="Full name"
                    required
                    value={brief.name}
                  />
                </label>
                <label className="contact-field">
                  <span>Email address</span>
                  <input
                    autoComplete="email"
                    name="email"
                    onChange={(event) => updateBrief('email', event.target.value)}
                    placeholder="you@company.com"
                    required
                    type="email"
                    value={brief.email}
                  />
                </label>
                <label className="contact-field sm:col-span-2">
                  <span>What can we help with?</span>
                  <select
                    name="inquiry"
                    onChange={(event) => updateBrief('inquiry', event.target.value)}
                    value={brief.inquiry}
                  >
                    {inquiryTypes.map((inquiry) => (
                      <option key={inquiry}>{inquiry}</option>
                    ))}
                  </select>
                </label>
                <label className="contact-field sm:col-span-2">
                  <span>Tell us about the outcome you need</span>
                  <textarea
                    minLength={20}
                    name="message"
                    onChange={(event) => updateBrief('message', event.target.value)}
                    placeholder="What should change for your business when this project succeeds?"
                    required
                    rows={6}
                    value={brief.message}
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button endIcon={<ArrowIcon />} size="large" type="submit">
                  Prepare my email
                </Button>
                <p className="text-xs leading-5 text-blue-100/70">
                  This form does not store or send your data.
                </p>
              </div>

              <div aria-live="polite" className={prepared ? 'mt-6' : 'sr-only'}>
                {prepared && (
                  <div className="rounded-2xl border border-blue-300/30 bg-blue-400/10 p-5">
                    <p className="font-semibold text-white">Your project brief is ready.</p>
                    <p className="mt-1 text-sm text-blue-100/80">
                      Review it in your email app before sending.
                    </p>
                    <a
                      className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-bold text-[#111f4d] transition-transform hover:-translate-y-0.5"
                      href={mailtoHref}
                    >
                      Open email app <ArrowIcon />
                    </a>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
