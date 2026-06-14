import { Card } from "@/components/ui/card"

const stats = [
  { value: "98%", label: "Peak approval rates achieved" },
  { value: "24-48h", label: "Typical onboarding time" },
  { value: "40+", label: "Countries supported" },
]

const testimonials = [
  {
    quote:
      "Our approval rates climbed dramatically within the first month. The matching process was effortless and the support team genuinely understood our vertical.",
    name: "Operations Director",
    role: "iGaming platform",
  },
  {
    quote:
      "The onboarding was smooth and fully compliant. Routing across multiple processors gave us the reliability we'd been missing.",
    name: "Head of Payments",
    role: "Crypto exchange",
  },
  {
    quote:
      "Finally a partner who responds fast and knows the high-risk space. Chargebacks dropped and conversions improved.",
    name: "Founder",
    role: "Subscription business",
  },
]

export function Results() {
  return (
    <section id="results" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-8 text-center">
              <div className="text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Results</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            What our partners say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col p-6">
              <p className="flex-1 text-pretty leading-relaxed">{`"${t.quote}"`}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
