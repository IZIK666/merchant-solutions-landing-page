const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    desc: "Share your industry, volumes, and target markets through a quick consultation.",
  },
  {
    n: "02",
    title: "We match you with processors",
    desc: "Based on your profile, we shortlist the certified acquirers best suited to approve you.",
  },
  {
    n: "03",
    title: "Streamlined application",
    desc: "We help prepare and submit your documentation to speed up underwriting and approval.",
  },
  {
    n: "04",
    title: "Go live & scale",
    desc: "Integrate the processor's certified checkout and start accepting payments globally.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background border-t border-border bg-[radial-gradient(ellipse_at_top,oklch(var(--primary)/0.05),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(var(--accent)/0.05),transparent_50%)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">How It Works</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            A clear path to getting approved
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Card data and authentication always stay between the cardholder, their
            bank, and the certified processor. We handle the onboarding, not the payments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.n}
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <span className="text-3xl font-bold text-primary/30">{step.n}</span>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
