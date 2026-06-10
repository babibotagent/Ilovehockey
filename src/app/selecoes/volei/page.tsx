"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Medal, Users, Star } from "lucide-react";
import { voleiPlayers, olympicEditions } from "@/data/volei";

function StatBlock({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-black text-[#60a5fa]">
        {value}{suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-white/50 mt-2">{label}</div>
    </motion.div>
  );
}

export default function VoleiHome() {
  const golds = olympicEditions.filter((e) => e.medal === "gold").length;
  const silvers = olympicEditions.filter((e) => e.medal === "silver").length;
  const featured = voleiPlayers.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-6xl mb-4">🏐</div>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Seleção Brasileira de{" "}
              <span className="text-[#60a5fa]">Vôlei</span>
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              Tricampeã olímpica. Uma das maiores potências do vôlei mundial. Conheça a história dourada do vôlei masculino brasileiro nos Jogos Olímpicos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/selecoes/volei/elenco"
                className="px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-[#2563eb] transition-colors"
              >
                Ver Elenco
              </Link>
              <Link
                href="/selecoes/volei/historia"
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
          <StatBlock value={golds} label="Ouros Olímpicos" suffix="x" />
          <StatBlock value={silvers} label="Pratas Olímpicas" suffix="x" />
          <StatBlock value={olympicEditions.length} label="Olimpíadas" />
          <StatBlock value={voleiPlayers.length} label="Jogadores no Elenco" />
        </div>
      </section>

      {/* Medal Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Medalhas Olímpicas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {olympicEditions.filter((e) => e.medal).map((e) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-xl p-4 text-center border ${
                  e.medal === "gold"
                    ? "bg-[#FFDF00]/10 border-[#FFDF00]/30"
                    : "bg-gray-300/10 border-gray-300/30"
                }`}
              >
                <div className="text-3xl mb-2">
                  {e.medal === "gold" ? "🥇" : "🥈"}
                </div>
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
          <p className="text-white/50 text-center mb-8">Os craques do vôlei brasileiro</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 p-5 hover:border-[#3b82f6]/50 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3b82f6]/20 to-[#1e40af]/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">🏐</span>
                </div>
                <h3 className="font-bold text-white">{p.shortName}</h3>
                <p className="text-xs text-white/40">{p.position} · {p.club}</p>
                <p className="text-xs text-white/30 mt-1">#{p.number} · {p.height}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/selecoes/volei/elenco"
              className="text-[#60a5fa] hover:text-[#3b82f6] text-sm font-medium transition-colors"
            >
              Elenco completo →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#1e40af]/20 to-[#3b82f6]/20 border border-[#3b82f6]/30 p-10">
            <Trophy className="w-12 h-12 text-[#60a5fa] mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white">3x Campeão Olímpico</h2>
            <p className="text-white/50 mt-2">
              De 1992 a 2016, três gerações douradas. Explore a história completa do vôlei brasileiro nos Jogos Olímpicos.
            </p>
            <Link
              href="/selecoes/volei/historia"
              className="inline-block mt-6 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-[#2563eb] transition-colors"
            >
              Explorar Olimpíadas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
