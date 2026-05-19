import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import HeroAccordion from "@/components/HeroAccordion";
import StatsSection from "@/components/sections/StatsSection";
import {
  Wrench, HardHat, Home, CheckCircle, Phone, ArrowRight,
  Shield, Clock, Star, Zap, Hammer, Leaf, MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BATIMTEC — Maintenance, Travaux & Rénovation à Orléans",
  description:
    "BATIMTEC, SAS dirigée par Loukou GNAMIAN. Expert en maintenance technique, travaux et rénovation à Orléans et partout en France. Devis gratuit sous 24h.",
  keywords: ["maintenance bâtiment", "travaux", "rénovation", "Orléans", "Centre Val de Loire", "BATIMTEC"],
};


const services = [
  {
    icon: HardHat,
    title: "Travaux",
    items: ["Électricité", "Plomberie", "Menuiserie", "Dépannage", "Multiservices"],
    href: "/travaux",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    imageAlt: "Travaux d'électricité",
  },
  {
    icon: Home,
    title: "Rénovation",
    items: ["Sols & revêtements", "Peinture", "Cuisine", "Salle de bain", "Agrandissement"],
    href: "/renovation",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",
    imageAlt: "Rénovation intérieure",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    items: ["Contrats maintenance", "Contrôles techniques", "Commission sécurité", "Interventions curative"],
    href: "/maintenance",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    imageAlt: "Maintenance technique",
  },
];

const etapes = [
  { num: "01", titre: "Visite gratuite", desc: "Un expert se déplace pour évaluer votre projet et les contraintes techniques." },
  { num: "02", titre: "Devis sous 24h", desc: "Devis détaillé et transparent. Aucune surprise, aucun coût caché." },
  { num: "03", titre: "Planification", desc: "Planning de chantier défini en accord avec vos contraintes et disponibilités." },
  { num: "04", titre: "Réalisation", desc: "Nos artisans interviennent avec soin, dans le respect des délais et des normes." },
  { num: "05", titre: "Réception", desc: "Visite de réception avec vous pour valider les travaux. Levée des réserves assurée." },
];

const advantages = [
  { icon: Shield, title: "Assurance & garanties", desc: "Garantie décennale, assurance RC Pro, travaux garantis" },
  { icon: Clock, title: "Réactivité 24h", desc: "Devis sous 24h, intervention rapide sur tout le territoire" },
  { icon: Hammer, title: "Multi-corps de métier", desc: "Électricité, plomberie, menuiserie et plus sous un seul contrat" },
  { icon: MapPin, title: "Toute la France", desc: "Implantés à Orléans, nous intervenons dans tout le pays" },
  { icon: Leaf, title: "Matériaux certifiés", desc: "Fournitures de qualité, artisans qualifiés et certifiés" },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Syndic de copropriété · Orléans",
    rating: 5,
    text: "Intervention rapide et propre. L'équipe de BATIMTEC a résolu notre problème de plomberie en moins de 2h. Professionnalisme exemplaire.",
  },
  {
    name: "Pierre D.",
    role: "Gérant d'entreprise · Blois",
    rating: 5,
    text: "Contrat de maintenance depuis 2 ans, zéro mauvaise surprise. Réactifs, honnêtes sur les prix, et le travail est bien fait. Je recommande.",
  },
  {
    name: "Sophie M.",
    role: "Directrice RH · Tours",
    rating: 5,
    text: "Rénovation complète de nos bureaux livrée dans les délais et dans le budget. Loukou et son équipe sont de vrais professionnels.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroAccordion />
      <StatsSection />

      {/* Notre méthode */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <Badge className="mb-4 bg-[#eef2f8] text-[#1B3A6B] border-0 font-semibold">Notre méthode</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A6B] mb-3 tracking-tight">
              De la visite à la réception
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Un accompagnement structuré à chaque étape de votre projet.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
            {etapes.map((e, i) => (
              <ScrollReveal key={e.num} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center text-xl font-black mx-auto mb-4">
                    {e.num}
                  </div>
                  <h3 className="font-bold text-[#1B3A6B] mb-2">{e.titre}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi BATIMTEC */}
      <section className="py-24 bg-[#f4f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <Badge className="mb-4 bg-[#eef2f8] text-[#1B3A6B] border-0 font-semibold">Notre différence</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-[#1B3A6B] mb-6 tracking-tight">
                Pourquoi choisir<br />
                <span className="text-[#C9A84C]">BATIMTEC ?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Fondée par <strong className="text-foreground">Loukou GNAMIAN</strong>,
                BATIMTEC est une SAS implantée à Orléans qui intervient partout en France
                avec un seul engagement : un travail propre, honnête, dans les délais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.title} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#dde3ef]">
                      <div className="w-9 h-9 rounded-lg bg-[#1B3A6B] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#1B3A6B]">{a.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1661263989552-d82526d03b0f?w=800&q=80"
                    alt="Équipe BATIMTEC en chantier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-[#dde3ef] max-w-[220px]">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                    ))}
                  </div>
                  <p className="text-2xl font-black text-[#1B3A6B]">4.9 / 5</p>
                  <p className="text-xs text-muted-foreground mt-0.5">+200 avis clients vérifiés</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <Badge className="mb-4 bg-[#eef2f8] text-[#1B3A6B] border-0 font-semibold">Témoignages</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A6B] mb-4 tracking-tight">
              Ils nous font confiance
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <Card className="border-0 shadow-md h-full">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                      ))}
                    </div>
                    <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 border-t border-[#dde3ef] pt-4">
                      <div className="w-10 h-10 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-[#f4f6fb] border-y border-[#dde3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <Badge className="mb-4 bg-[#eef2f8] text-[#1B3A6B] border-0 font-semibold">Zone d&apos;intervention</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-[#1B3A6B] mb-4 tracking-tight">
                Implantés à Orléans,<br />actifs partout en France
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre base est en <strong className="text-foreground">Centre-Val de Loire</strong>,
                mais nos équipes se déplacent sur tout le territoire national.
                Aucun chantier n&apos;est trop loin.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Orléans", "Paris", "Tours", "Blois", "Chartres", "Bourges", "Clermont-Ferrand", "Lyon", "Et partout…"].map((v) => (
                  <Badge key={v} variant="secondary" className="bg-white border border-[#dde3ef] text-[#1B3A6B] font-medium px-3 py-1">
                    <MapPin className="w-3 h-3 mr-1 inline" />{v}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="bg-[#1B3A6B] rounded-2xl p-8 text-white">
              <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-4">Coordonnées</p>
              <div className="space-y-3 text-sm">
                <div><span className="text-white/50">Mobile</span><br /><a href="tel:+33623080105" className="font-bold text-[#C9A84C] hover:text-white transition-colors">06 23 08 01 05</a></div>
                <div><span className="text-white/50">Urgence / Astreinte 24/7</span><br /><a href="tel:+33749345768" className="font-bold text-[#C9A84C] hover:text-white transition-colors">07 49 34 57 68</a></div>
                <div><span className="text-white/50">Email</span><br /><a href="mailto:contact@batimtec.com" className="font-bold text-[#C9A84C]">contact@batimtec.com</a></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-[#1B3A6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Un projet ? Parlons-en<br />
              <span className="text-[#C9A84C]">dès aujourd&apos;hui</span>
            </h2>
            <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
              Devis gratuit sous 24h. Pas de frais cachés, pas de surprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ButtonLink
                href="/contact"
                size="lg"
                className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold text-base shadow-lg transition-colors"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </ButtonLink>
              <a href="tel:+33623080105" className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors">
                <Phone className="w-5 h-5 shrink-0" />
                06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
