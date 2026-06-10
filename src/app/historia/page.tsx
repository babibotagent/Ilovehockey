"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, Trophy, MapPin, Users, ChevronDown, ChevronUp, Goal } from "lucide-react";
import { worldCupEditions, WorldCupEdition } from "@/data/worldcups";
import { legends } from "@/data/legends";
import { StatBlock } from "@/components/shared/StatBlock";
import { useLang } from "@/contexts/LanguageContext";

function WorldCupCard({ cup, index }: { cup: WorldCupEdition; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLang();
  const isBrazilChampion = cup.champion === "Brasil";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`relative rounded-2xl border p-6 md:p-8 transition-all ${
        isBrazilChampion
          ? "bg-gradient-to-r from-[#FFDF00]/10 to-[#009C3B]/10 border-[#FFDF00]/30"
          : "bg-gradient-to-r from-white/5 to-white/[0.02] border-white/10 hover:border-white/20"
      }`}
    >
      {/* Year watermark */}
      <div className="absolute top-4 right-6 text-6xl md:text-7xl font-black text-white/5">
        {cup.year}
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className={`font-black text-lg px-4 py-1 rounded-lg ${
            isBrazilChampion ? "bg-[#FFDF00] text-[#006B2D]" : "bg-white/10 text-white"
          }`}>
            {cup.year}
          </div>
          <span className="text-2xl">{cup.hostFlag}</span>
          <span className="text-white/40 text-sm">{cup.host}</span>
          {isBrazilChampion && (
            <span className="flex items-center gap-1 bg-[#FFDF00]/20 text-[#FFDF00] text-xs font-bold px-3 py-1 rounded-full">
              <Trophy className="w-3 h-3" /> {t("historia.campeonato")}
            </span>
          )}
        </div>

        {/* Champion & Runner-up */}
        <div className="flex flex-wrap gap-4 mb-3 text-sm">
          <span className="text-white/80">
            <strong className="text-[#FFDF00]">🏆 {t("historia.campeonato")}:</strong> {cup.championFlag} {cup.champion}
          </span>
          <span className="text-white/60">
            🥈 {cup.runnerUpFlag} {cup.runnerUp}
          </span>
          <span className="text-white/40">
            🥉 {cup.thirdFlag} {cup.third}
          </span>
        </div>

        {/* Final result */}
        <h3 className="text-xl font-bold text-white mb-2">{cup.final}</h3>
        <p className="text-xs text-white/40 mb-3">
          <MapPin className="w-3 h-3 inline mr-1" />
          {cup.finalVenue}, {cup.finalCity}
        </p>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-4">{cup.description}</p>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-4 text-xs text-white/40 mb-4">
          <span>
            <strong className="text-white/60">{t("historia.tecnico")}</strong> {cup.coach}
          </span>
          <span>
            <strong className="text-white/60">{t("historia.artilheiro")}</strong> {cup.goldenBoot.name} ({cup.goldenBoot.goals} gols)
          </span>
          <span>
            <strong className="text-white/60">{t("historia.resultadobrasil")}:</strong>{" "}
            <span className={isBrazilChampion ? "text-[#FFDF00]" : ""}>{cup.brazilResult}</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-white/30 mb-4">
          <span>{cup.teams} {t("partidas.title").toLowerCase()}</span>
          <span>{cup.totalMatches} {t("historia.totalpartidas").toLowerCase()}</span>
          <span>{cup.totalGoals} {t("jogador.gols").toLowerCase()}</span>
          <span>{t("historia.publico")}: {cup.attendance}</span>
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-[#FFDF00] hover:text-[#FFDF00]/80 transition-colors font-medium"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? t("historia.recolher") : t("historia.jogosdobrasil")}
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-6">
                {/* Brazil Matches */}
                <div>
                  <h4 className="text-sm font-bold text-[#FFDF00] mb-3 flex items-center gap-2">
                    <Goal className="w-4 h-4" /> {t("historia.jogosdobrasil")}
                  </h4>
                  <div className="space-y-2">
                    {cup.brazilMatches.map((m, i) => (
                      <div
                        key={i}
                        className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs p-2 rounded-lg ${
                          m.notes ? "bg-white/5" : ""
                        }`}
                      >
                        <span className="text-white/30 w-24 shrink-0">{m.stage}</span>
                        <span className="text-white/40 w-20 shrink-0">{m.date}</span>
                        <span className="text-white font-medium">
                          {m.homeTeam} <strong className="text-[#FFDF00]">{m.homeScore} x {m.awayScore}</strong> {m.awayTeam}
                        </span>
                        <span className="text-white/30 ml-auto hidden sm:block">{m.venue}, {m.city}</span>
                        {m.notes && (
                          <span className="text-[#FFDF00]/70 text-[10px] italic">{m.notes}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Players */}
                <div>
                  <h4 className="text-sm font-bold text-[#FFDF00] mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> {t("historia.elenque")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cup.brazilSquadHighlights.map((p) => (
                      <span
                        key={p.name}
                        className="text-xs bg-white/5 text-white/70 px-3 py-1.5 rounded-lg border border-white/10"
                      >
                        <strong className="text-white">{p.name}</strong>
                        <span className="text-white/30 ml-1">({p.position})</span>
                        {p.goals !== undefined && p.goals > 0 && (
                          <span className="text-[#FFDF00] ml-1">{p.goals}⚽</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Groups */}
                <div>
                  <h4 className="text-sm font-bold text-[#FFDF00] mb-3">{t("historia.grupos")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    {cup.allGroupStage.map((g) => (
                      <div key={g.group} className="bg-white/5 rounded-lg p-3 text-xs">
                        <div className="font-bold text-white/60 mb-2">{g.group}</div>
                        {g.teams.map((team) => (
                          <div
                            key={team}
                            className={`py-0.5 ${
                              g.qualified.includes(team)
                                ? "text-[#009C3B] font-medium"
                                : "text-white/40"
                            }`}
                          >
                            {g.qualified.includes(team) ? "✓ " : "  "}
                            {team}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Facts */}
                <div>
                  <h4 className="text-sm font-bold text-[#FFDF00] mb-3">{t("historia.curiosidades")}</h4>
                  <ul className="space-y-1.5">
                    {cup.keyFacts.map((fact, i) => (
                      <li key={i} className="text-xs text-white/50 flex items-start gap-2">
                        <span className="text-[#FFDF00] mt-0.5">•</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function HistoriaPage() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"all" | "titles">("all");

  const filteredCups = filter === "titles"
    ? worldCupEditions.filter((c) => c.champion === "Brasil")
    : worldCupEditions;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006B2D]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFDF00]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#FFDF00] fill-[#FFDF00]" />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              {t("historia.title")} <span className="text-[#FFDF00]">{t("historia.title2")}</span>
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              {t("historia.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBlock value={5} label={t("historia.copas")} suffix="x" />
          <StatBlock value={237} label={t("historia.jogoscopas")} delay={200} />
          <StatBlock value={76} label={t("historia.vitorias")} delay={400} />
          <StatBlock value={229} label={t("historia.golscopas")} delay={600} />
        </div>
      </section>

      {/* World Cups Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            {t("historia.todascopas")}
          </h2>
          <p className="text-white/50 text-center mb-8 max-w-xl mx-auto">
            {t("historia.todascopas.sub")}
          </p>

          {/* Filter */}
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-[#FFDF00] text-[#006B2D]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {t("historia.todas")} ({worldCupEditions.length})
            </button>
            <button
              onClick={() => setFilter("titles")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "titles"
                  ? "bg-[#FFDF00] text-[#006B2D]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {t("historia.soCampeonatos")}
            </button>
          </div>

          <div className="space-y-6">
            {filteredCups.map((cup, i) => (
              <WorldCupCard key={cup.year} cup={cup} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Legends */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            {t("historia.lendas")}
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
            {t("historia.lendas.sub")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legends.map((legend, i) => (
              <motion.div
                key={legend.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl bg-white/5 border border-white/10 p-6 hover:border-[#FFDF00]/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFDF00]/20 to-[#009C3B]/20 flex items-center justify-center shrink-0">
                    <User className="w-7 h-7 text-[#FFDF00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#FFDF00] transition-colors">
                      {legend.shortName}
                    </h3>
                    <p className="text-xs text-white/40">
                      {t(`pos.${legend.position}`)} · {legend.era}
                    </p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{legend.description}</p>
                <div className="flex gap-4 text-sm mb-4">
                  <span className="text-white/60">
                    <strong className="text-[#FFDF00]">{legend.stats.games}</strong> {t("shared.jogos")}
                  </span>
                  <span className="text-white/60">
                    <strong className="text-[#FFDF00]">{legend.stats.goals}</strong> {t("shared.gols")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {legend.achievements.slice(0, 2).map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-[#FFDF00]/5 text-[#FFDF00]/80 px-2 py-1 rounded-md border border-[#FFDF00]/10"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
