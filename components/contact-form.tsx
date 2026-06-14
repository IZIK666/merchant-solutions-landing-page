"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitLead, type LeadState } from "@/app/actions/submit-lead"

const initialState: LeadState = { status: "idle" }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  // Select component needs controlled value to reset properly after submit.
  const [industry, setIndustry] = useState("")

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
      setIndustry("")
    }
  }, [state.status])

  return (
    <section id="contact" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Get In Touch</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Ready to boost your revenue?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Tell us about your business and our team will reach out with a tailored
            processing recommendation.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8">
          {state.status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Your details have been received. A specialist will contact you within
                one business day.
              </p>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="company">Company name</Label>
                <Input id="company" name="company" placeholder="Acme Ltd." required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Business email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" required />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" placeholder="United States" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select name="industry" required value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iGaming / Casino">iGaming / Casino</SelectItem>
                      <SelectItem value="Crypto">Crypto</SelectItem>
                      <SelectItem value="Forex Trading">Forex Trading</SelectItem>
                      <SelectItem value="Subscription / SaaS">Subscription / SaaS</SelectItem>
                      <SelectItem value="E-commerce">E-commerce</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {state.status === "error" && state.message ? (
                <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{state.message}</span>
                </div>
              ) : null}

              <Button type="submit" size="lg" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send inquiry"
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                We never collect cardholder or payment data. This form is for business
                inquiries only.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
