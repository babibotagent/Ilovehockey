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
  const isFeminino = esporte?.endsWith("-feminino");
  const masculinoSlug = esporte?.replace("-feminino", "");
  const masculinoSelecao = isFeminino ? selecoes.find((s) => s.slug === masculinoSlug) : null;

  const showBg = esporte === "futebol-feminino";

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {showBg && (
        <>
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-[0.07]"
            style={{ backgroundImage: "url('/images/bg-selecoes.jpg')", backgroundSize: "40%" }}
          />
          <div className="absolute inset-0 bg-[#071a0e]/60" />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-lg"
      >
        <div className="text-8xl mb-6">{selecao?.emoji || masculinoSelecao?.emoji || "🏅"}</div>
        <Construction className="w-16 h-16 text-[#FFDF00] mx-auto mb-4" />
        <h1 className="text-3xl font-black text-white mb-2">
          {t("outras.title")}
        </h1>
        <p className="text-white/50 text-lg mb-8">
          {t("outras.desc")} <strong className="text-[#FFDF00]">{selecao?.name || esporte}</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFDF00] text-[#006B2D] font-bold rounded-xl hover:bg-[#FFDF00]/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("outras.voltar")}
          </Link>
          {selecao?.feminino && (
            <Link
              href={`/selecoes/${selecao.feminino}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 text-pink-300 font-bold rounded-xl hover:bg-pink-500/30 transition-colors border border-pink-500/30"
            >
              👩 {selecao.name.replace("Masculino", "Feminino")}
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
