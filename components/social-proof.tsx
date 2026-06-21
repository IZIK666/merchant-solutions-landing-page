import { Star, Users, TrendingUp, Award } from "lucide-react"

const proof = [
  {
    icon: Users,
    stat: "500+",
    label: "Merchants onboarded",
  },
  {
    icon: TrendingUp,
    stat: "$2.5B+",
    label: "Volume processed",
  },
  {
    icon: Star,
    stat: "4.9/5",
    label: "Average rating",
  },
  {
    icon: Award,
    stat: "98%",
    label: "Approval success rate",
  },
]

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <div key={item.stat} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="text-3xl font-bold tracking-tight text-foreground">
                {item.stat}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
