export interface VoleiPlayer {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  number: number;
  position: string;
  club: string;
  clubCountry: string;
  age: number;
  height: string;
  image: string;
  stats: { games: number; points: number; debut: string };
  career: { year: string; club: string; description: string }[];
  highlights: string[];
}

export interface OlympicMatch {
  stage: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  sets: string;
  venue: string;
  city: string;
  notes?: string;
}

export interface OlympicEdition {
  year: number;
  host: string;
  hostFlag: string;
  result: string;
  medal?: string;
  coach: string;
  description: string;
  brazilMatches: OlympicMatch[];
  keyPlayers: { name: string; position: string }[];
  keyFacts: string[];
}

export const voleiPlayers: VoleiPlayer[] = [
  {
    id: "v1", slug: "bruninho", name: "Bruno Mossa de Rezende", shortName: "Bruninho",
    number: 1, position: "Levantador", club: "Sesi-SP", clubCountry: "Brasil",
    age: 38, height: "1,90m", image: "/images/volei/bruninho.jpg",
    stats: { games: 400, points: 0, debut: "2004" },
    career: [
      { year: "2003-2010", club: "Atlântico/MG", description: "Início profissional" },
      { year: "2010-2014", club: "Sesi-SP", description: "Consolidação" },
      { year: "2014-2019", club: "Modena / Trento (Itália)", description: "Experiência europeia" },
      { year: "2019-", club: "Sesi-SP", description: "Retorno ao Brasil, capitão da seleção" },
    ],
    highlights: ["3x Ouro Olímpico (como jogador/capitão)", "Melhor levantador do mundo múltiplas vezes", "Filho de Bernardinho"],
  },
  {
    id: "v2", slug: "lucarelli", name: "Ricardo Lucarelli de Souza", shortName: "Lucarelli",
    number: 18, position: "Ponteiro", club: "Sesi-SP", clubCountry: "Brasil",
    age: 33, height: "1,99m", image: "/images/volei/lucarelli.jpg",
    stats: { games: 250, points: 0, debut: "2014" },
    career: [
      { year: "2010-2016", club: "Campinas / Taubaté", description: "Revelação na Superliga" },
      { year: "2016-2020", club: "Sesi-SP / Ziraat (Turquia)", description: "Consolidação internacional" },
      { year: "2020-", club: "Sesi-SP", description: "Titular da seleção" },
    ],
    highlights: ["Ouro Olímpico 2016", "Múltiplos títulos da Superliga"],
  },
  {
    id: "v3", slug: "leal", name: "Yoandy Leal Hidalgo", shortName: "Leal",
    number: 9, position: "Ponteiro", club: "Sada Cruzeiro", clubCountry: "Brasil",
    age: 36, height: "1,96m", image: "/images/volei/leal.jpg",
    stats: { games: 120, points: 0, debut: "2017" },
    career: [
      { year: "2007-2015", club: "Seleção de Cuba", description: "Seleção cubana" },
      { year: "2015-2020", club: "Lube Civitanova (Itália)", description: "Campeão mundial de clubes" },
      { year: "2020-", club: "Sada Cruzeiro", description: "Naturalizado brasileiro em 2017" },
    ],
    highlights: ["Naturalizado brasileiro", "Campeão mundial de clubes", "Melhor ponteiro do mundo"],
  },
  {
    id: "v4", slug: "flavio", name: "Flávio Gualberto", shortName: "Flávio",
    number: 14, position: "Central", club: "Sada Cruzeiro", clubCountry: "Brasil",
    age: 31, height: "2,05m", image: "/images/volei/flavio.jpg",
    stats: { games: 180, points: 0, debut: "2016" },
    career: [
      { year: "2013-2018", club: "SESC-RJ", description: "Início na Superliga" },
      { year: "2018-", club: "Sada Cruzeiro", description: "Titular e destaque" },
    ],
    highlights: ["Ouro Olímpico 2016", "Múltiplos títulos na Superliga"],
  },
  {
    id: "v5", slug: "darlan", name: "Darlan Souza", shortName: "Darlan",
    number: 17, position: "Ponteiro", club: "Sada Cruzeiro", clubCountry: "Brasil",
    age: 26, height: "2,01m", image: "/images/volei/darlan.jpg",
    stats: { games: 80, points: 0, debut: "2021" },
    career: [
      { year: "2018-2021", club: "Taubaté", description: "Revelação" },
      { year: "2021-", club: "Sada Cruzeiro", description: "Titular da seleção" },
    ],
    highlights: ["Liga das Nações 2023", "Nova geração da seleção"],
  },
  {
    id: "v6", slug: "alan", name: "Alan Souza", shortName: "Alan",
    number: 8, position: "Oposto", club: "Sada Cruzeiro", clubCountry: "Brasil",
    age: 28, height: "2,00m", image: "/images/volei/alan.jpg",
    stats: { games: 100, points: 0, debut: "2019" },
    career: [
      { year: "2016-2020", club: "EMS Funvic Taubaté", description: "Revelação como oposto" },
      { year: "2020-", club: "Sada Cruzeiro", description: "Principal oposto da seleção" },
    ],
    highlights: ["Liga das Nações", "Superliga campeão"],
  },
  {
    id: "v7", slug: "isac", name: "Isac Santos", shortName: "Isac",
    number: 15, position: "Central", club: "Trentino (Itália)", clubCountry: "Itália",
    age: 29, height: "2,09m", image: "/images/volei/isac.jpg",
    stats: { games: 130, points: 0, debut: "2018" },
    career: [
      { year: "2015-2020", club: "Sesi-SP", description: "Destaque na Superliga" },
      { year: "2020-", club: "Trentino", description: "Titular na Serie A italiana" },
    ],
    highlights: ["Melhor central da Superliga", "Destaque na seleção"],
  },
  {
    id: "v8", slug: "adriano", name: "Adriano Oliveira", shortName: "Adriano",
    number: 12, position: "Levantador", club: "Minas", clubCountry: "Brasil",
    age: 29, height: "1,91m", image: "/images/volei/adriano.jpg",
    stats: { games: 60, points: 0, debut: "2021" },
    career: [
      { year: "2017-2021", club: "Sesi-SP", description: "Formação" },
      { year: "2021-", club: "Minas", description: "Reserva de Bruninho na seleção" },
    ],
    highlights: ["Superliga campeão", "Seleção brasileira"],
  },
  {
    id: "v9", slug: "maique", name: "Maique Nascimento", shortName: "Maique",
    number: 11, position: "Líbero", club: "Sesi-SP", clubCountry: "Brasil",
    age: 30, height: "1,82m", image: "/images/volei/maique.jpg",
    stats: { games: 150, points: 0, debut: "2018" },
    career: [
      { year: "2014-2018", club: "Campinas", description: "Início profissional" },
      { year: "2018-", club: "Sesi-SP", description: "Líbero titular da seleção" },
    ],
    highlights: ["Melhor líbero da Superliga", "Titular da seleção"],
  },
  {
    id: "v10", slug: "cachopa", name: "Fernando Cachopa", shortName: "Cachopa",
    number: 6, position: "Levantador", club: "Itambé Minas", clubCountry: "Brasil",
    age: 30, height: "1,86m", image: "/images/volei/cachopa.jpg",
    stats: { games: 70, points: 0, debut: "2019" },
    career: [
      { year: "2014-2019", club: "Sada Cruzeiro", description: "Formação" },
      { year: "2019-", club: "Itambé Minas", description: "Titular" },
    ],
    highlights: ["Superliga", "Seleção brasileira"],
  },
  {
    id: "v11", slug: "lucas-saatkamp", name: "Lucas Saatkamp", shortName: "Lucão",
    number: 3, position: "Central", club: "Taubaté", clubCountry: "Brasil",
    age: 38, height: "2,09m", image: "/images/volei/lucao.jpg",
    stats: { games: 350, points: 0, debut: "2007" },
    career: [
      { year: "2005-2012", club: "Ulbra / Cimed", description: "Início no Rio Grande do Sul" },
      { year: "2012-2020", club: "Sesi-SP / Taubaté", description: "Consolidação" },
      { year: "2020-", club: "Taubaté", description: "Veterano e referência" },
    ],
    highlights: ["Ouro Olímpico 2016", "Prata 2008, 2012", "Lenda do vôlei brasileiro"],
  },
  {
    id: "v12", slug: "fernando-kreling", name: "Fernando Kreling", shortName: "Kreling",
    number: 7, position: "Ponteiro", club: "Taubaté", clubCountry: "Brasil",
    age: 25, height: "1,95m", image: "/images/volei/kreling.jpg",
    stats: { games: 40, points: 0, debut: "2023" },
    career: [
      { year: "2019-2023", club: "Sesi-SP", description: "Revelação" },
      { year: "2023-", club: "Taubaté", description: "Crescimento na Superliga" },
    ],
    highlights: ["Nova geração da seleção", "Superliga"],
  },
];

export const olympicEditions: OlympicEdition[] = [
  {
    year: 1984,
    host: "Los Angeles",
    hostFlag: "🇺🇸",
    result: "Prata 🥈",
    medal: "silver",
    coach: "Bebeto de Freitas",
    description: "A Geração de Prata. Após anos de obscuridade, o Brasil chegou à final olímpica pela primeira vez, perdendo para os EUA em casa. Bernard, William, Renan e companhia inauguraram a era de ouro do vôlei brasileiro.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "29/07/1984", homeTeam: "Brasil", awayTeam: "Japão", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Long Beach Arena", city: "Long Beach" },
      { stage: "Fase de grupos", date: "31/07/1984", homeTeam: "Brasil", awayTeam: "Itália", homeScore: 3, awayScore: 2, sets: "3-2", venue: "Long Beach Arena", city: "Long Beach" },
      { stage: "Fase de grupos", date: "01/08/1984", homeTeam: "Coreia do Sul", awayTeam: "Brasil", homeScore: 0, awayScore: 3, sets: "0-3", venue: "Long Beach Arena", city: "Long Beach" },
      { stage: "Semifinal", date: "07/08/1984", homeTeam: "Brasil", awayTeam: "Canadá", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Long Beach Arena", city: "Long Beach" },
      { stage: "Final", date: "11/08/1984", homeTeam: "EUA", awayTeam: "Brasil", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Long Beach Arena", city: "Long Beach", notes: "Final contra os donos da casa" },
    ],
    keyPlayers: [
      { name: "Bernard", position: "Levantador" },
      { name: "William", position: "Ponteiro" },
      { name: "Renan", position: "Central" },
      { name: "Xandó", position: "Ponteiro" },
      { name: "Amauri", position: "Central" },
      { name: "Badalhoca", position: "Oposto" },
    ],
    keyFacts: [
      "Primeira medalha olímpica do vôlei masculino brasileiro",
      "A 'Geração de Prata' popularizou o vôlei no Brasil",
      "O técnico Bebeto de Freitas revolucionou o vôlei brasileiro",
      "A URSS boicotou esses Jogos — não participou da competição",
      "Bernard foi eleito o melhor levantador do torneio",
    ],
  },
  {
    year: 1992,
    host: "Barcelona",
    hostFlag: "🇪🇸",
    result: "Ouro 🥇",
    medal: "gold",
    coach: "José Roberto Guimarães",
    description: "O primeiro ouro olímpico! Após 8 anos da prata em Los Angeles, o Brasil finalmente chegou ao topo. Com Marcelo Negrão, Giovane, Tande, Maurício e o levantador Maurício, a seleção venceu a Holanda na final épica. Zé Roberto conduziu o time à glória.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "26/07/1992", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Palau d'Esports", city: "Barcelona" },
      { stage: "Fase de grupos", date: "28/07/1992", homeTeam: "Brasil", awayTeam: "Espanha", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Palau d'Esports", city: "Barcelona" },
      { stage: "Fase de grupos", date: "30/07/1992", homeTeam: "Brasil", awayTeam: "Japão", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Palau d'Esports", city: "Barcelona" },
      { stage: "Semifinal", date: "07/08/1992", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Palau d'Esports", city: "Barcelona" },
      { stage: "Final", date: "09/08/1992", homeTeam: "Brasil", awayTeam: "Holanda", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Palau d'Esports", city: "Barcelona", notes: "Primeiro ouro olímpico! 🥇" },
    ],
    keyPlayers: [
      { name: "Marcelo Negrão", position: "Oposto" },
      { name: "Giovane", position: "Ponteiro" },
      { name: "Tande", position: "Central" },
      { name: "Maurício", position: "Levantador" },
      { name: "Carlão", position: "Central" },
      { name: "Paulão", position: "Ponteiro" },
    ],
    keyFacts: [
      "Primeiro ouro olímpico do vôlei masculino brasileiro",
      "José Roberto Guimarães foi o técnico — depois ganharia ouro também no feminino",
      "Marcelo Negrão foi o destaque ofensivo da final",
      "O Brasil não perdeu nenhum set na final contra a Holanda",
      "A vitória consolidou o vôlei como segundo esporte mais popular do Brasil",
    ],
  },
  {
    year: 2004,
    host: "Atenas",
    hostFlag: "🇬🇷",
    result: "Ouro 🥇",
    medal: "gold",
    coach: "Bernardinho",
    description: "O ouro da perfeição. Sob o comando de Bernardinho, a seleção brasileira foi avassaladora em Atenas. Giba, André, Rodrigão e Ricardinho formaram um time lendário. Na final, vingaram a derrota de 2000 contra a Itália, vencendo por 3 a 1.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "15/08/2004", homeTeam: "Brasil", awayTeam: "Egito", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Peace and Friendship Stadium", city: "Atenas" },
      { stage: "Fase de grupos", date: "17/08/2004", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 3, awayScore: 2, sets: "3-2", venue: "Peace and Friendship Stadium", city: "Atenas" },
      { stage: "Fase de grupos", date: "21/08/2004", homeTeam: "Brasil", awayTeam: "Sérvia", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Peace and Friendship Stadium", city: "Atenas" },
      { stage: "Quartas de final", date: "25/08/2004", homeTeam: "Brasil", awayTeam: "Rússia", homeScore: 3, awayScore: 2, sets: "3-2", venue: "Peace and Friendship Stadium", city: "Atenas", notes: "Virada épica de 2 sets a 0" },
      { stage: "Semifinal", date: "27/08/2004", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Peace and Friendship Stadium", city: "Atenas" },
      { stage: "Final", date: "29/08/2004", homeTeam: "Brasil", awayTeam: "Itália", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Peace and Friendship Stadium", city: "Atenas", notes: "Bicampeonato olímpico! 🥇" },
    ],
    keyPlayers: [
      { name: "Giba", position: "Ponteiro" },
      { name: "André Heller", position: "Ponteiro" },
      { name: "Rodrigão", position: "Oposto" },
      { name: "Ricardinho", position: "Levantador" },
      { name: "Gustavo", position: "Central" },
      { name: "Nalbert", position: "Ponteiro" },
      { name: "Serginho", position: "Líbero" },
    ],
    keyFacts: [
      "Bernardinho construiu uma das melhores seleções de vôlei de todos os tempos",
      "Giba foi eleito o melhor jogador do torneio",
      "Virada épica contra a Rússia nas quartas: estava perdendo por 2 sets a 0",
      "Na final, vingança contra a Itália que havia eliminado o Brasil em Sydney 2000",
      "Serginho revolucionou a posição de líbero no vôlei mundial",
    ],
  },
  {
    year: 2008,
    host: "Pequim",
    hostFlag: "🇨🇳",
    result: "Prata 🥈",
    medal: "silver",
    coach: "Bernardinho",
    description: "O Brasil chegou como grande favorito mas encontrou uma seleção americana inspirada na final. Apesar de Giba, Murilo e toda a qualidade, os EUA venceram por 3 a 1. Prata com gosto amargo para uma geração que buscava o tri.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "10/08/2008", homeTeam: "Brasil", awayTeam: "Egito", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Capital Indoor Stadium", city: "Pequim" },
      { stage: "Fase de grupos", date: "14/08/2008", homeTeam: "Brasil", awayTeam: "Japão", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Capital Indoor Stadium", city: "Pequim" },
      { stage: "Fase de grupos", date: "18/08/2008", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 1, awayScore: 3, sets: "1-3", venue: "Capital Indoor Stadium", city: "Pequim", notes: "Derrota na fase de grupos" },
      { stage: "Quartas de final", date: "20/08/2008", homeTeam: "Brasil", awayTeam: "Cuba", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Capital Indoor Stadium", city: "Pequim" },
      { stage: "Semifinal", date: "22/08/2008", homeTeam: "Brasil", awayTeam: "Rússia", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Capital Indoor Stadium", city: "Pequim" },
      { stage: "Final", date: "24/08/2008", homeTeam: "EUA", awayTeam: "Brasil", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Capital Indoor Stadium", city: "Pequim", notes: "Prata — EUA surpreenderam" },
    ],
    keyPlayers: [
      { name: "Giba", position: "Ponteiro" },
      { name: "Murilo", position: "Ponteiro" },
      { name: "Rodrigão", position: "Oposto" },
      { name: "Bruninho", position: "Levantador" },
      { name: "Lucas Saatkamp", position: "Central" },
      { name: "Serginho", position: "Líbero" },
    ],
    keyFacts: [
      "Brasil era franco favorito ao ouro",
      "Os EUA, liderados por Lloy Ball, surpreenderam na final",
      "Foi a última Olimpíada de Giba e Rodrigão com a seleção",
      "Bruninho começou a se firmar como levantador titular",
      "Apesar da prata, a geração é considerada uma das melhores da história",
    ],
  },
  {
    year: 2012,
    host: "Londres",
    hostFlag: "🇬🇧",
    result: "Prata 🥈",
    medal: "silver",
    coach: "Bernardinho",
    description: "Renovação em andamento. Com a nova geração liderada por Bruninho e Lucão, o Brasil chegou até a final mas caiu para a Rússia. A prata representou o início de uma transição que renderia frutos em 2016.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "30/07/2012", homeTeam: "Brasil", awayTeam: "Tunísia", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Earls Court", city: "Londres" },
      { stage: "Fase de grupos", date: "02/08/2012", homeTeam: "Brasil", awayTeam: "Rússia", homeScore: 3, awayScore: 2, sets: "3-2", venue: "Earls Court", city: "Londres" },
      { stage: "Fase de grupos", date: "06/08/2012", homeTeam: "Brasil", awayTeam: "Grã-Bretanha", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Earls Court", city: "Londres" },
      { stage: "Quartas de final", date: "08/08/2012", homeTeam: "Brasil", awayTeam: "Argentina", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Earls Court", city: "Londres" },
      { stage: "Semifinal", date: "10/08/2012", homeTeam: "Brasil", awayTeam: "Itália", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Earls Court", city: "Londres" },
      { stage: "Final", date: "12/08/2012", homeTeam: "Rússia", awayTeam: "Brasil", homeScore: 3, awayScore: 2, sets: "3-2", venue: "Earls Court", city: "Londres", notes: "Prata — derrota no tie-break" },
    ],
    keyPlayers: [
      { name: "Bruninho", position: "Levantador" },
      { name: "Murilo", position: "Ponteiro" },
      { name: "Vissotto", position: "Oposto" },
      { name: "Lucas Saatkamp", position: "Central" },
      { name: "Sidão", position: "Central" },
      { name: "Serginho", position: "Líbero" },
    ],
    keyFacts: [
      "Derrota dramática no tie-break da final contra a Rússia",
      "Geração de transição entre a era Giba e a era Bruninho",
      "Serginho jogou sua última Olimpíada aos 37 anos",
      "O time venceu a Rússia na fase de grupos mas perdeu na final",
      "Bernardinho completou sua terceira final olímpica consecutiva",
    ],
  },
  {
    year: 2016,
    host: "Rio de Janeiro",
    hostFlag: "🇧🇷",
    result: "Ouro 🥇",
    medal: "gold",
    coach: "Bernardinho",
    description: "O ouro em casa! No Maracanãzinho lotado, o Brasil conquistou o tricampeonato olímpico diante da torcida brasileira. Bruninho, Lucarelli, Lipe, Wallace e cia fizeram história. Na final, vitória emocionante sobre a Itália por 3 a 0. A despedida dourada de Bernardinho.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "07/08/2016", homeTeam: "Brasil", awayTeam: "Itália", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro" },
      { stage: "Fase de grupos", date: "09/08/2016", homeTeam: "Brasil", awayTeam: "México", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro" },
      { stage: "Fase de grupos", date: "13/08/2016", homeTeam: "Brasil", awayTeam: "Egito", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro" },
      { stage: "Fase de grupos", date: "15/08/2016", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro" },
      { stage: "Quartas de final", date: "17/08/2016", homeTeam: "Brasil", awayTeam: "Argentina", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro" },
      { stage: "Semifinal", date: "19/08/2016", homeTeam: "Brasil", awayTeam: "Rússia", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro" },
      { stage: "Final", date: "21/08/2016", homeTeam: "Brasil", awayTeam: "Itália", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Maracanãzinho", city: "Rio de Janeiro", notes: "Tricampeonato olímpico! 🥇 Em casa!" },
    ],
    keyPlayers: [
      { name: "Bruninho", position: "Levantador" },
      { name: "Lucarelli", position: "Ponteiro" },
      { name: "Wallace", position: "Oposto" },
      { name: "Lipe", position: "Ponteiro" },
      { name: "Lucas Saatkamp", position: "Central" },
      { name: "Flávio", position: "Central" },
      { name: "Serginho", position: "Líbero" },
    ],
    keyFacts: [
      "Tricampeonato olímpico — igualando EUA e URSS em número de ouros",
      "O Brasil não perdeu um único set em toda a Olimpíada até a fase eliminatória",
      "Maracanãzinho lotado em todas as partidas — apoio incrível da torcida",
      "Última Olimpíada de Bernardinho como técnico da seleção masculina",
      "Serginho, aos 40 anos, conquistou seu terceiro ouro olímpico (2004, 2016 como jogador + staff)",
      "A final contra a Itália foi dominada: 3 sets a 0 sem sustos",
    ],
  },
  {
    year: 2020,
    host: "Tóquio",
    hostFlag: "🇯🇵",
    result: "Quartas de final",
    coach: "Renan Dal Zotto",
    description: "Eliminação precoce. O Brasil chegou como um dos favoritos mas caiu nas quartas de final para a ROC (Comitê Olímpico Russo) por 3 a 1. A renovação pós-Bernardinho ainda buscava seu caminho.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "24/07/2021", homeTeam: "Brasil", awayTeam: "Tunísia", homeScore: 3, awayScore: 0, sets: "3-0", venue: "Ariake Arena", city: "Tóquio" },
      { stage: "Fase de grupos", date: "28/07/2021", homeTeam: "Brasil", awayTeam: "EUA", homeScore: 1, awayScore: 3, sets: "1-3", venue: "Ariake Arena", city: "Tóquio" },
      { stage: "Fase de grupos", date: "01/08/2021", homeTeam: "Brasil", awayTeam: "França", homeScore: 0, awayScore: 3, sets: "0-3", venue: "Ariake Arena", city: "Tóquio" },
      { stage: "Quartas de final", date: "03/08/2021", homeTeam: "ROC", awayTeam: "Brasil", homeScore: 3, awayScore: 1, sets: "3-1", venue: "Ariake Arena", city: "Tóquio", notes: "Eliminação nas quartas" },
    ],
    keyPlayers: [
      { name: "Bruninho", position: "Levantador" },
      { name: "Lucarelli", position: "Ponteiro" },
      { name: "Leal", position: "Ponteiro" },
      { name: "Alan", position: "Oposto" },
      { name: "Isac", position: "Central" },
      { name: "Flávio", position: "Central" },
    ],
    keyFacts: [
      "Primeira Olimpíada sem medalha desde 1996",
      "O time sofreu com a falta de ritmo após a pandemia",
      "Renan Dal Zotto assumiu após a saída de Bernardinho",
      "França, que eliminou o Brasil na fase de grupos, acabou campeã",
      "Geração em transição sem conseguir repetir os feitos anteriores",
    ],
  },
  {
    year: 2024,
    host: "Paris",
    hostFlag: "🇫🇷",
    result: "Quartas de final",
    coach: "Bernardinho",
    description: "O retorno de Bernardinho ao comando da seleção trouxe esperança, mas o Brasil foi eliminado nas quartas de final pelos EUA. Apesar da campanha abaixo das expectativas, a base para o futuro foi renovada com jovens talentos.",
    brazilMatches: [
      { stage: "Fase de grupos", date: "27/07/2024", homeTeam: "Brasil", awayTeam: "Itália", homeScore: 1, awayScore: 3, sets: "1-3", venue: "South Paris Arena", city: "Paris" },
      { stage: "Fase de grupos", date: "31/07/2024", homeTeam: "Brasil", awayTeam: "Polônia", homeScore: 3, awayScore: 2, sets: "3-2", venue: "South Paris Arena", city: "Paris" },
      { stage: "Fase de grupos", date: "03/08/2024", homeTeam: "Brasil", awayTeam: "Egito", homeScore: 3, awayScore: 0, sets: "3-0", venue: "South Paris Arena", city: "Paris" },
      { stage: "Quartas de final", date: "05/08/2024", homeTeam: "EUA", awayTeam: "Brasil", homeScore: 3, awayScore: 1, sets: "3-1", venue: "South Paris Arena", city: "Paris", notes: "Eliminação nas quartas novamente" },
    ],
    keyPlayers: [
      { name: "Bruninho", position: "Levantador" },
      { name: "Lucarelli", position: "Ponteiro" },
      { name: "Darlan", position: "Ponteiro" },
      { name: "Alan", position: "Oposto" },
      { name: "Flávio", position: "Central" },
      { name: "Isac", position: "Central" },
    ],
    keyFacts: [
      "Bernardinho voltou ao comando após 8 anos",
      "Segunda Olimpíada consecutiva com eliminação nas quartas",
      "Darlan se firmou como titular da nova geração",
      "Bruninho disputou sua quarta Olimpíada",
      "A França, como anfitriã, terminou com ouro — repetindo Tóquio",
    ],
  },
];
