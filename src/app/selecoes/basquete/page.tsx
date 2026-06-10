"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";
import { basquetePlayers, olympicEditions } from "@/data/basquete";

function StatBlock({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-black text-[#fb923c]">
        {value}{suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-white/50 mt-2">{label}</div>
    </motion.div>
  );
}

export default function BasqueteHome() {
  const bronzes = olympicEditions.filter((e) => e.medal === "bronze").length;
  const featured = basquetePlayers.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7c2d12]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-6xl mb-4">🏀</div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Seleção Brasileira de{" "}
              <span className="text-[#fb923c]">Basquete</span>
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              Duas medalhas de bronze olímpicas. De Amaury Pasos a Gui Santos, uma tradição de gigantes nas quadras mundiais.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/selecoes/basquete/elenco"
                className="px-6 py-3 bg-[#f97316] text-white font-bold rounded-xl hover:bg-[#ea580c] transition-colors"
              >
                Ver Elenco
              </Link>
              <Link
                href="/selecoes/basquete/historia"
                className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/10"
              >
                Olimpíadas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBlock value={bronzes} label="Bronzes Olímpicos" suffix="x" />
          <StatBlock value={olympicEditions.length} label="Olimpíadas" />
          <StatBlock value={basquetePlayers.length} label="Jogadores no Elenco" />
          <StatBlock value={1960} label="Primeiro Pódio" />
        </div>
      </section>

      {/* Medal Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Medalhas Olímpicas
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {olympicEditions.filter((e) => e.medal).map((e) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl p-4 text-center border bg-[#cd7f32]/10 border-[#cd7f32]/30"
              >
                <div className="text-3xl mb-2">🥉</div>
                <div className="font-black text-white text-lg">{e.year}</div>
                <div className="text-xs text-white/50">{e.hostFlag} {e.host}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Destaques do Elenco</h2>
          <p className="text-white/50 text-center mb-8">Os craques do basquete brasileiro</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 p-5 hover:border-[#f97316]/50 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f97316]/20 to-[#7c2d12]/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">🏀</span>
                </div>
                <h3 className="font-bold text-white">{p.shortName}</h3>
                <p className="text-xs text-white/40">{p.position} · {p.club}</p>
                <p className="text-xs text-white/30 mt-1">#{p.number} · {p.height}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/selecoes/basquete/elenco"
              className="text-[#fb923c] hover:text-[#f97316] text-sm font-medium transition-colors"
            >
              Elenco completo →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#7c2d12]/20 to-[#f97316]/20 border border-[#f97316]/30 p-10">
            <Trophy className="w-12 h-12 text-[#fb923c] mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white">2x Bronze Olímpico</h2>
            <p className="text-white/50 mt-2">
              De Roma 1960 a Tóquio 1964, uma era dourada nas quadras. Explore a história completa do basquete brasileiro.
            </p>
            <Link
              href="/selecoes/basquete/historia"
              className="inline-block mt-6 px-6 py-3 bg-[#f97316] text-white font-bold rounded-xl hover:bg-[#ea580c] transition-colors"
            >
              Explorar Olimpíadas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
