"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ to, prefix = "", suffix = "", duration = 2, className }: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const counter = useRef({ val: 0 });

  useGSAP(() => {
    gsap.to(counter.current, {
      val: to,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: spanRef.current,
        start: "top 88%",
        once: true,
      },
      onUpdate() {
        if (spanRef.current) {
          spanRef.current.textContent =
            prefix + Math.round(counter.current.val).toLocaleString("fr-FR") + suffix;
        }
      },
    });
  });

  return (
    <span ref={spanRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
