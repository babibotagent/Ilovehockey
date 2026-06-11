export interface Selecao {
  slug: string;
  name: string;
  emoji: string;
  feminino?: string;
}

export const selecoes: Selecao[] = [
  { slug: "volei", name: "Vôlei Masculino", emoji: "🏐", feminino: "volei-feminino" },
  { slug: "basquete", name: "Basquete Masculino", emoji: "🏀", feminino: "basquete-feminino" },
  { slug: "handebol", name: "Handebol Masculino", emoji: "🤾", feminino: "handebol-feminino" },
  { slug: "futsal", name: "Futsal Masculino", emoji: "⚽", feminino: "futsal-feminino" },
  // { slug: "futebol-feminino", name: "Futebol Feminino", emoji: "⚽" }, // moved to navbar
  // { slug: "natacao", name: "Natação", emoji: "🏊" },
  // { slug: "atletismo", name: "Atletismo", emoji: "🏃" },
  // { slug: "ginastica", name: "Ginástica", emoji: "🤸" },
  // { slug: "judo", name: "Judô", emoji: "🥋" },
  { slug: "boxe", name: "Boxe", emoji: "🥊" },
  { slug: "skate", name: "Skate", emoji: "🛹" },
  { slug: "surfe", name: "Surfe", emoji: "🏄" },
  { slug: "tenis", name: "Tênis", emoji: "🎾" },
  { slug: "tenis-de-mesa", name: "Tênis de Mesa", emoji: "🏓" },
  { slug: "vela", name: "Vela", emoji: "⛵" },
  { slug: "canoagem", name: "Canoagem", emoji: "🛶" },
  { slug: "taekwondo", name: "Taekwondo", emoji: "🥋" },
  { slug: "esgrima", name: "Esgrima", emoji: "🤺" },
  { slug: "rugby", name: "Rugby", emoji: "🏉" },
  { slug: "polo-aquatico", name: "Polo Aquático", emoji: "🤽" },
];
