import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const COPA_FILE = join(__dirname, "..", "src", "data", "copa2026.ts");
const API_URL = "https://worldcup26.ir/get/games";

const teamNameMap = {
  "Mexico": "México",
  "South Africa": "África do Sul",
  "South Korea": "Coreia do Sul",
  "Czech Republic": "Tchéquia",
  "Canada": "Canadá",
  "Bosnia and Herzegovina": "Bósnia e Herzegovina",
  "Qatar": "Catar",
  "Switzerland": "Suíça",
  "Brazil": "Brasil",
  "Morocco": "Marrocos",
  "Haiti": "Haiti",
  "Scotland": "Escócia",
  "United States": "Estados Unidos",
  "Paraguay": "Paraguai",
  "Australia": "Austrália",
  "Turkey": "Turquia",
  "Türkiye": "Turquia",
  "Germany": "Alemanha",
  "Curaçao": "Curaçao",
  "Curacao": "Curaçao",
  "Ivory Coast": "Costa do Marfim",
  "Côte d'Ivoire": "Costa do Marfim",
  "Ecuador": "Equador",
  "Netherlands": "Holanda",
  "Japan": "Japão",
  "Sweden": "Suécia",
  "Tunisia": "Tunísia",
  "Spain": "Espanha",
  "Cape Verde": "Cabo Verde",
  "Saudi Arabia": "Arábia Saudita",
  "Uruguay": "Uruguai",
  "Belgium": "Bélgica",
  "Egypt": "Egito",
  "Iran": "Irã",
  "New Zealand": "Nova Zelândia",
  "France": "França",
  "Senegal": "Senegal",
  "Iraq": "Iraque",
  "Norway": "Noruega",
  "Argentina": "Argentina",
  "Algeria": "Argélia",
  "Austria": "Áustria",
  "Jordan": "Jordânia",
  "Portugal": "Portugal",
  "DR Congo": "RD Congo",
  "Congo DR": "RD Congo",
  "Uzbekistan": "Uzbequistão",
  "Colombia": "Colômbia",
  "England": "Inglaterra",
  "Croatia": "Croácia",
  "Ghana": "Gana",
  "Panama": "Panamá",
};

function toPt(name) {
  return teamNameMap[name] || name;
}

async function main() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    console.log("API unavailable, skipping.");
    return;
  }

  const data = await res.json();
  const finishedGames = data.games.filter(
    (g) => g.finished === "TRUE" && g.home_score !== "null" && g.home_score !== ""
  );

  if (finishedGames.length === 0) {
    console.log("No finished games found.");
    return;
  }

  let content = readFileSync(COPA_FILE, "utf-8");
  let updated = 0;

  for (const game of finishedGames) {
    const homePt = toPt(game.home_team_name_en);
    const awayPt = toPt(game.away_team_name_en);
    const homeScore = parseInt(game.home_score);
    const awayScore = parseInt(game.away_score);

    if (isNaN(homeScore) || isNaN(awayScore)) continue;

    const alreadyHas = new RegExp(
      `homeTeam: "${escapeRegex(homePt)}", awayTeam: "${escapeRegex(awayPt)}", homeScore:`
    );
    if (alreadyHas.test(content)) continue;

    const patternGroup = new RegExp(
      `(homeTeam: "${escapeRegex(homePt)}", awayTeam: "${escapeRegex(awayPt)}",)( group:)`
    );
    const patternStage = new RegExp(
      `(homeTeam: "${escapeRegex(homePt)}", awayTeam: "${escapeRegex(awayPt)}",)( stage:)`
    );

    const pattern = patternGroup.test(content) ? patternGroup : patternStage;
    if (pattern.test(content)) {
      content = content.replace(pattern, `$1 homeScore: ${homeScore}, awayScore: ${awayScore},$2`);
      updated++;
      console.log(`Updated: ${homePt} ${homeScore} x ${awayScore} ${awayPt}`);
    }
  }

  if (updated > 0) {
    writeFileSync(COPA_FILE, content, "utf-8");
    console.log(`${updated} score(s) updated.`);
  } else {
    console.log("All scores already up to date.");
  }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
