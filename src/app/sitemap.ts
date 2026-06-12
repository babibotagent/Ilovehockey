import { players } from "@/data/players";

const siteUrl = "https://ilovehockey.zynox.ca";

export default function sitemap() {
  const staticRoutes = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${siteUrl}/elenco`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${siteUrl}/historia`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteUrl}/partidas`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${siteUrl}/stanleycup`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteUrl}/season`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${siteUrl}/idealizadores`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const playerRoutes = players.map((p) => ({
    url: `${siteUrl}/jogador/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...playerRoutes];
}
