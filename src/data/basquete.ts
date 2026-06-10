export interface BasquetePlayer {
  id: string;
  name: string;
  shortName: string;
  position: string;
  number: number;
  club: string;
  height: string;
  age: number;
  highlights: string[];
}

export interface OlympicMatch {
  stage: string;
  date: string;
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  notes?: string;
}

export interface OlympicEdition {
  year: number;
  host: string;
  hostFlag: string;
  result: string;
  medal?: "gold" | "silver" | "bronze";
  description: string;
  coach: string;
  brazilMatches: OlympicMatch[];
  keyPlayers: { name: string; position: string }[];
  keyFacts: string[];
}

export const basquetePlayers: BasquetePlayer[] = [
  {
    id: "1",
    name: "Marcelinho Huertas",
    shortName: "Marcelinho",
    position: "Armador",
    number: 7,
    club: "Tenerife",
    height: "1.90m",
    age: 41,
    highlights: ["4x Olimpíadas", "Liga ACB", "NBA (Lakers)"],
  },
  {
    id: "2",
    name: "Bruno Caboclo",
    shortName: "Caboclo",
    position: "Ala-Pivô",
    number: 9,
    club: "Partizan",
    height: "2.06m",
    age: 28,
    highlights: ["NBA Draft 2014", "Copa América 2022"],
  },
  {
    id: "3",
    name: "Gui Santos",
    shortName: "Gui Santos",
    position: "Ala",
    number: 15,
    club: "Golden State Warriors",
    height: "1.98m",
    age: 22,
    highlights: ["NBA", "Campeão Mundial Sub-19"],
  },
  {
    id: "4",
    name: "Léo Meindl",
    shortName: "Meindl",
    position: "Ala-Pivô",
    number: 14,
    club: "São Paulo",
    height: "2.01m",
    age: 29,
    highlights: ["NBB MVP", "Seleção Brasileira"],
  },
  {
    id: "5",
    name: "Yago Mateus",
    shortName: "Yago",
    position: "Armador",
    number: 5,
    club: "Franca",
    height: "1.85m",
    age: 27,
    highlights: ["NBB", "Seleção Brasileira"],
  },
  {
    id: "6",
    name: "Didi Louzada",
    shortName: "Didi",
    position: "Ala",
    number: 11,
    club: "Flamengo",
    height: "1.96m",
    age: 25,
    highlights: ["NBA (Pelicans)", "NBL Australia"],
  },
  {
    id: "7",
    name: "Cristiano Felício",
    shortName: "Felício",
    position: "Pivô",
    number: 12,
    club: "Flamengo",
    height: "2.08m",
    age: 32,
    highlights: ["NBA (Bulls)", "Seleção Brasileira"],
  },
  {
    id: "8",
    name: "Raul Neto",
    shortName: "Raulzinho",
    position: "Armador",
    number: 8,
    club: "Real Betis",
    height: "1.85m",
    age: 32,
    highlights: ["NBA (Jazz, Wizards, Cavaliers)", "3x Olimpíadas"],
  },
  {
    id: "9",
    name: "Lucas Dias",
    shortName: "Lucas Dias",
    position: "Ala",
    number: 6,
    club: "Sesi Franca",
    height: "1.98m",
    age: 30,
    highlights: ["NBB Campeão", "Seleção Brasileira"],
  },
  {
    id: "10",
    name: "Mãozinha",
    shortName: "Mãozinha",
    position: "Ala-Pivô",
    number: 13,
    club: "Real Madrid",
    height: "2.11m",
    age: 23,
    highlights: ["Liga ACB", "Draft NBA 2023"],
  },
  {
    id: "11",
    name: "Georginho de Paula",
    shortName: "Georginho",
    position: "Armador",
    number: 4,
    club: "Sesi Franca",
    height: "1.80m",
    age: 28,
    highlights: ["NBB MVP", "Copa América"],
  },
  {
    id: "12",
    name: "João Marcelo Souza",
    shortName: "JP Batista",
    position: "Pivô",
    number: 10,
    club: "Flamengo",
    height: "2.03m",
    age: 26,
    highlights: ["NBB", "Seleção Brasileira"],
  },
];

export const olympicEditions: OlympicEdition[] = [
  {
    year: 1948,
    host: "Londres",
    hostFlag: "🇬🇧",
    result: "Semifinal (4º lugar)",
    description:
      "Estreia olímpica histórica do basquete brasileiro. Liderados por Algodão, o Brasil surpreendeu e chegou às semifinais, ficando em 4º lugar geral.",
    coach: "Kanela",
    brazilMatches: [
      { stage: "Fase de grupos", date: "30/07", homeTeam: "Brasil", homeScore: 40, awayTeam: "Irã", awayScore: 19 },
      { stage: "Fase de grupos", date: "31/07", homeTeam: "Brasil", homeScore: 33, awayTeam: "Hungria", awayScore: 29 },
      { stage: "Quartas", date: "04/08", homeTeam: "Brasil", homeScore: 28, awayTeam: "Tchecoslováquia", awayScore: 18 },
      { stage: "Semifinal", date: "06/08", homeTeam: "França", homeScore: 33, awayTeam: "Brasil", awayScore: 25 },
      { stage: "3º lugar", date: "07/08", homeTeam: "México", homeScore: 60, awayTeam: "Brasil", awayScore: 57 },
    ],
    keyPlayers: [
      { name: "Algodão", position: "Armador" },
      { name: "Zé Carioca", position: "Ala" },
    ],
    keyFacts: [
      "Primeira participação olímpica do basquete brasileiro",
      "Brasil ficou a uma vitória do pódio",
    ],
  },
  {
    year: 1960,
    host: "Roma",
    hostFlag: "🇮🇹",
    result: "🥉 Terceiro lugar",
    medal: "bronze",
    description:
      "A geração de Amaury Pasos e Wlamir Marques conquistou o bronze em Roma, a primeira medalha olímpica do basquete brasileiro. Vitória épica sobre os EUA na fase de grupos.",
    coach: "Kanela",
    brazilMatches: [
      { stage: "Fase de grupos", date: "26/08", homeTeam: "Brasil", homeScore: 50, awayTeam: "Japão", awayScore: 41 },
      { stage: "Fase de grupos", date: "27/08", homeTeam: "Brasil", homeScore: 65, awayTeam: "EUA", awayScore: 63, notes: "Primeira derrota dos EUA em Olimpíadas" },
      { stage: "Fase de grupos", date: "29/08", homeTeam: "Brasil", homeScore: 60, awayTeam: "Itália", awayScore: 45 },
      { stage: "Semifinal", date: "01/09", homeTeam: "URSS", homeScore: 64, awayTeam: "Brasil", awayScore: 48 },
      { stage: "3º lugar", date: "02/09", homeTeam: "Brasil", homeScore: 63, awayTeam: "Itália", awayScore: 52 },
    ],
    keyPlayers: [
      { name: "Amaury Pasos", position: "Pivô" },
      { name: "Wlamir Marques", position: "Ala" },
      { name: "Jatyr Schall", position: "Armador" },
    ],
    keyFacts: [
      "Primeira medalha olímpica do basquete brasileiro",
      "Brasil derrotou os EUA por 65-63 — primeira derrota americana em Olimpíadas",
      "Amaury Pasos foi o cestinha do torneio",
    ],
  },
  {
    year: 1964,
    host: "Tóquio",
    hostFlag: "🇯🇵",
    result: "🥉 Terceiro lugar",
    medal: "bronze",
    description:
      "Bicampeonato de bronze consecutivo. A dupla Amaury-Wlamir brilhou novamente, confirmando o Brasil como potência do basquete mundial nos anos 60.",
    coach: "Kanela",
    brazilMatches: [
      { stage: "Fase de grupos", date: "12/10", homeTeam: "Brasil", homeScore: 79, awayTeam: "Coreia do Sul", awayScore: 49 },
      { stage: "Fase de grupos", date: "14/10", homeTeam: "EUA", homeScore: 86, awayTeam: "Brasil", awayScore: 53 },
      { stage: "Fase de grupos", date: "16/10", homeTeam: "Brasil", homeScore: 76, awayTeam: "Porto Rico", awayScore: 60 },
      { stage: "Semifinal", date: "19/10", homeTeam: "URSS", homeScore: 66, awayTeam: "Brasil", awayScore: 60 },
      { stage: "3º lugar", date: "23/10", homeTeam: "Brasil", homeScore: 76, awayTeam: "Porto Rico", awayScore: 60 },
    ],
    keyPlayers: [
      { name: "Amaury Pasos", position: "Pivô" },
      { name: "Wlamir Marques", position: "Ala" },
      { name: "Ubiratan Pereira", position: "Ala-Pivô" },
    ],
    keyFacts: [
      "Segundo bronze consecutivo do basquete brasileiro",
      "Wlamir Marques considerado o maior jogador brasileiro da época",
      "Brasil consolidou-se como terceira força do basquete mundial",
    ],
  },
  {
    year: 1968,
    host: "Cidade do México",
    hostFlag: "🇲🇽",
    result: "4º lugar",
    description:
      "Quase o terceiro bronze seguido. O Brasil ficou novamente em 4º lugar, perdendo a medalha na disputa pelo terceiro lugar.",
    coach: "Ary Vidal",
    brazilMatches: [
      { stage: "Fase de grupos", date: "14/10", homeTeam: "Brasil", homeScore: 76, awayTeam: "Espanha", awayScore: 62 },
      { stage: "Fase de grupos", date: "16/10", homeTeam: "Iugoslávia", homeScore: 70, awayTeam: "Brasil", awayScore: 63 },
      { stage: "Semifinal", date: "22/10", homeTeam: "EUA", homeScore: 75, awayTeam: "Brasil", awayScore: 63 },
      { stage: "3º lugar", date: "25/10", homeTeam: "URSS", homeScore: 70, awayTeam: "Brasil", awayScore: 53 },
    ],
    keyPlayers: [
      { name: "Ubiratan Pereira", position: "Ala-Pivô" },
      { name: "Rosa Branca", position: "Armador" },
    ],
    keyFacts: [
      "Quarta participação consecutiva entre os 4 melhores do mundo",
      "Geração de ouro brasileira começava a se renovar",
    ],
  },
  {
    year: 1996,
    host: "Atlanta",
    hostFlag: "🇺🇸",
    result: "5º lugar",
    description:
      "Retorno ao cenário olímpico após longa ausência. A geração de Oscar Schmidt não pôde jogar por questões de elegibilidade. Mesmo assim, o Brasil teve campanha digna contra o Dream Team III.",
    coach: "Hélio Rubens Garcia",
    brazilMatches: [
      { stage: "Fase de grupos", date: "22/07", homeTeam: "EUA", homeScore: 98, awayTeam: "Brasil", awayScore: 75, notes: "Dream Team III" },
      { stage: "Fase de grupos", date: "24/07", homeTeam: "Brasil", homeScore: 98, awayTeam: "Austrália", awayScore: 65 },
      { stage: "Fase de grupos", date: "26/07", homeTeam: "Brasil", homeScore: 83, awayTeam: "Coreia do Sul", awayScore: 60 },
      { stage: "Quartas", date: "30/07", homeTeam: "Iugoslávia", homeScore: 76, awayTeam: "Brasil", awayScore: 59 },
    ],
    keyPlayers: [
      { name: "Cadum", position: "Armador" },
      { name: "Rolando", position: "Pivô" },
    ],
    keyFacts: [
      "Brasil enfrentou o Dream Team III de Shaquille O'Neal e Scottie Pippen",
      "Oscar Schmidt não participou por ter jogado profissionalmente",
    ],
  },
  {
    year: 2004,
    host: "Atenas",
    hostFlag: "🇬🇷",
    result: "Quartas de final",
    description:
      "Campanha marcante liderada pelo jovem Nenê e o veterano Marcelinho. O Brasil foi eliminado nas quartas pela Argentina que viria a ser campeã.",
    coach: "Lula Ferreira",
    brazilMatches: [
      { stage: "Fase de grupos", date: "15/08", homeTeam: "Brasil", homeScore: 78, awayTeam: "China", awayScore: 67 },
      { stage: "Fase de grupos", date: "17/08", homeTeam: "Espanha", homeScore: 72, awayTeam: "Brasil", awayScore: 64 },
      { stage: "Fase de grupos", date: "19/08", homeTeam: "Brasil", homeScore: 76, awayTeam: "Nova Zelândia", awayScore: 54 },
      { stage: "Quartas", date: "24/08", homeTeam: "Argentina", homeScore: 84, awayTeam: "Brasil", awayScore: 69, notes: "Argentina seria campeã olímpica" },
    ],
    keyPlayers: [
      { name: "Nenê", position: "Pivô" },
      { name: "Marcelinho Huertas", position: "Armador" },
      { name: "Leandrinho", position: "Ala" },
    ],
    keyFacts: [
      "Eliminado pela Argentina campeã olímpica",
      "Geração NBA do Brasil com Nenê e Leandrinho",
    ],
  },
  {
    year: 2012,
    host: "Londres",
    hostFlag: "🇬🇧",
    result: "Quartas de final",
    description:
      "Campanha sólida do time de Marcelinho Huertas. Leandrinho e Nenê lideraram, mas a Argentina novamente eliminou o Brasil nas quartas de final.",
    coach: "Rubén Magnano",
    brazilMatches: [
      { stage: "Fase de grupos", date: "29/07", homeTeam: "Brasil", homeScore: 75, awayTeam: "Austrália", awayScore: 71 },
      { stage: "Fase de grupos", date: "31/07", homeTeam: "Espanha", homeScore: 88, awayTeam: "Brasil", awayScore: 66 },
      { stage: "Fase de grupos", date: "02/08", homeTeam: "Brasil", homeScore: 67, awayTeam: "China", awayScore: 50 },
      { stage: "Fase de grupos", date: "04/08", homeTeam: "Grã-Bretanha", homeScore: 67, awayTeam: "Brasil", awayScore: 62 },
      { stage: "Fase de grupos", date: "06/08", homeTeam: "Brasil", homeScore: 82, awayTeam: "Rússia", awayScore: 74 },
      { stage: "Quartas", date: "08/08", homeTeam: "Argentina", homeScore: 82, awayTeam: "Brasil", awayScore: 77, notes: "Derrota amarga nas quartas" },
    ],
    keyPlayers: [
      { name: "Marcelinho Huertas", position: "Armador" },
      { name: "Leandrinho", position: "Ala" },
      { name: "Nenê", position: "Pivô" },
      { name: "Anderson Varejão", position: "Pivô" },
    ],
    keyFacts: [
      "Novamente eliminado pela Argentina nas quartas",
      "Varejão (Cleveland Cavaliers) foi destaque defensivo",
      "Marcelinho brilhou como armador — uma das melhores atuações olímpicas do Brasil",
    ],
  },
  {
    year: 2016,
    host: "Rio de Janeiro",
    hostFlag: "🇧🇷",
    result: "Fase de grupos",
    description:
      "Olimpíada em casa com enorme pressão. O Brasil não conseguiu passar da fase de grupos, frustrando a torcida no Carioca Arena 1.",
    coach: "Rubén Magnano",
    brazilMatches: [
      { stage: "Fase de grupos", date: "07/08", homeTeam: "Brasil", homeScore: 73, awayTeam: "Lituânia", awayScore: 82 },
      { stage: "Fase de grupos", date: "09/08", homeTeam: "Nigéria", homeScore: 69, awayTeam: "Brasil", awayScore: 76 },
      { stage: "Fase de grupos", date: "11/08", homeTeam: "Croácia", homeScore: 80, awayTeam: "Brasil", awayScore: 76 },
      { stage: "Fase de grupos", date: "13/08", homeTeam: "Brasil", homeScore: 65, awayTeam: "Argentina", awayScore: 111 },
      { stage: "Fase de grupos", date: "15/08", homeTeam: "Espanha", homeScore: 65, awayTeam: "Brasil", awayScore: 52 },
    ],
    keyPlayers: [
      { name: "Marcelinho Huertas", position: "Armador" },
      { name: "Nenê", position: "Pivô" },
      { name: "Raulzinho", position: "Armador" },
      { name: "Cristiano Felício", position: "Pivô" },
    ],
    keyFacts: [
      "Eliminação na fase de grupos em casa — grande decepção",
      "Argentina aplicou 111-65 no Brasil — pior derrota olímpica",
      "Despedida olímpica de Nenê e fim de uma geração",
    ],
  },
];
