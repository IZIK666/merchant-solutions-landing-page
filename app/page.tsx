import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { Results } from "@/components/results"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Industries />
        <Results />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  )
}
