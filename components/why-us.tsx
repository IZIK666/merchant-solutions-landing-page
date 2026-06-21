import { Card } from "@/components/ui/card"
import { Gauge, Network, Headphones, Zap, FileCheck, Layers } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Higher approval rates",
    desc: "Get matched with the acquirers most likely to approve and retain your transactions.",
  },
  {
    icon: Network,
    title: "Multi-acquirer routing",
    desc: "Smart routing across multiple certified processors keeps payments flowing reliably.",
  },
  {
    icon: FileCheck,
    title: "Compliance first",
    desc: "We only work with PCI-DSS compliant, fully certified payment providers.",
  },
  {
    icon: Zap,
    title: "Fast onboarding",
    desc: "Streamlined applications and document handling get you live in days, not months.",
  },
  {
    icon: Layers,
    title: "One integration",
    desc: "Access a network of processors through a single, well-documented connection.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    desc: "A real account manager who knows your business and responds quickly.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Why Us</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Your advantage in getting paid
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We sit between you and the processors, doing the legwork so your business
            can accept payments confidently and compliantly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 transition-shadow hover:shadow-md"> {/* Kept existing shadow transition */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
