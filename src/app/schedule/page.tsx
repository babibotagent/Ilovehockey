import { matches } from "@/data/matches";
import { ScheduleView } from "@/components/schedule/ScheduleView";
import { AutoRefresh } from "@/components/shared/AutoRefresh";
import { CURRENT_SEASON, getCanadiensSeason, hasActiveGame } from "@/lib/nhl";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 30;

export const metadata = pageMetadata({
  title: "Montreal Canadiens Schedule & Results",
  description:
    "Upcoming games, live scores and recent results for the Montreal Canadiens, plus NHL playoff results from past seasons.",
  path: "/schedule",
});

export default async function SchedulePage() {
  const current = await getCanadiensSeason(CURRENT_SEASON);

  return (
    <>
      <AutoRefresh active={hasActiveGame(current)} />
      <ScheduleView matches={[...matches, ...current]} />
    </>
  );
}
