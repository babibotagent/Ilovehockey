"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en" | "fr" | "es";

export const langLabels: Record<Lang, string> = {
  pt: "Português",
  en: "English",
  fr: "Français",
  es: "Español",
};

export const langFlags: Record<Lang, string> = {
  pt: "",
  en: "",
  fr: "",
  es: "",
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { pt: "Home", en: "Home", fr: "Accueil", es: "Inicio" },
  "nav.elenco": { pt: "Elenco", en: "Squad", fr: "Effectif", es: "Plantilla" },
  "nav.historia": { pt: "História", en: "History", fr: "Histoire", es: "Historia" },
  "nav.partidas": { pt: "Partidas", en: "Matches", fr: "Matchs", es: "Partidos" },
  "nav.copa2026": { pt: "Copa 2026", en: "WC 2026", fr: "CM 2026", es: "Mundial 2026" },
  "nav.outras": { pt: "Outras Seleções", en: "Other Teams", fr: "Autres Équipes", es: "Otras Selecciones" },
  "outras.title": { pt: "Em Construção", en: "Under Construction", fr: "En construction", es: "En construcción" },
  "outras.desc": {
    pt: "Esta seção está sendo desenvolvida. Em breve você poderá acompanhar tudo sobre a seleção brasileira de",
    en: "This section is under development. Soon you'll be able to follow everything about the Brazilian national team of",
    fr: "Cette section est en cours de développement. Bientôt vous pourrez suivre l'équipe du Brésil de",
    es: "Esta sección está en desarrollo. Pronto podrás seguir todo sobre la selección brasileña de",
  },
  "outras.voltar": { pt: "Voltar ao início", en: "Back to home", fr: "Retour à l'accueil", es: "Volver al inicio" },

  // Home
  "home.subtitle": {
    pt: "Pentacampeão mundial. A maior seleção de todos os tempos. Conheça os craques que vestem a amarelinha.",
    en: "Five-time world champions. The greatest national team of all time. Meet the stars who wear the yellow jersey.",
    fr: "Quintuple championne du monde. La plus grande sélection de tous les temps. Découvrez les stars qui portent le maillot jaune.",
    es: "Pentacampeona mundial. La mayor selección de todos los tiempos. Conoce a las estrellas que visten la amarelinha.",
  },
  "home.cta.elenco": { pt: "Ver Elenco", en: "View Squad", fr: "Voir l'effectif", es: "Ver plantilla" },
  "home.cta.historia": { pt: "Nossa História", en: "Our History", fr: "Notre histoire", es: "Nuestra historia" },
  "home.stats.copas": { pt: "Copas do Mundo", en: "World Cups", fr: "Coupes du Monde", es: "Copas del Mundo" },
  "home.stats.copaamerica": { pt: "Copa América", en: "Copa América", fr: "Copa América", es: "Copa América" },
  "home.stats.confederacoes": { pt: "Confederações", en: "Confederations", fr: "Confédérations", es: "Confederaciones" },
  "home.stats.gols": { pt: "Gols em Copas", en: "World Cup Goals", fr: "Buts en CM", es: "Goles en Mundiales" },
  "home.proximos": { pt: "Próximos Jogos", en: "Upcoming Matches", fr: "Prochains matchs", es: "Próximos partidos" },
  "home.proximos.sub": { pt: "Agenda da Seleção Brasileira", en: "Brazilian National Team schedule", fr: "Calendrier de la Seleção", es: "Agenda de la Selección Brasileña" },
  "home.vertodos": { pt: "Ver todos", en: "View all", fr: "Voir tout", es: "Ver todos" },
  "home.destaques": { pt: "Destaques", en: "Highlights", fr: "Joueurs vedettes", es: "Destacados" },
  "home.destaques.sub": { pt: "Os craques da Seleção", en: "The team's star players", fr: "Les stars de la Seleção", es: "Las estrellas de la Selección" },
  "home.elenco.completo": { pt: "Elenco completo", en: "Full squad", fr: "Effectif complet", es: "Plantilla completa" },
  "home.cta.title": { pt: "5 vezes campeão do mundo", en: "5-time world champions", fr: "5 fois champion du monde", es: "5 veces campeón del mundo" },
  "home.cta.desc": {
    pt: "Explore a história mais vitoriosa do futebol mundial. De 1958 a 2002, cinco estrelas que brilham para sempre.",
    en: "Explore the most victorious history in world football. From 1958 to 2002, five stars that shine forever.",
    fr: "Explorez l'histoire la plus victorieuse du football mondial. De 1958 à 2002, cinq étoiles qui brillent à jamais.",
    es: "Explora la historia más victoriosa del fútbol mundial. De 1958 a 2002, cinco estrellas que brillan para siempre.",
  },
  "home.cta.explorar": { pt: "Explorar História", en: "Explore History", fr: "Explorer l'histoire", es: "Explorar historia" },

  // Elenco
  "elenco.title": { pt: "Elenco", en: "Squad", fr: "Effectif", es: "Plantilla" },
  "elenco.subtitle": {
    pt: "Jogadores convocados para a Seleção Brasileira",
    en: "Players called up for the Brazilian National Team",
    fr: "Joueurs convoqués pour la Seleção",
    es: "Jugadores convocados para la Selección Brasileña",
  },
  "elenco.buscar": { pt: "Buscar jogador...", en: "Search player...", fr: "Chercher un joueur...", es: "Buscar jugador..." },
  "elenco.todos": { pt: "Todos", en: "All", fr: "Tous", es: "Todos" },
  "elenco.nenhum": { pt: "Nenhum jogador encontrado.", en: "No players found.", fr: "Aucun joueur trouvé.", es: "Ningún jugador encontrado." },

  // Positions
  "pos.Goleiro": { pt: "Goleiro", en: "Goalkeeper", fr: "Gardien", es: "Portero" },
  "pos.Zagueiro": { pt: "Zagueiro", en: "Center-back", fr: "Défenseur central", es: "Defensa central" },
  "pos.Lateral": { pt: "Lateral", en: "Full-back", fr: "Latéral", es: "Lateral" },
  "pos.Meio-campista": { pt: "Meio-campista", en: "Midfielder", fr: "Milieu", es: "Centrocampista" },
  "pos.Atacante": { pt: "Atacante", en: "Forward", fr: "Attaquant", es: "Delantero" },

  // Player page
  "jogador.voltar": { pt: "Voltar ao elenco", en: "Back to squad", fr: "Retour à l'effectif", es: "Volver a la plantilla" },
  "jogador.naoEncontrado": { pt: "Jogador não encontrado", en: "Player not found", fr: "Joueur introuvable", es: "Jugador no encontrado" },
  "jogador.anos": { pt: "anos", en: "years", fr: "ans", es: "años" },
  "jogador.desde": { pt: "Desde", en: "Since", fr: "Depuis", es: "Desde" },
  "jogador.jogos": { pt: "Jogos", en: "Matches", fr: "Matchs", es: "Partidos" },
  "jogador.gols": { pt: "Gols", en: "Goals", fr: "Buts", es: "Goles" },
  "jogador.assistencias": { pt: "Assistências", en: "Assists", fr: "Passes décisives", es: "Asistencias" },
  "jogador.carreira": { pt: "Carreira", en: "Career", fr: "Carrière", es: "Carrera" },
  "jogador.conquistas": { pt: "Conquistas", en: "Achievements", fr: "Palmarès", es: "Logros" },

  // Shared
  "shared.jogos": { pt: "jogos", en: "matches", fr: "matchs", es: "partidos" },
  "shared.gols": { pt: "gols", en: "goals", fr: "buts", es: "goles" },
  "shared.assist": { pt: "assist.", en: "assists", fr: "passes déc.", es: "asist." },

  // Historia
  "historia.title": { pt: "Nossa", en: "Our", fr: "Notre", es: "Nuestra" },
  "historia.title2": { pt: "História", en: "History", fr: "Histoire", es: "Historia" },
  "historia.subtitle": {
    pt: "Pentacampeãoo mundial. Gerações de craques. A paixão que move o país. A história mais gloriosa do futebol mundial.",
    en: "Five-time world champions. Generations of stars. The passion that moves a nation. The most glorious history in world football.",
    fr: "Quintuple champion du monde. Des générations de stars. La passion qui fait vibrer tout un pays. L'histoire la plus glorieuse du football mondial.",
    es: "Pentacampeón mundial. Generaciones de estrellas. La pasión que mueve al país. La historia más gloriosa del fútbol mundial.",
  },
  "historia.copas": { pt: "Campeões do Mundo", en: "World Champions", fr: "Champions du Monde", es: "Campeones del Mundo" },
  "historia.participacoes": { pt: "Copas Disputadas", en: "WC Appearances", fr: "Participations en CM", es: "Mundiales Disputados" },
  "historia.jogoscopas": { pt: "Jogos em Copas", en: "WC Matches", fr: "Matchs en CM", es: "Partidos en Mundiales" },
  "historia.vitorias": { pt: "Vitórias em Copas", en: "WC Wins", fr: "Victoires en CM", es: "Victorias en Mundiales" },
  "historia.golscopas": { pt: "Gols em Copas", en: "WC Goals", fr: "Buts en CM", es: "Goles en Mundiales" },
  "historia.lendas": { pt: "Lendas do Futebol Brasileiro", en: "Brazilian Football Legends", fr: "Légendes du football brésilien", es: "Leyendas del fútbol brasileño" },
  "historia.lendas.sub": {
    pt: "Os maiores jogadores que já vestiram a camisa amarela",
    en: "The greatest players to ever wear the yellow jersey",
    fr: "Les plus grands joueurs ayant porté le maillot jaune",
    es: "Los más grandes jugadores que vistieron la camiseta amarilla",
  },
  "historia.tecnico": { pt: "Técnico:", en: "Coach:", fr: "Entraîneur :", es: "Técnico:" },
  "historia.artilheiro": { pt: "Artilheiro:", en: "Top Scorer:", fr: "Meilleur buteur :", es: "Goleador:" },
  "historia.todascopas": { pt: "Todas as Copas desde 1930", en: "All World Cups since 1930", fr: "Toutes les Coupes depuis 1930", es: "Todos los Mundiales desde 1930" },
  "historia.todascopas.sub": {
    pt: "A história completa do Brasil em cada edição do torneio",
    en: "Brazil's complete history in every edition of the tournament",
    fr: "L'histoire complète du Brésil dans chaque édition du tournoi",
    es: "La historia completa de Brasil en cada edición del torneo",
  },
  "historia.campeonato": { pt: "Campeão", en: "Champion", fr: "Champion", es: "Campeón" },
  "historia.vice": { pt: "Vice-campeão", en: "Runner-up", fr: "Finaliste", es: "Subcampeón" },
  "historia.sede": { pt: "Sede", en: "Host", fr: "Pays hôte", es: "Sede" },
  "historia.final": { pt: "Final", en: "Final", fr: "Finale", es: "Final" },
  "historia.jogosdobrasil": { pt: "Jogos do Brasil", en: "Brazil's Matches", fr: "Matchs du Brésil", es: "Partidos de Brasil" },
  "historia.elenque": { pt: "Elenco Destaque", en: "Key Players", fr: "Joueurs clés", es: "Jugadores clave" },
  "historia.grupos": { pt: "Fase de Grupos", en: "Group Stage", fr: "Phase de groupes", es: "Fase de grupos" },
  "historia.curiosidades": { pt: "Curiosidades", en: "Key Facts", fr: "Faits marquants", es: "Datos curiosos" },
  "historia.resultadobrasil": { pt: "Resultado do Brasil", en: "Brazil's Result", fr: "Résultat du Brésil", es: "Resultado de Brasil" },
  "historia.totalpartidas": { pt: "Partidas", en: "Matches", fr: "Matchs", es: "Partidos" },
  "historia.totalgols": { pt: "Total de Gols", en: "Total Goals", fr: "Total de buts", es: "Total de goles" },
  "historia.publico": { pt: "Público Total", en: "Total Attendance", fr: "Affluence totale", es: "Asistencia total" },
  "historia.selecionado": { pt: "Selecionado:", en: "Selected:", fr: "Sélectionné :", es: "Seleccionado:" },
  "historia.todas": { pt: "Todas", en: "All", fr: "Toutes", es: "Todas" },
  "historia.soCampeonatos": { pt: "Só Títulos 🏆", en: "Titles Only 🏆", fr: "Titres uniquement 🏆", es: "Solo títulos 🏆" },

  // Partidas
  "partidas.title": { pt: "Partidas", en: "Matches", fr: "Matchs", es: "Partidos" },
  "partidas.subtitle": {
    pt: "Próximos jogos e resultados da Seleção Brasileira",
    en: "Upcoming matches and results of the Brazilian National Team",
    fr: "Prochains matchs et résultats de la Seleção",
    es: "Próximos partidos y resultados de la Selección Brasileña",
  },
  "partidas.todas": { pt: "Todas", en: "All", fr: "Tous", es: "Todos" },
  "partidas.proximos": { pt: "Próximos Jogos", en: "Upcoming Matches", fr: "Prochains matchs", es: "Próximos partidos" },
  "partidas.resultados": { pt: "Resultados", en: "Results", fr: "Résultats", es: "Resultados" },
  "partidas.nenhuma": { pt: "Nenhuma partida encontrada.", en: "No matches found.", fr: "Aucun match trouvé.", es: "Ningún partido encontrado." },
  "partidas.encerrado": { pt: "Encerrado", en: "Final", fr: "Terminé", es: "Finalizado" },

  // Footer
  "footer.acompanhe": {
    pt: "Acompanhe tudo sobre a Seleção Brasileira de Futebol. Pentacampeão mundial.",
    en: "Follow everything about the Brazilian National Football Team. Five-time world champions.",
    fr: "Suivez tout sur la Seleção brésilienne. Quintuple championne du monde.",
    es: "Sigue todo sobre la Selección Brasileña de Fútbol. Pentacampeona mundial.",
  },
  "footer.navegacao": { pt: "Navegação", en: "Navigation", fr: "Navigation", es: "Navegación" },
  "footer.institucional": { pt: "Institucional", en: "Institutional", fr: "Institutionnel", es: "Institucional" },
  "footer.copy": { pt: "Projeto educacional. Não oficial.", en: "Educational project. Unofficial.", fr: "Projet éducatif. Non officiel.", es: "Proyecto educativo. No oficial." },
  "footer.visitantes": { pt: "visitantes", en: "visitors", fr: "visiteurs", es: "visitantes" },

  // Copa 2026
  "copa.title": { pt: "Copa do Mundo", en: "World Cup", fr: "Coupe du Monde", es: "Copa del Mundo" },
  "copa.subtitle": {
    pt: "Tabela completa · 104 jogos · 16 cidades · Horários de Brasília (BRT)",
    en: "Full schedule · 104 matches · 16 cities · Brasília time (BRT)",
    fr: "Calendrier complet · 104 matchs · 16 villes · Heure de Brasília (BRT)",
    es: "Calendario completo · 104 partidos · 16 ciudades · Horario de Brasilia (BRT)",
  },
  "copa.hosts": { pt: "EUA · México · Canadá", en: "USA · Mexico · Canada", fr: "USA · Mexique · Canada", es: "EUA · México · Canadá" },
  "copa.dates": { pt: "11 jun – 19 jul 2026", en: "11 Jun – 19 Jul 2026", fr: "11 juin – 19 juil. 2026", es: "11 jun – 19 jul 2026" },
  "copa.timezone": { pt: "Horário de Brasília (BRT / UTC-3)", en: "Eastern Time (EDT / UTC-4)", fr: "Heure de l'Est (EDT / UTC-4)", es: "Horario de Brasilia (BRT / UTC-3)" },
  "copa.live": { pt: "Dados ao vivo", en: "Live data", fr: "Données en direct", es: "Datos en vivo" },
  "copa.static": { pt: "Dados estáticos", en: "Static data", fr: "Données statiques", es: "Datos estáticos" },
  "copa.withResults": { pt: "jogos com resultado", en: "matches with results", fr: "matchs avec résultat", es: "partidos con resultado" },
  "copa.refresh": { pt: "Atualizar", en: "Refresh", fr: "Actualiser", es: "Actualizar" },
  "copa.groups": { pt: "12 Grupos · 48 Seleções", en: "12 Groups · 48 Teams", fr: "12 Groupes · 48 Équipes", es: "12 Grupos · 48 Selecciones" },
  "copa.grupo": { pt: "Grupo", en: "Group", fr: "Groupe", es: "Grupo" },
  "copa.schedule": { pt: "Tabela Completa", en: "Full Schedule", fr: "Calendrier complet", es: "Calendario completo" },
  "copa.allTimes": { pt: "Todos os horários em Brasília (BRT / UTC-3)", en: "All times in Brasília (BRT / UTC-3)", fr: "Toutes les heures en heure de Brasília (BRT / UTC-3)", es: "Todos los horarios en Brasilia (BRT / UTC-3)" },
  "copa.onlyBrazil": { pt: "Só Brasil", en: "Brazil Only", fr: "Brésil seul", es: "Solo Brasil" },
  "copa.noMatches": { pt: "Nenhum jogo encontrado com esses filtros.", en: "No matches found with these filters.", fr: "Aucun match trouvé avec ces filtres.", es: "Ningún partido encontrado con estos filtros." },
  "copa.jogos": { pt: "jogos", en: "matches", fr: "matchs", es: "partidos" },

  // Stages
  "stage.Todos": { pt: "Todos", en: "All", fr: "Tous", es: "Todos" },
  "stage.Fase de Grupos": { pt: "Fase de Grupos", en: "Group Stage", fr: "Phase de groupes", es: "Fase de grupos" },
  "stage.Oitavas (32)": { pt: "Oitavas (32)", en: "Round of 32", fr: "32èmes", es: "32avos" },
  "stage.16 avos": { pt: "16 avos", en: "Round of 16", fr: "16èmes", es: "16avos" },
  "stage.Quartas de Final": { pt: "Quartas de Final", en: "Quarterfinals", fr: "Quarts de finale", es: "Cuartos de final" },
  "stage.Semifinal": { pt: "Semifinal", en: "Semifinals", fr: "Demi-finales", es: "Semifinales" },
  "stage.3º Lugar": { pt: "3º Lugar", en: "Third Place", fr: "3e place", es: "3er puesto" },
  "stage.Final": { pt: "Final", en: "Final", fr: "Finale", es: "Final" },

  // Historia extras
  "historia.recolher": { pt: "Recolher", en: "Collapse", fr: "Réduire", es: "Contraer" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
