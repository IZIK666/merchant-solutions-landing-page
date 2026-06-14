// Google Analytics & Conversion Tracking
export function initializeTracking() {
  // Google Tag Manager / Google Analytics
  if (typeof window !== "undefined") {
    // Facebook Pixel
    window.fbq?.("track", "PageView")

    // Google Analytics event
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "page_view")
    }
  }
}

export function trackFormSubmit(source: string) {
  if (typeof window !== "undefined") {
    // Facebook Pixel - Lead event
    window.fbq?.("track", "Lead", {
      content_name: `Lead from ${source}`,
      content_type: "lead",
    })

    // Google Analytics - Form submission
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "form_submit", {
        source: source,
      })
    }

    // LinkedIn Insight
    if (typeof window.lintrk !== "undefined") {
      window.lintrk("track", { conversion_id: 15234237 })
    }
  }
}

export function trackPhoneClick(type: "call" | "whatsapp") {
  if (typeof window !== "undefined") {
    window.fbq?.("track", "Contact", {
      content_name: `Phone contact - ${type}`,
      content_type: "contact",
    })

    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "phone_click", {
        type: type,
      })
    }
  }
}

// Declare global window types for tracking pixels
declare global {
  interface Window {
    fbq?: (event: string, data?: any) => void
    gtag?: (...args: any[]) => void
    lintrk?: (event: string, data?: any) => void
  }
}
