import type { Metadata } from "next";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ILoveHockey",
      type: "website",
      locale: "en_CA",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
