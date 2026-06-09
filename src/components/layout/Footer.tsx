"use client";

import { Trophy } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/elenco", key: "nav.elenco" },
  { href: "/historia", key: "nav.historia" },
  { href: "/partidas", key: "nav.partidas" },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#006B2D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-[#FFDF00]" />
              <span className="text-lg font-bold">
                <span className="text-[#FFDF00]">Brasil</span>FC
              </span>
            </div>
            <p className="text-white/60 text-sm">{t("footer.acompanhe")}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#FFDF00]">{t("footer.navegacao")}</h3>
            <div className="flex flex-col gap-2">
              {navKeys.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#FFDF00]">{t("footer.institucional")}</h3>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <span>CBF - Confederação Brasileira de Futebol</span>
              <span>Rua Victor Civita, 66 - Rio de Janeiro</span>
              <span>contato@cbf.com.br</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} BrasilFC. {t("footer.copy")}
        </div>
      </div>
    </footer>
  );
}
