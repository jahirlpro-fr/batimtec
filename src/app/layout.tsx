import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://batimtec.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BATIMTEC — Maintenance, Travaux & Rénovation à Orléans",
    template: "%s | BATIMTEC",
  },
  description:
    "BATIMTEC, SAS dirigée par Loukou GNAMIAN. Expert en maintenance technique, travaux et rénovation à Orléans et partout en France. Devis gratuit sous 24h.",
  keywords: [
    "maintenance bâtiment Orléans",
    "travaux électricité plomberie menuiserie",
    "rénovation Orléans",
    "artisan multi-services Orléans",
    "BATIMTEC",
    "Centre-Val de Loire",
    "contrat maintenance bâtiment",
  ],
  openGraph: {
    title: "BATIMTEC — Maintenance, Travaux & Rénovation à Orléans",
    description:
      "Expert en maintenance technique, travaux et rénovation. Devis gratuit sous 24h. Orléans et toute la France.",
    url: siteUrl,
    siteName: "BATIMTEC",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/logo-c-Batimtec.png", width: 600, height: 200, alt: "BATIMTEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BATIMTEC — Maintenance, Travaux & Rénovation à Orléans",
    description: "Expert bâtiment à Orléans. Devis gratuit sous 24h.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "BATIMTEC",
  legalName: "BATIMTEC SAS",
  description:
    "Expert en maintenance technique, travaux (électricité, plomberie, menuiserie) et rénovation de bâtiments à Orléans et toute la France.",
  url: siteUrl,
  telephone: ["+33986669610", "+33623080105"],
  email: "contact@batimtec.com",
  founder: { "@type": "Person", name: "Loukou GNAMIAN" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 rue de l'Écu d'or",
    addressLocality: "Orléans",
    postalCode: "45000",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.9029, longitude: 1.9094 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "12:00",
    },
  ],
  priceRange: "38€/h HT",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement, chèque",
  areaServed: { "@type": "Country", name: "France" },
  identifier: { "@type": "PropertyValue", name: "SIRET", value: "979 251 485 00012" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
