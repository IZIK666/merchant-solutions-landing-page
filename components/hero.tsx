import { Button } from "@/components/ui/button"
import { ShieldCheck, Globe, TrendingUp } from "lucide-react"

const trustSignals = [
  { icon: ShieldCheck, label: "PCI-DSS aligned partners" },
  { icon: TrendingUp, label: "Higher approval rates" },
  { icon: Globe, label: "40+ countries covered" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Hero Background Image and Overlay */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url('https://images.unsplash.com/photo-1556740738-b6a63e62c1d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Existing background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(var(--primary)/0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(var(--accent)/0.16),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 animate-fade-in relative z-10"> {/* Added relative z-10 to bring content above image */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Trusted payment onboarding partner
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">Fast Payments for Modern Businesses</h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We connect growing and digital-first merchants with vetted, certified
            payment processors. You get higher approval rates and compliant
            infrastructure — without ever handling sensitive card data yourself.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="w-full sm:w-auto">
              Get Started Today
            </Button>
            <Button
              render={<a href="#how-it-works" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustSignals.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
