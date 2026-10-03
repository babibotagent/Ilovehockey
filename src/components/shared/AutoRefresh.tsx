"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function AutoRefresh({ active }: { active: boolean }) {
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(
      () => {
        if (document.visibilityState === "visible") router.refresh();
      },
      active ? 30_000 : 300_000
    );
    return () => clearInterval(id);
  }, [active, router]);

  return null;
}
