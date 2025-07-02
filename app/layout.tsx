import type React from "react"
import type { Metadata, Viewport } from "next"
import "./fonts.css"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import FloatingNavbar from "@/components/ui/floating-navbar"
import { LanguageProvider } from "@/contexts/language-context"
import { Suspense } from "react"
import LoadingScreen from "@/components/ui/loading-screen"

// Enhanced viewport configuration for 15.3.4
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "dark light",
  viewportFit: "cover",
}

// Enhanced metadata for Next.js 15.3.4
export const metadata: Metadata = {
  metadataBase: new URL("https://engahmedfaiz.github.io/portfoli"),
  title: {
    default: "Ahmed Faiz Mashrah - Professional Web & Mobile Developer",
    template: "%s | Ahmed Faiz Mashrah",
  },
  description:
    "Professional freelance web & mobile developer specializing in Laravel, Flutter, PHP, and modern web technologies. Based in Sana'a, Yemen. Creating innovative digital solutions with 2+ years of experience.",
  applicationName: "Ahmed Faiz Portfolio",
  keywords: [
    "Ahmed Faiz Mashrah",
    "Web Developer Yemen",
    "Mobile Developer",
    "Laravel Developer",
    "Flutter Developer",
    "PHP Developer",
    "Full Stack Developer",
    "Freelance Developer",
    "E-commerce Solutions",
    "Custom Web Applications",
    "Sana'a Developer",
    "Yemen Tech",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: "Ahmed Faiz Mashrah", url: "https://engahmedfaiz.github.io/portfoli" }],
  creator: "Ahmed Faiz Mashrah",
  publisher: "Ahmed Faiz Mashrah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Enhanced Open Graph for 15.3.4
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_YE"],
    url: "https://engahmedfaiz.github.io/portfoli",
    title: "Ahmed Faiz Mashrah - Professional Web & Mobile Developer",
    description:
      "Professional freelance developer creating innovative web and mobile solutions with Laravel, Flutter, and modern technologies.",
    siteName: "Ahmed Faiz Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Faiz Mashrah - Professional Developer Portfolio",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Ahmed Faiz Mashrah - Developer",
        type: "image/png",
      },
    ],
  },
  // Enhanced Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Faiz Mashrah - Professional Web & Mobile Developer",
    description:
      "Professional freelance developer creating innovative web and mobile solutions with Laravel, Flutter, and modern technologies.",
    images: ["/og-image.png"],
    creator: "@engahmedfaiz",
    site: "@engahmedfaiz",
  },
  // Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Enhanced verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  // Enhanced alternates
  alternates: {
    canonical: "https://engahmedfaiz.github.io/portfoli",
    languages: {
      "en-US": "https://engahmedfaiz.github.io/portfoli",
      "ar-YE": "https://engahmedfaiz.github.io/portfoli/ar",
    },
    types: {
      "application/rss+xml": "https://engahmedfaiz.github.io/portfoli/rss.xml",
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  // New in 15.3.4 - App Links
  appLinks: {
    web: {
      url: "https://engahmedfaiz.github.io/portfoli",
      should_fallback: true,
    },
  },
  // Enhanced manifest
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="ar" dir="rtl">
      <head>
        {/* Enhanced preload for local fonts */}
        <link rel="preload" href="/fonts/cairo-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/cairo-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//api.github.com" />

        {/* Enhanced icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />

        {/* Enhanced PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ahmed Faiz" />

        {/* Enhanced performance hints */}
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/contact" />
      </head>
      <body className="font-cairo antialiased">
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
            storageKey="ahmed-faiz-theme"
          >
            <Suspense fallback={<LoadingScreen />}>
              <FloatingNavbar />
              <main className="relative min-h-screen" role="main">
                {children}
              </main>
              <Toaster />
            </Suspense>
          </ThemeProvider>
        </LanguageProvider>

        {/* Enhanced analytics placeholder */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Analytics code placeholder
                console.log('Production analytics ready');
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}
