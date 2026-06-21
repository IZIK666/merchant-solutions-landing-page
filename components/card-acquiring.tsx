import { Globe, Banknote, CreditCard, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const capabilities = [
  { icon: Globe, title: "Extensive Global Network", desc: "Access to a vast banking network across Europe, Asia, Africa, the Caribbean, and the United States." },
  { icon: CreditCard, title: "Worldwide Card Processing", desc: "Comprehensive solutions for processing card payments globally." },
  { icon: Banknote, title: "Global Merchant Support", desc: "Support for merchants worldwide, excluding OFAC-sanctioned jurisdictions." },
  { icon: Zap, title: "Alternative Payment Methods", desc: "Seamless integration with various Alternative Payment Methods (APMs)." },
]

export function CardAcquiring() {
  return (
    <section id="card-acquiring" className="py-24 bg-card/40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Capabilities</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Robust Card Acquiring Solutions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Our extensive network and expertise ensure your business can accept payments efficiently and securely from customers around the globe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <Card key={item.title} className="p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
