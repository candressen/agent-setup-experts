import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'AI Agent Setup Service | Agent Setup Experts',
    template: '%s | Agent Setup Experts',
  },
  description:
    'We install and configure AI agents for your business in 48 hours. Done-for-you setup, workflow automation, and training. Book a free call.',
  metadataBase: new URL('https://agentsetupexperts.com'),
  verification: { google: 'vzC--c4qZJ_N4SVotGBT98t2OrpHiMAK3zZ1LRlu7uI' },
  openGraph: {
    type: 'website',
    siteName: 'Agent Setup Experts',
    title: 'AI Agent Setup Service | Agent Setup Experts',
    description: 'We install and configure AI agents for your business in 48 hours.',
    url: 'https://agentsetupexperts.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Agent Setup Experts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Setup Service | Agent Setup Experts',
    description: 'We install and configure AI agents for your business in 48 hours.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0CY2T8BBVJ" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0CY2T8BBVJ');"}
        </Script>
      </body>
    </html>
  );
}
