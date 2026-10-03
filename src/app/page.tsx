import { HomeClient } from "@/components/home/HomeClient";
import { AutoRefresh } from "@/components/shared/AutoRefresh";
import { CURRENT_SEASON, getCanadiensSeason, hasActiveGame } from "@/lib/nhl";

export const revalidate = 30;

export default async function Home() {
  const games = await getCanadiensSeason(CURRENT_SEASON);
  const next = games.filter((m) => m.status !== "finished").slice(0, 3);

  return (
    <>
      <AutoRefresh active={hasActiveGame(games)} />
      <HomeClient upcomingMatches={next} />
    </>
  );
}
