import BlogSection from '@/components/home/BlogSection'
import CommitmentSection from '@/components/home/CommitmentSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import HowWeWork from '@/components/home/HowWeWork'
import InnovationSection from '@/components/home/InnovationSection'
import ReadyCta from '@/components/home/ReadyCta'
import ServicesSection from '@/components/home/ServicesSection'
import StatsFaqSection from '@/components/home/StatsFaqSection'
import WhyCoreCraft from '@/components/home/WhyCoreCraft'
import { SiteHeader } from '@/components/layout'

export default function Home() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main id="primary">
        <Hero />
        <HowWeWork />
        <InnovationSection />
        <ServicesSection />
        <WhyCoreCraft />
        <StatsFaqSection />
        <ReadyCta />
        <CommitmentSection />
        <ContactSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
