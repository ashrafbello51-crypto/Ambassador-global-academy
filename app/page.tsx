import Hero from '@/components/sections/Hero'
import TrustStats from '@/components/sections/TrustStats'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import AcademicProgrammes from '@/components/sections/AcademicProgrammes'
import Facilities from '@/components/sections/Facilities'
import Leadership from '@/components/sections/Leadership'
import Testimonials from '@/components/sections/Testimonials'
import GalleryPreview from '@/components/sections/GalleryPreview'
import LatestNews from '@/components/sections/LatestNews'
import AdmissionsCTA from '@/components/sections/AdmissionsCTA'
import ContactPreview from '@/components/sections/ContactPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <WhyChooseUs />
      <AcademicProgrammes />
      <Facilities />
      <Leadership />
      <Testimonials />
      <GalleryPreview />
      <LatestNews />
      <AdmissionsCTA />
      <ContactPreview />
    </>
  )
}