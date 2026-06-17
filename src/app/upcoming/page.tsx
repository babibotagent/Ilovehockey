"use client";

import { motion } from "framer-motion";
import { Construction, Calendar } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function UpcomingPage() {
  const { t } = useLang();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center">
            <Construction className="w-10 h-10 text-[#C8102E]" />
          </div>
        </div>
        <h1 className="text-4xl font-black text-white mb-2">{t("upcoming.title")}</h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Calendar className="w-4 h-4 text-[#C8102E]" />
          <span className="text-[#C8102E] font-bold text-sm">{t("upcoming.construction")}</span>
        </div>
        <p className="text-white/50 text-lg">{t("upcoming.message")}</p>
      </motion.div>
    </div>
  );
}
