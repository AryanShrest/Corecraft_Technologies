import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import HowWeWork from '@/components/home/HowWeWork'
import InnovationSection from '@/components/home/InnovationSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhyCoreCraft from '@/components/home/WhyCoreCraft'
import StatsFaqSection from '@/components/home/StatsFaqSection'
import ReadyCta from '@/components/home/ReadyCta'
import CommitmentSection from '@/components/home/CommitmentSection'
import ContactSection from '@/components/home/ContactSection'
import BlogSection from '@/components/home/BlogSection'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
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
