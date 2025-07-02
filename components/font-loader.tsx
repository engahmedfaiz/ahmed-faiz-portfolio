"use client"

import { useEffect } from "react"

export default function FontLoader() {
  useEffect(() => {
    // تحميل الخطوط بشكل تفاعلي
    const loadFont = (href: string) => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = href
      link.onload = () => {
        console.log(`Font loaded: ${href}`)
      }
      link.onerror = () => {
        console.warn(`Failed to load font: ${href}`)
      }
      document.head.appendChild(link)
    }

    // تحميل الخطوط
    loadFont("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap")
    loadFont("https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap")
  }, [])

  return null
}
