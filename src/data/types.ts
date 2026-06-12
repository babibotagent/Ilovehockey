export type Position = "Center" | "Left Wing" | "Right Wing" | "Defenseman" | "Goaltender";

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
  nickname?: string;
  position: Position;
  image: string;
  era: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
    stanleyCups: number;
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
  | "NHL Regular Season"
  | "NHL Playoffs"
  | "NHL Preseason";

export interface WorldCup {
  year: number;
  host: string;
  final: string;
  coach: string;
  topScorer: string;
  goals: number;
  description: string;
}
