"use client";

import { Trophy, Eye } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/roster", key: "nav.elenco" },
  { href: "/history", key: "nav.historia" },
  { href: "/schedule", key: "nav.partidas" },
];

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const { t } = useLang();

  useEffect(() => {
    const counted = sessionStorage.getItem("counted");
    if (counted) {
      fetch("https://api.counterapi.dev/v1/ilovehockey-babiservices/visits/")
        .then((r) => r.json())
        .then((d) => setCount(d.count))
        .catch(() => {});
      return;
    }
    fetch("https://api.counterapi.dev/v1/ilovehockey-babiservices/visits/up")
      .then((r) => r.json())
      .then((d) => {
        setCount(d.count);
        sessionStorage.setItem("counted", "1");
      })
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="flex items-center justify-center gap-1.5 text-white/40 text-xs">
      <Eye className="w-3 h-3" />
      {count.toLocaleString()} {t("footer.visitantes")}
    </span>
  );
}

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#003DA5] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-[#C8102E]" />
              <span className="text-lg font-bold">
                <span className="text-[#C8102E]">ILove</span>Hockey
              </span>
            </div>
            <p className="text-white/60 text-sm">{t("footer.acompanhe")}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#C8102E]">{t("footer.navegacao")}</h3>
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
            <h3 className="font-semibold mb-3 text-[#C8102E]">{t("footer.institucional")}</h3>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <span>Montreal Canadiens - Centre Bell</span>
              <span>1909 Avenue des Canadiens-de-Montréal</span>
              <span>Montréal, QC</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#C8102E]">{t("footer.about")}</h3>
            <Link
              href="/about"
              className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20">
                <img
                  src="/images/Mauro-jr.png"
                  alt="Mauro Jr"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              {t("footer.meetTeam")}
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col items-center gap-2">
          <VisitorCounter />
          <span className="text-white/40 text-sm">
            © {new Date().getFullYear()} ILoveHockey. {t("footer.copy")}
          </span>
        </div>
      </div>
    </footer>
  );
}
