import Navbar from '@/components/nav/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Metrics from '@/components/sections/Metrics'
import RoiCalculator from '@/components/sections/RoiCalculator'
import Industries from '@/components/sections/Industries'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import AskAndAnswer from '@/components/sections/AskAndAnswer'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Metrics />
      <RoiCalculator />
      <Industries />
      <WhyChooseUs />
      <AskAndAnswer />
      <CtaSection />
      <Footer />
    </main>
  )
}
