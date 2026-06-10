"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";
import { selecoes } from "@/data/selecoes";
import { useLang } from "@/contexts/LanguageContext";

export default function SelecaoPage() {
  const { esporte } = useParams<{ esporte: string }>();
  const { t } = useLang();
  const selecao = selecoes.find((s) => s.slug === esporte);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div className="text-8xl mb-6">{selecao?.emoji || "🏅"}</div>
        <Construction className="w-16 h-16 text-[#FFDF00] mx-auto mb-4" />
        <h1 className="text-3xl font-black text-white mb-2">
          {t("outras.title")}
        </h1>
        <p className="text-white/50 text-lg mb-8">
          {t("outras.desc")} <strong className="text-[#FFDF00]">{selecao?.name || esporte}</strong>.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFDF00] text-[#006B2D] font-bold rounded-xl hover:bg-[#FFDF00]/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("outras.voltar")}
        </Link>
      </motion.div>
    </div>
  );
}
