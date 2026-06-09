"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Trophy, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/elenco", key: "nav.elenco" },
  { href: "/historia", key: "nav.historia" },
  { href: "/partidas", key: "nav.partidas" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#002776]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Trophy className="h-7 w-7 text-[#FFDF00] group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold text-white tracking-tight">
              <span className="text-[#FFDF00]">Brasil</span>FC
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[#FFDF00] text-[#002776]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <button
              onClick={toggle}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/10"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-white p-2" aria-label="Abrir menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#002776] border-[#002776] w-64">
                <div className="flex flex-col gap-2 mt-8">
                  {navKeys.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-[#FFDF00] text-[#002776]"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
