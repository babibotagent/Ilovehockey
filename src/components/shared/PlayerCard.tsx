"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Player } from "@/data/types";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";
import { useState } from "react";

function PlayerAvatar({ player, size = 64 }: { player: Player; size?: number }) {
  const [imgError, setImgError] = useState(false);
  const sizeClass = size === 64 ? "w-16 h-16" : "w-full h-full";
  const iconSize = size === 64 ? "w-8 h-8" : "w-32 h-32";

  if (imgError) {
    return (
      <div className={`${sizeClass} rounded-full bg-gradient-to-br from-[#003DA5] to-[#0a0e1a] flex items-center justify-center shrink-0`}>
        <User className={`${iconSize} text-white/60`} />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} rounded-full overflow-hidden bg-gradient-to-br from-[#003DA5] to-[#0a0e1a] shrink-0 relative`}>
      <Image
        src={player.image}
        alt={player.shortName}
        fill
        className="object-cover"
        sizes={`${size}px`}
        onError={() => setImgError(true)}
      />
    </div>
  );
}

interface PlayerCardProps {
  player: Player;
  variant?: "compact" | "detailed" | "hero";
  index?: number;
}

export function PlayerCard({ player, variant = "compact", index = 0 }: PlayerCardProps) {
  const { t } = useLang();
  const [imgError, setImgError] = useState(false);

  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative group"
      >
        <Link href={`/player/${player.slug}`}>
          <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#003DA5]/20 to-[#0a0e1a]/40 border border-white/10 backdrop-blur-sm">
            {!imgError ? (
              <Image
                src={player.image}
                alt={player.shortName}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/10">
                <User className="w-32 h-32" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <span className="text-[#C8102E] text-6xl font-black opacity-30 absolute top-2 right-4">
                {player.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                {t(`pos.${player.position}`)}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{player.shortName}</h3>
              <p className="text-white/60 text-sm">{player.club}</p>
              <div className="flex gap-4 mt-3 text-sm">
                <span className="text-white/80">
                  <strong className="text-[#C8102E]">{player.stats.games}</strong> {t("shared.jogos")}
                </span>
                <span className="text-white/80">
                  <strong className="text-[#C8102E]">{player.stats.goals}</strong> {t("shared.gols")}
                </span>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-[#C8102E] text-white rounded-full p-2">
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
      <Link href={`/player/${player.slug}`}>
        <div
          className={cn(
            "group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#C8102E]/50 transition-all hover:shadow-lg hover:shadow-[#C8102E]/5",
            variant === "detailed" ? "p-6" : "p-4"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <PlayerAvatar player={player} size={64} />
              <span className="absolute -bottom-1 -right-1 bg-[#C8102E] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {player.number}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-white group-hover:text-[#C8102E] transition-colors truncate">
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
            <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#C8102E] ml-auto shrink-0 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
