import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Montreal Canadiens Stanley Cups: All 24 Titles",
  description:
    "All 24 Montreal Canadiens Stanley Cup championships with Finals results, key players, coaches and facts, plus recent Stanley Cup Final winners.",
  path: "/stanley-cup",
});

export default function StanleyCupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
