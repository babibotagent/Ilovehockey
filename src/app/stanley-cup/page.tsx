"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronDown, ChevronUp, Users, Star, Filter, Calendar } from "lucide-react";
import { stanleyCups, StanleyCupEdition } from "@/data/worldcups";
import { useLang } from "@/contexts/LanguageContext";

const recentFinals = [
  { season: "2025-26", champion: "Carolina Hurricanes", runnerUp: "Vegas Golden Knights", result: "4-2", mvp: "Jordan Staal" },
  { season: "2024-25", champion: "Florida Panthers", runnerUp: "Edmonton Oilers", result: "4-2", mvp: "Sam Bennett" },
  { season: "2023-24", champion: "Florida Panthers", runnerUp: "Edmonton Oilers", result: "4-3", mvp: "Aleksander Barkov" },
  { season: "2022-23", champion: "Vegas Golden Knights", runnerUp: "Florida Panthers", result: "4-1", mvp: "Jonathan Marchessault" },
  { season: "2021-22", champion: "Colorado Avalanche", runnerUp: "Tampa Bay Lightning", result: "4-2", mvp: "Cale Makar" },
  { season: "2020-21", champion: "Tampa Bay Lightning", runnerUp: "Montreal Canadiens", result: "4-1", mvp: "Andrei Vasilevskiy" },
  { season: "2019-20", champion: "Tampa Bay Lightning", runnerUp: "Dallas Stars", result: "4-2", mvp: "Victor Hedman" },
  { season: "2018-19", champion: "St. Louis Blues", runnerUp: "Boston Bruins", result: "4-3", mvp: "Ryan O'Reilly" },
  { season: "2017-18", champion: "Washington Capitals", runnerUp: "Vegas Golden Knights", result: "4-1", mvp: "Alexander Ovechkin" },
  { season: "2016-17", champion: "Pittsburgh Penguins", runnerUp: "Nashville Predators", result: "4-2", mvp: "Sidney Crosby" },
  { season: "2015-16", champion: "Pittsburgh Penguins", runnerUp: "San Jose Sharks", result: "4-2", mvp: "Sidney Crosby" },
  { season: "2014-15", champion: "Chicago Blackhawks", runnerUp: "Tampa Bay Lightning", result: "4-2", mvp: "Duncan Keith" },
  { season: "2013-14", champion: "Los Angeles Kings", runnerUp: "New York Rangers", result: "4-1", mvp: "Justin Williams" },
  { season: "2012-13", champion: "Chicago Blackhawks", runnerUp: "Boston Bruins", result: "4-2", mvp: "Patrick Kane" },
  { season: "2011-12", champion: "Los Angeles Kings", runnerUp: "New Jersey Devils", result: "4-2", mvp: "Jonathan Quick" },
  { season: "2010-11", champion: "Boston Bruins", runnerUp: "Vancouver Canucks", result: "4-3", mvp: "Tim Thomas" },
  { season: "2009-10", champion: "Chicago Blackhawks", runnerUp: "Philadelphia Flyers", result: "4-2", mvp: "Jonathan Toews" },
];

const decades = [
  { labelKey: "cup.filterAll", value: "all" },
  { labelKey: null, label: "1910s–30s", value: "early", range: [1910, 1939] },
  { labelKey: null, label: "1940s–50s", value: "mid", range: [1940, 1959] },
  { labelKey: null, label: "1960s–70s", value: "dynasty", range: [1960, 1979] },
  { labelKey: null, label: "1980s–90s", value: "modern", range: [1980, 1999] },
] as const;

function CupCard({
  cup,
  index,
  t,
}: {
  cup: StanleyCupEdition;
  index: number;
  t: (key: string) => string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="relative"
    >
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[#C8102E]/20 hidden md:block" />
      <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-[#C8102E] border-2 border-[#0a0e1a] hidden md:block z-10" />

      <div className="md:ml-14 rounded-2xl border border-[#C8102E]/20 bg-gradient-to-br from-[#111827] to-[#0a0e1a] p-6 hover:border-[#C8102E]/40 transition-colors">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2 font-black text-2xl text-white">
            <Trophy className="w-6 h-6 text-[#C8102E]" />
            {cup.year}
          </div>
          <span className="text-white/50 text-sm">vs {cup.opponent}</span>
          <span className="ml-auto text-xs font-bold bg-[#C8102E] text-white px-3 py-1 rounded-full">
            {cup.result}
          </span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 text-sm text-white/60">
          <span>
            <strong className="text-white/80">{t("cup.coach")}:</strong> {cup.coach}
          </span>
          <span>
            <strong className="text-white/80">MVP:</strong> {cup.mvp}
          </span>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-4">{cup.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-[#C8102E] hover:text-[#C8102E]/80 transition-colors font-medium"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? t("cup.collapse") : t("cup.keyPlayersFacts")}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#C8102E] mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> {t("cup.keyPlayers")}
                  </h4>
                  <div className="space-y-2">
                    {cup.keyPlayers.map((p) => (
                      <div
                        key={p.name}
                        className="text-xs bg-white/5 text-white/70 px-3 py-2 rounded-lg border border-white/10"
                      >
                        <strong className="text-white">{p.name}</strong>
                        <span className="text-white/30 ml-1">({p.position})</span>
                        {p.goals !== undefined && p.goals > 0 && (
                          <span className="text-[#C8102E] ml-2">{p.goals}G</span>
                        )}
                        {p.assists !== undefined && p.assists > 0 && (
                          <span className="text-[#003DA5] ml-1">{p.assists}A</span>
                        )}
                        {p.note && (
                          <span className="block text-white/40 mt-0.5 italic">{p.note}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#003DA5] mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" /> {t("cup.keyFacts")}
                  </h4>
                  <ul className="space-y-2">
                    {cup.keyFacts.map((fact, i) => (
                      <li
                        key={i}
                        className="text-xs text-white/60 pl-3 border-l-2 border-[#003DA5]/40"
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function StanleyCupPage() {
  const { t } = useLang();
  const [selectedSeason, setSelectedSeason] = useState<string>(recentFinals[0].season);
  const [filter, setFilter] = useState<string>("all");

  const seasonData = recentFinals.find((f) => f.season === selectedSeason);
  const isHabs = (team: string) => team === "Montreal Canadiens";

  const filtered =
    filter === "all"
      ? stanleyCups
      : stanleyCups.filter((cup) => {
          const decade = decades.find((d) => d.value === filter);
          if (!decade || decade.value === "all") return true;
          return cup.year >= decade.range[0] && cup.year <= decade.range[1];
        });

  return (
    <main className="min-h-screen bg-[#0a0e1a] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-full px-6 py-2">
              <Trophy className="w-8 h-8 text-[#C8102E]" />
              <span className="text-4xl font-black text-white">24</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            {t("cup.title")}
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            {t("cup.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Season Selector */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#C8102E]" />
          {t("cup.recentFinals")}
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {recentFinals.map((f) => (
            <button
              key={f.season}
              onClick={() => setSelectedSeason(f.season)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                selectedSeason === f.season
                  ? "bg-[#C8102E] border-[#C8102E] text-white"
                  : "border-white/10 text-white/50 hover:border-[#C8102E]/50 hover:text-white/80"
              }`}
            >
              {f.season}
            </button>
          ))}
        </div>

        {seasonData && (
          <motion.div
            key={seasonData.season}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-[#C8102E]/20 bg-gradient-to-br from-[#111827] to-[#0a0e1a] p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-7 h-7 text-[#C8102E]" />
              <h3 className="text-xl font-black text-white">
                {t("cup.title")} {seasonData.season}
              </h3>
              <span className="text-xs font-bold bg-[#C8102E] text-white px-3 py-1 rounded-full">
                {seasonData.result}
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t("cup.champion")}</p>
                <p className={`text-lg font-bold ${isHabs(seasonData.champion) ? "text-[#C8102E]" : "text-white"}`}>
                  {seasonData.champion}
                </p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t("cup.runnerUp")}</p>
                <p className={`text-lg font-bold ${isHabs(seasonData.runnerUp) ? "text-[#C8102E]" : "text-white/70"}`}>
                  {seasonData.runnerUp}
                </p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t("cup.connSmythe")}</p>
                <p className="text-lg font-bold text-white/70">{seasonData.mvp}</p>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="border-t border-white/10" />
      </div>

      {/* Canadiens Championship History */}
      <section className="max-w-5xl mx-auto px-4 mb-10">
        <h2 className="text-2xl font-bold text-white mb-1">{t("cup.habsHistory")}</h2>
        <p className="text-white/40 text-sm mb-8">{t("cup.habsHistorySub")}</p>

        <div className="flex items-center gap-2 flex-wrap mb-8">
          <Filter className="w-4 h-4 text-white/40" />
          {decades.map((d) => (
            <button
              key={d.value}
              onClick={() => setFilter(d.value)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                filter === d.value
                  ? "bg-[#C8102E] border-[#C8102E] text-white"
                  : "border-white/10 text-white/50 hover:border-[#C8102E]/50 hover:text-white/80"
              }`}
            >
              {d.labelKey ? t(d.labelKey) : d.label}
            </button>
          ))}
          <span className="ml-auto text-white/30 text-sm">
            {filtered.length} {filtered.length === 1 ? t("cup.title_one") : t("cup.title_many")}
          </span>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        {filtered.map((cup, i) => (
          <CupCard key={cup.year} cup={cup} index={i} t={t} />
        ))}
      </section>

      {/* Dynasty callout */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-[#C8102E]/20 via-[#003DA5]/20 to-[#C8102E]/20 border border-[#C8102E]/20 p-8 text-center"
        >
          <h2 className="text-2xl font-black text-white mb-2">
            {t("cup.title")} — {t("cup.dynasty")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t("cup.dynastyText")}
          </p>
          <div className="flex justify-center gap-3 mt-6">
            {[1956, 1957, 1958, 1959, 1960].map((y) => (
              <div
                key={y}
                className="bg-[#C8102E] text-white font-bold text-sm px-3 py-1.5 rounded-lg"
              >
                {y}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
