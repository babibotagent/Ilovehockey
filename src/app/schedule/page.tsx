import type { Metadata } from "next";
import { matches } from "@/data/matches";
import { ScheduleView } from "@/components/schedule/ScheduleView";
import { AutoRefresh } from "@/components/shared/AutoRefresh";
import { CURRENT_SEASON, getCanadiensSeason, hasActiveGame } from "@/lib/nhl";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Montreal Canadiens Schedule & Results",
  description:
    "Upcoming games, live scores and recent results for the Montreal Canadiens, plus NHL playoff results from past seasons.",
  alternates: { canonical: "/schedule" },
};

export default async function SchedulePage() {
  const current = await getCanadiensSeason(CURRENT_SEASON);

  return (
    <>
      <AutoRefresh active={hasActiveGame(current)} />
      <ScheduleView matches={[...matches, ...current]} />
    </>
  );
}
