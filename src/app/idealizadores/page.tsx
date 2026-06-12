"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const idealizadores = [
  { name: "Mauro Jr", image: "/images/Mauro-jr.png", role: "Idealizador" },
  { name: "Rogério Gomes", image: "/images/Rogerio-gomes.png", role: "Idealizador" },
  { name: "Carlos Moura", image: "/images/Carlos-moura.png", role: "Idealizador" },
  { name: "Anderson Alexandrino", image: "/images/Anderson-alexandrino.png", role: "Idealizador" },
];

function PhotoCard({ person, index }: { person: typeof idealizadores[0]; index: number }) {
  const [err, setErr] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] hover:border-[#FFDF00]/30 transition-all group"
    >
      <div className="aspect-square relative bg-gradient-to-br from-[#009C3B] to-[#006B2D]">
        {!err ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 50vw, 25vw"
            onError={() => setErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-20 h-20 text-white/30" />
          </div>
        )}
      </div>
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-white group-hover:text-[#FFDF00] transition-colors">
          {person.name}
        </h2>
        <p className="text-white/50 text-sm mt-1">{person.role}</p>
      </div>
    </motion.div>
  );
}

export default function IdealizadoresPage() {
  return (
    <div className="relative min-h-screen px-4 py-12">
      <div className="fixed inset-0 bg-no-repeat bg-center opacity-[0.07] pointer-events-none" style={{ backgroundImage: "url('/images/bg-selecoes.jpg')", backgroundSize: "40%" }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white">Idealizadores</h1>
          <p className="text-white/50 mt-2">As mentes por trás do PaixãoBR</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {idealizadores.map((person, i) => (
            <PhotoCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
