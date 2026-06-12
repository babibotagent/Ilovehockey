"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Trophy, Globe, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLang, Lang, langLabels, langFlags } from "@/contexts/LanguageContext";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/elenco", key: "nav.elenco" },
  { href: "/historia", key: "nav.historia" },
  { href: "/partidas", key: "nav.partidas" },
  { href: "/stanleycup", key: "nav.stanleycup" },
];

const langs: Lang[] = ["en", "fr"];

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

function LangDropdown({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

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
        <div className="absolute right-0 top-full mt-1 bg-[#111827] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={cn(
                "w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors",
                l === lang
                  ? "bg-[#AF1E2D]/10 text-[#AF1E2D] font-medium"
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

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#192168]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Trophy className="h-7 w-7 text-[#AF1E2D] group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold text-white tracking-tight">
              <span className="text-[#AF1E2D]">ILove</span>Hockey
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
                    ? "bg-[#AF1E2D] text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <LangDropdown className="ml-2" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangDropdown />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-white p-2" aria-label="Open menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#192168] border-[#192168] w-64">
                <div className="flex flex-col gap-2 mt-8">
                  {navKeys.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-[#AF1E2D] text-white"
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
