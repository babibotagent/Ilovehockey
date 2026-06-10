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

const teamNames: Record<string, Record<string, string>> = {
  "Mexico": { pt: "México", fr: "Mexique", es: "México" },
  "South Africa": { pt: "África do Sul", fr: "Afrique du Sud", es: "Sudáfrica" },
  "South Korea": { pt: "Coreia do Sul", fr: "Corée du Sud", es: "Corea del Sur" },
  "Czech Republic": { pt: "Tchéquia", fr: "Tchéquie", es: "Chequia" },
  "Canada": { pt: "Canadá", fr: "Canada", es: "Canadá" },
  "Bosnia and Herzegovina": { pt: "Bósnia e Herzegovina", fr: "Bosnie-Herzégovine", es: "Bosnia y Herzegovina" },
  "Qatar": { pt: "Catar", fr: "Qatar", es: "Catar" },
  "Switzerland": { pt: "Suíça", fr: "Suisse", es: "Suiza" },
  "Brazil": { pt: "Brasil", fr: "Brésil", es: "Brasil" },
  "Morocco": { pt: "Marrocos", fr: "Maroc", es: "Marruecos" },
  "Haiti": { pt: "Haiti", fr: "Haïti", es: "Haití" },
  "Scotland": { pt: "Escócia", fr: "Écosse", es: "Escocia" },
  "United States": { pt: "Estados Unidos", fr: "États-Unis", es: "Estados Unidos" },
  "Paraguay": { pt: "Paraguai", fr: "Paraguay", es: "Paraguay" },
  "Australia": { pt: "Austrália", fr: "Australie", es: "Australia" },
  "Turkey": { pt: "Turquia", fr: "Turquie", es: "Turquía" },
  "Türkiye": { pt: "Turquia", fr: "Turquie", es: "Turquía" },
  "Germany": { pt: "Alemanha", fr: "Allemagne", es: "Alemania" },
  "Curaçao": { pt: "Curaçao", fr: "Curaçao", es: "Curazao" },
  "Ivory Coast": { pt: "Costa do Marfim", fr: "Côte d'Ivoire", es: "Costa de Marfil" },
  "Côte d'Ivoire": { pt: "Costa do Marfim", fr: "Côte d'Ivoire", es: "Costa de Marfil" },
  "Ecuador": { pt: "Equador", fr: "Équateur", es: "Ecuador" },
  "Netherlands": { pt: "Holanda", fr: "Pays-Bas", es: "Países Bajos" },
  "Japan": { pt: "Japão", fr: "Japon", es: "Japón" },
  "Sweden": { pt: "Suécia", fr: "Suède", es: "Suecia" },
  "Tunisia": { pt: "Tunísia", fr: "Tunisie", es: "Túnez" },
  "Spain": { pt: "Espanha", fr: "Espagne", es: "España" },
  "Cape Verde": { pt: "Cabo Verde", fr: "Cap-Vert", es: "Cabo Verde" },
  "Saudi Arabia": { pt: "Arábia Saudita", fr: "Arabie saoudite", es: "Arabia Saudita" },
  "Uruguay": { pt: "Uruguai", fr: "Uruguay", es: "Uruguay" },
  "Belgium": { pt: "Bélgica", fr: "Belgique", es: "Bélgica" },
  "Egypt": { pt: "Egito", fr: "Égypte", es: "Egipto" },
  "Iran": { pt: "Irã", fr: "Iran", es: "Irán" },
  "New Zealand": { pt: "Nova Zelândia", fr: "Nouvelle-Zélande", es: "Nueva Zelanda" },
  "France": { pt: "França", fr: "France", es: "Francia" },
  "Senegal": { pt: "Senegal", fr: "Sénégal", es: "Senegal" },
  "Iraq": { pt: "Iraque", fr: "Irak", es: "Irak" },
  "Norway": { pt: "Noruega", fr: "Norvège", es: "Noruega" },
  "Argentina": { pt: "Argentina", fr: "Argentine", es: "Argentina" },
  "Algeria": { pt: "Argélia", fr: "Algérie", es: "Argelia" },
  "Austria": { pt: "Áustria", fr: "Autriche", es: "Austria" },
  "Jordan": { pt: "Jordânia", fr: "Jordanie", es: "Jordania" },
  "Portugal": { pt: "Portugal", fr: "Portugal", es: "Portugal" },
  "DR Congo": { pt: "RD Congo", fr: "RD Congo", es: "RD Congo" },
  "Congo DR": { pt: "RD Congo", fr: "RD Congo", es: "RD Congo" },
  "Uzbekistan": { pt: "Uzbequistão", fr: "Ouzbékistan", es: "Uzbekistán" },
  "Colombia": { pt: "Colômbia", fr: "Colombie", es: "Colombia" },
  "England": { pt: "Inglaterra", fr: "Angleterre", es: "Inglaterra" },
  "Croatia": { pt: "Croácia", fr: "Croatie", es: "Croacia" },
  "Ghana": { pt: "Gana", fr: "Ghana", es: "Ghana" },
  "Panama": { pt: "Panamá", fr: "Panama", es: "Panamá" },
};

function translateTeam(name: string, lang: string): string {
  if (lang === "en") return name;
  return teamNames[name]?.[lang] || name;
}

function parseUtcOffset(timeStr: string): { hours: number; minutes: number; utcOffset: number } {
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
