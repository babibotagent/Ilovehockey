"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatBlockProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatBlock({ value, label, suffix = "", delay = 0 }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const step = Math.ceil(value / (duration / 16));
      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000 }}
      className="text-center p-6"
    >
      <div className="text-5xl md:text-6xl font-black text-[#FFDF00] tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-white/60 text-sm mt-2 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
