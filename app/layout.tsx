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
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
        <Script id="ga4-placeholder" strategy="afterInteractive">
          {"/* Replace with real GA4 ID */"}
        </Script>
      </body>
    </html>
  );
}
