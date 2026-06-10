"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, User, Calendar, Ruler, MapPin, Star, Trophy } from "lucide-react";
import { players } from "@/data/players";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/contexts/LanguageContext";

function PlayerPhoto({ image, name }: { image: string; name: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[#009C3B] to-[#006B2D] flex items-center justify-center shrink-0">
        <User className="w-16 h-16 md:w-20 md:h-20 text-white/40" />
      </div>
    );
  }
  return (
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-[#009C3B] to-[#006B2D] shrink-0 relative">
      <Image src={image} alt={name} fill className="object-cover object-top" sizes="160px" onError={() => setErr(true)} />
    </div>
  );
}

export default function JogadorPage() {
  const { slug } = useParams<{ slug: string }>();
  const player = players.find((p) => p.slug === slug);
  const { t } = useLang();

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">{t("jogador.naoEncontrado")}</h1>
          <Link href="/elenco" className="text-[#FFDF00] hover:underline">
            {t("jogador.voltar")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/elenco"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {t("jogador.voltar")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#009C3B]/20 to-[#006B2D]/30 border border-white/10 p-8 md:p-12 mb-8"
        >
          <span className="absolute top-4 right-6 text-8xl md:text-9xl font-black text-white/5">
            {player.number}
          </span>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <PlayerPhoto image={player.image} name={player.shortName} />
            <div className="flex-1">
              <Badge className="bg-[#FFDF00]/10 text-[#FFDF00] border-[#FFDF00]/20 mb-3">
                {t(`pos.${player.position}`)}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-black text-white">{player.shortName}</h1>
              <p className="text-white/50 mt-1">{player.name}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Calendar className="w-4 h-4 text-[#FFDF00]" />
                  <span>{player.age} {t("jogador.anos")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Ruler className="w-4 h-4 text-[#FFDF00]" />
                  <span>{player.height}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-[#FFDF00]" />
                  <span>{player.club}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Star className="w-4 h-4 text-[#FFDF00]" />
                  <span>{t("jogador.desde")} {player.stats.debut}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {[
            { label: t("jogador.jogos"), value: player.stats.games },
            { label: t("jogador.gols"), value: player.stats.goals },
            { label: t("jogador.assistencias"), value: player.stats.assists },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-black text-[#FFDF00]">{stat.value}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">{t("jogador.carreira")}</h2>
          <div className="space-y-4">
            {player.career.map((entry, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#FFDF00]" />
                  {i < player.career.length - 1 && (
                    <div className="w-0.5 h-full bg-white/10 mt-1" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-sm text-[#FFDF00] font-semibold">{entry.year}</span>
                  <h3 className="text-white font-bold mt-1">{entry.club}</h3>
                  <p className="text-white/50 text-sm">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">{t("jogador.conquistas")}</h2>
          <div className="flex flex-wrap gap-3">
            {player.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2"
              >
                <Trophy className="w-4 h-4 text-[#FFDF00]" />
                <span className="text-white text-sm">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
