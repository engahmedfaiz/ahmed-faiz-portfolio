"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Briefcase, Mail, Languages, Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { smoothScrollTo, useScrollDirection } from "@/lib/smooth-scroll"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  id: string
}

export default function FloatingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const scrollDirection = useScrollDirection()

  const navItems: NavItem[] = [
    { name: t("home"), href: "/", icon: <Home className="w-4 h-4" />, id: "home" },
    { name: t("about"), href: "/about", icon: <User className="w-4 h-4" />, id: "about" },
    { name: t("skills"), href: "/skills", icon: <Code className="w-4 h-4" />, id: "skills" },
    { name: t("projects"), href: "/projects", icon: <Briefcase className="w-4 h-4" />, id: "projects" },
    { name: t("contact"), href: "/contact", icon: <Mail className="w-4 h-4" />, id: "contact" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = useCallback(
    (href: string, id: string) => {
      if (pathname === "/" && id !== "home") {
        smoothScrollTo(id)
      }
      setIsMobileMenuOpen(false)
    },
    [pathname],
  )

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "ar" ? "en" : "ar")
  }, [language, setLanguage])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  if (!mounted) {
    return null
  }

  const isVisible = scrollDirection === "up"

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-1">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold text-white hover:text-blue-400 transition-colors mr-6 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
              aria-label="Home - Ahmed Faiz"
            >
              {language === "ar" ? "أحمد فايز" : "Ahmed Faiz"}
            </Link>

            {/* Navigation Items */}
            <nav role="menubar" className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  role="menuitem"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.icon}
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-white hover:bg-white/20 rounded-xl focus:ring-2 focus:ring-blue-400"
                aria-label={`Switch to ${language === "ar" ? "English" : "Arabic"}`}
              >
                <Languages className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-gray-300 hover:text-white hover:bg-white/20 rounded-xl focus:ring-2 focus:ring-blue-400"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Button */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          onClick={toggleMobileMenu}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-40 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            <div className="absolute bottom-24 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h2 id="mobile-menu-title" className="sr-only">
                Mobile Navigation Menu
              </h2>
              <nav className="space-y-3" role="menu">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href, item.id)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400"
                          : "text-gray-300 hover:text-white hover:bg-white/20"
                      }`}
                      role="menuitem"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleLanguage}
                      className="flex-1 text-gray-300 hover:text-white hover:bg-white/20 rounded-xl focus:ring-2 focus:ring-blue-400"
                      aria-label={`Switch to ${language === "ar" ? "English" : "Arabic"}`}
                    >
                      <Languages className="w-4 h-4 mr-2" />
                      {language === "ar" ? "EN" : "عربي"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="flex-1 text-gray-300 hover:text-white hover:bg-white/20 rounded-xl focus:ring-2 focus:ring-blue-400"
                      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
