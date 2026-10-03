import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Montreal Canadiens History: Legends & Milestones",
  description:
    "The history of the Montreal Canadiens, the most decorated franchise in NHL history: legendary players, dynasties and 24 Stanley Cup titles.",
  path: "/history",
});

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
