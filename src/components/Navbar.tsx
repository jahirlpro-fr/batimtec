"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Menu, Phone, ChevronDown,
  Zap, Droplets, Hammer, Wrench, Settings,
  Layers, PaintBucket, ChefHat, Maximize,
  FileText, ClipboardCheck, Shield, Clock,
  Flame, Wind, Thermometer, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/* ─── Mega menu data ────────────────────────────────────────────────── */
type MegaItem = {
  nom: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type MegaDef = {
  pageHref: string;
  label: string;
  items: MegaItem[];
};

const megaMenus: Record<string, MegaDef> = {
  "/travaux": {
    pageHref: "/travaux",
    label: "Travaux",
    items: [
      { nom: "Électricité", href: "/travaux#electricite", Icon: Zap },
      { nom: "Plomberie", href: "/travaux#plomberie", Icon: Droplets },
      { nom: "Menuiserie", href: "/travaux#menuiserie", Icon: Hammer },
      { nom: "Dépannage urgent", href: "/travaux#depannage", Icon: Wrench },
      { nom: "Multiservices", href: "/travaux#multiservices", Icon: Settings },
    ],
  },
  "/renovation": {
    pageHref: "/renovation",
    label: "Rénovation",
    items: [
      { nom: "Sols & revêtements", href: "/renovation#sols", Icon: Layers },
      { nom: "Peinture", href: "/renovation#peinture", Icon: PaintBucket },
      { nom: "Cuisine", href: "/renovation#cuisine", Icon: ChefHat },
      { nom: "Salle de bain", href: "/renovation#salle-de-bain", Icon: Droplets },
      { nom: "Agrandissement", href: "/renovation#agrandissement", Icon: Maximize },
    ],
  },
  "/maintenance": {
    pageHref: "/maintenance",
    label: "Maintenance",
    items: [
      { nom: "Contrats maintenance", href: "/maintenance#contrats", Icon: FileText },
      { nom: "Contrôles techniques", href: "/maintenance#controles", Icon: ClipboardCheck },
      { nom: "Commission sécurité", href: "/maintenance#commission", Icon: Shield },
      { nom: "Interventions curatives", href: "/maintenance#interventions", Icon: Clock },
    ],
  },
  "/cvc": {
    pageHref: "/cvc",
    label: "CVC",
    items: [
      { nom: "Chauffage", href: "/cvc#chauffage", Icon: Flame },
      { nom: "Ventilation", href: "/cvc#ventilation", Icon: Wind },
      { nom: "Climatisation", href: "/cvc#climatisation", Icon: Zap },
      { nom: "Pompe à chaleur", href: "/cvc#pac", Icon: RefreshCw },
      { nom: "Chaudière", href: "/cvc#chaudiere", Icon: Thermometer },
    ],
  },
};

const links = [
  { href: "/", label: "Accueil" },
  { href: "/travaux", label: "Travaux" },
  { href: "/renovation", label: "Rénovation" },
  { href: "/cvc", label: "CVC" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/a-propos", label: "À propos" },
];

/* ─── Navbar ────────────────────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Close on route change */
  useEffect(() => { setOpenMenu(null); }, [pathname]);

  function scheduleClose() {
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  }
  function cancelClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }

  const itemCls = "flex items-center gap-0.5 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 select-none text-gray-600 hover:text-[#1B3A6B] hover:bg-blue-50";
  const openCls = "bg-[#eef2f8] text-[#1B3A6B]";

  return (
    <header className="sticky top-8 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            data-nav-logo
            onClick={() => setOpenMenu(null)}
          >
            <Image
              src="/logo-c-Batimtec.png"
              alt="BATIMTEC"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(20%) sepia(52%) saturate(692%) hue-rotate(194deg) brightness(97%) contrast(96%)" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((link) => {
              const def = megaMenus[link.href];
              const isOpen = openMenu === link.href;

              if (def) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={link.href}
                      className={cn(itemCls, isOpen && openCls)}
                      onMouseEnter={() => { cancelClose(); setOpenMenu(link.href); }}
                      onClick={() => setOpenMenu(null)}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 ml-0.5 transition-transform duration-200",
                          isOpen ? "rotate-180" : ""
                        )}
                      />
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-1.5 bg-white rounded-xl border border-gray-100 shadow-xl py-1.5 min-w-[220px] transition-all duration-150 origin-top z-50",
                        isOpen
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      )}
                      onMouseEnter={cancelClose}
                    >
                      {def.items.map((item) => {
                        const Icon = item.Icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            className="group flex items-center gap-3 px-4 py-2.5 hover:bg-[#eef2f8] transition-colors duration-100"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#eef2f8] group-hover:bg-[#1B3A6B] flex items-center justify-center shrink-0 transition-colors duration-150">
                              <Icon className="w-3.5 h-3.5 text-[#1B3A6B] group-hover:text-[#C9A84C] transition-colors duration-150" />
                            </div>
                            <span className="text-sm font-medium text-[#1B3A6B]">{item.nom}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(itemCls)}
                  onClick={() => setOpenMenu(null)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <ButtonLink
              href="/contact"
              size="sm"
              className="hidden md:inline-flex bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold transition-colors"
            >
              Devis gratuit
            </ButtonLink>

            {/* Mobile sheet */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" className="md:hidden" />}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12 overflow-y-auto">
                <div className="flex items-center mb-8">
                  <Image
                    src="/logo-c-Batimtec.png"
                    alt="BATIMTEC"
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(20%) sepia(52%) saturate(692%) hue-rotate(194deg) brightness(97%) contrast(96%)" }}
                  />
                </div>
                <nav className="flex flex-col gap-1">
                  {links.map((link) => {
                    const def = megaMenus[link.href];
                    const isExpanded = mobileExpanded === link.href;
                    const baseCls = "text-sm font-medium transition-colors text-gray-600 hover:text-[#1B3A6B] hover:bg-blue-50";

                    if (!def) {
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn("px-4 py-3 rounded-md", baseCls)}
                        >
                          {link.label}
                        </Link>
                      );
                    }

                    return (
                      <div key={link.href}>
                        <button
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-md",
                            isExpanded ? "bg-[#eef2f8] text-[#1B3A6B]" : "text-gray-600 hover:text-[#1B3A6B] hover:bg-blue-50",
                            "text-sm font-medium transition-colors"
                          )}
                          onClick={() => setMobileExpanded(isExpanded ? null : link.href)}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              isExpanded ? "rotate-180" : ""
                            )}
                          />
                        </button>

                        {isExpanded && (
                          <div className="mt-1 ml-3 pl-3 pb-2 border-l-2 border-[#C9A84C]/30 flex flex-col gap-0.5">
                            {def.items.map((item) => {
                              const Icon = item.Icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2.5 py-2 px-2 rounded-lg text-sm text-gray-600 hover:text-[#1B3A6B] hover:bg-blue-50 transition-colors"
                                >
                                  <div className="w-6 h-6 rounded bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-3.5 h-3.5 text-[#1B3A6B]" />
                                  </div>
                                  <span className="font-medium">{item.nom}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
                <div className="mt-8 pt-8 border-t space-y-3">
                  <ButtonLink
                    href="/contact"
                    className="w-full justify-center bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Devis gratuit
                  </ButtonLink>
                  <span className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1B3A6B] hover:text-[#C9A84C] transition-colors cursor-default select-all">
                    <Phone className="w-4 h-4 shrink-0" />
                    09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
                  </span>
                  <span className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1B3A6B] transition-colors cursor-default select-all">
                    <Phone className="w-4 h-4 shrink-0" />
                    06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
                  </span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
