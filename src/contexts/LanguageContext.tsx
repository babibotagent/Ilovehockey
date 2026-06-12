"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

export const langLabels: Record<Lang, string> = {
  en: "English",
  fr: "Français",
};

export const langFlags: Record<Lang, string> = {
  en: "🇨🇦",
  fr: "🇨🇦",
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.elenco": { en: "Roster", fr: "Effectif" },
  "nav.historia": { en: "History", fr: "Histoire" },
  "nav.partidas": { en: "Schedule", fr: "Calendrier" },
  "nav.stanleycup": { en: "Stanley Cup", fr: "Coupe Stanley" },

  // Home — Hero
  "home.hero.pre": { en: "I Love ", fr: "J'aime le " },
  "home.hero.highlight": { en: "Hockey", fr: "Hockey" },
  "home.subtitle": {
    en: "The most decorated franchise in NHL history. 24 Stanley Cup titles. Discover the legends who wore the bleu, blanc et rouge.",
    fr: "La franchise la plus titrée de l'histoire de la LNH. 24 Coupes Stanley. Découvrez les légendes qui ont porté le bleu, blanc et rouge.",
  },
  "home.cta.elenco": { en: "View Roster", fr: "Voir l'effectif" },
  "home.cta.historia": { en: "Explore History", fr: "Explorer l'histoire" },
  "home.stats.copas": { en: "Stanley Cups", fr: "Coupes Stanley" },
  "home.stats.copaamerica": { en: "Conference Titles", fr: "Titres de conférence" },
  "home.stats.confederacoes": { en: "Division Titles", fr: "Titres de division" },
  "home.stats.gols": { en: "Hall of Famers", fr: "Membres du Temple" },
  "home.proximos": { en: "Upcoming Games", fr: "Prochains matchs" },
  "home.proximos.sub": { en: "Montreal Canadiens schedule", fr: "Calendrier des Canadiens de Montréal" },
  "home.vertodos": { en: "View all", fr: "Voir tout" },
  "home.destaques": { en: "Highlights", fr: "Joueurs vedettes" },
  "home.destaques.sub": { en: "The team's star players", fr: "Les étoiles de l'équipe" },
  "home.elenco.completo": { en: "Full roster", fr: "Effectif complet" },
  "home.cta.title": { en: "24x Stanley Cup Champions", fr: "24 fois champions de la Coupe Stanley" },
  "home.cta.desc": {
    en: "Explore the most storied franchise in hockey history. From the Forum to the Bell Centre, over a century of championship tradition.",
    fr: "Explorez la franchise la plus légendaire de l'histoire du hockey. Du Forum au Centre Bell, plus d'un siècle de tradition victorieuse.",
  },
  "home.cta.explorar": { en: "Explore History", fr: "Explorer l'histoire" },

  // Roster (Elenco)
  "elenco.title": { en: "Roster", fr: "Effectif" },
  "elenco.subtitle": {
    en: "Current Montreal Canadiens roster",
    fr: "Effectif actuel des Canadiens de Montréal",
  },
  "elenco.buscar": { en: "Search player...", fr: "Chercher un joueur..." },
  "elenco.todos": { en: "All", fr: "Tous" },
  "elenco.nenhum": { en: "No players found.", fr: "Aucun joueur trouvé." },

  // Positions
  "pos.Goleiro": { en: "Goaltender", fr: "Gardien" },
  "pos.Zagueiro": { en: "Defenseman", fr: "Défenseur" },
  "pos.Lateral": { en: "Defenseman", fr: "Défenseur" },
  "pos.Meio-campista": { en: "Center", fr: "Centre" },
  "pos.Atacante": { en: "Forward", fr: "Attaquant" },

  // Player page
  "jogador.voltar": { en: "Back to roster", fr: "Retour à l'effectif" },
  "jogador.naoEncontrado": { en: "Player not found", fr: "Joueur introuvable" },
  "jogador.anos": { en: "years", fr: "ans" },
  "jogador.desde": { en: "Since", fr: "Depuis" },
  "jogador.jogos": { en: "Games", fr: "Matchs" },
  "jogador.gols": { en: "Goals", fr: "Buts" },
  "jogador.assistencias": { en: "Assists", fr: "Passes décisives" },
  "jogador.carreira": { en: "Career", fr: "Carrière" },
  "jogador.conquistas": { en: "Achievements", fr: "Palmarès" },

  // Shared
  "shared.jogos": { en: "games", fr: "matchs" },
  "shared.gols": { en: "goals", fr: "buts" },
  "shared.assist": { en: "assists", fr: "passes déc." },

  // History (Historia)
  "historia.title": { en: "Our", fr: "Notre" },
  "historia.title2": { en: "History", fr: "Histoire" },
  "historia.subtitle": {
    en: "24 Stanley Cup championships. Generations of legends. The passion that defines Montreal. The most glorious history in professional hockey.",
    fr: "24 championnats de la Coupe Stanley. Des générations de légendes. La passion qui définit Montréal. L'histoire la plus glorieuse du hockey professionnel.",
  },
  "historia.copas": { en: "Stanley Cup Champions", fr: "Champions de la Coupe Stanley" },
  "historia.participacoes": { en: "Playoff Appearances", fr: "Participations aux séries" },
  "historia.jogoscopas": { en: "Playoff Games", fr: "Matchs de séries" },
  "historia.vitorias": { en: "Playoff Wins", fr: "Victoires en séries" },
  "historia.golscopas": { en: "Playoff Goals", fr: "Buts en séries" },
  "historia.lendas": { en: "Canadiens Legends", fr: "Légendes des Canadiens" },
  "historia.lendas.sub": {
    en: "The greatest players to ever wear the CH",
    fr: "Les plus grands joueurs ayant porté le CH",
  },
  "historia.tecnico": { en: "Coach:", fr: "Entraîneur :" },
  "historia.artilheiro": { en: "Top Scorer:", fr: "Meilleur buteur :" },
  "historia.todascopas": { en: "All Stanley Cup Runs", fr: "Tous les parcours de la Coupe Stanley" },
  "historia.todascopas.sub": {
    en: "The Canadiens' complete history in every Stanley Cup pursuit",
    fr: "L'histoire complète des Canadiens dans chaque conquête de la Coupe Stanley",
  },
  "historia.campeonato": { en: "Champion", fr: "Champion" },
  "historia.vice": { en: "Runner-up", fr: "Finaliste" },
  "historia.sede": { en: "Host", fr: "Ville hôte" },
  "historia.final": { en: "Final", fr: "Finale" },
  "historia.jogosdobrasil": { en: "Canadiens' Games", fr: "Matchs des Canadiens" },
  "historia.elenque": { en: "Key Players", fr: "Joueurs clés" },
  "historia.grupos": { en: "Regular Season", fr: "Saison régulière" },
  "historia.curiosidades": { en: "Key Facts", fr: "Faits marquants" },
  "historia.resultadobrasil": { en: "Canadiens' Result", fr: "Résultat des Canadiens" },
  "historia.totalpartidas": { en: "Games", fr: "Matchs" },
  "historia.totalgols": { en: "Total Goals", fr: "Total de buts" },
  "historia.publico": { en: "Total Attendance", fr: "Affluence totale" },
  "historia.selecionado": { en: "Selected:", fr: "Sélectionné :" },
  "historia.todas": { en: "All", fr: "Toutes" },
  "historia.soCampeonatos": { en: "Titles Only 🏆", fr: "Titres uniquement 🏆" },
  "historia.recolher": { en: "Collapse", fr: "Réduire" },

  // Schedule (Partidas)
  "partidas.title": { en: "Schedule", fr: "Calendrier" },
  "partidas.subtitle": {
    en: "Upcoming games and results for the Montreal Canadiens",
    fr: "Prochains matchs et résultats des Canadiens de Montréal",
  },
  "partidas.todas": { en: "All", fr: "Tous" },
  "partidas.proximos": { en: "Upcoming Games", fr: "Prochains matchs" },
  "partidas.resultados": { en: "Results", fr: "Résultats" },
  "partidas.nenhuma": { en: "No games found.", fr: "Aucun match trouvé." },
  "partidas.encerrado": { en: "Final", fr: "Terminé" },

  // Footer
  "footer.acompanhe": {
    en: "Follow everything about the Montreal Canadiens. 24-time Stanley Cup champions.",
    fr: "Suivez tout sur les Canadiens de Montréal. 24 fois champions de la Coupe Stanley.",
  },
  "footer.navegacao": { en: "Navigation", fr: "Navigation" },
  "footer.institucional": { en: "About", fr: "À propos" },
  "footer.copy": { en: "Fan project. Unofficial.", fr: "Projet de fan. Non officiel." },
  "footer.visitantes": { en: "visitors", fr: "visiteurs" },

  // Stanley Cup (Cup section)
  "cup.title": { en: "Stanley Cup", fr: "Coupe Stanley" },
  "cup.subtitle": {
    en: "Complete playoff bracket and schedule",
    fr: "Tableau complet des séries éliminatoires et calendrier",
  },
  "cup.hosts": { en: "NHL", fr: "LNH" },
  "cup.dates": { en: "2025–26 Playoffs", fr: "Séries 2025–26" },
  "cup.timezone": { en: "Eastern Time (ET)", fr: "Heure de l'Est (HE)" },
  "cup.live": { en: "Live data", fr: "Données en direct" },
  "cup.static": { en: "Static data", fr: "Données statiques" },
  "cup.withResults": { en: "games with results", fr: "matchs avec résultat" },
  "cup.refresh": { en: "Refresh", fr: "Actualiser" },
  "cup.groups": { en: "4 Rounds · 16 Teams", fr: "4 rondes · 16 équipes" },
  "cup.grupo": { en: "Round", fr: "Ronde" },
  "cup.schedule": { en: "Full Schedule", fr: "Calendrier complet" },
  "cup.allTimes": { en: "All times in Eastern Time (ET)", fr: "Toutes les heures en heure de l'Est (HE)" },
  "cup.onlyHabs": { en: "Canadiens Only", fr: "Canadiens seulement" },
  "cup.noMatches": { en: "No games found with these filters.", fr: "Aucun match trouvé avec ces filtres." },
  "cup.jogos": { en: "games", fr: "matchs" },

  // Stages
  "stage.Todos": { en: "All", fr: "Tous" },
  "stage.Fase de Grupos": { en: "First Round", fr: "Premier tour" },
  "stage.Oitavas (32)": { en: "Second Round", fr: "Deuxième tour" },
  "stage.16 avos": { en: "Conference Finals", fr: "Finales de conférence" },
  "stage.Quartas de Final": { en: "Conference Finals", fr: "Finales de conférence" },
  "stage.Semifinal": { en: "Semifinals", fr: "Demi-finales" },
  "stage.3º Lugar": { en: "Third Place", fr: "3e place" },
  "stage.Final": { en: "Stanley Cup Final", fr: "Finale de la Coupe Stanley" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
