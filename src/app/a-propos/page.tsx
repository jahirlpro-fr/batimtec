import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle, ArrowRight, Award, Users, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — BATIMTEC",
  description:
    "Découvrez BATIMTEC : SAS fondée par Loukou GNAMIAN, expert en maintenance technique, travaux et rénovation à Orléans. Notre histoire, nos valeurs, nos certifications.",
};

const valeurs = [
  {
    icon: CheckCircle,
    title: "Transparence",
    desc: "Pas de frais cachés, devis détaillé avant chaque intervention. Ce que vous voyez est ce que vous payez.",
  },
  {
    icon: Award,
    title: "Expertise",
    desc: "Multi-corps de métier : électricité, plomberie, menuiserie, maintenance. Une seule équipe pour tout gérer.",
  },
  {
    icon: Users,
    title: "Proximité",
    desc: "Basés à Orléans, nous connaissons le tissu local. Chaque client est suivi par un interlocuteur unique.",
  },
  {
    icon: MapPin,
    title: "Réactivité",
    desc: "Devis sous 24h, interventions rapides. Urgences traitées en priorité sur toute la France.",
  },
];

const certifications = [
  "Garantie décennale",
  "Assurance RC Pro",
  "Artisans qualifiés",
  "Matériaux certifiés NF",
  "Devis gratuit sous 24h",
  "Rapport d'intervention systématique",
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A6B] py-24 md:py-28">
        <Image
          src="https://images.unsplash.com/photo-1771918050103-57b5de00d960?w=1920&q=80"
          alt="Équipe BATIMTEC"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              L&apos;humain derrière<br />
              <span className="text-[#C9A84C]">BATIMTEC</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Une SAS fondée à Orléans, portée par des valeurs simples : honnêteté, réactivité et travail bien fait.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest">Notre histoire</span>
              </div>
              <h2 className="text-4xl font-black text-[#1B3A6B] mb-6 tracking-tight">
                Loukou GNAMIAN,<br />fondateur de BATIMTEC
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fort d'une solide expérience dans le bâtiment et les services multi-techniques,
                  <strong className="text-gray-800"> Loukou GNAMIAN</strong> fonde BATIMTEC SAS à Orléans
                  avec un constat simple : les propriétaires et gestionnaires de biens cherchent un
                  artisan de confiance, capable d'intervenir sur tous les corps de métier, avec des
                  prix transparents.
                </p>
                <p>
                  BATIMTEC est née de ce besoin. Pas de sous-traitants qui changent à chaque chantier,
                  pas de surprise sur la facture : des prix transparents,
                  une équipe stable, et un engagement sur les délais.
                </p>
                <p>
                  Implantée à <strong className="text-gray-800">Orléans (Centre-Val de Loire)</strong>,
                  la société intervient sur tout le territoire national, aussi bien pour des particuliers
                  que des professionnels, syndics, hôtels et collectivités.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Loukou GNAMIAN — Fondateur BATIMTEC"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/50 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[#C9A84C] rounded-2xl p-5 shadow-xl">
                  <p className="text-[#1B3A6B] font-black text-lg leading-none">Loukou</p>
                  <p className="text-[#1B3A6B]/70 text-sm font-medium">GNAMIAN</p>
                  <p className="text-[#1B3A6B]/60 text-xs mt-1">Fondateur & Gérant</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-[#f4f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A6B] tracking-tight">
              Nos engagements
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dde3ef] h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A6B] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <h3 className="font-bold text-[#1B3A6B] mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1B3A6B] mb-3">Garanties & certifications</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Chaque intervention est couverte et documentée. Vous avez nos engagements par écrit.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((c) => (
              <ScrollReveal key={c} delay={0.05}>
                <div className="flex flex-col items-center text-center gap-3 bg-[#f4f6fb] rounded-2xl px-4 py-5 border border-[#dde3ef]">
                  <CheckCircle className="w-6 h-6 text-[#C9A84C] shrink-0" />
                  <span className="text-xs font-semibold text-[#1B3A6B] leading-snug">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A6B] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-4">Travaillons ensemble</h2>
          <p className="text-white/65 mb-10 text-lg">
            Devis gratuit sous 24h · Toute la France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold transition-colors border border-[#C9A84C]"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
