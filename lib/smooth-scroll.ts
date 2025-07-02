"use client"

import { useEffect, useState, useCallback } from "react"

export const smoothScrollTo = (elementId: string, offset = 80): void => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export const useScrollSpy = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>("")

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId)
          break
        }
      }
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return activeSection
}

export const useScrollDirection = (): "up" | "down" => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    const throttledUpdateScrollDirection = throttle(updateScrollDirection, 100)

    window.addEventListener("scroll", throttledUpdateScrollDirection, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledUpdateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}

// Throttle function for performance optimization
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}
