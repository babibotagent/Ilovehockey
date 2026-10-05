"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, TrendingDown } from "lucide-react";
import { Match, Competition } from "@/data/types";
import { useLang } from "@/contexts/LanguageContext";

const HABS = "Montreal Canadiens";
const UPCOMING_PREVIEW = 5;

export interface SeasonFilterDef {
  key: string;
  labelKey: string;
  competition?: Competition;
  dateRange?: [string, string];
  opponent?: string;
}

interface Props {
  games: Match[];
  titleKey: string;
  filters: SeasonFilterDef[];
  playoffsNote?: { en: string; fr: string };
  showOtl?: boolean;
}

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

type Result = "W" | "L" | "OTL";

function habsResult(g: Match): Result | null {
  if (g.status !== "finished" || g.homeScore == null || g.awayScore == null) return null;
  const isHome = g.homeTeam === HABS;
  const habsScore = isHome ? g.homeScore : g.awayScore;
  const oppScore = isHome ? g.awayScore : g.homeScore;
  if (habsScore > oppScore) return "W";
  const overtime = g.periodType === "OT" || g.periodType === "SO";
  return overtime && g.competition === "NHL Regular Season" ? "OTL" : "L";
}

function getRecord(games: Match[]) {
  let w = 0, l = 0, otl = 0;
  for (const g of games) {
    const r = habsResult(g);
    if (r === "W") w++;
    else if (r === "L") l++;
    else if (r === "OTL") otl++;
  }
  return { w, l, otl };
}

function formatRecord(r: { w: number; l: number; otl: number }, showOtl?: boolean) {
  return showOtl || r.otl > 0 ? `${r.w}-${r.l}-${r.otl}` : `${r.w}-${r.l}`;
}

function TeamSide({ abbrev, name, side }: { abbrev: string; name: string; side: "left" | "right" }) {
  const logo = (
    <img
      src={`https://assets.nhle.com/logos/nhl/svg/${abbrev}_dark.svg`}
      alt=""
      width={28}
      height={28}
      loading="lazy"
      className="w-7 h-7 shrink-0"
      onError={(e) => {
        e.currentTarget.style.visibility = "hidden";
      }}
    />
  );
  const label = (
    <div className={`${side === "left" ? "text-right" : "text-left"} sm:min-w-0`}>
      <div className="text-sm font-black text-white leading-tight">{abbrev}</div>
      <div className="text-[11px] text-white/40 truncate hidden sm:block leading-tight">{name}</div>
    </div>
  );
  return (
    <div className={`flex items-center gap-2 flex-1 min-w-0 ${side === "left" ? "justify-end" : "justify-start"}`}>
      {side === "left" ? (
        <>
          {label}
          {logo}
        </>
      ) : (
        <>
          {logo}
          {label}
        </>
      )}
    </div>
  );
}

function GameRow({
  game,
  lang,
  liveLabel,
  t,
}: {
  game: Match;
  lang: string;
  liveLabel: string;
  t: (k: string) => string;
}) {
  const date = new Date(game.date + "T12:00:00");
  const formatted = date.toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", {
    month: "short",
    day: "numeric",
  });

  const isHome = game.homeTeam === HABS;
  const opponent = isHome ? game.awayTeam : game.homeTeam;
  const oppAbbrev =
    (isHome ? game.awayAbbrev : game.homeAbbrev) ||
    teamAbbrev[opponent] ||
    opponent.substring(0, 3).toUpperCase();
  const result = habsResult(game);
  const hasScore = game.status !== "upcoming" && game.homeScore != null && game.awayScore != null;
  const habsScore = isHome ? game.homeScore : game.awayScore;
  const oppScore = isHome ? game.awayScore : game.homeScore;
  const isLive = game.status === "live";
  const overtime = game.periodType === "OT" || game.periodType === "SO";

  const badgeClass =
    result === "W"
      ? "bg-green-500/20 text-green-400 border border-green-500/30"
      : result === "OTL"
      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
      : result === "L"
      ? "bg-red-500/20 text-red-400 border border-red-500/30"
      : "bg-white/5 text-white/30 border border-white/10";

  return (
    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
      <div className="w-12 sm:w-14 shrink-0">
        <div className="text-xs text-white/50 whitespace-nowrap">{formatted}</div>
        <div className="text-[10px] uppercase tracking-wide text-white/30">
          {isHome ? t("season.home") : t("season.away")}
        </div>
      </div>

      {isLive ? (
        <div className="px-2 h-7 rounded-full flex items-center gap-1 text-[10px] font-black shrink-0 bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
          {liveLabel}
        </div>
      ) : (
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center font-black shrink-0 ${
            result === "OTL" ? "text-[9px]" : "text-xs"
          } ${badgeClass}`}
        >
          {result ?? "—"}
        </div>
      )}

      <TeamSide abbrev={isHome ? game.homeAbbrev || "MTL" : game.awayAbbrev || "MTL"} name={HABS} side="left" />

      <div className="w-16 sm:w-24 shrink-0 text-center">
        {hasScore && habsScore != null && oppScore != null ? (
          <>
            <div className="font-mono font-black text-lg leading-none">
              <span
                className={
                  isLive ? "text-white" : result === "W" ? "text-green-400" : result === "OTL" ? "text-amber-400" : "text-red-400"
                }
              >
                {habsScore}
              </span>
              <span className="text-white/20 mx-1.5">–</span>
              <span className="text-white/50">{oppScore}</span>
            </div>
            {overtime && <div className="text-[10px] font-bold text-white/40 mt-1">{game.periodType}</div>}
          </>
        ) : (
          <div className="text-xs text-white/40">{game.time} ET</div>
        )}
      </div>

      <TeamSide abbrev={oppAbbrev} name={opponent} side="right" />

      <div
        className={`hidden sm:block text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
          game.competition === "NHL Playoffs"
            ? "bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30"
            : "bg-white/5 text-white/30 border border-white/10"
        }`}
      >
        {game.competition === "NHL Playoffs" ? "PO" : game.competition === "NHL Preseason" ? "PS" : "RS"}
      </div>

      <div className="text-xs text-white/20 w-28 text-right truncate hidden lg:block">{game.venue}</div>
    </div>
  );
}

export function SeasonView({ games, titleKey, filters, playoffsNote, showOtl }: Props) {
  const [filter, setFilter] = useState("all");
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const { t, lang } = useLang();

  const counted = games.filter((m) => m.competition !== "NHL Preseason");
  const active = filters.find((f) => f.key === filter);

  const filtered = games.filter((m) => {
    if (!active || active.key === "all") return true;
    if (active.competition && m.competition !== active.competition) return false;
    if (active.dateRange && (m.date < active.dateRange[0] || m.date > active.dateRange[1])) return false;
    if (active.opponent && m.homeTeam !== active.opponent && m.awayTeam !== active.opponent) return false;
    return true;
  });

  const upcoming = filtered
    .filter((m) => m.status !== "finished")
    .sort((a, b) => (a.startUtc ?? a.date).localeCompare(b.startUtc ?? b.date));
  const results = filtered
    .filter((m) => m.status === "finished")
    .sort((a, b) => (b.startUtc ?? b.date).localeCompare(a.startUtc ?? a.date));

  const rsRecord = getRecord(counted.filter((m) => m.competition === "NHL Regular Season"));
  const poRecord = getRecord(counted.filter((m) => m.competition === "NHL Playoffs"));
  const filterRecord = getRecord(
    filtered.filter((m) => m.competition !== "NHL Preseason" || active?.competition === "NHL Preseason")
  );
  const rsTotal = counted.filter((m) => m.competition === "NHL Regular Season").length;

  const visibleUpcoming = showAllUpcoming ? upcoming : upcoming.slice(0, UPCOMING_PREVIEW);
  const sections = upcoming.length > 0 && results.length > 0;
  const liveLabel = t("season.live");

  return (
    <div className="relative min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-4xl font-black text-white mb-2">{t(titleKey)}</h1>
          <p className="text-white/40">{t("season.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 sm:p-5 text-center"
          >
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">{t("season.regularSeason")}</div>
            <div className="text-2xl sm:text-3xl font-black text-white whitespace-nowrap">{formatRecord(rsRecord, showOtl)}</div>
            <div className="mt-1 text-xs text-white/30">
              {rsTotal} {t("shared.jogos")}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl border border-[#C8102E]/30 bg-gradient-to-br from-[#C8102E]/10 to-transparent p-3 sm:p-5 text-center"
          >
            <div className="text-[10px] text-[#C8102E]/60 uppercase tracking-widest mb-2">{t("season.playoffs")}</div>
            <div className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center gap-1 whitespace-nowrap">
              <Trophy className="w-5 h-5 text-[#C8102E]" />
              {formatRecord(poRecord)}
            </div>
            {playoffsNote && <div className="mt-1 text-xs text-[#C8102E]/50">{lang === "fr" ? playoffsNote.fr : playoffsNote.en}</div>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 sm:p-5 text-center"
          >
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">{t("season.all")}</div>
            <div className="text-2xl sm:text-3xl font-black text-white">{counted.length}</div>
            <div className="mt-1 text-xs text-white/30">{t("shared.jogos")}</div>
          </motion.div>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setFilter(f.key);
                setShowAllUpcoming(false);
              }}
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

        <div className="flex items-center gap-4 mb-6 text-sm">
          <span className="text-white/40">{t("season.record")}:</span>
          <span className="font-black text-white">{formatRecord(filterRecord, showOtl && filter !== "playoffs")}</span>
          <span className="flex items-center gap-1 text-green-400 text-xs">
            <TrendingUp className="w-3 h-3" /> {filterRecord.w}
            {t("season.wins")}
          </span>
          <span className="flex items-center gap-1 text-red-400 text-xs">
            <TrendingDown className="w-3 h-3" /> {filterRecord.l}
            {t("season.losses")}
          </span>
          {(showOtl || filterRecord.otl > 0) && (
            <span className="text-amber-400 text-xs">
              {filterRecord.otl}
              {t("season.otl")}
            </span>
          )}
        </div>

        {filtered.length === 0 && <div className="text-center py-20 text-white/40">{t("partidas.nenhuma")}</div>}

        {upcoming.length > 0 && (
          <div className="mb-8">
            {sections && (
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                {t("partidas.proximos")}
              </h2>
            )}
            <div className="flex flex-col gap-1.5">
              {visibleUpcoming.map((game) => (
                <GameRow key={game.id} game={game} lang={lang} liveLabel={liveLabel} t={t} />
              ))}
            </div>
            {upcoming.length > UPCOMING_PREVIEW && (
              <button
                onClick={() => setShowAllUpcoming(!showAllUpcoming)}
                className="mt-3 text-sm text-[#C8102E] hover:underline font-medium"
              >
                {showAllUpcoming ? t("season.showLess") : `${t("season.showAll")} (${upcoming.length})`}
              </button>
            )}
          </div>
        )}

        {results.length > 0 && (
          <div>
            {sections && <h2 className="text-lg font-bold text-white mb-3">{t("partidas.resultados")}</h2>}
            <div className="flex flex-col gap-1.5">
              {results.map((game) => (
                <GameRow key={game.id} game={game} lang={lang} liveLabel={liveLabel} t={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
