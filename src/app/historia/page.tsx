"use client";

import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { worldCups } from "@/data/matches";
import { legends } from "@/data/legends";
import { StatBlock } from "@/components/shared/StatBlock";
import { useLang } from "@/contexts/LanguageContext";

export default function HistoriaPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002776]/30 to-transparent" />
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

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t("home.stats.copas")}
          </h2>
          <div className="space-y-8">
            {worldCups.map((cup, i) => (
              <motion.div
                key={cup.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 p-6 md:p-8 hover:border-[#FFDF00]/30 transition-colors"
              >
                <div className="absolute top-4 right-6 text-6xl md:text-7xl font-black text-white/5">
                  {cup.year}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#FFDF00] text-[#002776] font-black text-lg px-4 py-1 rounded-lg">
                      {cup.year}
                    </div>
                    <span className="text-white/40 text-sm">{cup.host}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cup.final}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{cup.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-white/40">
                    <span>
                      <strong className="text-white/60">{t("historia.tecnico")}</strong> {cup.coach}
                    </span>
                    <span>
                      <strong className="text-white/60">{t("historia.artilheiro")}</strong> {cup.topScorer}
                    </span>
                    <span>
                      <strong className="text-white/60">{t("jogador.gols")}:</strong> {cup.goals}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBlock value={5} label={t("historia.copas")} suffix="x" />
          <StatBlock value={237} label={t("historia.jogoscopas")} delay={200} />
          <StatBlock value={76} label={t("historia.vitorias")} delay={400} />
          <StatBlock value={229} label={t("historia.golscopas")} delay={600} />
        </div>
      </section>

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
