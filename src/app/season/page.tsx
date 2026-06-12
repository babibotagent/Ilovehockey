"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, Filter } from "lucide-react";
import { matches } from "@/data/matches";
import { MatchCard } from "@/components/shared/MatchCard";
import { useLang } from "@/contexts/LanguageContext";

type SeasonFilter = "all" | "regular" | "playoffs" | "r1" | "r2" | "cf";

const SEASON_START = "2025-10-01";
const SEASON_END = "2026-07-01";

const HABS = "Montreal Canadiens";

const playoffRounds: Record<string, { dateRange: [string, string]; opponent: string }> = {
  r1: { dateRange: ["2026-04-19", "2026-05-04"], opponent: "Tampa Bay Lightning" },
  r2: { dateRange: ["2026-05-05", "2026-05-19"], opponent: "Buffalo Sabres" },
  cf: { dateRange: ["2026-05-20", "2026-06-01"], opponent: "Carolina Hurricanes" },
};

function isHabsGame(m: typeof matches[0]) {
  return m.homeTeam === HABS || m.awayTeam === HABS;
}

function getSeasonGames() {
  return matches
    .filter((m) => m.date >= SEASON_START && m.date < SEASON_END && isHabsGame(m))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function getRecord(games: typeof matches) {
  let w = 0, l = 0, otl = 0;
  for (const g of games) {
    if (g.status !== "finished" || g.homeScore == null || g.awayScore == null) continue;
    const isHome = g.homeTeam === HABS;
    const habsScore = isHome ? g.homeScore : g.awayScore;
    const oppScore = isHome ? g.awayScore : g.homeScore;
    if (habsScore > oppScore) w++;
    else l++;
  }
  return { w, l, otl };
}

export default function SeasonPage() {
  const [filter, setFilter] = useState<SeasonFilter>("all");
  const { t } = useLang();

  const allGames = getSeasonGames();

  const filtered = allGames.filter((m) => {
    if (filter === "all") return true;
    if (filter === "regular") return m.competition === "NHL Regular Season";
    if (filter === "playoffs") return m.competition === "NHL Playoffs";
    if (filter === "r1" || filter === "r2" || filter === "cf") {
      const round = playoffRounds[filter];
      return (
        m.competition === "NHL Playoffs" &&
        m.date >= round.dateRange[0] &&
        m.date <= round.dateRange[1] &&
        (m.homeTeam === round.opponent || m.awayTeam === round.opponent)
      );
    }
    return true;
  });

  const finished = filtered.filter((m) => m.status === "finished");
  const upcoming = filtered.filter((m) => m.status === "upcoming");

  const record = getRecord(filtered.filter((m) => m.status === "finished"));
  const rsRecord = getRecord(allGames.filter((m) => m.status === "finished" && m.competition === "NHL Regular Season"));
  const poRecord = getRecord(allGames.filter((m) => m.status === "finished" && m.competition === "NHL Playoffs"));

  const filters: { key: SeasonFilter; labelKey: string }[] = [
    { key: "all", labelKey: "season.all" },
    { key: "regular", labelKey: "season.regularSeason" },
    { key: "playoffs", labelKey: "season.playoffs" },
    { key: "r1", labelKey: "season.round1" },
    { key: "r2", labelKey: "season.round2" },
    { key: "cf", labelKey: "season.confFinals" },
  ];

  return (
    <div className="relative min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-[#C8102E]" />
            <h1 className="text-4xl font-black text-white">{t("season.title")}</h1>
          </div>
          <p className="text-white/50 mt-2">{t("season.subtitle")}</p>
        </motion.div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{t("season.regularSeason")}</div>
            <div className="text-2xl font-black text-white">{rsRecord.w}-{rsRecord.l}-{rsRecord.otl}</div>
          </div>
          <div className="rounded-xl border border-[#C8102E]/30 bg-[#C8102E]/10 p-4 text-center">
            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{t("season.playoffs")}</div>
            <div className="text-2xl font-black text-white flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 text-[#C8102E]" />
              {poRecord.w}-{poRecord.l}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{t("season.all")}</div>
            <div className="text-2xl font-black text-white">{allGames.length} {t("shared.jogos")}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-[#C8102E] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>

        {/* Current filter record */}
        {filter !== "all" && (
          <div className="mb-6 text-sm text-white/50">
            {t("season.record")}: <span className="text-white font-bold">{record.w}-{record.l}</span>
          </div>
        )}

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
              {t("partidas.proximos")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcoming.map((match, i) => (
                <MatchCard key={match.id} match={match} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {finished.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">{t("partidas.resultados")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {finished.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((match, i) => (
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
