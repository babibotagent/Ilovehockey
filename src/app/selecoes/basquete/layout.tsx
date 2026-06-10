"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, ChevronLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLang, Lang, langLabels, langFlags } from "@/contexts/LanguageContext";

const navKeys = [
  { href: "/selecoes/basquete", label: "Home" },
  { href: "/selecoes/basquete/elenco", label: "Elenco" },
  { href: "/selecoes/basquete/historia", label: "Olimpíadas" },
];

const langs: Lang[] = ["pt", "en", "fr", "es"];

function LangDropdown({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
      >
        <Globe className="w-4 h-4" />
        <span>{langFlags[lang]}</span>
        <span className="hidden sm:inline">{lang.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-[#1a0a00] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={cn(
                "w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors",
                l === lang
                  ? "bg-[#f97316]/20 text-[#fb923c] font-medium"
                  : "text-white/70 hover:bg-white/5"
              )}
            >
              <span>{langFlags[l]}</span>
              <span>{langLabels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BasqueteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a0a00]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7c2d12]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-1 text-white/50 hover:text-white text-xs transition-colors">
                <ChevronLeft className="w-4 h-4" />
                Futebol
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/selecoes/basquete" className="flex items-center gap-2 group">
                <span className="text-2xl">🏀</span>
                <span className="text-xl font-bold text-white tracking-tight">
                  <span className="text-[#fb923c]">Brasil</span>Basket
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navKeys.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-[#f97316] text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <LangDropdown className="ml-2" />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LangDropdown />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="text-white p-2">
                  {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#7c2d12] border-[#7c2d12] w-64">
                  <div className="flex flex-col gap-2 mt-8">
                    {navKeys.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          pathname === link.href
                            ? "bg-[#f97316] text-white"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-[#7c2d12] text-white border-t border-white/10 py-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} BrasilBasket · Projeto educacional. Não oficial.
      </footer>
    </div>
  );
}
