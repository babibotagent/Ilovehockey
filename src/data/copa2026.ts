export interface Copa2026Match {
  id: number;
  date: string;
  timeBrasilia: string;
  homeTeam: string;
  awayTeam: string;
  group?: string;
  stage: string;
  venue: string;
  city: string;
  country: string;
  homeScore?: number;
  awayScore?: number;
}

export interface Copa2026Group {
  name: string;
  teams: string[];
}

export const copa2026Groups: Copa2026Group[] = [
  { name: "A", teams: ["México", "África do Sul", "Coreia do Sul", "Tchéquia"] },
  { name: "B", teams: ["Canadá", "Bósnia e Herzegovina", "Catar", "Suíça"] },
  { name: "C", teams: ["Brasil", "Marrocos", "Haiti", "Escócia"] },
  { name: "D", teams: ["Estados Unidos", "Paraguai", "Austrália", "Turquia"] },
  { name: "E", teams: ["Alemanha", "Curaçao", "Costa do Marfim", "Equador"] },
  { name: "F", teams: ["Holanda", "Japão", "Suécia", "Tunísia"] },
  { name: "G", teams: ["Bélgica", "Egito", "Irã", "Nova Zelândia"] },
  { name: "H", teams: ["Espanha", "Cabo Verde", "Arábia Saudita", "Uruguai"] },
  { name: "I", teams: ["França", "Senegal", "Iraque", "Noruega"] },
  { name: "J", teams: ["Argentina", "Argélia", "Áustria", "Jordânia"] },
  { name: "K", teams: ["Portugal", "RD Congo", "Uzbequistão", "Colômbia"] },
  { name: "L", teams: ["Inglaterra", "Croácia", "Gana", "Panamá"] },
];

// Times converted from ET to Brasília (BRT = ET + 1h)
export const copa2026Matches: Copa2026Match[] = [
  // ======== FASE DE GRUPOS ========

  // Dia 1 - 11/06
  { id: 1, date: "2026-06-11", timeBrasilia: "16:00", homeTeam: "México", awayTeam: "África do Sul", homeScore: 2, awayScore: 0, group: "A", stage: "Fase de Grupos", venue: "Estadio Azteca", city: "Cidade do México", country: "México" },
  { id: 2, date: "2026-06-11", timeBrasilia: "23:00", homeTeam: "Coreia do Sul", awayTeam: "Tchéquia", homeScore: 2, awayScore: 1, group: "A", stage: "Fase de Grupos", venue: "Estadio Akron", city: "Zapopan", country: "México" },

  // Dia 2 - 12/06
  { id: 3, date: "2026-06-12", timeBrasilia: "16:00", homeTeam: "Canadá", awayTeam: "Bósnia e Herzegovina", group: "B", stage: "Fase de Grupos", venue: "BMO Field", city: "Toronto", country: "Canadá" },
  { id: 4, date: "2026-06-12", timeBrasilia: "23:00", homeTeam: "Estados Unidos", awayTeam: "Paraguai", group: "D", stage: "Fase de Grupos", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },

  // Dia 3 - 13/06
  { id: 5, date: "2026-06-13", timeBrasilia: "16:00", homeTeam: "Catar", awayTeam: "Suíça", group: "B", stage: "Fase de Grupos", venue: "Levi's Stadium", city: "Santa Clara", country: "EUA" },
  { id: 6, date: "2026-06-13", timeBrasilia: "19:00", homeTeam: "Brasil", awayTeam: "Marrocos", group: "C", stage: "Fase de Grupos", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 7, date: "2026-06-13", timeBrasilia: "22:00", homeTeam: "Haiti", awayTeam: "Escócia", group: "C", stage: "Fase de Grupos", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },

  // Dia 4 - 14/06
  { id: 8, date: "2026-06-14", timeBrasilia: "01:00", homeTeam: "Austrália", awayTeam: "Turquia", group: "D", stage: "Fase de Grupos", venue: "BC Place", city: "Vancouver", country: "Canadá" },
  { id: 9, date: "2026-06-14", timeBrasilia: "14:00", homeTeam: "Alemanha", awayTeam: "Curaçao", group: "E", stage: "Fase de Grupos", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 10, date: "2026-06-14", timeBrasilia: "17:00", homeTeam: "Holanda", awayTeam: "Japão", group: "F", stage: "Fase de Grupos", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 11, date: "2026-06-14", timeBrasilia: "20:00", homeTeam: "Costa do Marfim", awayTeam: "Equador", group: "E", stage: "Fase de Grupos", venue: "Lincoln Financial Field", city: "Filadélfia", country: "EUA" },
  { id: 12, date: "2026-06-14", timeBrasilia: "23:00", homeTeam: "Suécia", awayTeam: "Tunísia", group: "F", stage: "Fase de Grupos", venue: "Estadio BBVA", city: "Monterrey", country: "México" },

  // Dia 5 - 15/06
  { id: 13, date: "2026-06-15", timeBrasilia: "13:00", homeTeam: "Espanha", awayTeam: "Cabo Verde", group: "H", stage: "Fase de Grupos", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 14, date: "2026-06-15", timeBrasilia: "16:00", homeTeam: "Bélgica", awayTeam: "Egito", group: "G", stage: "Fase de Grupos", venue: "Lumen Field", city: "Seattle", country: "EUA" },
  { id: 15, date: "2026-06-15", timeBrasilia: "19:00", homeTeam: "Arábia Saudita", awayTeam: "Uruguai", group: "H", stage: "Fase de Grupos", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },
  { id: 16, date: "2026-06-15", timeBrasilia: "22:00", homeTeam: "Irã", awayTeam: "Nova Zelândia", group: "G", stage: "Fase de Grupos", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },

  // Dia 6 - 16/06
  { id: 17, date: "2026-06-16", timeBrasilia: "16:00", homeTeam: "França", awayTeam: "Senegal", group: "I", stage: "Fase de Grupos", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 18, date: "2026-06-16", timeBrasilia: "19:00", homeTeam: "Iraque", awayTeam: "Noruega", group: "I", stage: "Fase de Grupos", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },
  { id: 19, date: "2026-06-16", timeBrasilia: "22:00", homeTeam: "Argentina", awayTeam: "Argélia", group: "J", stage: "Fase de Grupos", venue: "Arrowhead Stadium", city: "Kansas City", country: "EUA" },

  // Dia 7 - 17/06
  { id: 20, date: "2026-06-17", timeBrasilia: "01:00", homeTeam: "Áustria", awayTeam: "Jordânia", group: "J", stage: "Fase de Grupos", venue: "Levi's Stadium", city: "Santa Clara", country: "EUA" },
  { id: 21, date: "2026-06-17", timeBrasilia: "14:00", homeTeam: "Portugal", awayTeam: "RD Congo", group: "K", stage: "Fase de Grupos", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 22, date: "2026-06-17", timeBrasilia: "17:00", homeTeam: "Inglaterra", awayTeam: "Croácia", group: "L", stage: "Fase de Grupos", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 23, date: "2026-06-17", timeBrasilia: "20:00", homeTeam: "Gana", awayTeam: "Panamá", group: "L", stage: "Fase de Grupos", venue: "BMO Field", city: "Toronto", country: "Canadá" },
  { id: 24, date: "2026-06-17", timeBrasilia: "23:00", homeTeam: "Uzbequistão", awayTeam: "Colômbia", group: "K", stage: "Fase de Grupos", venue: "Estadio Azteca", city: "Cidade do México", country: "México" },

  // Rodada 2 - 18/06
  { id: 25, date: "2026-06-18", timeBrasilia: "13:00", homeTeam: "Tchéquia", awayTeam: "África do Sul", group: "A", stage: "Fase de Grupos", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 26, date: "2026-06-18", timeBrasilia: "16:00", homeTeam: "Suíça", awayTeam: "Bósnia e Herzegovina", group: "B", stage: "Fase de Grupos", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },
  { id: 27, date: "2026-06-18", timeBrasilia: "19:00", homeTeam: "Canadá", awayTeam: "Catar", group: "B", stage: "Fase de Grupos", venue: "BC Place", city: "Vancouver", country: "Canadá" },
  { id: 28, date: "2026-06-18", timeBrasilia: "22:00", homeTeam: "México", awayTeam: "Coreia do Sul", group: "A", stage: "Fase de Grupos", venue: "Estadio Akron", city: "Zapopan", country: "México" },

  // 19/06
  { id: 29, date: "2026-06-19", timeBrasilia: "16:00", homeTeam: "Estados Unidos", awayTeam: "Austrália", group: "D", stage: "Fase de Grupos", venue: "Lumen Field", city: "Seattle", country: "EUA" },
  { id: 30, date: "2026-06-19", timeBrasilia: "19:00", homeTeam: "Escócia", awayTeam: "Marrocos", group: "C", stage: "Fase de Grupos", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },
  { id: 31, date: "2026-06-19", timeBrasilia: "21:30", homeTeam: "Brasil", awayTeam: "Haiti", group: "C", stage: "Fase de Grupos", venue: "Lincoln Financial Field", city: "Filadélfia", country: "EUA" },
  { id: 32, date: "2026-06-20", timeBrasilia: "00:00", homeTeam: "Turquia", awayTeam: "Paraguai", group: "D", stage: "Fase de Grupos", venue: "Levi's Stadium", city: "Santa Clara", country: "EUA" },

  // 20/06
  { id: 33, date: "2026-06-20", timeBrasilia: "14:00", homeTeam: "Holanda", awayTeam: "Suécia", group: "F", stage: "Fase de Grupos", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 34, date: "2026-06-20", timeBrasilia: "17:00", homeTeam: "Alemanha", awayTeam: "Costa do Marfim", group: "E", stage: "Fase de Grupos", venue: "BMO Field", city: "Toronto", country: "Canadá" },
  { id: 35, date: "2026-06-20", timeBrasilia: "21:00", homeTeam: "Equador", awayTeam: "Curaçao", group: "E", stage: "Fase de Grupos", venue: "Arrowhead Stadium", city: "Kansas City", country: "EUA" },

  // 21/06
  { id: 36, date: "2026-06-21", timeBrasilia: "01:00", homeTeam: "Tunísia", awayTeam: "Japão", group: "F", stage: "Fase de Grupos", venue: "Estadio BBVA", city: "Monterrey", country: "México" },
  { id: 37, date: "2026-06-21", timeBrasilia: "13:00", homeTeam: "Espanha", awayTeam: "Arábia Saudita", group: "H", stage: "Fase de Grupos", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 38, date: "2026-06-21", timeBrasilia: "16:00", homeTeam: "Bélgica", awayTeam: "Irã", group: "G", stage: "Fase de Grupos", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },
  { id: 39, date: "2026-06-21", timeBrasilia: "19:00", homeTeam: "Uruguai", awayTeam: "Cabo Verde", group: "H", stage: "Fase de Grupos", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },
  { id: 40, date: "2026-06-21", timeBrasilia: "22:00", homeTeam: "Nova Zelândia", awayTeam: "Egito", group: "G", stage: "Fase de Grupos", venue: "BC Place", city: "Vancouver", country: "Canadá" },

  // 22/06
  { id: 41, date: "2026-06-22", timeBrasilia: "14:00", homeTeam: "Argentina", awayTeam: "Áustria", group: "J", stage: "Fase de Grupos", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 42, date: "2026-06-22", timeBrasilia: "18:00", homeTeam: "França", awayTeam: "Iraque", group: "I", stage: "Fase de Grupos", venue: "Lincoln Financial Field", city: "Filadélfia", country: "EUA" },
  { id: 43, date: "2026-06-22", timeBrasilia: "21:00", homeTeam: "Noruega", awayTeam: "Senegal", group: "I", stage: "Fase de Grupos", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 44, date: "2026-06-23", timeBrasilia: "00:00", homeTeam: "Jordânia", awayTeam: "Argélia", group: "J", stage: "Fase de Grupos", venue: "Levi's Stadium", city: "Santa Clara", country: "EUA" },

  // 23/06
  { id: 45, date: "2026-06-23", timeBrasilia: "14:00", homeTeam: "Portugal", awayTeam: "Uzbequistão", group: "K", stage: "Fase de Grupos", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 46, date: "2026-06-23", timeBrasilia: "17:00", homeTeam: "Inglaterra", awayTeam: "Gana", group: "L", stage: "Fase de Grupos", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },
  { id: 47, date: "2026-06-23", timeBrasilia: "20:00", homeTeam: "Panamá", awayTeam: "Croácia", group: "L", stage: "Fase de Grupos", venue: "BMO Field", city: "Toronto", country: "Canadá" },
  { id: 48, date: "2026-06-23", timeBrasilia: "23:00", homeTeam: "Colômbia", awayTeam: "RD Congo", group: "K", stage: "Fase de Grupos", venue: "Estadio Akron", city: "Zapopan", country: "México" },

  // Rodada 3 - 24/06
  { id: 49, date: "2026-06-24", timeBrasilia: "16:00", homeTeam: "Suíça", awayTeam: "Canadá", group: "B", stage: "Fase de Grupos", venue: "BC Place", city: "Vancouver", country: "Canadá" },
  { id: 50, date: "2026-06-24", timeBrasilia: "16:00", homeTeam: "Bósnia e Herzegovina", awayTeam: "Catar", group: "B", stage: "Fase de Grupos", venue: "Lumen Field", city: "Seattle", country: "EUA" },
  { id: 51, date: "2026-06-24", timeBrasilia: "19:00", homeTeam: "Escócia", awayTeam: "Brasil", group: "C", stage: "Fase de Grupos", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },
  { id: 52, date: "2026-06-24", timeBrasilia: "19:00", homeTeam: "Marrocos", awayTeam: "Haiti", group: "C", stage: "Fase de Grupos", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 53, date: "2026-06-24", timeBrasilia: "22:00", homeTeam: "Tchéquia", awayTeam: "México", group: "A", stage: "Fase de Grupos", venue: "Estadio Azteca", city: "Cidade do México", country: "México" },
  { id: 54, date: "2026-06-24", timeBrasilia: "22:00", homeTeam: "África do Sul", awayTeam: "Coreia do Sul", group: "A", stage: "Fase de Grupos", venue: "Estadio BBVA", city: "Monterrey", country: "México" },

  // 25/06
  { id: 55, date: "2026-06-25", timeBrasilia: "17:00", homeTeam: "Curaçao", awayTeam: "Costa do Marfim", group: "E", stage: "Fase de Grupos", venue: "Lincoln Financial Field", city: "Filadélfia", country: "EUA" },
  { id: 56, date: "2026-06-25", timeBrasilia: "17:00", homeTeam: "Equador", awayTeam: "Alemanha", group: "E", stage: "Fase de Grupos", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 57, date: "2026-06-25", timeBrasilia: "20:00", homeTeam: "Japão", awayTeam: "Suécia", group: "F", stage: "Fase de Grupos", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 58, date: "2026-06-25", timeBrasilia: "20:00", homeTeam: "Tunísia", awayTeam: "Holanda", group: "F", stage: "Fase de Grupos", venue: "Arrowhead Stadium", city: "Kansas City", country: "EUA" },
  { id: 59, date: "2026-06-25", timeBrasilia: "23:00", homeTeam: "Turquia", awayTeam: "Estados Unidos", group: "D", stage: "Fase de Grupos", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },
  { id: 60, date: "2026-06-25", timeBrasilia: "23:00", homeTeam: "Paraguai", awayTeam: "Austrália", group: "D", stage: "Fase de Grupos", venue: "Levi's Stadium", city: "Santa Clara", country: "EUA" },

  // 26/06
  { id: 61, date: "2026-06-26", timeBrasilia: "16:00", homeTeam: "Noruega", awayTeam: "França", group: "I", stage: "Fase de Grupos", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },
  { id: 62, date: "2026-06-26", timeBrasilia: "16:00", homeTeam: "Senegal", awayTeam: "Iraque", group: "I", stage: "Fase de Grupos", venue: "BMO Field", city: "Toronto", country: "Canadá" },
  { id: 63, date: "2026-06-26", timeBrasilia: "21:00", homeTeam: "Cabo Verde", awayTeam: "Arábia Saudita", group: "H", stage: "Fase de Grupos", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 64, date: "2026-06-26", timeBrasilia: "21:00", homeTeam: "Uruguai", awayTeam: "Espanha", group: "H", stage: "Fase de Grupos", venue: "Estadio Akron", city: "Zapopan", country: "México" },
  { id: 65, date: "2026-06-27", timeBrasilia: "00:00", homeTeam: "Egito", awayTeam: "Irã", group: "G", stage: "Fase de Grupos", venue: "Lumen Field", city: "Seattle", country: "EUA" },
  { id: 66, date: "2026-06-27", timeBrasilia: "00:00", homeTeam: "Nova Zelândia", awayTeam: "Bélgica", group: "G", stage: "Fase de Grupos", venue: "BC Place", city: "Vancouver", country: "Canadá" },

  // 27/06
  { id: 67, date: "2026-06-27", timeBrasilia: "18:00", homeTeam: "Panamá", awayTeam: "Inglaterra", group: "L", stage: "Fase de Grupos", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 68, date: "2026-06-27", timeBrasilia: "18:00", homeTeam: "Croácia", awayTeam: "Gana", group: "L", stage: "Fase de Grupos", venue: "Lincoln Financial Field", city: "Filadélfia", country: "EUA" },
  { id: 69, date: "2026-06-27", timeBrasilia: "20:30", homeTeam: "Colômbia", awayTeam: "Portugal", group: "K", stage: "Fase de Grupos", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },
  { id: 70, date: "2026-06-27", timeBrasilia: "20:30", homeTeam: "RD Congo", awayTeam: "Uzbequistão", group: "K", stage: "Fase de Grupos", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 71, date: "2026-06-27", timeBrasilia: "23:00", homeTeam: "Argélia", awayTeam: "Áustria", group: "J", stage: "Fase de Grupos", venue: "Arrowhead Stadium", city: "Kansas City", country: "EUA" },
  { id: 72, date: "2026-06-27", timeBrasilia: "23:00", homeTeam: "Jordânia", awayTeam: "Argentina", group: "J", stage: "Fase de Grupos", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },

  // ======== OITAVAS (Round of 32) ========
  { id: 73, date: "2026-06-28", timeBrasilia: "16:00", homeTeam: "2ºA", awayTeam: "2ºB", stage: "Oitavas (32)", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },
  { id: 74, date: "2026-06-29", timeBrasilia: "17:30", homeTeam: "1ºE", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },
  { id: 75, date: "2026-06-29", timeBrasilia: "14:00", homeTeam: "1ºC", awayTeam: "2ºF", stage: "Oitavas (32)", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 76, date: "2026-06-29", timeBrasilia: "22:00", homeTeam: "1ºF", awayTeam: "2ºC", stage: "Oitavas (32)", venue: "Estadio BBVA", city: "Monterrey", country: "México" },
  { id: 77, date: "2026-06-30", timeBrasilia: "18:00", homeTeam: "1ºI", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 78, date: "2026-06-30", timeBrasilia: "14:00", homeTeam: "2ºE", awayTeam: "2ºI", stage: "Oitavas (32)", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 79, date: "2026-06-30", timeBrasilia: "22:00", homeTeam: "1ºA", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "Estadio Azteca", city: "Cidade do México", country: "México" },
  { id: 80, date: "2026-07-01", timeBrasilia: "13:00", homeTeam: "1ºL", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 81, date: "2026-07-01", timeBrasilia: "21:00", homeTeam: "1ºD", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "Levi's Stadium", city: "Santa Clara", country: "EUA" },
  { id: 82, date: "2026-07-01", timeBrasilia: "17:00", homeTeam: "1ºG", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "Lumen Field", city: "Seattle", country: "EUA" },
  { id: 83, date: "2026-07-02", timeBrasilia: "20:00", homeTeam: "2ºK", awayTeam: "2ºL", stage: "Oitavas (32)", venue: "BMO Field", city: "Toronto", country: "Canadá" },
  { id: 84, date: "2026-07-02", timeBrasilia: "16:00", homeTeam: "1ºH", awayTeam: "2ºJ", stage: "Oitavas (32)", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },
  { id: 85, date: "2026-07-03", timeBrasilia: "00:00", homeTeam: "1ºB", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "BC Place", city: "Vancouver", country: "Canadá" },
  { id: 86, date: "2026-07-03", timeBrasilia: "19:00", homeTeam: "1ºJ", awayTeam: "2ºH", stage: "Oitavas (32)", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },
  { id: 87, date: "2026-07-03", timeBrasilia: "22:30", homeTeam: "1ºK", awayTeam: "3º Melhor", stage: "Oitavas (32)", venue: "Arrowhead Stadium", city: "Kansas City", country: "EUA" },
  { id: 88, date: "2026-07-03", timeBrasilia: "15:00", homeTeam: "2ºD", awayTeam: "2ºG", stage: "Oitavas (32)", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },

  // ======== 16 AVOS (Round of 16) ========
  { id: 89, date: "2026-07-04", timeBrasilia: "18:00", homeTeam: "V74", awayTeam: "V77", stage: "16 avos", venue: "Lincoln Financial Field", city: "Filadélfia", country: "EUA" },
  { id: 90, date: "2026-07-04", timeBrasilia: "14:00", homeTeam: "V73", awayTeam: "V75", stage: "16 avos", venue: "NRG Stadium", city: "Houston", country: "EUA" },
  { id: 91, date: "2026-07-05", timeBrasilia: "17:00", homeTeam: "V76", awayTeam: "V78", stage: "16 avos", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
  { id: 92, date: "2026-07-05", timeBrasilia: "21:00", homeTeam: "V79", awayTeam: "V80", stage: "16 avos", venue: "Estadio Azteca", city: "Cidade do México", country: "México" },
  { id: 93, date: "2026-07-06", timeBrasilia: "16:00", homeTeam: "V83", awayTeam: "V84", stage: "16 avos", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 94, date: "2026-07-06", timeBrasilia: "21:00", homeTeam: "V81", awayTeam: "V82", stage: "16 avos", venue: "Lumen Field", city: "Seattle", country: "EUA" },
  { id: 95, date: "2026-07-07", timeBrasilia: "13:00", homeTeam: "V86", awayTeam: "V88", stage: "16 avos", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },
  { id: 96, date: "2026-07-07", timeBrasilia: "17:00", homeTeam: "V85", awayTeam: "V87", stage: "16 avos", venue: "BC Place", city: "Vancouver", country: "Canadá" },

  // ======== QUARTAS DE FINAL ========
  { id: 97, date: "2026-07-09", timeBrasilia: "17:00", homeTeam: "V89", awayTeam: "V90", stage: "Quartas de Final", venue: "Gillette Stadium", city: "Foxborough", country: "EUA" },
  { id: 98, date: "2026-07-10", timeBrasilia: "16:00", homeTeam: "V93", awayTeam: "V94", stage: "Quartas de Final", venue: "SoFi Stadium", city: "Inglewood", country: "EUA" },
  { id: 99, date: "2026-07-11", timeBrasilia: "18:00", homeTeam: "V91", awayTeam: "V92", stage: "Quartas de Final", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },
  { id: 100, date: "2026-07-11", timeBrasilia: "22:00", homeTeam: "V95", awayTeam: "V96", stage: "Quartas de Final", venue: "Arrowhead Stadium", city: "Kansas City", country: "EUA" },

  // ======== SEMIFINAIS ========
  { id: 101, date: "2026-07-14", timeBrasilia: "16:00", homeTeam: "V97", awayTeam: "V98", stage: "Semifinal", venue: "AT&T Stadium", city: "Arlington", country: "EUA" },
  { id: 102, date: "2026-07-15", timeBrasilia: "16:00", homeTeam: "V99", awayTeam: "V100", stage: "Semifinal", venue: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA" },

  // ======== DISPUTA DE 3º LUGAR ========
  { id: 103, date: "2026-07-18", timeBrasilia: "18:00", homeTeam: "P101", awayTeam: "P102", stage: "3º Lugar", venue: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA" },

  // ======== FINAL ========
  { id: 104, date: "2026-07-19", timeBrasilia: "16:00", homeTeam: "V101", awayTeam: "V102", stage: "Final", venue: "MetLife Stadium", city: "East Rutherford", country: "EUA" },
];
