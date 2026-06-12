import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = "https://ilovehockey.zynox.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ILoveHockey — Montreal Canadiens Fan Hub | 24x Stanley Cup Champions",
    template: "%s | ILoveHockey",
  },
  description:
    "The ultimate Montreal Canadiens fan site. Roster, history, 24 Stanley Cup championships, schedules, and playoff results. Go Habs Go!",
  keywords: ["Montreal Canadiens", "Habs", "NHL", "Stanley Cup", "hockey", "Canadiens de Montréal", "Centre Bell"],
  openGraph: {
    title: "ILoveHockey — Montreal Canadiens Fan Hub",
    description: "24x Stanley Cup champions. Roster, history, schedules, and more. The most decorated franchise in NHL history.",
    type: "website",
    siteName: "ILoveHockey",
    locale: "en_CA",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ILoveHockey — Montreal Canadiens Fan Hub",
    description: "24x Stanley Cup champions. Roster, history, schedules, and more.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ILoveHockey",
  url: siteUrl,
  description: "Montreal Canadiens fan site — roster, history, 24 Stanley Cup titles, schedules and playoff results.",
  publisher: {
    "@type": "Organization",
    name: "ILoveHockey",
    url: siteUrl,
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Montreal Canadiens",
  alternateName: ["Habs", "Canadiens de Montréal", "Les Canadiens"],
  sport: "Ice Hockey",
  memberOf: {
    "@type": "SportsOrganization",
    name: "National Hockey League",
    alternateName: "NHL",
  },
  location: {
    "@type": "Place",
    name: "Centre Bell",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1909 Avenue des Canadiens-de-Montréal",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
  },
  url: "https://www.nhl.com/canadiens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0e1a]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
