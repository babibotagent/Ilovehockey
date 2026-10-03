import { SeasonView, SeasonFilterDef } from "@/components/season/SeasonView";
import { AutoRefresh } from "@/components/shared/AutoRefresh";
import { CURRENT_SEASON, getCanadiensSeason, hasActiveGame } from "@/lib/nhl";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 30;

export const metadata = pageMetadata({
  title: "Montreal Canadiens 2026-27 Season: Schedule, Scores & Results",
  description:
    "Live scores, results and the full 2026-27 Montreal Canadiens schedule: preseason, 84-game regular season and Stanley Cup playoffs.",
  path: "/season/2026-27",
});

const filters: SeasonFilterDef[] = [
  { key: "all", labelKey: "season.all" },
  { key: "preseason", labelKey: "season.preseason", competition: "NHL Preseason" },
  { key: "regular", labelKey: "season.regularSeason", competition: "NHL Regular Season" },
  { key: "playoffs", labelKey: "season.playoffs", competition: "NHL Playoffs" },
];

export default async function Season202627Page() {
  const games = await getCanadiensSeason(CURRENT_SEASON);

  return (
    <>
      <AutoRefresh active={hasActiveGame(games)} />
      <SeasonView games={games} titleKey="season.title2627" filters={filters} showOtl />
    </>
  );
}
