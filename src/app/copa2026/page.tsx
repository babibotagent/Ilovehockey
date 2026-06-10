"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, MapPin, Clock, Calendar, Filter, Star, RefreshCw, Wifi, WifiOff } from "lucide-react";
import { copa2026Groups, copa2026Matches, Copa2026Match } from "@/data/copa2026";
import { fetchLiveMatches, LiveMatch } from "@/lib/worldcup-api";
import { useLang } from "@/contexts/LanguageContext";

const stages = [
  "Todos",
  "Fase de Grupos",
  "Oitavas (32)",
  "16 avos",
  "Quartas de Final",
  "Semifinal",
  "3º Lugar",
  "Final",
];

const stagesEn: Record<string, string> = {
  "Todos": "All",
  "Fase de Grupos": "Group Stage",
  "Oitavas (32)": "Round of 32",
  "16 avos": "Round of 16",
  "Quartas de Final": "Quarterfinals",
  "Semifinal": "Semifinals",
  "3º Lugar": "Third Place",
  "Final": "Final",
};

type UnifiedMatch = {
  id: number;
  date: string;
  timeBrasilia: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  group: string | null;
  stage: string;
  venue: string;
  city?: string;
};

function isBrazilMatch(m: UnifiedMatch) {
  return m.homeTeam === "Brasil" || m.awayTeam === "Brasil" ||
    m.homeTeam.includes("1ºC") || m.awayTeam.includes("2ºC");
}

function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr + "T12:00:00");
  const options: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric", month: "short" };
  return d.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", options);
}

function MatchRow({ match, lang }: { match: UnifiedMatch; lang: string }) {
  const isBrazil = isBrazilMatch(match);
  const hasScore = match.homeScore !== null && match.awayScore !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all ${
        isBrazil
          ? "bg-gradient-to-r from-[#FFDF00]/10 to-[#009C3B]/10 border border-[#FFDF00]/30"
          : "bg-white/5 border border-white/5 hover:border-white/10"
      }`}
    >
      {/* Match number & stage */}
      <div className="flex items-center gap-2 sm:w-28 shrink-0">
        <span className="text-[10px] text-white/30 w-6">#{match.id}</span>
        {match.group ? (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
            match.group === "C" ? "bg-[#FFDF00]/20 text-[#FFDF00]" : "bg-white/10 text-white/50"
          }`}>
            {lang === "pt" ? "Grupo" : "Group"} {match.group}
          </span>
        ) : (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#009C3B]/20 text-[#009C3B]">
            {lang === "pt" ? match.stage : stagesEn[match.stage] || match.stage}
          </span>
        )}
      </div>

      {/* Date & Time */}
      <div className="flex items-center gap-3 sm:w-40 shrink-0 text-xs">
        <span className="text-white/50">
          <Calendar className="w-3 h-3 inline mr-1" />
          {formatDate(match.date, lang)}
        </span>
        <span className="text-[#FFDF00] font-mono font-bold">
          <Clock className="w-3 h-3 inline mr-1" />
          {match.timeBrasilia}
        </span>
      </div>

      {/* Teams & Score */}
      <div className="flex-1 flex items-center gap-2">
        <span className={`font-medium text-sm ${
          match.homeTeam === "Brasil" ? "text-[#FFDF00] font-bold" : "text-white"
        }`}>
          {match.homeTeam}
        </span>
        {hasScore ? (
          <span className="text-[#FFDF00] font-mono font-black text-base px-3 py-0.5 bg-white/5 rounded-lg">
            {match.homeScore} - {match.awayScore}
          </span>
        ) : (
          <span className="text-white/30 text-xs px-2">vs</span>
        )}
        <span className={`font-medium text-sm ${
          match.awayTeam === "Brasil" ? "text-[#FFDF00] font-bold" : "text-white"
        }`}>
          {match.awayTeam}
        </span>
      </div>

      {/* Venue */}
      <div className="flex items-center gap-1 text-[11px] text-white/30 sm:w-48 shrink-0 sm:text-right sm:justify-end">
        <MapPin className="w-3 h-3 shrink-0" />
        <span className="truncate">{match.venue}{match.city ? `, ${match.city}` : ""}</span>
      </div>
    </motion.div>
  );
}

function staticToUnified(m: Copa2026Match): UnifiedMatch {
  return {
    id: m.id,
    date: m.date,
    timeBrasilia: m.timeBrasilia,
    homeTeam: m.homeTeam,
    awayTeam: m.awayTeam,
    homeScore: m.homeScore ?? null,
    awayScore: m.awayScore ?? null,
    group: m.group ?? null,
    stage: m.stage,
    venue: m.venue,
    city: m.city,
  };
}

function liveToUnified(m: LiveMatch): UnifiedMatch {
  return {
    id: m.id,
    date: m.date,
    timeBrasilia: m.timeBrasilia,
    homeTeam: m.homeTeam,
    awayTeam: m.awayTeam,
    homeScore: m.homeScore,
    awayScore: m.awayScore,
    group: m.group,
    stage: m.stage,
    venue: m.venue,
  };
}

export default function Copa2026Page() {
  const { t, lang } = useLang();
  const [stageFilter, setStageFilter] = useState("Todos");
  const [groupFilter, setGroupFilter] = useState("Todos");
  const [onlyBrazil, setOnlyBrazil] = useState(false);
  const [matches, setMatches] = useState<UnifiedMatch[]>(copa2026Matches.map(staticToUnified));
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const loadLiveData = async () => {
    setLoading(true);
    try {
      const liveMatches = await fetchLiveMatches(lang);
      if (liveMatches.length > 0) {
        setMatches(liveMatches.map(liveToUnified));
        setIsLive(true);
        setLastUpdate(new Date());
      }
    } catch {
      // Fallback to static data
      setIsLive(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLiveData();
    // Auto-refresh every 5 minutes
    const interval = setInterval(loadLiveData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      if (stageFilter !== "Todos" && m.stage !== stageFilter) return false;
      if (groupFilter !== "Todos" && m.group !== groupFilter) return false;
      if (onlyBrazil && !isBrazilMatch(m)) return false;
      return true;
    });
  }, [matches, stageFilter, groupFilter, onlyBrazil]);

  const matchesByDate = useMemo(() => {
    const map = new Map<string, UnifiedMatch[]>();
    filtered.forEach((m) => {
      const key = m.date;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(m);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const gamesWithScores = matches.filter((m) => m.homeScore !== null).length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006B2D]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFDF00]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Trophy className="w-12 h-12 text-[#FFDF00] mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-black text-white">
              {lang === "pt" ? "Copa do Mundo" : "World Cup"}{" "}
              <span className="text-[#FFDF00]">2026</span>
            </h1>
            <p className="text-white/50 text-lg mt-3 max-w-2xl mx-auto">
              {lang === "pt"
                ? "Tabela completa · 104 jogos · 16 cidades · Horários de Brasília (BRT)"
                : "Full schedule · 104 matches · 16 cities · Brasília time (BRT)"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-white/40">
              <span>🇺🇸 🇲🇽 🇨🇦 EUA · México · Canadá</span>
              <span>📅 11 {lang === "pt" ? "jun" : "Jun"} – 19 {lang === "pt" ? "jul" : "Jul"} 2026</span>
              <span>⏰ {lang === "pt" ? "Horário de Brasília (BRT / UTC-3)" : "Brasília Time (BRT / UTC-3)"}</span>
            </div>

            {/* Live status */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full ${
                isLive
                  ? "bg-[#009C3B]/20 text-[#009C3B]"
                  : "bg-white/5 text-white/30"
              }`}>
                {isLive ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                {isLive
                  ? (lang === "pt" ? "Dados ao vivo" : "Live data")
                  : (lang === "pt" ? "Dados estáticos" : "Static data")}
              </span>
              {gamesWithScores > 0 && (
                <span className="text-xs text-white/30">
                  {gamesWithScores} {lang === "pt" ? "jogos com resultado" : "matches with results"}
                </span>
              )}
              <button
                onClick={loadLiveData}
                disabled={loading}
                className="flex items-center gap-1 text-xs text-white/40 hover:text-[#FFDF00] transition-colors"
              >
                <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
                {lang === "pt" ? "Atualizar" : "Refresh"}
              </button>
              {lastUpdate && (
                <span className="text-[10px] text-white/20">
                  {lastUpdate.toLocaleTimeString(lang === "pt" ? "pt-BR" : "en-US", { hour: "2-digit", minute: "2-digit" })}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Groups */}
      <section className="py-10 px-4 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            {lang === "pt" ? "12 Grupos · 48 Seleções" : "12 Groups · 48 Teams"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {copa2026Groups.map((g) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-xl p-3 border text-center ${
                  g.name === "C"
                    ? "bg-[#FFDF00]/10 border-[#FFDF00]/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className={`font-black text-sm mb-2 ${
                  g.name === "C" ? "text-[#FFDF00]" : "text-white/60"
                }`}>
                  {lang === "pt" ? "Grupo" : "Group"} {g.name}
                </div>
                {g.teams.map((team) => (
                  <div
                    key={team}
                    className={`text-xs py-0.5 ${
                      team === "Brasil" ? "text-[#FFDF00] font-bold" : "text-white/50"
                    }`}
                  >
                    {team}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {lang === "pt" ? "Tabela Completa" : "Full Schedule"}
          </h2>

          {/* Filters */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 flex-wrap justify-center">
              {stages.map((s) => (
                <button
                  key={s}
                  onClick={() => { setStageFilter(s); if (s !== "Fase de Grupos") setGroupFilter("Todos"); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    stageFilter === s
                      ? "bg-[#FFDF00] text-[#006B2D]"
                      : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {lang === "pt" ? s : stagesEn[s] || s}
                </button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap justify-center items-center">
              {stageFilter === "Fase de Grupos" && (
                <>
                  <Filter className="w-3 h-3 text-white/30" />
                  {["Todos", ...copa2026Groups.map((g) => g.name)].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGroupFilter(g)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        groupFilter === g
                          ? g === "C" ? "bg-[#FFDF00] text-[#006B2D]" : "bg-white/20 text-white"
                          : g === "C" ? "bg-[#FFDF00]/10 text-[#FFDF00] border border-[#FFDF00]/20" : "bg-white/5 text-white/40 border border-white/10"
                      }`}
                    >
                      {g === "Todos" ? (lang === "pt" ? "Todos" : "All") : g}
                    </button>
                  ))}
                </>
              )}
              <button
                onClick={() => setOnlyBrazil(!onlyBrazil)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                  onlyBrazil
                    ? "bg-[#009C3B] text-white"
                    : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"
                }`}
              >
                <Star className="w-3 h-3" />
                {lang === "pt" ? "Só Brasil" : "Brazil Only"}
              </button>
            </div>
          </div>

          {/* Match count */}
          <div className="text-center text-xs text-white/30 mb-6">
            {filtered.length} {lang === "pt" ? "jogos" : "matches"}
            {" · "}
            {lang === "pt" ? "Todos os horários em Brasília (BRT / UTC-3)" : "All times in Brasília (BRT / UTC-3)"}
          </div>

          {/* Matches grouped by date */}
          <div className="space-y-6">
            {matchesByDate.map(([date, dayMatches]) => (
              <div key={date}>
                <div className="sticky top-16 z-10 bg-[#071a0e]/90 backdrop-blur-sm py-2 mb-2">
                  <h3 className="text-sm font-bold text-[#FFDF00] flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(date, lang)}
                    <span className="text-white/20 font-normal">
                      ({dayMatches.length} {lang === "pt" ? "jogos" : "matches"})
                    </span>
                  </h3>
                </div>
                <div className="space-y-2">
                  {dayMatches.map((m) => (
                    <MatchRow key={m.id} match={m} lang={lang} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/40">
              {lang === "pt" ? "Nenhum jogo encontrado com esses filtros." : "No matches found with these filters."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
