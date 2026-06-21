import { ShieldCheck, Handshake, Lock, Server, FileCheck } from "lucide-react"
import { Card } from "@/components/ui/card"

const stabilityFeatures = [
  { icon: Handshake, title: "Transparent Banking", desc: "Cultivating clear and honest relationships with our acquiring bank partners." },
  { icon: FileCheck, title: "Pre-Approved Onboarding", desc: "Merchant applications are thoroughly reviewed and approved by banking partners before onboarding." },
  { icon: Lock, title: "Long-Term Partnerships", desc: "Established and enduring banking relationships ensure consistent service." },
  { icon: Server, title: "Secure Infrastructure", desc: "Providing a secure, stable, and reliable processing infrastructure for all transactions." },
]

export function ComplianceStability() {
  return (
    <section id="compliance-stability" className="py-24 bg-background border-t border-border bg-[radial-gradient(ellipse_at_top,oklch(0.52_0.22_265/0.05),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.7_0.16_185/0.05),transparent_50%)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Trust & Stability</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Unwavering Compliance & Operational Stability
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We prioritize secure, transparent, and compliant payment environments, built on strong banking relationships and robust infrastructure.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stabilityFeatures.map((item) => (
            <Card key={item.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
