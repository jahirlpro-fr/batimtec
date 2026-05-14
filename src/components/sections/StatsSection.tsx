"use client";

import { CountUp } from "@/components/animations/CountUp";

const stats = [
  { to: 15, prefix: "", suffix: " ans", label: "D'expérience", desc: "au service du bâtiment" },
  { to: 500, prefix: "", suffix: "+", label: "Chantiers réalisés", desc: "partout en France" },
  { to: 4, prefix: "", suffix: " pôles", label: "Corps de métier", desc: "Travaux · Rénovation · Maintenance · CVC" },
  { to: 24, prefix: "", suffix: "h max", label: "Délai d'intervention", desc: "pour toute demande urgente" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1B3A6B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:px-8">
              <div className="text-4xl md:text-5xl font-black text-[#C9A84C] mb-1">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-white font-semibold text-sm md:text-base mb-0.5">{s.label}</div>
              <div className="text-white/45 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
