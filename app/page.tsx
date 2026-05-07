import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ProductGallery from '@/components/ProductGallery'
import VideoSection from '@/components/VideoSection'
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Products />
      <ProductGallery />
      <VideoSection />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
