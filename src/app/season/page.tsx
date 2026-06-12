"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, TrendingUp, TrendingDown } from "lucide-react";
import { matches } from "@/data/matches";
import { Match } from "@/data/types";
import { useLang } from "@/contexts/LanguageContext";

type SeasonFilter = "all" | "regular" | "playoffs" | "r1" | "r2" | "cf";

const SEASON_START = "2025-10-01";
const SEASON_END = "2026-07-01";
const HABS = "Montreal Canadiens";

const teamAbbrev: Record<string, string> = {
  "Montreal Canadiens": "MTL",
  "Toronto Maple Leafs": "TOR",
  "Boston Bruins": "BOS",
  "Ottawa Senators": "OTT",
  "Tampa Bay Lightning": "TBL",
  "Florida Panthers": "FLA",
  "New York Rangers": "NYR",
  "Detroit Red Wings": "DET",
  "Buffalo Sabres": "BUF",
  "Pittsburgh Penguins": "PIT",
  "Carolina Hurricanes": "CAR",
  "Washington Capitals": "WSH",
  "New Jersey Devils": "NJD",
  "Philadelphia Flyers": "PHI",
  "Colorado Avalanche": "COL",
  "Dallas Stars": "DAL",
  "Vegas Golden Knights": "VGK",
  "Edmonton Oilers": "EDM",
  "Los Angeles Kings": "LAK",
  "Minnesota Wild": "MIN",
  "Winnipeg Jets": "WPG",
  "St. Louis Blues": "STL",
  "Anaheim Ducks": "ANA",
  "Utah Mammoth": "UTA",
};

const playoffRounds: Record<string, { dateRange: [string, string]; opponent: string }> = {
  r1: { dateRange: ["2026-04-19", "2026-05-04"], opponent: "Tampa Bay Lightning" },
  r2: { dateRange: ["2026-05-05", "2026-05-19"], opponent: "Buffalo Sabres" },
  cf: { dateRange: ["2026-05-20", "2026-06-01"], opponent: "Carolina Hurricanes" },
};

function isHabsGame(m: Match) {
  return m.homeTeam === HABS || m.awayTeam === HABS;
}

function getSeasonGames() {
  return matches
    .filter((m) => m.date >= SEASON_START && m.date < SEASON_END && isHabsGame(m))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function habsResult(g: Match): "W" | "L" | null {
  if (g.status !== "finished" || g.homeScore == null || g.awayScore == null) return null;
  const isHome = g.homeTeam === HABS;
  const habsScore = isHome ? g.homeScore : g.awayScore;
  const oppScore = isHome ? g.awayScore : g.homeScore;
  return habsScore > oppScore ? "W" : "L";
}

function getRecord(games: Match[]) {
  let w = 0, l = 0;
  for (const g of games) {
    const r = habsResult(g);
    if (r === "W") w++;
    else if (r === "L") l++;
  }
  return { w, l };
}

function GameRow({ game, t, lang }: { game: Match; t: (k: string) => string; lang: string }) {
  const date = new Date(game.date + "T12:00:00");
  const formatted = date.toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", {
    month: "short",
    day: "numeric",
  });

  const isHome = game.homeTeam === HABS;
  const opponent = isHome ? game.awayTeam : game.homeTeam;
  const oppAbbrev = teamAbbrev[opponent] || opponent.substring(0, 3).toUpperCase();
  const result = habsResult(game);
  const habsScore = isHome ? game.homeScore : game.awayScore;
  const oppScore = isHome ? game.awayScore : game.homeScore;

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
      {/* Date */}
      <div className="w-16 text-xs text-white/40 shrink-0">{formatted}</div>

      {/* W/L badge */}
      {result ? (
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
            result === "W"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {result}
        </div>
      ) : (
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-white/5 text-white/30 border border-white/10">
          —
        </div>
      )}

      {/* Home/Away indicator + Opponent */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-[10px] text-white/30 w-6 shrink-0">
          {isHome ? "vs" : "@"}
        </span>
        <span className="text-sm font-bold text-white">{oppAbbrev}</span>
        <span className="text-xs text-white/30 truncate hidden sm:inline">{opponent}</span>
      </div>

      {/* Score */}
      {game.status === "finished" && habsScore != null && oppScore != null ? (
        <div className="text-sm font-mono font-bold text-white/80 shrink-0">
          <span className={result === "W" ? "text-green-400" : "text-red-400"}>{habsScore}</span>
          <span className="text-white/20 mx-1">-</span>
          <span className="text-white/50">{oppScore}</span>
        </div>
      ) : (
        <div className="text-xs text-white/30 shrink-0">{game.time} ET</div>
      )}

      {/* Competition badge */}
      <div className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
        game.competition === "NHL Playoffs"
          ? "bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30"
          : "bg-white/5 text-white/30 border border-white/10"
      }`}>
        {game.competition === "NHL Playoffs" ? "PO" : "RS"}
      </div>

      {/* Venue */}
      <div className="text-xs text-white/20 w-28 text-right truncate hidden lg:block">{game.venue}</div>
    </div>
  );
}

export default function SeasonPage() {
  const [filter, setFilter] = useState<SeasonFilter>("all");
  const { t, lang } = useLang();

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

  const rsRecord = getRecord(allGames.filter((m) => m.status === "finished" && m.competition === "NHL Regular Season"));
  const poRecord = getRecord(allGames.filter((m) => m.status === "finished" && m.competition === "NHL Playoffs"));
  const filterRecord = getRecord(filtered.filter((m) => m.status === "finished"));

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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-black text-white mb-2">{t("season.title")}</h1>
          <p className="text-white/40">{t("season.subtitle")}</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 text-center"
          >
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">{t("season.regularSeason")}</div>
            <div className="text-3xl font-black text-white">{rsRecord.w}<span className="text-white/20">-</span>{rsRecord.l}</div>
            <div className="mt-1 text-xs text-white/30">{allGames.filter(m => m.competition === "NHL Regular Season").length} {t("shared.jogos")}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl border border-[#C8102E]/30 bg-gradient-to-br from-[#C8102E]/10 to-transparent p-5 text-center"
          >
            <div className="text-[10px] text-[#C8102E]/60 uppercase tracking-widest mb-2">{t("season.playoffs")}</div>
            <div className="text-3xl font-black text-white flex items-center justify-center gap-1">
              <Trophy className="w-5 h-5 text-[#C8102E]" />
              {poRecord.w}<span className="text-white/20">-</span>{poRecord.l}
            </div>
            <div className="mt-1 text-xs text-[#C8102E]/50">ECF — {lang === "fr" ? "Finale de conf." : "Conf. Finals"}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 text-center"
          >
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">{t("season.all")}</div>
            <div className="text-3xl font-black text-white">{allGames.length}</div>
            <div className="mt-1 text-xs text-white/30">{t("shared.jogos")}</div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-6">
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

        {/* Filter record */}
        <div className="flex items-center gap-4 mb-6 text-sm">
          <span className="text-white/40">{t("season.record")}:</span>
          <span className="font-black text-white">{filterRecord.w}-{filterRecord.l}</span>
          <span className="flex items-center gap-1 text-green-400 text-xs">
            <TrendingUp className="w-3 h-3" /> {filterRecord.w}{t("season.wins")}
          </span>
          <span className="flex items-center gap-1 text-red-400 text-xs">
            <TrendingDown className="w-3 h-3" /> {filterRecord.l}{t("season.losses")}
          </span>
        </div>

        {/* Game list */}
        <div className="flex flex-col gap-1.5">
          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/40">{t("partidas.nenhuma")}</div>
          )}
          {filtered.map((game) => (
            <GameRow key={game.id} game={game} t={t} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
