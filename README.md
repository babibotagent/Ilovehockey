# BrasilFC - A Seleção Brasileira

Aplicação web moderna dedicada à Seleção Brasileira de Futebol.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## Executando

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── elenco/           # Grid de jogadores com filtros
│   ├── jogador/[slug]/   # Perfil individual
│   ├── historia/         # Timeline das Copas + lendas
│   └── partidas/         # Próximos jogos e resultados
├── components/
│   ├── layout/           # Navbar, Footer
│   └── shared/           # PlayerCard, MatchCard, StatBlock
└── data/
    ├── types.ts          # Interfaces TypeScript
    ├── players.ts        # Elenco atual (16 jogadores)
    ├── legends.ts        # Lendas (10 jogadores)
    └── matches.ts        # Partidas + Copas do Mundo
```

## Imagens necessárias

Adicione imagens em `public/images/`:

**Jogadores** (`public/images/players/`):
alisson.jpg, ederson.jpg, marquinhos.jpg, eder-militao.jpg, gabriel-magalhaes.jpg, danilo.jpg, vanderson.jpg, bruno-guimaraes.jpg, casemiro.jpg, lucas-paqueta.jpg, rodrygo.jpg, vinicius-jr.jpg, raphinha.jpg, endrick.jpg, estevao.jpg, neymar-jr.jpg

**Lendas** (`public/images/legends/`):
pele.jpg, garrincha.jpg, ronaldo.jpg, romario.jpg, ronaldinho.jpg, zico.jpg, rivaldo.jpg, cafu.jpg, roberto-carlos.jpg, kaka.jpg

> As imagens são opcionais — placeholders com ícones são exibidos no lugar.
