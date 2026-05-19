"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronUp } from "lucide-react";

gsap.registerPlugin(useGSAP);

/* ─── Types ────────────────────────────────────────────────────────── */
interface Spec {
  nom: string;
  desc: string;
  image: string;
  href: string;
}
interface Pole {
  id: string;
  label: string;
  sub: string;
  image: string;
  href: string;
  specs: Spec[];
}

/* ─── Data ──────────────────────────────────────────────────────────── */
const poles: Pole[] = [
  {
    id: "travaux",
    label: "TRAVAUX",
    sub: "Électricité · Plomberie · Menuiserie",
    image: "https://images.unsplash.com/photo-1676630656246-3047520adfdf?w=1920&q=80",
    href: "/travaux",
    specs: [
      { nom: "Électricité", desc: "Câblage, tableaux, prises et éclairage — mise en conformité et dépannage rapide.", image: "https://images.unsplash.com/photo-1635335874521-7987db781153?w=1920&q=80", href: "/travaux#electricite" },
      { nom: "Plomberie", desc: "Canalisations, robinetterie, chauffe-eau, sanitaires. Fuites réparées en urgence.", image: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=1920&q=80", href: "/travaux#plomberie" },
      { nom: "Menuiserie", desc: "Portes, fenêtres, parquet, aménagement bois sur mesure intérieur et extérieur.", image: "https://plus.unsplash.com/premium_photo-1683140920401-36b43c727bb5?w=1920&q=80", href: "/travaux#menuiserie" },
      { nom: "Dépannage urgent", desc: "Astreinte 24/7. Délai maximal d'intervention : 24h.", image: "https://plus.unsplash.com/premium_photo-1683134531395-1ebecbf3440c?w=1920&q=80", href: "/travaux#depannage" },
      { nom: "Multiservices", desc: "Un seul interlocuteur pour tous les corps de métier. Coordination complète de chantier.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1920&q=80", href: "/travaux#multiservices" },
    ],
  },
  {
    id: "renovation",
    label: "RÉNOVATION",
    sub: "Sols · Peinture · Cuisine · Salle de bain",
    image: "https://images.unsplash.com/photo-1689043528099-2ba014dd7c64?w=1920&q=80",
    href: "/renovation",
    specs: [
      { nom: "Sols & revêtements", desc: "Carrelage, parquet, vinyle, béton ciré. Pose soignée sur toutes surfaces.", image: "https://plus.unsplash.com/premium_photo-1683133861653-aef45a198ec1?w=1920&q=80", href: "/renovation#sols" },
      { nom: "Peinture", desc: "Peinture intérieure et extérieure, enduits décoratifs, papiers peints. Finitions premium.", image: "https://plus.unsplash.com/premium_photo-1661681925488-472f29575137?w=1920&q=80", href: "/renovation#peinture" },
      { nom: "Cuisine", desc: "Conception et installation sur mesure, du plan de travail à l'électroménager intégré.", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1920&q=80", href: "/renovation#cuisine" },
      { nom: "Salle de bain", desc: "Rénovation complète ou partielle. Douche à l'italienne, faïence, meuble vasque.", image: "https://images.unsplash.com/photo-1695002817411-203c7f19dfa3?w=1920&q=80", href: "/renovation#salle-de-bain" },
      { nom: "Agrandissement", desc: "Extension de maison, véranda, surélévation. Permis de construire pris en charge.", image: "https://images.unsplash.com/photo-1723468366036-c5598c8e9786?w=1920&q=80", href: "/renovation#agrandissement" },
    ],
  },
  {
    id: "maintenance",
    label: "MAINTENANCE",
    sub: "Contrats · Contrôles · Commission sécurité",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
    href: "/maintenance",
    specs: [
      { nom: "Contrats maintenance", desc: "Plans préventifs sur mesure. Visite annuelle, rapport détaillé, budget maîtrisé.", image: "https://plus.unsplash.com/premium_photo-1681823361676-8c5c8ba4037e?w=1920&q=80", href: "/maintenance#contrats" },
      { nom: "Contrôles techniques", desc: "Vérifications réglementaires : électricité, gaz, extincteurs, VMC, ascenseurs.", image: "https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=1920&q=80", href: "/maintenance#controles" },
      { nom: "Commission sécurité", desc: "Préparation ERP, levée de non-conformités, accompagnement le jour du passage.", image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=1920&q=80", href: "/maintenance#commission" },
      { nom: "Interventions curatives", desc: "Réparations sur sinistre ou panne. Délai d'intervention maximal 24h garantis.", image: "https://plus.unsplash.com/premium_photo-1683127814960-3a97c4f0d882?w=1920&q=80", href: "/maintenance#interventions" },
    ],
  },
  {
    id: "cvc",
    label: "CVC",
    sub: "Chauffage · Ventilation · Climatisation",
    image: "https://plus.unsplash.com/premium_photo-1663047278323-ddc23b56c6a2?w=1920&q=80",
    href: "/cvc",
    specs: [
      { nom: "Chauffage", desc: "Installation et entretien de systèmes de chauffage central et plancher chauffant.", image: "https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?w=1920&q=80", href: "/cvc#chauffage" },
      { nom: "Ventilation", desc: "VMC simple et double flux, extraction, renouvellement d'air réglementaire.", image: "https://plus.unsplash.com/premium_photo-1714875083906-e9771ecea92f?w=1920&q=80", href: "/cvc#ventilation" },
      { nom: "Climatisation", desc: "Split system, multi-split, réversible. Installation certifiée et maintenance annuelle.", image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?w=1920&q=80", href: "/cvc#climatisation" },
      { nom: "Pompe à chaleur", desc: "PAC air/air et air/eau. Installation, mise en service et contrat d'entretien.", image: "https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?w=1920&q=80", href: "/cvc#pac" },
      { nom: "Chaudière", desc: "Chaudière gaz, fioul, bois. Entretien annuel obligatoire et dépannage express.", image: "https://plus.unsplash.com/premium_photo-1661921394349-9e3f394d80da?w=1920&q=80", href: "/cvc#chaudiere" },
    ],
  },
];

/* ─── SpecLimelightNav ──────────────────────────────────────────────── */
function SpecLimelightNav({
  specs,
  onBgChange,
  controlledIndex = null,
}: {
  specs: Spec[];
  onBgChange: (img: string | null) => void;
  controlledIndex?: number | null;
}) {
  const [hovIdx, setHovIdx] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement | null>(null);

  // Mobile auto-cycle (controlledIndex) takes priority over desktop hover
  const activeIdx = controlledIndex !== null ? controlledIndex : hovIdx;

  useLayoutEffect(() => {
    if (activeIdx === null) return;
    const bar = barRef.current;
    const item = itemRefs.current[activeIdx];
    if (!bar || !item) return;
    bar.style.left = `${item.offsetLeft}px`;
    bar.style.top = `${item.offsetTop + item.offsetHeight - 3}px`;
    bar.style.width = `${item.offsetWidth}px`;
    if (!ready) setTimeout(() => setReady(true), 50);
  }, [activeIdx, ready]);

  const active = activeIdx !== null ? specs[activeIdx] : null;

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        if (controlledIndex === null) { setHovIdx(null); onBgChange(null); }
      }}
    >
      {/* Items row */}
      <div className="flex flex-wrap gap-x-1">
        {specs.map((spec, i) => (
          <Link
            key={spec.nom}
            href={spec.href}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="px-2 py-2 text-sm sm:text-base font-semibold text-white/70 hover:text-white transition-colors duration-150 whitespace-nowrap"
            onMouseEnter={() => {
              if (controlledIndex === null) { setHovIdx(i); onBgChange(spec.image); }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {spec.nom}
          </Link>
        ))}
      </div>

      {/* Limelight bar */}
      <div
        ref={barRef}
        className="absolute h-[3px] rounded-full bg-[#C9A84C] pointer-events-none"
        style={{
          left: -999,
          top: 0,
          width: 0,
          opacity: activeIdx !== null ? 1 : 0,
          boxShadow: "0 0 6px 1px #C9A84C70, 0 -18px 16px -4px #C9A84C25",
          transition: ready
            ? "left 300ms ease-out, top 300ms ease-out, width 300ms ease-out, opacity 150ms ease"
            : "opacity 150ms ease",
        }}
      />

      {/* Description below */}
      <div className="mt-3 min-h-[3rem]">
        <p
          className="text-white/55 text-sm sm:text-base leading-relaxed max-w-lg transition-opacity duration-200"
          style={{ opacity: active ? 1 : 0 }}
        >
          {active?.desc ?? " "}
        </p>
      </div>
    </div>
  );
}

/* ─── HeroAccordion ─────────────────────────────────────────────────── */
export default function HeroAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [specImages, setSpecImages] = useState<Record<string, string>>(
    Object.fromEntries(poles.map((p) => [p.id, p.image]))
  );
  const [isMobile, setIsMobile] = useState(false);
  const [mobileAutoIdx, setMobileAutoIdx] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayLogoRef = useRef<HTMLImageElement>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const specsRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Mobile detection ───────────────────────────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Auto-cycle specs on mobile when pole opens ─────────────────── */
  useEffect(() => {
    if (cycleTimerRef.current) {
      clearInterval(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }

    if (!openId || !isMobile) {
      setMobileAutoIdx(0);
      return;
    }

    const pole = poles.find((p) => p.id === openId);
    if (!pole) return;

    // Show first spec immediately
    setMobileAutoIdx(0);
    setSpecImages((prev) => ({ ...prev, [openId]: pole.specs[0].image }));

    let idx = 0;
    cycleTimerRef.current = setInterval(() => {
      idx = (idx + 1) % pole.specs.length;
      setMobileAutoIdx(idx);
      setSpecImages((prev) => ({ ...prev, [openId]: pole.specs[idx].image }));
    }, 3000);

    return () => {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
    };
  }, [openId, isMobile]);

  /* ── Intro animation ─────────────────────────────────────────────── */
  useGSAP(() => {
    const overlay = overlayRef.current;
    const logo = overlayLogoRef.current;
    if (!overlay || !logo) return;

    // Fallback absolu — l'overlay disparaît TOUJOURS après 4s
    const fallbackTimer = setTimeout(() => {
      overlay.style.display = "none";
    }, 4000);

    const tl = gsap.timeline();

    tl.fromTo(
      logo,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );

    tl.to({}, { duration: 1.2 });

    tl.call(() => {
      clearTimeout(fallbackTimer);

      const navEl = document.querySelector("[data-nav-logo]");

      if (!navEl) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => { overlay.style.display = "none"; },
        });
        return;
      }

      const navRect = navEl.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();
      const dx = navRect.left + navRect.width / 2
                 - (logoRect.left + logoRect.width / 2);
      const dy = navRect.top + navRect.height / 2
                 - (logoRect.top + logoRect.height / 2);
      const sc = navRect.width / logoRect.width;

      gsap.to(logo, {
        x: dx, y: dy, scale: sc,
        duration: 0.9, ease: "power3.inOut",
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.65,
        delay: 0.22,
        ease: "power2.inOut",
        onComplete: () => { overlay.style.display = "none"; },
      });
    });
  });

  /* ── Panel height + specs reveal ────────────────────────────────── */
  useGSAP(() => {
    const container = containerRef.current;
    if (!container || container.clientHeight === 0) return;
    const total = container.clientHeight;

    poles.forEach((pole) => {
      const panel = panelRefs.current[pole.id];
      const specs = specsRefs.current[pole.id];
      if (!panel) return;

      const isActive = pole.id === openId;
      const targetH =
        openId === null
          ? total * 0.25
          : isActive
          ? total * 0.6
          : (total * 0.4) / 3;

      gsap.to(panel, {
        height: targetH,
        duration: 0.72,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      if (!specs) return;
      if (isActive) {
        gsap.fromTo(
          specs,
          { opacity: 0, y: 16, maxHeight: 0, marginTop: 0 },
          { opacity: 1, y: 0, maxHeight: 500, marginTop: 20, duration: 0.45, delay: 0.38, ease: "power2.out", overwrite: "auto" }
        );
      } else {
        gsap.to(specs, { opacity: 0, y: 0, maxHeight: 0, marginTop: 0, duration: 0.2, overwrite: "auto" });
      }
    });
  }, { scope: containerRef, dependencies: [openId] });

  /* ── Handlers ───────────────────────────────────────────────────── */
  function handlePanelClick(id: string) {
    const isClosing = openId === id;
    setOpenId(isClosing ? null : id);
    if (isClosing) {
      const pole = poles.find((p) => p.id === id);
      if (pole) setSpecImages((prev) => ({ ...prev, [id]: pole.image }));
    }
  }

  function handleBgChange(poleId: string, img: string | null) {
    const pole = poles.find((p) => p.id === poleId);
    if (!pole) return;
    setSpecImages((prev) => ({ ...prev, [poleId]: img ?? pole.image }));
  }

  /* ── Render ─────────────────────────────────────────────────────── */
  return (
    <>
      {/* ── White intro overlay ──────────────────────────────────── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] bg-white flex items-center justify-center"
        aria-hidden
      >
        <img
          ref={overlayLogoRef}
          src="/logo-c-Batimtec.png"
          alt="BATIMTEC"
          className="w-[160px] sm:w-[280px] md:w-[400px] opacity-0 object-contain"
          style={{
            transformOrigin: "center center",
            filter: "brightness(0) saturate(100%) invert(20%) sepia(52%) saturate(692%) hue-rotate(194deg) brightness(97%) contrast(96%)",
          }}
        />
      </div>

      {/* ── Accordion ────────────────────────────────────────────── */}
      <section
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ height: "calc(100svh - 6rem)", minHeight: "480px" }}
        aria-label="Nos pôles d'expertise"
      >
        {poles.map((pole) => {
          const isOpen = openId === pole.id;
          const currentBg = specImages[pole.id] ?? pole.image;

          return (
            <div
              key={pole.id}
              ref={(el) => { panelRefs.current[pole.id] = el; }}
              className="relative overflow-hidden cursor-pointer"
              style={{ height: "25%" }}
              onClick={() => handlePanelClick(pole.id)}
              role="button"
              aria-expanded={isOpen}
            >
              {/* Base background */}
              <div className="absolute inset-0">
                <img src={pole.image} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Spec background — crossfade */}
              <div
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: currentBg !== pole.image ? 1 : 0 }}
              >
                <img src={currentBg} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#08152a]/92 via-[#08152a]/70 to-[#08152a]/30" />

              {/* Separator */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />

              {/* ── Panel content ── */}
              <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-16 lg:px-20">

                <div className="flex-1 min-w-0">
                  {/* Eyebrow */}
                  <p
                    className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.3em] mb-1.5 transition-opacity duration-300"
                    style={{ opacity: isOpen ? 0 : 0.9 }}
                  >
                    {pole.sub}
                  </p>

                  {/* Pole title */}
                  <h2
                    className={`font-black text-white tracking-tight leading-none transition-all duration-500 ease-out ${
                      isOpen
                        ? "text-3xl sm:text-5xl md:text-7xl lg:text-8xl"
                        : "text-xl sm:text-3xl md:text-4xl lg:text-5xl"
                    }`}
                  >
                    {pole.label}
                  </h2>

                  {/* Specs — GSAP controls opacity/maxHeight/marginTop */}
                  <div
                    ref={(el) => { specsRefs.current[pole.id] = el; }}
                    style={{ opacity: 0, maxHeight: 0, overflow: "hidden", marginTop: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SpecLimelightNav
                      specs={pole.specs}
                      onBgChange={(img) => handleBgChange(pole.id, img)}
                      controlledIndex={isMobile && isOpen ? mobileAutoIdx : null}
                    />
                  </div>
                </div>

                {/* Close button */}
                {isOpen && (
                  <button
                    className="absolute top-4 right-20 hidden md:flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                    onClick={(e) => { e.stopPropagation(); handlePanelClick(pole.id); }}
                    aria-label="Fermer"
                  >
                    <ChevronUp className="w-4 h-4" />
                    Fermer
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
