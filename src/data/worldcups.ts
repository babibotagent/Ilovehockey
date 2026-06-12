export interface KeyPlayer {
  name: string;
  position: string;
  goals?: number;
  assists?: number;
  note?: string;
}

export interface StanleyCupEdition {
  year: number;
  opponent: string;
  result: string;
  coach: string;
  mvp: string;
  description: string;
  keyPlayers: KeyPlayer[];
  keyFacts: string[];
}

export const stanleyCups: StanleyCupEdition[] = [
  // ============ 1916 ============
  {
    year: 1916,
    opponent: "Portland Rosebuds",
    result: "3-2",
    coach: "Newsy Lalonde",
    mvp: "Newsy Lalonde",
    description:
      "The Canadiens won their first Stanley Cup, defeating the Portland Rosebuds of the PCHA in a best-of-five series. This was the first time a team from the NHA defeated a West Coast opponent for the Cup. Newsy Lalonde led the charge with his scoring prowess.",
    keyPlayers: [
      { name: "Newsy Lalonde", position: "Centre", goals: 6 },
      { name: "Didier Pitre", position: "Right Wing", goals: 4 },
      { name: "Georges Vézina", position: "Goaltender", note: "Stellar goaltending throughout the series" },
      { name: "Jack Laviolette", position: "Left Wing" },
    ],
    keyFacts: [
      "First Stanley Cup in franchise history",
      "Defeated a PCHA team from the West Coast",
      "Canadiens were members of the NHA (National Hockey Association), not yet the NHL",
      "Newsy Lalonde was the team's top scorer",
    ],
  },

  // ============ 1924 ============
  {
    year: 1924,
    opponent: "Calgary Tigers / Vancouver Maroons",
    result: "2-0 (vs Calgary in final round)",
    coach: "Léo Dandurand",
    mvp: "Howie Morenz",
    description:
      "Montreal defeated the Vancouver Maroons in the semifinal and then swept the Calgary Tigers to claim the Cup. Howie Morenz, in his rookie season, showed flashes of the brilliance that would make him a legend. The Canadiens dominated the playoffs behind strong goaltending from Georges Vézina.",
    keyPlayers: [
      { name: "Howie Morenz", position: "Centre", goals: 7, note: "Spectacular rookie playoff run" },
      { name: "Georges Vézina", position: "Goaltender", note: "Backbone of the defense" },
      { name: "Aurèle Joliat", position: "Left Wing", goals: 5 },
      { name: "Sprague Cleghorn", position: "Defence" },
      { name: "Billy Coutu", position: "Defence" },
    ],
    keyFacts: [
      "First Cup won as an NHL franchise (NHL founded in 1917)",
      "Howie Morenz emerged as a star in his first season",
      "Georges Vézina played his final Cup-winning series before his tragic illness",
      "Canadiens had to beat two Western teams to claim the Cup",
    ],
  },

  // ============ 1930 ============
  {
    year: 1930,
    opponent: "Boston Bruins",
    result: "3-0",
    coach: "Cecil Hart",
    mvp: "Howie Morenz",
    description:
      "The Canadiens swept the defending champion Boston Bruins in the best-of-three final. Howie Morenz was at the peak of his powers, dazzling crowds with his speed and skill. The Habs dominated the series with superior skating and goaltending from George Hainsworth.",
    keyPlayers: [
      { name: "Howie Morenz", position: "Centre", goals: 4, note: "Hart Trophy winner that season" },
      { name: "George Hainsworth", position: "Goaltender", note: "Recorded outstanding goals-against numbers" },
      { name: "Aurèle Joliat", position: "Left Wing", goals: 2 },
      { name: "Pit Lepine", position: "Centre" },
      { name: "Sylvio Mantha", position: "Defence" },
    ],
    keyFacts: [
      "Swept the defending champion Bruins",
      "Howie Morenz was the biggest star in hockey at the time",
      "George Hainsworth was virtually unbeatable in the playoffs",
      "Third Cup in franchise history",
    ],
  },

  // ============ 1931 ============
  {
    year: 1931,
    opponent: "Chicago Black Hawks",
    result: "3-2",
    coach: "Cecil Hart",
    mvp: "Howie Morenz",
    description:
      "Montreal defended their title by defeating the Chicago Black Hawks in a hard-fought five-game series. Howie Morenz and Aurèle Joliat continued their dominant partnership, and George Hainsworth was stellar in net. The Canadiens became back-to-back champions.",
    keyPlayers: [
      { name: "Howie Morenz", position: "Centre", goals: 4 },
      { name: "Aurèle Joliat", position: "Left Wing", goals: 3 },
      { name: "George Hainsworth", position: "Goaltender", note: "Key saves in tight games" },
      { name: "Wildor Larochelle", position: "Defence" },
      { name: "Johnny Gagnon", position: "Right Wing" },
    ],
    keyFacts: [
      "Back-to-back Stanley Cup championships",
      "Won a tight five-game series against Chicago",
      "Morenz-Joliat combination was the most feared in hockey",
      "Fourth Cup in franchise history",
    ],
  },

  // ============ 1944 ============
  {
    year: 1944,
    opponent: "Chicago Black Hawks",
    result: "4-0",
    coach: "Dick Irvin",
    mvp: "Toe Blake",
    description:
      "The Canadiens swept the Chicago Black Hawks in dominant fashion. The legendary Punch Line of Maurice Richard, Toe Blake, and Elmer Lach dismantled every opponent. Maurice Richard had exploded with 12 playoff goals, including 5 in the semifinal against Toronto.",
    keyPlayers: [
      { name: "Maurice Richard", position: "Right Wing", goals: 12, note: "12 goals in 9 playoff games" },
      { name: "Toe Blake", position: "Left Wing", goals: 7, note: "Leader of the Punch Line" },
      { name: "Elmer Lach", position: "Centre", assists: 11 },
      { name: "Bill Durnan", position: "Goaltender", note: "Dominant in his rookie season" },
      { name: "Butch Bouchard", position: "Defence" },
    ],
    keyFacts: [
      "Swept the Black Hawks 4-0 in the final",
      "Maurice Richard scored 12 goals in 9 playoff games",
      "The Punch Line (Richard-Lach-Blake) was unstoppable",
      "Bill Durnan won the Vezina Trophy as a rookie",
    ],
  },

  // ============ 1946 ============
  {
    year: 1946,
    opponent: "Boston Bruins",
    result: "4-1",
    coach: "Dick Irvin",
    mvp: "Elmer Lach",
    description:
      "The Canadiens dispatched the Boston Bruins in five games to claim their sixth Stanley Cup. Elmer Lach led the playoffs in scoring, and Maurice Richard continued his postseason dominance. The Punch Line was still the best forward unit in hockey. The series-clinching goal came in overtime of Game 5.",
    keyPlayers: [
      { name: "Elmer Lach", position: "Centre", goals: 5, note: "Playoff scoring leader" },
      { name: "Maurice Richard", position: "Right Wing", goals: 7 },
      { name: "Toe Blake", position: "Left Wing", goals: 3 },
      { name: "Bill Durnan", position: "Goaltender" },
      { name: "Butch Bouchard", position: "Defence" },
      { name: "Ken Reardon", position: "Defence" },
    ],
    keyFacts: [
      "Won the Cup on an overtime goal in Game 5",
      "The Punch Line remained the most dominant line in hockey",
      "Bill Durnan continued his Vezina-caliber goaltending",
      "Sixth Cup in franchise history",
    ],
  },

  // ============ 1953 ============
  {
    year: 1953,
    opponent: "Boston Bruins",
    result: "4-1",
    coach: "Dick Irvin",
    mvp: "Elmer Lach",
    description:
      "Elmer Lach scored the Cup-winning goal in overtime of Game 5 to beat the Boston Bruins. Jacques Plante made his first notable playoff appearances in relief. Maurice Richard led the team in playoff goals as the Canadiens began building toward their dynasty years.",
    keyPlayers: [
      { name: "Maurice Richard", position: "Right Wing", goals: 7 },
      { name: "Elmer Lach", position: "Centre", goals: 2, note: "Scored the Cup-winning OT goal in Game 5" },
      { name: "Bernie Geoffrion", position: "Right Wing", goals: 6, note: "Boom Boom's cannon shot" },
      { name: "Gerry McNeil", position: "Goaltender" },
      { name: "Doug Harvey", position: "Defence", note: "Emerging as the best defenseman in hockey" },
      { name: "Butch Bouchard", position: "Defence" },
    ],
    keyFacts: [
      "Elmer Lach scored the Stanley Cup-winning goal in OT",
      "Lach's final great moment — he would retire soon after",
      "Doug Harvey was establishing himself as a generational defenseman",
      "Seventh Cup in franchise history",
    ],
  },

  // ============ 1956 ============
  {
    year: 1956,
    opponent: "Detroit Red Wings",
    result: "4-1",
    coach: "Toe Blake",
    mvp: "Jean Béliveau",
    description:
      "The start of the greatest dynasty in NHL history. Under rookie coach Toe Blake, the Canadiens demolished the Detroit Red Wings. Jean Béliveau led all scorers, and the team's depth was overwhelming. This was the first of five consecutive Stanley Cups.",
    keyPlayers: [
      { name: "Jean Béliveau", position: "Centre", goals: 12, note: "12 goals in 10 playoff games — dominant performance" },
      { name: "Maurice Richard", position: "Right Wing", goals: 5 },
      { name: "Doug Harvey", position: "Defence", note: "Controlled the pace of every game" },
      { name: "Jacques Plante", position: "Goaltender", note: "Took over as the undisputed starter" },
      { name: "Bernie Geoffrion", position: "Right Wing", goals: 5 },
      { name: "Dickie Moore", position: "Left Wing" },
    ],
    keyFacts: [
      "First of five consecutive Stanley Cup championships (1956-1960)",
      "Toe Blake's first season as head coach",
      "Jean Béliveau scored 12 goals in 10 games",
      "Roster featured future Hall of Famers at nearly every position",
    ],
  },

  // ============ 1957 ============
  {
    year: 1957,
    opponent: "Boston Bruins",
    result: "4-1",
    coach: "Toe Blake",
    mvp: "Maurice Richard",
    description:
      "The Canadiens continued their dynasty run, dispatching the Bruins in five games. Maurice Richard was magnificent in the playoffs, and the Habs' power play was virtually unstoppable. The depth and talent of this roster made them heavy favorites entering every series.",
    keyPlayers: [
      { name: "Maurice Richard", position: "Right Wing", goals: 8, note: "Vintage Rocket in the playoffs" },
      { name: "Jean Béliveau", position: "Centre", goals: 6 },
      { name: "Doug Harvey", position: "Defence", note: "Norris Trophy winner" },
      { name: "Jacques Plante", position: "Goaltender" },
      { name: "Dickie Moore", position: "Left Wing", goals: 3 },
      { name: "Henri Richard", position: "Centre", note: "The Pocket Rocket's rising impact" },
    ],
    keyFacts: [
      "Second consecutive Stanley Cup",
      "Maurice Richard's leadership was pivotal",
      "Doug Harvey won the Norris Trophy as best defenseman",
      "Henri Richard emerged as a key contributor alongside his brother",
    ],
  },

  // ============ 1958 ============
  {
    year: 1958,
    opponent: "Boston Bruins",
    result: "4-2",
    coach: "Toe Blake",
    mvp: "Maurice Richard",
    description:
      "Three in a row. The Canadiens beat the Bruins again, this time in six games. Maurice Richard, now in the twilight of his career, remained a force in the playoffs. The team's system under Toe Blake was flawless, combining offensive firepower with suffocating defense.",
    keyPlayers: [
      { name: "Maurice Richard", position: "Right Wing", goals: 7 },
      { name: "Jean Béliveau", position: "Centre", goals: 4 },
      { name: "Bernie Geoffrion", position: "Right Wing", goals: 6 },
      { name: "Doug Harvey", position: "Defence" },
      { name: "Jacques Plante", position: "Goaltender", note: "Vezina Trophy winner" },
      { name: "Dickie Moore", position: "Left Wing", goals: 5 },
    ],
    keyFacts: [
      "Third consecutive Stanley Cup",
      "Jacques Plante won the Vezina Trophy",
      "Dickie Moore led the NHL in scoring during the regular season",
      "The dynasty showed no signs of slowing down",
    ],
  },

  // ============ 1959 ============
  {
    year: 1959,
    opponent: "Toronto Maple Leafs",
    result: "4-1",
    coach: "Toe Blake",
    mvp: "Jacques Plante",
    description:
      "Four straight. The Canadiens crushed the rival Toronto Maple Leafs in five games. Jacques Plante was sensational in goal, and the depth of talent was simply too much for Toronto. Marcel Bonin emerged as an unlikely playoff hero with clutch scoring.",
    keyPlayers: [
      { name: "Jacques Plante", position: "Goaltender", note: "Dominant throughout the playoffs" },
      { name: "Marcel Bonin", position: "Left Wing", goals: 10, note: "Surprising playoff scoring leader" },
      { name: "Jean Béliveau", position: "Centre", goals: 5 },
      { name: "Doug Harvey", position: "Defence" },
      { name: "Maurice Richard", position: "Right Wing", goals: 3 },
      { name: "Henri Richard", position: "Centre", goals: 4 },
    ],
    keyFacts: [
      "Fourth consecutive Stanley Cup",
      "Marcel Bonin had a breakout playoff with 10 goals",
      "Jacques Plante continued his Vezina-caliber play",
      "The dynasty was the most dominant run in NHL history",
    ],
  },

  // ============ 1960 ============
  {
    year: 1960,
    opponent: "Toronto Maple Leafs",
    result: "4-0",
    coach: "Toe Blake",
    mvp: "Henri Richard",
    description:
      "Five in a row — a feat that may never be matched. The Canadiens swept the Maple Leafs and went 8-0 through the entire playoffs. Maurice Richard played his final games, Henri Richard stepped up as a leader, and Jean Béliveau was majestic. The greatest dynasty in NHL history was complete.",
    keyPlayers: [
      { name: "Henri Richard", position: "Centre", goals: 3, note: "Stepped out of his brother's shadow" },
      { name: "Jean Béliveau", position: "Centre", goals: 5 },
      { name: "Maurice Richard", position: "Right Wing", goals: 1, note: "Final games of his legendary career" },
      { name: "Doug Harvey", position: "Defence", note: "Quarterbacked the defense masterfully" },
      { name: "Jacques Plante", position: "Goaltender" },
      { name: "Dickie Moore", position: "Left Wing", goals: 3 },
    ],
    keyFacts: [
      "Fifth consecutive Stanley Cup — a record that still stands",
      "Went 8-0 through the entire playoffs (minimum games possible)",
      "Maurice Richard's final season — retired after this Cup",
      "The Canadiens dynasty of 1956-1960 is considered the greatest in NHL history",
    ],
  },

  // ============ 1965 ============
  {
    year: 1965,
    opponent: "Chicago Black Hawks",
    result: "4-3",
    coach: "Toe Blake",
    mvp: "Jean Béliveau",
    description:
      "Jean Béliveau was awarded the inaugural Conn Smythe Trophy as playoff MVP. The Canadiens came back from a tough seven-game series against the Black Hawks, winning the deciding Game 7 in Montreal. Béliveau's leadership and clutch scoring carried the team.",
    keyPlayers: [
      { name: "Jean Béliveau", position: "Centre", goals: 8, note: "First Conn Smythe Trophy winner in history" },
      { name: "Henri Richard", position: "Centre", goals: 4 },
      { name: "Gump Worsley", position: "Goaltender", note: "Shared duties with Charlie Hodge" },
      { name: "Charlie Hodge", position: "Goaltender" },
      { name: "Jacques Laperrière", position: "Defence" },
      { name: "Claude Provost", position: "Right Wing" },
    ],
    keyFacts: [
      "Jean Béliveau won the first ever Conn Smythe Trophy as playoff MVP",
      "Won a dramatic seven-game series against Chicago",
      "Toe Blake's seventh Cup as head coach",
      "The Canadiens reclaimed their dynasty status after a four-year gap",
    ],
  },

  // ============ 1966 ============
  {
    year: 1966,
    opponent: "Detroit Red Wings",
    result: "4-2",
    coach: "Toe Blake",
    mvp: "Henri Richard",
    description:
      "Henri Richard scored the Cup-clinching goal by diving headfirst into the crease in a controversial finish to Game 6. The goal remains one of the most debated in Stanley Cup history. Roger Crozier of Detroit won the Conn Smythe despite being on the losing side.",
    keyPlayers: [
      { name: "Henri Richard", position: "Centre", goals: 4, note: "Controversial diving Cup-winning goal" },
      { name: "Jean Béliveau", position: "Centre", goals: 5 },
      { name: "Gump Worsley", position: "Goaltender" },
      { name: "Jacques Laperrière", position: "Defence" },
      { name: "Bobby Rousseau", position: "Right Wing", goals: 4 },
      { name: "Yvan Cournoyer", position: "Right Wing", note: "The Roadrunner's speed was a weapon" },
    ],
    keyFacts: [
      "Henri Richard's controversial headfirst diving goal won the Cup",
      "Roger Crozier of Detroit won the Conn Smythe despite losing",
      "Toe Blake's eighth and final Cup as coach — he retired after this season",
      "Back-to-back Cups for the Canadiens",
    ],
  },

  // ============ 1968 ============
  {
    year: 1968,
    opponent: "St. Louis Blues",
    result: "4-0",
    coach: "Toe Blake",
    mvp: "Jean Béliveau",
    description:
      "In the first year of NHL expansion, the Canadiens swept the expansion St. Louis Blues. The talent gap between the Original Six and expansion teams was enormous, and Montreal was dominant throughout. Jean Béliveau and the veterans led the way in what was Toe Blake's final Cup as coach.",
    keyPlayers: [
      { name: "Jean Béliveau", position: "Centre", goals: 4 },
      { name: "Yvan Cournoyer", position: "Right Wing", goals: 4 },
      { name: "Henri Richard", position: "Centre", goals: 3 },
      { name: "Gump Worsley", position: "Goaltender", note: "Steady in net for the sweep" },
      { name: "Serge Savard", position: "Defence", note: "Rising young defenseman" },
      { name: "Jacques Laperrière", position: "Defence" },
    ],
    keyFacts: [
      "First Cup final following NHL expansion from 6 to 12 teams",
      "Swept the Blues in four straight games",
      "Toe Blake coached his final game — retired after the championship",
      "Talent gap between Original Six and expansion teams was vast",
    ],
  },

  // ============ 1969 ============
  {
    year: 1969,
    opponent: "St. Louis Blues",
    result: "4-0",
    coach: "Claude Ruel",
    mvp: "Serge Savard",
    description:
      "Under first-year coach Claude Ruel, the Canadiens again swept the St. Louis Blues. Serge Savard won the Conn Smythe Trophy, becoming the first defenseman to do so. Jean Béliveau, in his twilight years, remained a dominant force. The sweep underscored Montreal's continued superiority.",
    keyPlayers: [
      { name: "Serge Savard", position: "Defence", note: "Conn Smythe Trophy winner — first defenseman to win it" },
      { name: "Jean Béliveau", position: "Centre", goals: 5 },
      { name: "Yvan Cournoyer", position: "Right Wing", goals: 4 },
      { name: "Dick Duff", position: "Left Wing", goals: 4 },
      { name: "Rogatien Vachon", position: "Goaltender" },
      { name: "Jacques Lemaire", position: "Centre", note: "Emerging young talent" },
    ],
    keyFacts: [
      "Serge Savard won the Conn Smythe as the first defenseman MVP",
      "Second consecutive sweep of St. Louis in the final",
      "Claude Ruel won the Cup in his first season as head coach",
      "The Canadiens finished the decade with four Cups in the 1960s",
    ],
  },

  // ============ 1971 ============
  {
    year: 1971,
    opponent: "Chicago Black Hawks",
    result: "4-3",
    coach: "Al MacNeil",
    mvp: "Ken Dryden",
    description:
      "Rookie goaltender Ken Dryden delivered one of the greatest upset performances in playoff history. After shocking the heavily favored Boston Bruins in the opening round, the Canadiens beat Chicago in seven games. Dryden won the Conn Smythe Trophy before he had even won the Calder Trophy as best rookie.",
    keyPlayers: [
      { name: "Ken Dryden", position: "Goaltender", note: "Conn Smythe Trophy winner as a rookie — unprecedented" },
      { name: "Henri Richard", position: "Centre", goals: 4, note: "Scored two goals in the Game 7 comeback" },
      { name: "Frank Mahovlich", position: "Left Wing", goals: 14, note: "27 points in 20 playoff games" },
      { name: "Jean Béliveau", position: "Centre", goals: 6, note: "Final season of his Hall of Fame career" },
      { name: "Yvan Cournoyer", position: "Right Wing", goals: 10 },
      { name: "Jacques Lemaire", position: "Centre", goals: 4 },
    ],
    keyFacts: [
      "Ken Dryden won the Conn Smythe as a rookie before winning the Calder",
      "Upset the heavily favored Bruins in Round 1",
      "Henri Richard scored two goals in the Game 7 comeback",
      "Jean Béliveau's last season — he retired with 10 Cups as a player",
      "Frank Mahovlich had 14 goals and 27 points in 20 games",
    ],
  },

  // ============ 1973 ============
  {
    year: 1973,
    opponent: "Chicago Black Hawks",
    result: "4-2",
    coach: "Scotty Bowman",
    mvp: "Yvan Cournoyer",
    description:
      "Scotty Bowman's first Cup as head coach. Yvan Cournoyer, 'The Roadrunner,' earned the Conn Smythe Trophy with his blazing speed and 15 playoff goals. The Canadiens beat Chicago in six games. This Cup marked the beginning of the Bowman era in Montreal.",
    keyPlayers: [
      { name: "Yvan Cournoyer", position: "Right Wing", goals: 15, note: "Conn Smythe Trophy — The Roadrunner" },
      { name: "Ken Dryden", position: "Goaltender", note: "Dominant between the pipes" },
      { name: "Frank Mahovlich", position: "Left Wing", goals: 9 },
      { name: "Jacques Lemaire", position: "Centre", goals: 7 },
      { name: "Serge Savard", position: "Defence" },
      { name: "Guy Lapointe", position: "Defence" },
      { name: "Larry Robinson", position: "Defence", note: "The Big Three defense was forming" },
    ],
    keyFacts: [
      "Scotty Bowman's first Stanley Cup as head coach",
      "Yvan Cournoyer scored 15 goals and won the Conn Smythe",
      "The Big Three defense (Savard, Lapointe, Robinson) was taking shape",
      "Beat Chicago for the second time in three years in the final",
    ],
  },

  // ============ 1976 ============
  {
    year: 1976,
    opponent: "Philadelphia Flyers",
    result: "4-0",
    coach: "Scotty Bowman",
    mvp: "Reggie Leach (PHI) / Guy Lafleur",
    description:
      "The Canadiens swept the defending champion Broad Street Bullies to reclaim the Cup. This was the beginning of Montreal's second great dynasty. Guy Lafleur was electrifying, and the team's speed and skill overwhelmed Philadelphia's physical style. Remarkably, Reggie Leach of the Flyers won the Conn Smythe despite being swept.",
    keyPlayers: [
      { name: "Guy Lafleur", position: "Right Wing", goals: 7, note: "Dazzling speed and skill" },
      { name: "Jacques Lemaire", position: "Centre", goals: 4 },
      { name: "Larry Robinson", position: "Defence", note: "Physical and skilled — dominated the Flyers" },
      { name: "Ken Dryden", position: "Goaltender", note: "Outstanding throughout the playoffs" },
      { name: "Guy Lapointe", position: "Defence", goals: 3 },
      { name: "Serge Savard", position: "Defence" },
      { name: "Steve Shutt", position: "Left Wing", goals: 3 },
    ],
    keyFacts: [
      "Swept the two-time defending champion Philadelphia Flyers",
      "Reggie Leach of Philadelphia won the Conn Smythe despite losing",
      "Beginning of the Canadiens' 1976-1979 dynasty",
      "Speed and skill triumphed over the Flyers' intimidation",
    ],
  },

  // ============ 1977 ============
  {
    year: 1977,
    opponent: "Boston Bruins",
    result: "4-0",
    coach: "Scotty Bowman",
    mvp: "Guy Lafleur",
    description:
      "Often called the greatest team in NHL history, the 1976-77 Canadiens lost only 8 games all season (60-8-12) and swept the Bruins in the final. Guy Lafleur won the Conn Smythe Trophy. The team's combination of speed, skill, toughness, and goaltending was unmatched. They went 12-2 through the entire playoffs.",
    keyPlayers: [
      { name: "Guy Lafleur", position: "Right Wing", goals: 9, note: "Conn Smythe Trophy — generational talent" },
      { name: "Jacques Lemaire", position: "Centre", goals: 4 },
      { name: "Steve Shutt", position: "Left Wing", goals: 8, note: "60-goal scorer in the regular season" },
      { name: "Larry Robinson", position: "Defence", note: "Norris Trophy winner" },
      { name: "Ken Dryden", position: "Goaltender", note: "Vezina Trophy winner" },
      { name: "Serge Savard", position: "Defence" },
      { name: "Guy Lapointe", position: "Defence" },
      { name: "Bob Gainey", position: "Left Wing", note: "Elite two-way forward" },
    ],
    keyFacts: [
      "The 1976-77 Canadiens went 60-8-12 — arguably the best team ever assembled",
      "Swept the Bruins in the final, went 12-2 in the playoffs",
      "Guy Lafleur won the Conn Smythe Trophy",
      "Larry Robinson won the Norris Trophy, Ken Dryden the Vezina",
      "Roster featured 10 future Hall of Famers",
    ],
  },

  // ============ 1978 ============
  {
    year: 1978,
    opponent: "Boston Bruins",
    result: "4-2",
    coach: "Scotty Bowman",
    mvp: "Larry Robinson",
    description:
      "Larry Robinson won the Conn Smythe Trophy with a dominant two-way performance. The Canadiens beat the Bruins again in six games for their third consecutive Cup. The team remained a juggernaut, losing only 10 regular-season games (59-10-11). Robinson's combination of size, skating, and skill was unmatched among defensemen.",
    keyPlayers: [
      { name: "Larry Robinson", position: "Defence", note: "Conn Smythe Trophy — towering presence" },
      { name: "Guy Lafleur", position: "Right Wing", goals: 10 },
      { name: "Jacques Lemaire", position: "Centre", goals: 5 },
      { name: "Ken Dryden", position: "Goaltender" },
      { name: "Bob Gainey", position: "Left Wing", note: "Selke-caliber defensive forward" },
      { name: "Serge Savard", position: "Defence" },
      { name: "Guy Lapointe", position: "Defence" },
      { name: "Steve Shutt", position: "Left Wing", goals: 6 },
    ],
    keyFacts: [
      "Third consecutive Stanley Cup",
      "Larry Robinson won the Conn Smythe Trophy",
      "The team went 59-10-11 in the regular season",
      "Beat the Bruins for the second year in a row in the final",
    ],
  },

  // ============ 1979 ============
  {
    year: 1979,
    opponent: "New York Rangers",
    result: "4-1",
    coach: "Scotty Bowman",
    mvp: "Bob Gainey",
    description:
      "The Canadiens won their fourth consecutive Cup and Scotty Bowman's fifth with the team. Bob Gainey won the Conn Smythe Trophy for his relentless two-way play, validating the importance of defensive forwards. This was the final Cup for several dynasty-era players including Jacques Lemaire and Ken Dryden, who both retired after the series.",
    keyPlayers: [
      { name: "Bob Gainey", position: "Left Wing", note: "Conn Smythe Trophy — the ultimate two-way forward" },
      { name: "Guy Lafleur", position: "Right Wing", goals: 10 },
      { name: "Jacques Lemaire", position: "Centre", goals: 5, note: "Retired after this Cup" },
      { name: "Ken Dryden", position: "Goaltender", note: "Retired after this Cup — won 6 Cups in 8 seasons" },
      { name: "Larry Robinson", position: "Defence" },
      { name: "Serge Savard", position: "Defence" },
      { name: "Guy Lapointe", position: "Defence" },
    ],
    keyFacts: [
      "Fourth consecutive Stanley Cup — matching the 1956-1960 dynasty mark minus one",
      "Bob Gainey won the Conn Smythe Trophy",
      "Ken Dryden and Jacques Lemaire retired after this victory",
      "Scotty Bowman's fifth Cup as Canadiens head coach",
      "Ken Dryden won 6 Stanley Cups in just 8 NHL seasons",
    ],
  },

  // ============ 1986 ============
  {
    year: 1986,
    opponent: "Calgary Flames",
    result: "4-1",
    coach: "Jean Perron",
    mvp: "Patrick Roy",
    description:
      "Rookie goaltender Patrick Roy, just 20 years old, carried the Canadiens to an improbable Cup victory. Roy was sensational throughout the playoffs, winning the Conn Smythe Trophy as MVP. The Canadiens were not expected to go far but Roy's brilliance — combined with clutch contributions from veterans like Bob Gainey, Larry Robinson, and Mats Naslund — delivered the franchise's 23rd Cup.",
    keyPlayers: [
      { name: "Patrick Roy", position: "Goaltender", note: "Conn Smythe Trophy — dominant rookie, just 20 years old" },
      { name: "Mats Naslund", position: "Left Wing", goals: 4 },
      { name: "Bobby Smith", position: "Centre", goals: 5 },
      { name: "Bob Gainey", position: "Left Wing", note: "Veteran leadership" },
      { name: "Larry Robinson", position: "Defence", note: "Still elite at 35 years old" },
      { name: "Chris Chelios", position: "Defence" },
      { name: "Claude Lemieux", position: "Right Wing", goals: 10, note: "Clutch playoff performer" },
    ],
    keyFacts: [
      "Patrick Roy won the Conn Smythe as a 20-year-old rookie",
      "Defeated the Calgary Flames in five games",
      "Claude Lemieux scored 10 goals as a clutch contributor",
      "Veterans Robinson and Gainey provided invaluable experience",
      "23rd Stanley Cup in franchise history",
    ],
  },

  // ============ 1993 ============
  {
    year: 1993,
    opponent: "Los Angeles Kings",
    result: "4-1",
    coach: "Jacques Demers",
    mvp: "Patrick Roy",
    description:
      "The most recent Cup in franchise history, highlighted by a record 10 consecutive overtime victories in the playoffs. Patrick Roy was again the hero, winning his second Conn Smythe Trophy. In Game 2 of the final against Wayne Gretzky's Kings, coach Jacques Demers called for a stick measurement on Marty McSorley's blade — it was illegal, leading to a power-play goal that tied the game and shifted the series. The Canadiens won the Cup on home ice at the Montreal Forum.",
    keyPlayers: [
      { name: "Patrick Roy", position: "Goaltender", note: "Conn Smythe Trophy — 10 consecutive OT wins in the playoffs" },
      { name: "Kirk Muller", position: "Centre", goals: 5, note: "Team captain" },
      { name: "Vincent Damphousse", position: "Centre", goals: 11, note: "Playoff scoring leader" },
      { name: "John LeClair", position: "Left Wing", goals: 4, note: "Two OT goals in the final" },
      { name: "Guy Carbonneau", position: "Centre", note: "Elite defensive forward" },
      { name: "Eric Desjardins", position: "Defence", goals: 3, note: "Hat trick in Game 2 of the final" },
      { name: "Mathieu Schneider", position: "Defence" },
    ],
    keyFacts: [
      "Record 10 consecutive overtime victories in a single playoff year",
      "Patrick Roy won his second Conn Smythe Trophy",
      "Jacques Demers' stick measurement on McSorley's blade changed the series",
      "Eric Desjardins scored a hat trick in Game 2 — rare for a defenseman in the final",
      "Last Stanley Cup won at the historic Montreal Forum",
      "24th and most recent Stanley Cup in franchise history",
    ],
  },
];
