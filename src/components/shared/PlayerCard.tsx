"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Player } from "@/data/types";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";

interface PlayerCardProps {
  player: Player;
  variant?: "compact" | "detailed" | "hero";
  index?: number;
}

export function PlayerCard({ player, variant = "compact", index = 0 }: PlayerCardProps) {
  const { t } = useLang();

  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative group"
      >
        <Link href={`/jogador/${player.slug}`}>
          <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#009C3B]/20 to-[#002776]/40 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center text-white/10">
              <User className="w-32 h-32" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <span className="text-[#FFDF00] text-6xl font-black opacity-30 absolute top-2 right-4">
                {player.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#FFDF00] font-semibold">
                {t(`pos.${player.position}`)}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{player.shortName}</h3>
              <p className="text-white/60 text-sm">{player.club}</p>
              <div className="flex gap-4 mt-3 text-sm">
                <span className="text-white/80">
                  <strong className="text-[#FFDF00]">{player.stats.games}</strong> {t("shared.jogos")}
                </span>
                <span className="text-white/80">
                  <strong className="text-[#FFDF00]">{player.stats.goals}</strong> {t("shared.gols")}
                </span>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-[#FFDF00] text-[#002776] rounded-full p-2">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/jogador/${player.slug}`}>
        <div
          className={cn(
            "group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FFDF00]/50 transition-all hover:shadow-lg hover:shadow-[#FFDF00]/5",
            variant === "detailed" ? "p-6" : "p-4"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#009C3B] to-[#002776] flex items-center justify-center shrink-0">
              <User className="w-8 h-8 text-white/60" />
              <span className="absolute -bottom-1 -right-1 bg-[#FFDF00] text-[#002776] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {player.number}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-white group-hover:text-[#FFDF00] transition-colors truncate">
                {player.shortName}
              </h3>
              <p className="text-sm text-white/50">{t(`pos.${player.position}`)} · {player.club}</p>
              {variant === "detailed" && (
                <div className="flex gap-3 mt-2 text-xs text-white/60">
                  <span>{player.stats.games} {t("shared.jogos")}</span>
                  <span>{player.stats.goals} {t("shared.gols")}</span>
                  <span>{player.stats.assists} {t("shared.assist")}</span>
                </div>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FFDF00] ml-auto shrink-0 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
