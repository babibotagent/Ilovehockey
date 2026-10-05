"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function AutoRefresh({ active }: { active: boolean }) {
  const router = useRouter();

  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    const catchUp = setTimeout(refresh, 4_000);
    const interval = setInterval(refresh, active ? 30_000 : 60_000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearTimeout(catchUp);
      clearInterval(interval);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [active, router]);

  return null;
}
