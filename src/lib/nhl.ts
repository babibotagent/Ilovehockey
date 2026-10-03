import { Competition, Match } from "@/data/types";

interface NhlTeam {
  abbrev: string;
  placeName: { default: string };
  commonName: { default: string };
  score?: number;
}

interface NhlGame {
  id: number;
  gameType: number;
  gameDate: string;
  startTimeUTC: string;
  venue?: { default: string };
  gameState: string;
  awayTeam: NhlTeam;
  homeTeam: NhlTeam;
  gameOutcome?: { lastPeriodType?: string };
}

const competitions: Record<number, Competition> = {
  1: "NHL Preseason",
  2: "NHL Regular Season",
  3: "NHL Playoffs",
};

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const teamName = (t: NhlTeam) => stripAccents(`${t.placeName.default} ${t.commonName.default}`);

function mapStatus(state: string): Match["status"] {
  if (state === "LIVE" || state === "CRIT") return "live";
  if (state === "FINAL" || state === "OFF") return "finished";
  return "upcoming";
}

const easternTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Toronto",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function toMatch(g: NhlGame): Match {
  const status = mapStatus(g.gameState);
  const period = g.gameOutcome?.lastPeriodType;
  return {
    id: `nhl-${g.id}`,
    date: g.gameDate,
    time: easternTime.format(new Date(g.startTimeUTC)),
    startUtc: g.startTimeUTC,
    homeTeam: teamName(g.homeTeam),
    awayTeam: teamName(g.awayTeam),
    homeAbbrev: g.homeTeam.abbrev,
    awayAbbrev: g.awayTeam.abbrev,
    homeFlag: "🏒",
    awayFlag: "🏒",
    competition: competitions[g.gameType] ?? "NHL Regular Season",
    venue: g.venue?.default ?? "",
    city: stripAccents(g.homeTeam.placeName.default),
    homeScore: status === "upcoming" ? undefined : g.homeTeam.score,
    awayScore: status === "upcoming" ? undefined : g.awayTeam.score,
    periodType: status === "finished" && (period === "OT" || period === "SO") ? period : status === "finished" ? "REG" : undefined,
    status,
  };
}

export async function getCanadiensSeason(season: string): Promise<Match[]> {
  try {
    const res = await fetch(`https://api-web.nhle.com/v1/club-schedule-season/MTL/${season}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { games?: NhlGame[] };
    const seen = new Set<number>();
    return (data.games ?? [])
      .filter((g) => g.gameType in competitions && !seen.has(g.id) && seen.add(g.id))
      .map(toMatch)
      .sort((a, b) => (a.startUtc ?? a.date).localeCompare(b.startUtc ?? b.date));
  } catch {
    return [];
  }
}

export const CURRENT_SEASON = "20262027";

export function hasActiveGame(games: Match[]) {
  const now = Date.now();
  return games.some(
    (g) =>
      g.status === "live" ||
      (g.status === "upcoming" && g.startUtc && new Date(g.startUtc).getTime() - now < 20 * 60 * 1000 && new Date(g.startUtc).getTime() - now > -4 * 60 * 60 * 1000)
  );
}
