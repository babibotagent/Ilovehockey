"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pt" | "en";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { pt: "Home", en: "Home" },
  "nav.elenco": { pt: "Elenco", en: "Squad" },
  "nav.historia": { pt: "História", en: "History" },
  "nav.partidas": { pt: "Partidas", en: "Matches" },
  "nav.copa2026": { pt: "Copa 2026", en: "WC 2026" },

  // Home
  "home.subtitle": {
    pt: "Pentacampeã mundial. A maior seleção de todos os tempos. Conheça os craques que vestem a amarelinha.",
    en: "Five-time world champions. The greatest national team of all time. Meet the stars who wear the yellow jersey.",
  },
  "home.cta.elenco": { pt: "Ver Elenco", en: "View Squad" },
  "home.cta.historia": { pt: "Nossa História", en: "Our History" },
  "home.stats.copas": { pt: "Copas do Mundo", en: "World Cups" },
  "home.stats.copaamerica": { pt: "Copa América", en: "Copa América" },
  "home.stats.confederacoes": { pt: "Confederações", en: "Confederations" },
  "home.stats.gols": { pt: "Gols em Copas", en: "World Cup Goals" },
  "home.proximos": { pt: "Próximos Jogos", en: "Upcoming Matches" },
  "home.proximos.sub": { pt: "Agenda da Seleção Brasileira", en: "Brazilian National Team schedule" },
  "home.vertodos": { pt: "Ver todos", en: "View all" },
  "home.destaques": { pt: "Destaques", en: "Highlights" },
  "home.destaques.sub": { pt: "Os craques da Seleção", en: "The team's star players" },
  "home.elenco.completo": { pt: "Elenco completo", en: "Full squad" },
  "home.cta.title": { pt: "5 vezes campeão do mundo", en: "5-time world champions" },
  "home.cta.desc": {
    pt: "Explore a história mais vitoriosa do futebol mundial. De 1958 a 2002, cinco estrelas que brilham para sempre.",
    en: "Explore the most victorious history in world football. From 1958 to 2002, five stars that shine forever.",
  },
  "home.cta.explorar": { pt: "Explorar História", en: "Explore History" },

  // Elenco
  "elenco.title": { pt: "Elenco", en: "Squad" },
  "elenco.subtitle": { pt: "Jogadores convocados para a Seleção Brasileira", en: "Players called up for the Brazilian National Team" },
  "elenco.buscar": { pt: "Buscar jogador...", en: "Search player..." },
  "elenco.todos": { pt: "Todos", en: "All" },
  "elenco.nenhum": { pt: "Nenhum jogador encontrado.", en: "No players found." },

  // Positions
  "pos.Goleiro": { pt: "Goleiro", en: "Goalkeeper" },
  "pos.Zagueiro": { pt: "Zagueiro", en: "Center-back" },
  "pos.Lateral": { pt: "Lateral", en: "Full-back" },
  "pos.Meio-campista": { pt: "Meio-campista", en: "Midfielder" },
  "pos.Atacante": { pt: "Atacante", en: "Forward" },

  // Player page
  "jogador.voltar": { pt: "Voltar ao elenco", en: "Back to squad" },
  "jogador.naoEncontrado": { pt: "Jogador não encontrado", en: "Player not found" },
  "jogador.anos": { pt: "anos", en: "years" },
  "jogador.desde": { pt: "Desde", en: "Since" },
  "jogador.jogos": { pt: "Jogos", en: "Matches" },
  "jogador.gols": { pt: "Gols", en: "Goals" },
  "jogador.assistencias": { pt: "Assistências", en: "Assists" },
  "jogador.carreira": { pt: "Carreira", en: "Career" },
  "jogador.conquistas": { pt: "Conquistas", en: "Achievements" },

  // Shared
  "shared.jogos": { pt: "jogos", en: "matches" },
  "shared.gols": { pt: "gols", en: "goals" },
  "shared.assist": { pt: "assist.", en: "assists" },

  // Historia
  "historia.title": { pt: "Nossa", en: "Our" },
  "historia.title2": { pt: "História", en: "History" },
  "historia.subtitle": {
    pt: "Cinco Copas do Mundo. Gerações de craques. A história mais gloriosa do futebol mundial.",
    en: "Five World Cups. Generations of stars. The most glorious history in world football.",
  },
  "historia.copas": { pt: "Copas do Mundo", en: "World Cups" },
  "historia.jogoscopas": { pt: "Jogos em Copas", en: "WC Matches" },
  "historia.vitorias": { pt: "Vitórias em Copas", en: "WC Wins" },
  "historia.golscopas": { pt: "Gols em Copas", en: "WC Goals" },
  "historia.lendas": { pt: "Lendas do Futebol Brasileiro", en: "Brazilian Football Legends" },
  "historia.lendas.sub": { pt: "Os maiores jogadores que já vestiram a camisa amarela", en: "The greatest players to ever wear the yellow jersey" },
  "historia.tecnico": { pt: "Técnico:", en: "Coach:" },
  "historia.artilheiro": { pt: "Artilheiro:", en: "Top Scorer:" },
  "historia.todascopas": { pt: "Todas as Copas desde 1950", en: "All World Cups since 1950" },
  "historia.todascopas.sub": { pt: "A história completa do Brasil em cada edição do torneio", en: "Brazil's complete history in every edition of the tournament" },
  "historia.campeonato": { pt: "Campeão", en: "Champion" },
  "historia.vice": { pt: "Vice-campeão", en: "Runner-up" },
  "historia.sede": { pt: "Sede", en: "Host" },
  "historia.final": { pt: "Final", en: "Final" },
  "historia.jogosdobrasil": { pt: "Jogos do Brasil", en: "Brazil's Matches" },
  "historia.elenque": { pt: "Elenco Destaque", en: "Key Players" },
  "historia.grupos": { pt: "Fase de Grupos", en: "Group Stage" },
  "historia.curiosidades": { pt: "Curiosidades", en: "Key Facts" },
  "historia.resultadobrasil": { pt: "Resultado do Brasil", en: "Brazil's Result" },
  "historia.totalpartidas": { pt: "Partidas", en: "Matches" },
  "historia.totalgols": { pt: "Total de Gols", en: "Total Goals" },
  "historia.publico": { pt: "Público Total", en: "Total Attendance" },
  "historia.selecionado": { pt: "Selecionado:", en: "Selected:" },
  "historia.todas": { pt: "Todas", en: "All" },
  "historia.soCampeonatos": { pt: "Só Títulos 🏆", en: "Titles Only 🏆" },

  // Partidas
  "partidas.title": { pt: "Partidas", en: "Matches" },
  "partidas.subtitle": { pt: "Próximos jogos e resultados da Seleção Brasileira", en: "Upcoming matches and results of the Brazilian National Team" },
  "partidas.todas": { pt: "Todas", en: "All" },
  "partidas.proximos": { pt: "Próximos Jogos", en: "Upcoming Matches" },
  "partidas.resultados": { pt: "Resultados", en: "Results" },
  "partidas.nenhuma": { pt: "Nenhuma partida encontrada.", en: "No matches found." },
  "partidas.encerrado": { pt: "Encerrado", en: "Final" },

  // Footer
  "footer.acompanhe": {
    pt: "Acompanhe tudo sobre a Seleção Brasileira de Futebol. Pentacampeã mundial.",
    en: "Follow everything about the Brazilian National Football Team. Five-time world champions.",
  },
  "footer.navegacao": { pt: "Navegação", en: "Navigation" },
  "footer.institucional": { pt: "Institucional", en: "Institutional" },
  "footer.copy": { pt: "Projeto educacional. Não oficial.", en: "Educational project. Unofficial." },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  toggle: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const toggle = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
