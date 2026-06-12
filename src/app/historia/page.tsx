"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Trophy, Users, ChevronDown, ChevronUp } from "lucide-react";
import { stanleyCups, StanleyCupEdition } from "@/data/worldcups";
import { legends } from "@/data/legends";
import { StatBlock } from "@/components/shared/StatBlock";
import { useLang } from "@/contexts/LanguageContext";

function StanleyCupCard({ cup, index, t }: { cup: StanleyCupEdition; index: number; t: (key: string) => string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border border-[#C8102E]/30 bg-gradient-to-br from-[#C8102E]/10 to-transparent p-5"
    >
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="font-black text-lg px-4 py-1 rounded-lg bg-[#C8102E] text-white">
          {cup.year}
        </div>
        <span className="text-white/60 text-sm">vs {cup.opponent}</span>
        <span className="flex items-center gap-1 bg-[#C8102E]/20 text-[#C8102E] text-xs font-bold px-3 py-1 rounded-full">
          <Trophy className="w-3 h-3" /> {t("cup.champions")}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 mb-3 text-sm">
        <span className="text-white/80">
          <strong className="text-[#C8102E]">{t("cup.series")}:</strong> {cup.result}
        </span>
        <span className="text-white/60">
          <strong className="text-white/80">{t("cup.coach")}:</strong> {cup.coach}
        </span>
        <span className="text-white/60">
          <strong className="text-white/80">MVP:</strong> {cup.mvp}
        </span>
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-4">{cup.description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm text-[#C8102E] hover:text-[#C8102E]/80 transition-colors font-medium"
      >
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {expanded ? t("cup.collapse") : t("cup.keyPlayersFacts")}
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
              <div>
                <h4 className="text-sm font-bold text-[#C8102E] mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" /> {t("cup.keyPlayers")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cup.keyPlayers.map((p) => (
                    <span
                      key={p.name}
                      className="text-xs bg-white/5 text-white/70 px-3 py-1.5 rounded-lg border border-white/10"
                    >
                      <strong className="text-white">{p.name}</strong>
                      <span className="text-white/30 ml-1">({p.position})</span>
                      {p.goals !== undefined && p.goals > 0 && (
                        <span className="text-[#C8102E] ml-1">{p.goals}G</span>
                      )}
                      {p.assists !== undefined && p.assists > 0 && (
                        <span className="text-[#003DA5] ml-1">{p.assists}A</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#C8102E] mb-3">{t("cup.keyFacts")}</h4>
                <ul className="space-y-1.5">
                  {cup.keyFacts.map((fact, i) => (
                    <li key={i} className="text-xs text-white/50 flex items-start gap-2">
                      <span className="text-[#C8102E] mt-0.5">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HistoriaPage() {
  const { t } = useLang();

  return (
    <div className="relative min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003DA5]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#C8102E] fill-[#C8102E]" />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              {t("historia.title")} <span className="text-[#C8102E]">{t("historia.title2")}</span>
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              {t("historia.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBlock value={24} label={t("historia.statCups")} suffix="x" />
          <StatBlock value={59} label={t("historia.statPlayoffs")} delay={100} />
          <StatBlock value={65} label={t("historia.statHOF")} delay={200} />
          <StatBlock value={1909} label={t("historia.statFounded")} delay={400} />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            {t("historia.all24")}
          </h2>
          <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
            {t("historia.all24sub")}
          </p>

          <div className="space-y-6">
            {stanleyCups.map((cup, i) => (
              <StanleyCupCard key={cup.year} cup={cup} index={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Legends */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            {t("historia.lendas")}
          </h2>
          <p className="text-white/50 text-center mb-10">
            {t("historia.lendas.sub")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {legends.map((legend, i) => (
              <motion.div
                key={legend.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#C8102E]/30 transition-colors"
              >
                <h3 className="text-white font-bold">{legend.name}</h3>
                {legend.shortName && legend.shortName !== legend.name && (
                  <p className="text-[#C8102E] text-xs font-medium">&quot;{legend.shortName}&quot;</p>
                )}
                <p className="text-white/40 text-xs mt-1">{legend.position} · {legend.era}</p>
                <p className="text-white/60 text-sm mt-2 line-clamp-3">{legend.description}</p>
                <div className="flex gap-3 mt-3 text-xs text-white/40">
                  <span>{legend.stats.games} {t("historia.gp")}</span>
                  <span>{legend.stats.goals} {t("historia.g")}</span>
                  {legend.stats.assists !== undefined && <span>{legend.stats.assists} {t("historia.a")}</span>}
                  {legend.stats.stanleyCups !== undefined && (
                    <span className="text-[#C8102E]">{legend.stats.stanleyCups} {t("historia.cups")}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
