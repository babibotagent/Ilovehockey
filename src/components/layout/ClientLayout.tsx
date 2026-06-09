"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
