import type { Metadata } from "next";
import { players } from "@/data/players";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const player = players.find((p) => p.slug === slug);
  const path = `/player/${slug}`;

  if (!player) {
    return pageMetadata({
      title: "Montreal Canadiens Player",
      description: "Montreal Canadiens player profile.",
      path,
    });
  }

  return pageMetadata({
    title: `${player.name} (#${player.number}): Montreal Canadiens ${player.position}`,
    description: `${player.name}, #${player.number}, ${player.position} for the Montreal Canadiens. Career stats, highlights and background.`,
    path,
  });
}

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
