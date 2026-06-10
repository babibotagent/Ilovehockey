const API_URL =
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json";

interface ApiMatch {
  round: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  score1i?: number;
  score2i?: number;
  group?: string;
  ground?: string;
}

interface ApiData {
  name: string;
  rounds: { name: string; matches: ApiMatch[] }[];
}

export interface LiveMatch {
  id: number;
  date: string;
  timeBrasilia: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  halfHomeScore: number | null;
  halfAwayScore: number | null;
  group: string | null;
  stage: string;
  venue: string;
}

const teamNamesPt: Record<string, string> = {
  "Mexico": "México",
  "South Africa": "África do Sul",
  "South Korea": "Coreia do Sul",
  "Czech Republic": "Tchéquia",
  "Canada": "Canadá",
  "Bosnia and Herzegovina": "Bósnia e Herzegovina",
  "Qatar": "Catar",
  "Switzerland": "Suíça",
  "Brazil": "Brasil",
  "Morocco": "Marrocos",
  "Haiti": "Haiti",
  "Scotland": "Escócia",
  "United States": "Estados Unidos",
  "Paraguay": "Paraguai",
  "Australia": "Austrália",
  "Turkey": "Turquia",
  "Türkiye": "Turquia",
  "Germany": "Alemanha",
  "Curaçao": "Curaçao",
  "Ivory Coast": "Costa do Marfim",
  "Côte d'Ivoire": "Costa do Marfim",
  "Ecuador": "Equador",
  "Netherlands": "Holanda",
  "Japan": "Japão",
  "Sweden": "Suécia",
  "Tunisia": "Tunísia",
  "Spain": "Espanha",
  "Cape Verde": "Cabo Verde",
  "Saudi Arabia": "Arábia Saudita",
  "Uruguay": "Uruguai",
  "Belgium": "Bélgica",
  "Egypt": "Egito",
  "Iran": "Irã",
  "New Zealand": "Nova Zelândia",
  "France": "França",
  "Senegal": "Senegal",
  "Iraq": "Iraque",
  "Norway": "Noruega",
  "Argentina": "Argentina",
  "Algeria": "Argélia",
  "Austria": "Áustria",
  "Jordan": "Jordânia",
  "Portugal": "Portugal",
  "DR Congo": "RD Congo",
  "Congo DR": "RD Congo",
  "Uzbekistan": "Uzbequistão",
  "Colombia": "Colômbia",
  "England": "Inglaterra",
  "Croatia": "Croácia",
  "Ghana": "Gana",
  "Panama": "Panamá",
};

function translateTeam(name: string, lang: string): string {
  if (lang === "pt") return teamNamesPt[name] || name;
  return name;
}

function parseUtcOffset(timeStr: string): { hours: number; minutes: number; utcOffset: number } {
  // Format: "13:00 UTC-6" or "20:00 UTC-4"
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*UTC([+-]\d+)/);
  if (!match) return { hours: 12, minutes: 0, utcOffset: 0 };
  return {
    hours: parseInt(match[1]),
    minutes: parseInt(match[2]),
    utcOffset: parseInt(match[3]),
  };
}

function toBrasiliaTime(timeStr: string): string {
  const { hours, minutes, utcOffset } = parseUtcOffset(timeStr);
  // BRT = UTC-3. Convert: localTime -> UTC -> BRT
  // UTC = localTime - utcOffset
  // BRT = UTC - 3
  const utcHours = hours - utcOffset;
  const brtHours = utcHours - 3;
  const normalized = ((brtHours % 24) + 24) % 24;
  return `${String(normalized).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function mapStage(roundName: string): string {
  const lower = roundName.toLowerCase();
  if (lower.includes("matchday") || lower.includes("group")) return "Fase de Grupos";
  if (lower.includes("round of 32")) return "Oitavas (32)";
  if (lower.includes("round of 16")) return "16 avos";
  if (lower.includes("quarterfinal") || lower.includes("quarter-final")) return "Quartas de Final";
  if (lower.includes("semifinal") || lower.includes("semi-final")) return "Semifinal";
  if (lower.includes("third") || lower.includes("3rd")) return "3º Lugar";
  if (lower.includes("final") && !lower.includes("semi") && !lower.includes("quarter")) return "Final";
  return roundName;
}

function extractGroup(groupStr?: string): string | null {
  if (!groupStr) return null;
  const match = groupStr.match(/Group\s+([A-L])/i);
  return match ? match[1] : null;
}

export async function fetchLiveMatches(lang: string = "pt"): Promise<LiveMatch[]> {
  const res = await fetch(API_URL, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error("Failed to fetch World Cup data");

  const data: ApiData = await res.json();
  let id = 0;

  const matches: LiveMatch[] = [];

  for (const round of data.rounds) {
    for (const m of round.matches) {
      id++;
      matches.push({
        id,
        date: m.date,
        timeBrasilia: toBrasiliaTime(m.time),
        homeTeam: translateTeam(m.team1, lang),
        awayTeam: translateTeam(m.team2, lang),
        homeScore: m.score1 ?? null,
        awayScore: m.score2 ?? null,
        halfHomeScore: m.score1i ?? null,
        halfAwayScore: m.score2i ?? null,
        group: extractGroup(m.group),
        stage: mapStage(round.name),
        venue: m.ground || "",
      });
    }
  }

  return matches;
}
