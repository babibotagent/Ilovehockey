"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Trophy } from "lucide-react";
import { players } from "@/data/players";
import { matches } from "@/data/matches";
import { PlayerCard } from "@/components/shared/PlayerCard";
import { MatchCard } from "@/components/shared/MatchCard";
import { StatBlock } from "@/components/shared/StatBlock";
import { useLang } from "@/contexts/LanguageContext";

const featuredPlayers = players.filter((p) =>
  ["nick-suzuki", "cole-caufield", "juraj-slafkovsky", "patrik-laine", "lane-hutson", "samuel-montembeault"].includes(p.slug)
);

const upcomingMatches = matches.filter((m) => m.status === "upcoming").slice(0, 3);

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0e1a]/60" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              {[1956, 1957, 1958, 1959, 1960].map((year) => (
                <span
                  key={year}
                  className="inline-flex items-center gap-1 text-xs bg-[#AF1E2D]/10 text-[#AF1E2D] px-3 py-1 rounded-full border border-[#AF1E2D]/20"
                >
                  <Star className="w-3 h-3 fill-[#AF1E2D]" /> {year}
                </span>
              ))}
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-tight">
              {t("home.hero.pre")}<span className="text-[#AF1E2D]">{t("home.hero.highlight")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mt-6 max-w-2xl mx-auto">
              {t("home.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/elenco"
                className="bg-[#AF1E2D] text-[#192168] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#AF1E2D]/90 transition-colors flex items-center gap-2"
              >
                {t("home.cta.elenco")} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/historia"
                className="border border-white/20 text-white px-8 py-3 rounded-xl font-medium text-lg hover:bg-white/5 transition-colors"
              >
                {t("home.cta.historia")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBlock value={24} label={t("home.stats.copas")} suffix="" />
          <StatBlock value={36} label={t("home.stats.copaamerica")} suffix="" delay={200} />
          <StatBlock value={59} label={t("home.stats.confederacoes")} suffix="" delay={400} />
          <StatBlock value={65} label={t("home.stats.gols")} delay={600} />
        </div>
      </section>

      {/* Próximos Jogos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">{t("home.proximos")}</h2>
              <p className="text-white/50 mt-1">{t("home.proximos.sub")}</p>
            </div>
            <Link
              href="/partidas"
              className="text-[#AF1E2D] hover:underline flex items-center gap-1 text-sm font-medium"
            >
              {t("home.vertodos")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingMatches.map((match, i) => (
              <MatchCard key={match.id} match={match} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#192168]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">{t("home.destaques")}</h2>
              <p className="text-white/50 mt-1">{t("home.destaques.sub")}</p>
            </div>
            <Link
              href="/elenco"
              className="text-[#AF1E2D] hover:underline flex items-center gap-1 text-sm font-medium"
            >
              {t("home.elenco.completo")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlayers.map((player, i) => (
              <PlayerCard key={player.id} player={player} variant="hero" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#192168] to-[#192168] p-12 md:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#AF1E2D]/10 rounded-full blur-[80px]" />
              <Trophy className="w-12 h-12 text-[#AF1E2D] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("home.cta.title")}
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                {t("home.cta.desc")}
              </p>
              <Link
                href="/historia"
                className="inline-flex items-center gap-2 bg-[#AF1E2D] text-[#192168] px-8 py-3 rounded-xl font-bold hover:bg-[#AF1E2D]/90 transition-colors"
              >
                {t("home.cta.explorar")} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
