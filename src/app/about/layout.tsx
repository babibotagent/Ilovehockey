import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About the Team Behind the Site",
  description: "Meet the team behind ILoveHockey, a Montreal Canadiens fan site with rosters, history, schedules and live scores.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
