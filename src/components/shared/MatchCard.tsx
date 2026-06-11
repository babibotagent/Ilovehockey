"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Match } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/contexts/LanguageContext";

function convertTime(time: string, lang: string) {
  if ((lang === "en" || lang === "fr") && time.includes(":")) {
    const [h, m] = time.split(":").map(Number);
    const edtH = ((h - 1) + 24) % 24;
    return `${String(edtH).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }
  return time;
}

export function MatchCard({ match, index = 0 }: { match: Match; index?: number }) {
  const { lang, t } = useLang();
  const date = new Date(match.date + "T12:00:00");
  const localeMap: Record<string, string> = { pt: "pt-BR", en: "en-US", fr: "fr-FR", es: "es-ES" };
  const formatted = date.toLocaleDateString(localeMap[lang] || "pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-[#FFDF00]/30 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant="outline"
          className={
            match.status === "finished"
              ? "border-white/20 text-white/60"
              : "border-[#FFDF00]/50 text-[#FFDF00]"
          }
        >
          {match.competition}
        </Badge>
        {match.status === "finished" && (
          <span className="text-xs text-white/40 uppercase tracking-wider">{t("partidas.encerrado")}</span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 text-center">
          <span className="text-3xl mb-1 block">{match.homeFlag}</span>
          <span className="text-sm font-medium text-white">{match.homeTeam}</span>
        </div>

        <div className="text-center px-4">
          {match.status === "finished" ? (
            <div className="text-2xl font-black text-white">
              {match.homeScore} <span className="text-white/30">-</span> {match.awayScore}
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[#FFDF00]">
              <Clock className="w-3 h-3" />
              <span className="text-sm font-semibold">{convertTime(match.time, lang)}</span>
            </div>
          )}
        </div>

        <div className="flex-1 text-center">
          <span className="text-3xl mb-1 block">{match.awayFlag}</span>
          <span className="text-sm font-medium text-white">{match.awayTeam}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 text-xs text-white/40">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {formatted}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {match.city}
        </span>
      </div>
    </motion.div>
  );
}
