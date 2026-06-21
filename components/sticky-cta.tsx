"use client"

import { Phone, MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"
import { trackPhoneClick } from "@/lib/tracking"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [showOnScroll, setShowOnScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setShowOnScroll(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible || !showOnScroll) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm px-4 py-3 md:py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              Ready to get approved? 🚀
            </p>
            <p className="text-xs text-muted-foreground">
              Talk to our specialists now - response within 5 minutes
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3">
            {/* Phone */}
            <a
              href="tel:+1234567890"
              onClick={() => trackPhoneClick("call")}
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 font-medium text-sm transition-all hover:bg-primary/90 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890?text=Hi%20I%20need%20payment%20processing%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPhoneClick("whatsapp")}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 font-medium text-sm transition-all hover:bg-green-700 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>

            {/* Close */}
            <button
              onClick={() => setIsVisible(false)}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-2 py-2 transition-colors hover:bg-accent"
              aria-label="Close CTA"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
