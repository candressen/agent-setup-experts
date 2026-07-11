import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from 'next/font/google'
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import Nav from "@/components/Nav";
import { COOKIE_CONSENT_KEY, type CookieConsentValue } from "@/lib/cookie-consent";
import PortalRouteDetector from "@/components/PortalRouteDetector"
import "./globals.css";

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'AI Agent Setup Service | Agent Setup Experts',
    template: '%s | Agent Setup Experts',
  },
  description:
    'We install and configure AI agents for your business, with first workflows typically live in 48 hours. Done-for-you setup, workflow automation, and training.',
  metadataBase: new URL('https://agentsetupexperts.com'),
  verification: { google: 'vzC--c4qZJ_N4SVotGBT98t2OrpHiMAK3zZ1LRlu7uI' },
  openGraph: {
    type: 'website',
    siteName: 'Agent Setup Experts',
    title: 'AI Agent Setup Service | Agent Setup Experts',
    description: 'We install and configure AI agents for your business, with first workflows typically live in 48 hours.',
    url: 'https://agentsetupexperts.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Agent Setup Experts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Setup Service | Agent Setup Experts',
    description: 'We install and configure AI agents for your business, with first workflows typically live in 48 hours.',
    images: ['/og-image.png'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get(COOKIE_CONSENT_KEY)?.value;
  const initialConsent: CookieConsentValue | null =
    consentCookie === 'accepted' || consentCookie === 'declined' ? consentCookie : null;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Agent Setup Experts",
              "url": "https://agentsetupexperts.com",
              "description": "Done-for-you AI agent setup for Miami small businesses",
              "areaServed": {
                "@type": "City",
                "name": "Miami",
                "addressRegion": "FL"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Agent Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Automation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Agent Setup"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0a] text-white antialiased`}
      >
        <PortalRouteDetector
          marketingChrome={
            <>
              <div data-site-chrome='marketing-nav'>
                <Nav />
              </div>
            </>
          }
          marketingFooter={
            <>
              <div data-site-chrome='marketing-footer'>
                <Footer />
              </div>
              <div data-site-chrome='marketing-popup'>
                <LeadMagnetPopup />
              </div>
              <div data-site-chrome='marketing-consent'>
                <CookieConsent initialConsent={initialConsent} />
              </div>
            </>
          }
        >
          {children}
        </PortalRouteDetector>
      </body>
    </html>
  );
}
