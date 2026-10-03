import type { Metadata } from "next";
import { matches } from "@/data/matches";
import { SeasonView, SeasonFilterDef } from "@/components/season/SeasonView";

export const metadata: Metadata = {
  title: "Montreal Canadiens 2025-26 Season: Schedule & Results",
  description:
    "Every Montreal Canadiens game from the 2025-26 NHL season: regular season results, playoff series against Tampa Bay, Buffalo and Carolina.",
  alternates: { canonical: "/season" },
};

const HABS = "Montreal Canadiens";

const filters: SeasonFilterDef[] = [
  { key: "all", labelKey: "season.all" },
  { key: "regular", labelKey: "season.regularSeason", competition: "NHL Regular Season" },
  { key: "playoffs", labelKey: "season.playoffs", competition: "NHL Playoffs" },
  {
    key: "r1",
    labelKey: "season.round1",
    competition: "NHL Playoffs",
    dateRange: ["2026-04-19", "2026-05-04"],
    opponent: "Tampa Bay Lightning",
  },
  {
    key: "r2",
    labelKey: "season.round2",
    competition: "NHL Playoffs",
    dateRange: ["2026-05-05", "2026-05-19"],
    opponent: "Buffalo Sabres",
  },
  {
    key: "cf",
    labelKey: "season.confFinals",
    competition: "NHL Playoffs",
    dateRange: ["2026-05-20", "2026-06-01"],
    opponent: "Carolina Hurricanes",
  },
];

const games = matches.filter(
  (m) => m.date >= "2025-10-01" && m.date < "2026-07-01" && (m.homeTeam === HABS || m.awayTeam === HABS)
);

export default function SeasonPage() {
  return (
    <SeasonView
      games={games}
      titleKey="season.title"
      filters={filters}
      playoffsNote={{ en: "ECF — Conf. Finals", fr: "ECF — Finale de conf." }}
    />
  );
}
