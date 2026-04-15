import ClosingCTASection from '@/components/ClosingCTASection'
import FAQSection from '@/components/FAQSection'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import IncludedSection from '@/components/IncludedSection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import ProblemSection from '@/components/ProblemSection'
import SocialProofBar from '@/components/SocialProofBar'
import SolutionSection from '@/components/SolutionSection'
import WhoItsForSection from '@/components/WhoItsForSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <IncludedSection />
      <WhoItsForSection />
      <PricingPreviewSection />
      <FAQSection />
      <ClosingCTASection />
    </>
  )
}
