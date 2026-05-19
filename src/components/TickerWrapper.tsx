"use client";

import dynamic from "next/dynamic";

const UrgenceTicker = dynamic(() => import("./UrgenceTicker"), {
  ssr: false,
  loading: () => <div style={{ height: 32 }} />,
});

export default function TickerWrapper() {
  return <UrgenceTicker />;
}
