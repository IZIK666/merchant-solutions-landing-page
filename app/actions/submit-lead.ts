"use server"

import { Resend } from "resend"

export type LeadState = {
  status: "idle" | "success" | "error"
  message?: string
}

const LEAD_RECIPIENT = "merchant.solutions@atomicmail.io"

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const company = String(formData.get("company") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const country = String(formData.get("country") ?? "").trim()
  const industry = String(formData.get("industry") ?? "").trim()

  // Basic server-side validation
  if (!company || !email || !phone || !country || !industry) {
    return { status: "error", message: "Please fill in all fields." }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid business email." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY is not set")
    return {
      status: "error",
      message: "Email service is not configured yet. Please try again later.",
    }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      // Resend's shared onboarding sender works without domain verification.
      from: "Merchant Solutions Leads <onboarding@resend.dev>",
      to: [LEAD_RECIPIENT],
      replyTo: email,
      subject: `New merchant lead: ${company}`,
      text: [
        "New merchant lead from the website",
        "",
        `Company:  ${company}`,
        `Email:    ${email}`,
        `Phone:    ${phone}`,
        `Country:  ${country}`,
        `Industry: ${industry}`,
      ].join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return { status: "error", message: "Something went wrong. Please try again." }
    }

    return { status: "success" }
  } catch (err) {
    console.log("[v0] Failed to send lead email:", err)
    return { status: "error", message: "Something went wrong. Please try again." }
  }
}
