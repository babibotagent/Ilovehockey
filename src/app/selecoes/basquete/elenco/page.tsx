"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, User } from "lucide-react";
import { basquetePlayers } from "@/data/basquete";

const positions = ["Todos", "Armador", "Ala", "Ala-Pivô", "Pivô"];

export default function BasqueteElenco() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  const filtered = basquetePlayers.filter((p) => {
    if (filter !== "Todos" && p.position !== filter) return false;
    if (search && !p.shortName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-white">
            <span className="text-[#fb923c]">Elenco</span> do Basquete
          </h1>
          <p className="text-white/50 mt-2">Jogadores da Seleção Brasileira de Basquete Masculino</p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Buscar jogador..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#f97316]/50"
          />
        </div>

        <div className="flex gap-2 flex-wrap mb-10">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setFilter(pos)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === pos
                  ? "bg-[#f97316] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((player, i) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#f97316]/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#f97316] to-[#7c2d12] flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-white/60" />
                  <span className="absolute -bottom-1 -right-1 bg-[#fb923c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {player.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white">{player.shortName}</h3>
                  <p className="text-sm text-white/50">{player.position} · {player.club}</p>
                  <p className="text-xs text-white/30 mt-1">{player.height} · {player.age} anos</p>
                </div>
              </div>
              {player.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {player.highlights.slice(0, 2).map((h) => (
                    <span
                      key={h}
                      className="text-[10px] bg-[#f97316]/10 text-[#fb923c] px-2 py-1 rounded-md border border-[#f97316]/20"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            Nenhum jogador encontrado.
          </div>
        )}
      </div>
    </div>
  );
}
