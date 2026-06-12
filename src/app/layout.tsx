import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PaixãoBR - A Seleção Brasileira",
  description:
    "Tudo sobre a Seleção Brasileira de Futebol: elenco, história, partidas e muito mais. Pentacampeã mundial.",
  openGraph: {
    title: "PaixãoBR - A Seleção Brasileira",
    description: "Pentacampeã mundial. Acompanhe tudo sobre a Seleção Canarinho.",
    type: "website",
    siteName: "PaixãoBR",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaixãoBR - A Seleção Brasileira",
    description: "Pentacampeã mundial. Acompanhe tudo sobre a Seleção Canarinho.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#071a0e]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
