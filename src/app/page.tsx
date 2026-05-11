import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import {
  Wrench, HardHat, Home, CheckCircle, Phone, ArrowRight,
  Shield, Clock, Star, Zap, Hammer, Leaf, MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BATIMTEC — Maintenance, Travaux & Rénovation à Orléans",
  description:
    "BATIMTEC, SAS dirigée par Loukou GNAMIAN. Expert en maintenance technique, travaux et rénovation à Orléans et partout en France. 38 €/h HT. Devis gratuit sous 24h.",
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
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    imageAlt: "Rénovation intérieure",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    items: ["Contrats maintenance", "Contrôles techniques", "Commission sécurité", "Interventions curative"],
    href: "/maintenance",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    imageAlt: "Maintenance technique",
  },
];

const advantages = [
  { icon: Shield, title: "Assurance & garanties", desc: "Garantie décennale, assurance RC Pro, travaux garantis" },
  { icon: Clock, title: "Réactivité 24h", desc: "Devis sous 24h, intervention rapide sur tout le territoire" },
  { icon: Zap, title: "Tarif transparent", desc: "38 € HT/h — hors déplacement et fournitures, sans surprise" },
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
      <HeroSection />
      <StatsSection />

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 bg-[#eef2f8] text-[#1B3A6B] border-0 font-semibold">Nos 3 pôles</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A6B] mb-4 tracking-tight">
              Une expertise complète
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Du dépannage d&apos;urgence au contrat de maintenance annuel — BATIMTEC
              couvre l&apos;ensemble de vos besoins bâtiment.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.title} delay={i * 0.12}>
                  <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-[#C9A84C] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#1B3A6B]" />
                        </div>
                        <h3 className="text-white text-xl font-black">{s.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-2 mb-6">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-[#C9A84C] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ButtonLink
                        href={s.href}
                        variant="outline"
                        className="w-full justify-center border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white transition-colors"
                      >
                        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                      </ButtonLink>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
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
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
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
                <div><span className="text-white/50">Adresse</span><br /><strong>15 rue de l&apos;Écu d&apos;or, 45000 Orléans</strong></div>
                <div><span className="text-white/50">Téléphone fixe</span><br /><a href="tel:+33986669610" className="font-bold text-[#C9A84C]">09 86 66 96 10</a></div>
                <div><span className="text-white/50">Mobile</span><br /><a href="tel:+33623080105" className="font-bold text-[#C9A84C]">06 23 08 01 05</a></div>
                <div><span className="text-white/50">Email</span><br /><a href="mailto:contact@batimtec.com" className="font-bold text-[#C9A84C]">contact@batimtec.com</a></div>
                <div><span className="text-white/50">SIRET</span><br /><strong>979 251 485 00012</strong></div>
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
              Devis gratuit sous 24h. Tarif fixe à 38&nbsp;€&nbsp;HT/h.
              Pas de frais cachés, pas de surprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink
                href="/contact"
                size="lg"
                className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold text-base shadow-lg"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </ButtonLink>
              <ButtonAnchor
                href="tel:+33986669610"
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 font-semibold text-base"
              >
                <Phone className="mr-2 w-5 h-5" />
                09 86 66 96 10
              </ButtonAnchor>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
