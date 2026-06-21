import { Card } from "@/components/ui/card"
import { Gamepad2, Bitcoin, LineChart, RefreshCw, ShoppingBag, FlaskConical, HeartCrack, Leaf, ShieldAlert } from "lucide-react"

const industries = [
  { icon: Gamepad2, title: "Gaming & iGaming", desc: "Online entertainment, casinos, and sports betting platforms with global player bases." },
  { icon: FlaskConical, title: "Peptides & Nutraceuticals", desc: "Specialized health and wellness products requiring compliant payment solutions." },
  { icon: HeartCrack, title: "Adult Entertainment", desc: "Platforms and services in the adult industry needing discreet and robust processing." },
  { icon: Leaf, title: "CBD & Cannabis", desc: "Merchants in the evolving CBD and legal cannabis markets." },
  { icon: Bitcoin, title: "Crypto & Web3", desc: "Exchanges and digital-asset platforms needing reliable rails for virtual currencies." },
  { icon: LineChart, title: "Forex & Trading", desc: "Brokerages and trading platforms operating in volatile financial markets." },
  { icon: RefreshCw, title: "Subscriptions & SaaS", desc: "Recurring-revenue businesses optimizing retention and managing churn." },
  { icon: ShoppingBag, title: "E-commerce & Retail", desc: "High-volume online stores selling worldwide, including digital goods." },
  { icon: ShieldAlert, title: "Other High-Risk", desc: "Any business operating in regulated or high-chargeback environments." },
]

const methods = [
  "Visa & Mastercard",
  "Apple Pay & Google Pay",
  "Open Banking (EU)",
  "PIX (Brazil)",
  "Blik (Poland)",
  "iDEAL (Netherlands)",
  "SPEI (Mexico)",
  "Crypto payments",
]

export function Industries() {
  return (
    <section id="industries" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Industries</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Specialists in High-Risk & Complex Verticals
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We excel in navigating the unique payment challenges of high-risk and regulated industries, connecting you with robust, compliant processing partners.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <industry.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-background p-8">
          <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Supported payment methods
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {methods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
