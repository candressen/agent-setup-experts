import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import FAQSection from '@/components/FAQSection'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import IncludedSection from '@/components/IncludedSection'
import MiamiIndustriesStrip from '@/components/MiamiIndustriesStrip'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import ProblemSection from '@/components/ProblemSection'
import SocialProofBar from '@/components/SocialProofBar'
import SolutionSection from '@/components/SolutionSection'
import WhoItsForSection from '@/components/WhoItsForSection'

export const metadata: Metadata = {
  title: 'Library AI Agents for Miami Small Businesses | Agent Setup Experts',
  description:
    'Launch a focused ASE library stack for your Miami small business, then expand to 10 agents or unlimited custom work. First workflows go live in 48 hours.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <MiamiIndustriesStrip />
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
