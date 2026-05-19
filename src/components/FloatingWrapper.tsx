"use client";

import dynamic from "next/dynamic";

const FloatingUrgence = dynamic(() => import("./FloatingUrgence"), {
  ssr: false,
});

export default function FloatingWrapper() {
  return <FloatingUrgence />;
}
