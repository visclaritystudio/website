import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://visclaritystudio.com"),
  title: {
    default: "Visclarity Studio — Growth Marketing Partner, Bali",
    template: "%s — Visclarity Studio",
  },
  description:
    "Visclarity Studio is a Bali-based creative marketing agency for founders who want branding, websites, social media, and digital campaigns handled end-to-end — like an in-house team, not another vendor.",
  keywords: [
    "creative agency Bali",
    "digital marketing agency Bali",
    "branding agency Denpasar",
    "website development Bali",
    "social media management Bali",
    "Visclarity Studio",
  ],
  openGraph: {
    title: "Visclarity Studio — Growth Marketing Partner, Bali",
    description:
      "Creative power, business impact. End-to-end branding, web, and marketing for founders who'd rather not do it alone.",
    url: "https://visclaritystudio.com",
    siteName: "Visclarity Studio",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        {/* General Sans — Apple-esque geometric display face, used as --font-display */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
