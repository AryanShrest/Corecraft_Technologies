import type { Metadata } from 'next'

import { ContactStudio } from '@/components/contact/ContactStudio'
import { PageBanner, SiteHeader } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Start a conversation with CoreCraft Technologies about your website, software, mobile application, or digital growth project.',
}

const pathInquiry: Record<string, string> = {
  'digital-transformation': 'Custom software',
  'growth-partnership': 'Digital growth',
  'launch-sprint': 'New website or redesign',
}

export default function ContactPage({ searchParams }: { searchParams?: { path?: string } }) {
  const initialInquiry = searchParams?.path ? pathInquiry[searchParams.path] : undefined

  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="primary">
        <PageBanner
          description="Tell us what needs to change. We’ll help turn the challenge into a clear digital direction."
          eyebrow="Start a conversation"
          title="Let’s build what’s next"
        />
        <ContactStudio initialInquiry={initialInquiry} />
      </main>
    </div>
  )
}
