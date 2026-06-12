"use client";

import { motion } from "framer-motion";
import { User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const idealizadores = [
  { name: "Mauro Jr", image: "/images/Mauro-jr.png" },
];

function PhotoCard({ person, index }: { person: typeof idealizadores[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#003DA5] to-[#0a0e1a] hover:border-[#C8102E]/30 transition-all w-64"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-auto"
        onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling?.classList.remove("hidden"); }}
      />
      <div className="hidden aspect-square flex flex-col items-center justify-center gap-3">
        <User className="w-16 h-16 text-white/30" />
        <span className="text-white/60 text-sm font-semibold">{person.name}</span>
      </div>
    </motion.div>
  );
}

export default function IdealizadoresPage() {
  return (
    <div className="relative min-h-screen px-4 py-12">
      <div className="relative z-10 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white">About</h1>
          <p className="text-white/50 mt-2">The minds behind the project</p>
        </div>
        <div className="flex justify-center">
          {idealizadores.map((person, i) => (
            <PhotoCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
