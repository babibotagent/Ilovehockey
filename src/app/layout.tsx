import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILoveHockey - Montreal Canadiens Fan Page",
  description:
    "Everything about the Montreal Canadiens: roster, history, games and more. 24x Stanley Cup champions.",
  openGraph: {
    title: "ILoveHockey - Montreal Canadiens Fan Page",
    description: "24x Stanley Cup champions. Follow everything about the Habs.",
    type: "website",
    siteName: "ILoveHockey",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILoveHockey - Montreal Canadiens Fan Page",
    description: "24x Stanley Cup champions. Follow everything about the Habs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0a0e1a]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
