"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, MapPin, Users, ChevronDown, ChevronUp, Star, Medal } from "lucide-react";
import { olympicEditions, OlympicEdition } from "@/data/volei";

function OlympicCard({ edition, index }: { edition: OlympicEdition; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMedal = !!edition.medal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`relative rounded-2xl border p-6 md:p-8 transition-all ${
        edition.medal === "gold"
          ? "bg-gradient-to-r from-[#FFDF00]/10 to-[#3b82f6]/10 border-[#FFDF00]/30"
          : edition.medal === "silver"
          ? "bg-gradient-to-r from-gray-300/10 to-[#3b82f6]/10 border-gray-300/30"
          : "bg-gradient-to-r from-white/5 to-white/[0.02] border-white/10 hover:border-white/20"
      }`}
    >
      <div className="absolute top-4 right-6 text-6xl md:text-7xl font-black text-white/5">
        {edition.year}
      </div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className={`font-black text-lg px-4 py-1 rounded-lg ${
            edition.medal === "gold"
              ? "bg-[#FFDF00] text-[#1e3a5f]"
              : edition.medal === "silver"
              ? "bg-gray-300 text-[#1e3a5f]"
              : "bg-white/10 text-white"
          }`}>
            {edition.year}
          </div>
          <span className="text-2xl">{edition.hostFlag}</span>
          <span className="text-white/40 text-sm">{edition.host}</span>
          {hasMedal && (
            <span className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${
              edition.medal === "gold"
                ? "bg-[#FFDF00]/20 text-[#FFDF00]"
                : "bg-gray-300/20 text-gray-300"
            }`}>
              {edition.medal === "gold" ? "🥇" : "🥈"} {edition.result}
            </span>
          )}
          {!hasMedal && (
            <span className="text-xs text-white/40 px-3 py-1 rounded-full bg-white/5">
              {edition.result}
            </span>
          )}
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-4">{edition.description}</p>

        <div className="flex flex-wrap gap-4 text-xs text-white/40 mb-4">
          <span><strong className="text-white/60">Técnico:</strong> {edition.coach}</span>
          <span><strong className="text-white/60">Jogos:</strong> {edition.brazilMatches.length}</span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-[#60a5fa] hover:text-[#3b82f6] transition-colors font-medium"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? "Recolher" : "Jogos do Brasil"}
        </button>

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
                {/* Matches */}
                <div>
                  <h4 className="text-sm font-bold text-[#60a5fa] mb-3 flex items-center gap-2">
                    🏐 Jogos do Brasil
                  </h4>
                  <div className="space-y-2">
                    {edition.brazilMatches.map((m, i) => (
                      <div
                        key={i}
                        className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs p-2 rounded-lg ${
                          m.notes ? "bg-white/5" : ""
                        }`}
                      >
                        <span className="text-white/30 w-28 shrink-0">{m.stage}</span>
                        <span className="text-white/40 w-20 shrink-0">{m.date}</span>
                        <span className="text-white font-medium">
                          {m.homeTeam}{" "}
                          <strong className="text-[#60a5fa]">{m.homeScore} x {m.awayScore}</strong>{" "}
                          {m.awayTeam}
                          <span className="text-white/30 ml-1">({m.sets})</span>
                        </span>
                        {m.notes && (
                          <span className="text-[#60a5fa]/70 text-[10px] italic ml-auto">{m.notes}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Players */}
                <div>
                  <h4 className="text-sm font-bold text-[#60a5fa] mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Destaques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edition.keyPlayers.map((p) => (
                      <span
                        key={p.name}
                        className="text-xs bg-white/5 text-white/70 px-3 py-1.5 rounded-lg border border-white/10"
                      >
                        <strong className="text-white">{p.name}</strong>
                        <span className="text-white/30 ml-1">({p.position})</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Facts */}
                <div>
                  <h4 className="text-sm font-bold text-[#60a5fa] mb-3">Curiosidades</h4>
                  <ul className="space-y-1.5">
                    {edition.keyFacts.map((fact, i) => (
                      <li key={i} className="text-xs text-white/50 flex items-start gap-2">
                        <span className="text-[#60a5fa] mt-0.5">•</span>
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

export default function VoleiHistoria() {
  const [filter, setFilter] = useState<"all" | "medals">("all");

  const filtered = filter === "medals"
    ? olympicEditions.filter((e) => e.medal)
    : olympicEditions;

  const golds = olympicEditions.filter((e) => e.medal === "gold").length;
  const silvers = olympicEditions.filter((e) => e.medal === "silver").length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: golds }).map((_, i) => (
                <span key={i} className="text-4xl">🥇</span>
              ))}
              {Array.from({ length: silvers }).map((_, i) => (
                <span key={i} className="text-4xl">🥈</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Olimpíadas do <span className="text-[#60a5fa]">Vôlei</span>
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              {golds} ouros e {silvers} pratas. A história completa do vôlei masculino brasileiro nos Jogos Olímpicos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Filter */}
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-[#3b82f6] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              Todas ({olympicEditions.length})
            </button>
            <button
              onClick={() => setFilter("medals")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "medals"
                  ? "bg-[#3b82f6] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              Só Medalhas 🏅
            </button>
          </div>

          <div className="space-y-6">
            {filtered.map((edition, i) => (
              <OlympicCard key={edition.year} edition={edition} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
