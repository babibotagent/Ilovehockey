import { SeasonView, SeasonFilterDef } from "@/components/season/SeasonView";
import { AutoRefresh } from "@/components/shared/AutoRefresh";
import { CURRENT_SEASON, getCanadiensSeason, hasActiveGame } from "@/lib/nhl";

export const revalidate = 30;

const filters: SeasonFilterDef[] = [
  { key: "all", labelKey: "season.all" },
  { key: "preseason", labelKey: "season.preseason", competition: "NHL Preseason" },
  { key: "regular", labelKey: "season.regularSeason", competition: "NHL Regular Season" },
  { key: "playoffs", labelKey: "season.playoffs", competition: "NHL Playoffs" },
];

export default async function Home() {
  const games = await getCanadiensSeason(CURRENT_SEASON);

  return (
    <>
      <AutoRefresh active={hasActiveGame(games)} />
      <SeasonView games={games} titleKey="season.titleHome" filters={filters} showOtl />
    </>
  );
}
