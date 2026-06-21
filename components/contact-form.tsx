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
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitLead, type LeadState } from "@/app/actions/submit-lead"
import { trackFormSubmit } from "@/lib/tracking"

const initialState: LeadState = { status: "idle" }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  // Select components need controlled values to reset properly after submit.
  const [industry, setIndustry] = useState("")
  const [serviceInterest, setServiceInterest] = useState("")

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
      setIndustry("")
      setServiceInterest("")
      trackFormSubmit("contact-form")
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
            Tell us about your business needs. Our team will review your details and reach out with a tailored payment processing recommendation.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8">
          {state.status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Thank you for your inquiry!</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Your details have been received. A payment specialist will contact you within one business day to discuss tailored solutions for your business.
              </p>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" name="fullName" placeholder="John Doe" required />
              </div>
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
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" required />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="country">Country of operation</Label>
                  <Input id="country" name="country" placeholder="United States" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="industry">Primary industry</Label>
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
                      <SelectItem value="Peptides & Nutraceuticals">Peptides & Nutraceuticals</SelectItem>
                      <SelectItem value="Adult Entertainment">Adult Entertainment</SelectItem>
                      <SelectItem value="CBD & Cannabis">CBD & Cannabis</SelectItem>
                      <SelectItem value="Other High-Risk">Other High-Risk</SelectItem>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="serviceInterest">Service interest</Label>
                <Select name="serviceInterest" required value={serviceInterest} onValueChange={setServiceInterest}>
                  <SelectTrigger id="serviceInterest">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Global Card Processing">Global Card Processing</SelectItem>
                    <SelectItem value="High-Risk Merchant Accounts">High-Risk Merchant Accounts</SelectItem>
                    <SelectItem value="Alternative Payment Methods (APMs)">Alternative Payment Methods (APMs)</SelectItem>
                    <SelectItem value="Multi-Region Acquiring">Multi-Region Acquiring</SelectItem>
                    <SelectItem value="Compliance & Stability">Compliance & Stability</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="websiteUrl">Website URL (optional)</Label>
                <Input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://www.yourcompany.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Short message / Request details (optional)</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us more about your needs..." />
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
