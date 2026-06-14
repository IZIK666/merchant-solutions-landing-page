import { ShieldCheck } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2 font-semibold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </span>
          Merchant Solutions
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          A payment onboarding consultancy connecting merchants with certified,
          PCI-DSS compliant processors. We do not process or store payment data.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Merchant Solutions
        </p>
      </div>
    </footer>
  )
}
