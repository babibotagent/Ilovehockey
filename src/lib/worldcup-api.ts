const API_URL = "https://worldcup26.ir/get/games";

interface ApiGame {
  id: string;
  home_team_name_en: string;
  away_team_name_en: string;
  home_score: string;
  away_score: string;
  home_scorers: string;
  away_scorers: string;
  group: string;
  matchday: string;
  local_date: string;
  stadium_id: string;
  finished: string;
  time_elapsed: string;
  type: string;
}

interface ApiResponse {
  games: ApiGame[];
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
  "Curacao": { pt: "Curaçao", fr: "Curaçao", es: "Curazao" },
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
  "Costa Rica": { pt: "Costa Rica", fr: "Costa Rica", es: "Costa Rica" },
};

function translateTeam(name: string, lang: string): string {
  if (lang === "en") return name;
  return teamNames[name]?.[lang] || name;
}

function parseLocalDate(localDate: string): { date: string; timeBrasilia: string } {
  // Format: "06/11/2026 13:00" (local time, assumed UTC-6 for Mexico, varies)
  const [datePart, timePart] = localDate.split(" ");
  const [month, day, year] = datePart.split("/");
  const date = `${year}-${month}-${day}`;

  // The API gives local venue time; we store it as-is since our static data
  // already has correct Brasília times. We'll use static times as primary.
  return { date, timeBrasilia: timePart || "00:00" };
}

function mapStage(type: string): string {
  switch (type) {
    case "group": return "Fase de Grupos";
    case "round_of_32": return "Oitavas (32)";
    case "round_of_16": return "16 avos";
    case "quarterfinal": return "Quartas de Final";
    case "semifinal": return "Semifinal";
    case "third_place": return "3º Lugar";
    case "final": return "Final";
    default: return "Fase de Grupos";
  }
}

export async function fetchLiveMatches(lang: string = "pt"): Promise<LiveMatch[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch World Cup data");

  const data: ApiResponse = await res.json();

  return data.games.map((g) => {
    const { date, timeBrasilia } = parseLocalDate(g.local_date);
    const hasScore = g.home_score !== "null" && g.home_score !== "" && g.time_elapsed !== "notstarted";
    const homeScore = hasScore ? parseInt(g.home_score) : null;
    const awayScore = hasScore ? parseInt(g.away_score) : null;

    return {
      id: parseInt(g.id),
      date,
      timeBrasilia,
      homeTeam: translateTeam(g.home_team_name_en, lang),
      awayTeam: translateTeam(g.away_team_name_en, lang),
      homeScore: isNaN(homeScore as number) ? null : homeScore,
      awayScore: isNaN(awayScore as number) ? null : awayScore,
      halfHomeScore: null,
      halfAwayScore: null,
      group: g.group || null,
      stage: mapStage(g.type),
      venue: "",
    };
  });
}
