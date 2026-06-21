"use client"

import { useEffect } from "react"
import { initializeTracking } from "@/lib/tracking"

export function ClientTrackingInitializer() {
  useEffect(() => {
    initializeTracking()
  }, [])
  return null
}
