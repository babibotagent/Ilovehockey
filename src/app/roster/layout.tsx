import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Montreal Canadiens Roster: Players & Stats",
  description:
    "The Montreal Canadiens roster: forwards, defensemen and goaltenders with numbers, positions, ages and career highlights.",
  path: "/roster",
});

export default function RosterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
