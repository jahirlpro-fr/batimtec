"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-badge", { opacity: 0, y: -16, duration: 0.6 })
      .from(".hero-title", { opacity: 0, y: 44, duration: 0.85 }, "-=0.3")
      .from(".hero-subtitle", { opacity: 0, y: 28, duration: 0.7 }, "-=0.55")
      .from(".hero-ctas", { opacity: 0, y: 20, duration: 0.6 }, "-=0.45")
      .from(".hero-stat", { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, "-=0.35")
      .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.2");
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "92vh" }}
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1676630656246-3047520adfdf?w=1920&q=80"
        alt="Chantier de construction BATIMTEC"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay : dense à gauche, transparent à droite */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#122849]/95 via-[#1B3A6B]/80 to-[#1B3A6B]/40" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f1923]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* H1 */}
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.04] mb-7 tracking-tight">
            Votre expert<br />
            <span className="text-[#C9A84C]">bâtiment</span><br />
            à portée de main
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed">
            Travaux, rénovation, maintenance — BATIMTEC intervient partout en France.
            Devis gratuit sous{" "}
            <strong className="text-white font-semibold">24h</strong>.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-14">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold text-base shadow-lg shadow-[#C9A84C]/20 transition-colors"
            >
              Devis gratuit sous 24h
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <a href="tel:+33623080105" className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors">
              <Phone className="w-5 h-5 shrink-0" />
              06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
            </a>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-8">
            {[
              { value: "24h", label: "Délai de réponse" },
              { value: "Toute la France", label: "Zone d'intervention" },
              { value: "15 ans", label: "D'expérience" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="text-xl font-black text-[#C9A84C]">{s.value}</div>
                <div className="text-xs text-white/50 mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs uppercase tracking-widest">Découvrir</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
