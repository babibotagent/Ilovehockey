"use client";

import { useState } from "react";
import { matches } from "@/data/matches";
import { MatchCard } from "@/components/shared/MatchCard";
import { Competition } from "@/data/types";
import { useLang } from "@/contexts/LanguageContext";

const competitions: (Competition | "Todas")[] = [
  "Todas",
  "Copa do Mundo",
  "Eliminatórias",
  "Copa América",
  "Amistoso",
];

export default function PartidasPage() {
  const [filter, setFilter] = useState<Competition | "Todas">("Todas");
  const { t } = useLang();

  const sorted = [...matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filtered = sorted.filter(
    (m) => filter === "Todas" || m.competition === filter
  );

  const upcoming = filtered
    .filter((m) => m.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const finished = filtered.filter((m) => m.status === "finished");

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-white">{t("partidas.title")}</h1>
          <p className="text-white/50 mt-2">{t("partidas.subtitle")}</p>
        </div>

        <div className="flex gap-2 flex-wrap mb-10">
          {competitions.map((comp) => (
            <button
              key={comp}
              onClick={() => setFilter(comp)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === comp
                  ? "bg-[#FFDF00] text-[#006B2D]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {comp === "Todas" ? t("partidas.todas") : comp}
            </button>
          ))}
        </div>

        {upcoming.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#009C3B] animate-pulse" />
              {t("partidas.proximos")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcoming.map((match, i) => (
                <MatchCard key={match.id} match={match} index={i} />
              ))}
            </div>
          </div>
        )}

        {finished.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">{t("partidas.resultados")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {finished.map((match, i) => (
                <MatchCard key={match.id} match={match} index={i} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            {t("partidas.nenhuma")}
          </div>
        )}
      </div>
    </div>
  );
}
