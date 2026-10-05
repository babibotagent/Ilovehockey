import { HomeClient } from "@/components/home/HomeClient";
import { AutoRefresh } from "@/components/shared/AutoRefresh";
import { CURRENT_SEASON, getCanadiensSeason, hasActiveGame } from "@/lib/nhl";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 30;

export const metadata = pageMetadata({
  title: "Montreal Canadiens Fan Hub: 24 Stanley Cups & Legends",
  description:
    "Discover the most decorated franchise in NHL history: 24 Stanley Cup titles, legendary players and the current Montreal Canadiens roster.",
  path: "/home",
});

export default async function HomePage() {
  const games = await getCanadiensSeason(CURRENT_SEASON);
  const next = games.filter((m) => m.status !== "finished").slice(0, 3);

  return (
    <>
      <AutoRefresh active={hasActiveGame(games)} />
      <HomeClient upcomingMatches={next} />
    </>
  );
}
