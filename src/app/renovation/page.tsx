import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle, ArrowRight, Phone, Home, PaintBucket, Layers, ChefHat, Droplets, Maximize } from "lucide-react";

export const metadata: Metadata = {
  title: "Rénovation — BATIMTEC",
  description:
    "Rénovation de sols, peinture, cuisine, salle de bain et agrandissement partout en France. Devis gratuit BATIMTEC sous 24h.",
};

const prestations = [
  {
    slug: "sols",
    icon: Layers,
    title: "Sols & revêtements",
    image: "https://images.unsplash.com/photo-1548268364-3acee266b695?w=800&q=80",
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
    slug: "peinture",
    icon: PaintBucket,
    title: "Peinture & décoration",
    image: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?w=800&q=80",
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
    slug: "cuisine",
    icon: ChefHat,
    title: "Cuisine",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
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
    slug: "salle-de-bain",
    icon: Droplets,
    title: "Salle de bain",
    image: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?w=800&q=80",
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
    slug: "agrandissement",
    icon: Maximize,
    title: "Agrandissement",
    image: "https://images.unsplash.com/photo-1723468366036-c5598c8e9786?w=800&q=80",
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

export default function RenovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A6B] py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1689043528099-2ba014dd7c64?w=1920&q=80"
          alt="Rénovation BATIMTEC"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Sols, peinture, cuisine,<br />
            <span className="text-[#C9A84C]">salle de bain & agrandissement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            BATIMTEC transforme vos espaces avec des rénovations clé en main. Devis gratuit sous{" "}
            <strong className="text-white">24h</strong>, partout en France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold"
            >
              Démarrer mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <span className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors cursor-default select-all">
              <Phone className="w-5 h-5 shrink-0" />
              09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
            </span>
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
                <div key={p.title} id={p.slug} className="scroll-mt-20">
                <ScrollReveal delay={0.1}>
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A6B] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Home className="w-12 h-12 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">Prêt à rénover votre bien ?</h2>
          <p className="text-white/65 mb-10 text-lg">
            Visite gratuite · Devis sous 24h · Toute la France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold"
            >
              Demander un devis gratuit
            </ButtonLink>
            <span className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors cursor-default select-all">
              <Phone className="w-5 h-5 shrink-0" />
              09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
