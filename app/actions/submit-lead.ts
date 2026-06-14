"use server"

import { Resend } from "resend"

export type LeadState = {
  status: "idle" | "success" | "error"
  message?: string
}

const LEAD_RECIPIENT = "merchant.solutions@atomicmail.io"
const HUBSPOT_API_KEY = process.env.HUBSPOT_PRIVATE_APP_TOKEN
const HUBSPOT_API_URL = "https://api.hubapi.com"

async function createHubSpotContact(data: {
  company: string
  email: string
  phone: string
  country: string
  industry: string
}) {
  if (!HUBSPOT_API_KEY) {
    console.error("[HubSpot] API key not configured")
    return { success: false }
  }

  try {
    const response = await fetch(`${HUBSPOT_API_URL}/crm/v3/objects/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          firstname: data.company.split(" ")[0] || data.company,
          lastname: data.company.split(" ").slice(1).join(" ") || "",
          email: data.email,
          phone: data.phone,
          company: data.company,
          country: data.country,
          industry: data.industry,
          lifecyclestage: "lead",
          hs_lead_status: "NEW",
        },
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[HubSpot] Error creating contact:", error)
      return { success: false, error }
    }

    const contact = await response.json()
    console.log("[HubSpot] Contact created successfully:", contact.id)
    return { success: true, contactId: contact.id }
  } catch (err) {
    console.error("[HubSpot] Failed to create contact:", err)
    return { success: false }
  }
}

async function sendEmailNotification(data: {
  company: string
  email: string
  phone: string
  country: string
  industry: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[Email] RESEND_API_KEY is not set")
    return { success: false }
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: "Merchant Solutions Leads <onboarding@resend.dev>",
      to: [LEAD_RECIPIENT],
      replyTo: data.email,
      subject: `🚀 New merchant lead: ${data.company}`,
      text: [
        "New merchant lead from the website",
        "",
        `Company:  ${data.company}`,
        `Email:    ${data.email}`,
        `Phone:    ${data.phone}`,
        `Country:  ${data.country}`,
        `Industry: ${data.industry}`,
        "",
        "This lead has been added to HubSpot CRM automatically.",
      ].join("\n"),
    })

    return { success: true }
  } catch (err) {
    console.error("[Email] Failed to send notification:", err)
    return { success: false }
  }
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData
): Promise<LeadState> {
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

  // Create HubSpot contact
  const hubspotResult = await createHubSpotContact({
    company,
    email,
    phone,
    country,
    industry,
  })

  if (!hubspotResult.success) {
    return {
      status: "error",
      message: "Failed to process your inquiry. Please try again.",
    }
  }

  // Send email notification
  await sendEmailNotification({
    company,
    email,
    phone,
    country,
    industry,
  })

  return { status: "success" }
}
