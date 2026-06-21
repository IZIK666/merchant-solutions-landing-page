import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { CardAcquiring } from "@/components/card-acquiring"
import { ComplianceStability } from "@/components/compliance-stability"
import { OurSolutions } from "@/components/our-solutions"
import { Results } from "@/components/results"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <WhyUs />
        <HowItWorks />
        <Industries />
        <CardAcquiring />
        <ComplianceStability />
        <OurSolutions />
        <Results />
        <ContactForm />
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  )
}
