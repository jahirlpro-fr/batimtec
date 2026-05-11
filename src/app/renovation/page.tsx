import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle, ArrowRight, Phone, Home, PaintBucket, Layers, ChefHat, Droplets, Maximize } from "lucide-react";

export const metadata: Metadata = {
  title: "Rénovation — BATIMTEC",
  description:
    "Rénovation de sols, peinture, cuisine, salle de bain et agrandissement partout en France. Tarif transparent 38 €/h HT. Devis gratuit BATIMTEC sous 24h.",
};

const prestations = [
  {
    icon: Layers,
    title: "Sols & revêtements",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description:
      "Pose de parquet massif, stratifié, carrelage, vinyle et moquette. Ragréage, préparation des supports et finitions soignées.",
    items: [
      "Parquet massif & stratifié",
      "Carrelage & faïence",
      "Sol vinyle & LVT",
      "Moquette & moquette dalles",
      "Ragréage & préparation",
      "Plinthes & finitions",
    ],
  },
  {
    icon: PaintBucket,
    title: "Peinture & décoration",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    description:
      "Peinture intérieure et extérieure, enduits décoratifs, papiers peints haut de gamme. Transformation complète de l&apos;ambiance de vos espaces.",
    items: [
      "Peinture intérieure toutes surfaces",
      "Ravalement de façade",
      "Enduits & béton ciré",
      "Papiers peints & panoramiques",
      "Peinture sol & résine époxy",
      "Plafonds tendus",
    ],
  },
  {
    icon: ChefHat,
    title: "Cuisine",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    description:
      "Rénovation complète ou partielle de cuisine : pose de meubles, plan de travail, crédence, électroménager encastré, plomberie et électricité.",
    items: [
      "Pose de meubles cuisine",
      "Plan de travail & crédence",
      "Robinetterie & évier",
      "Électroménager encastré",
      "Carrelage & sol cuisine",
      "Hotte & ventilation",
    ],
  },
  {
    icon: Droplets,
    title: "Salle de bain",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description:
      "Rénovation de salle de bain clé en main : douche à l&apos;italienne, baignoire, faïence, meuble vasque, robinetterie et chauffage sèche-serviettes.",
    items: [
      "Douche à l'italienne",
      "Baignoire & balnéo",
      "Meuble vasque & miroir",
      "Faïence & carrelage",
      "Plomberie complète",
      "Sèche-serviettes & chauffage",
    ],
  },
  {
    icon: Maximize,
    title: "Agrandissement",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    description:
      "Extension de maison, véranda, surélévation, aménagement de combles ou de sous-sol. Etude de faisabilité et permis de construire.",
    items: [
      "Extension & véranda",
      "Aménagement de combles",
      "Surélévation & rehaussement",
      "Sous-sol & cave",
      "Permis de construire",
      "Maîtrise d'œuvre",
    ],
  },
];

const etapes = [
  { num: "01", titre: "Visite gratuite", desc: "Un expert se déplace pour évaluer votre projet et les contraintes techniques." },
  { num: "02", titre: "Devis sous 24h", desc: "Devis détaillé et transparent. Aucune surprise, aucun coût caché." },
  { num: "03", titre: "Planification", desc: "Planning de chantier défini en accord avec vos contraintes et disponibilités." },
  { num: "04", titre: "Réalisation", desc: "Nos artisans interviennent avec soin, dans le respect des délais et des normes." },
  { num: "05", titre: "Réception", desc: "Visite de réception avec vous pour valider les travaux. Levée des réserves assurée." },
];

export default function RenovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A6B] py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80"
          alt="Rénovation BATIMTEC"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/35 text-[#C9A84C] px-4 py-2 rounded-full text-sm font-semibold mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            Pôle Rénovation
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Sols, peinture, cuisine,<br />
            <span className="text-[#C9A84C]">salle de bain & agrandissement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            BATIMTEC transforme vos espaces avec des rénovations clé en main. Tarif unique{" "}
            <strong className="text-white">38 €/h HT</strong>. Devis gratuit sous{" "}
            <strong className="text-white">24h</strong>, partout en France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
            >
              Démarrer mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <ButtonAnchor
              href="tel:+33986669610"
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/10 font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
            </ButtonAnchor>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1B3A6B] mb-4">Nos 5 spécialités rénovation</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Des solutions complètes pour transformer votre habitat ou vos locaux professionnels.
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {prestations.map((p, i) => {
              const Icon = p.icon;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={p.title} delay={0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
                    <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden group">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A84C] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#1B3A6B]" />
                        </div>
                        <span className="text-white font-bold text-xl">{p.title}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-[#1B3A6B] mb-4">{p.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">{p.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {p.items.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 bg-blue-50 rounded-lg px-3 py-2.5">
                            <CheckCircle className="w-4 h-4 text-[#C9A84C] shrink-0" />
                            <span className="text-sm font-medium text-[#1B3A6B]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#1B3A6B] mb-3">Notre méthode</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Un accompagnement structuré de la visite à la réception.
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
                  <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A6B] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Home className="w-12 h-12 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">Prêt à rénover votre bien ?</h2>
          <p className="text-white/65 mb-10 text-lg">
            Visite gratuite · Devis sous 24h · 38 €/h HT · Toute la France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
            >
              Demander un devis gratuit
            </ButtonLink>
            <ButtonAnchor
              href="tel:+33986669610"
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/10"
            >
              <Phone className="mr-2 w-5 h-5" />
              09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
            </ButtonAnchor>
          </div>
        </div>
      </section>
    </>
  );
}
