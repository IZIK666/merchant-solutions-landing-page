import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const solutions = [
  "Global Card Processing",
  "High-Risk Merchant Accounts",
  "Gaming Payment Solutions",
  "CBD, Peptides, and Adult Industry Processing",
  "Alternative Payment Methods (APMs)",
  "Multi-Region Acquiring (Europe, United States, Asia, Africa, and the Caribbean)",
  "Strong Banking Partnerships",
  "Stable and Transparent Payment Processing Environment",
]

export function OurSolutions() {
  return (
    <section id="our-solutions" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Our Offerings</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Tailored Solutions for Your Business
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We offer a comprehensive suite of payment processing solutions, precisely tailored for modern merchants in complex and high-growth sectors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution} className="p-6 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-1" />
              <p className="font-medium text-foreground">{solution}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
