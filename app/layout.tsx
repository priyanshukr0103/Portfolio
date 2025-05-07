import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import "./styles.css"
import type React from "react"
import ClientWrapper from "./components/client-wrapper"
import FloatingNav from "./components/floating-nav"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
})
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Priyanshu Kumar",
  description: "A portfolio showcasing projects and skills"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/about-image.jpg' : '/images/about-image.jpg'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/profile.png' : '/images/profile.png'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/amazer.jpg' : '/images/amazer.jpg'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/fintrack.jpg' : '/images/fintrack.jpg'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/sustainable.jpg' : '/images/sustainable.jpg'} as="image" />

        {/* No inline styles needed as Next.js handles this */}

        {/* No need for additional CSS links as Next.js handles this */}

        {/* Add base tag only for GitHub Pages */}
        {process.env.GITHUB_PAGES === 'true' && (
          <base href="/Portfolio/" />
        )}
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientWrapper>
            <FloatingNav />
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}