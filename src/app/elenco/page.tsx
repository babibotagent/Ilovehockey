"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { players } from "@/data/players";
import { PlayerCard } from "@/components/shared/PlayerCard";
import { Position } from "@/data/types";
import { useLang } from "@/contexts/LanguageContext";

const positions: (Position | "Todos")[] = [
  "Todos",
  "Goleiro",
  "Zagueiro",
  "Lateral",
  "Meio-campista",
  "Atacante",
];

export default function ElencoPage() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState<Position | "Todos">("Todos");
  const { t } = useLang();

  const filtered = players.filter((p) => {
    const matchesSearch = p.shortName.toLowerCase().includes(search.toLowerCase());
    const matchesPosition = position === "Todos" || p.position === position;
    return matchesSearch && matchesPosition;
  });

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-white">{t("elenco.title")}</h1>
          <p className="text-white/50 mt-2">{t("elenco.subtitle")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder={t("elenco.buscar")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FFDF00]/50 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {positions.map((pos) => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  position === pos
                    ? "bg-[#FFDF00] text-[#002776]"
                    : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                }`}
              >
                {pos === "Todos" ? t("elenco.todos") : t(`pos.${pos}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((player, i) => (
            <PlayerCard key={player.id} player={player} variant="detailed" index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            {t("elenco.nenhum")}
          </div>
        )}
      </div>
    </div>
  );
}
