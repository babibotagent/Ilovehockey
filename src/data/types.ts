export type Position = "Goleiro" | "Zagueiro" | "Lateral" | "Meio-campista" | "Atacante";

export interface Player {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  number: number;
  position: Position;
  club: string;
  clubCountry: string;
  age: number;
  birthDate: string;
  height: string;
  nationality: string;
  image: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
    debut: string;
  };
  career: CareerEntry[];
  highlights: string[];
}

export interface CareerEntry {
  year: string;
  club: string;
  description: string;
}

export interface Legend {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  position: Position;
  image: string;
  era: string;
  stats: {
    games: number;
    goals: number;
  };
  description: string;
  achievements: string[];
}

export interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  competition: Competition;
  venue: string;
  city: string;
  homeScore?: number;
  awayScore?: number;
  status: "upcoming" | "live" | "finished";
}

export type Competition =
  | "Eliminatórias"
  | "Copa América"
  | "Copa do Mundo"
  | "Amistoso"
  | "Copa das Confederações";

export interface WorldCup {
  year: number;
  host: string;
  final: string;
  coach: string;
  topScorer: string;
  goals: number;
  description: string;
}
