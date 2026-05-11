import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle, ArrowRight, Phone, Zap, Droplets, Hammer, Wrench, Settings, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Travaux du bâtiment — BATIMTEC",
  description:
    "BATIMTEC réalise tous vos travaux : électricité, plomberie, menuiserie, dépannage et multiservices. Tarif transparent 38 €/h HT. Devis gratuit sous 24h.",
};

const poles = [
  {
    icon: Zap,
    title: "Électricité",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    description:
      "Installation, mise aux normes NF C 15-100, remplacement de tableau électrique, prises, interrupteurs, éclairage LED, domotique, alarme.",
    items: [
      "Tableau électrique & disjoncteurs",
      "Mise aux normes NF C 15-100",
      "Câblage réseau & multimédia",
      "Éclairage & spots LED",
      "Domotique & alarme",
      "Diagnostic électrique",
    ],
  },
  {
    icon: Droplets,
    title: "Plomberie",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    description:
      "Entretien et installation de réseaux eau chaude/froide, sanitaires, robinetterie, chauffe-eau, dépannage urgent et traitement de fuites.",
    items: [
      "Réseaux eau chaude & froide",
      "Robinetterie & sanitaires",
      "Chauffe-eau & ballon thermodynamique",
      "Détection & réparation de fuites",
      "Débouchage canalisations",
      "Installation salle de bain",
    ],
  },
  {
    icon: Hammer,
    title: "Menuiserie",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "Pose et remplacement de portes, fenêtres, volets, parquet. Travaux d'aménagement intérieur, placards, cloisons et escaliers.",
    items: [
      "Portes & fenêtres PVC/alu/bois",
      "Volets roulants & battants",
      "Parquet & stratifié",
      "Placards & dressing sur mesure",
      "Escaliers & garde-corps",
      "Cloisons & faux-plafonds",
    ],
  },
  {
    icon: Wrench,
    title: "Dépannage",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description:
      "Intervention rapide sous 24h pour toute urgence : fuite, panne électrique, serrure, vitre cassée. Disponible partout en France.",
    items: [
      "Fuite d'eau urgente",
      "Panne électrique",
      "Serrurerie & vitrerie",
      "Chauffage en panne",
      "Dégâts des eaux",
      "Diagnostic & devis rapide",
    ],
  },
  {
    icon: Settings,
    title: "Multiservices",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    description:
      "Petits travaux, assemblage de meubles, fixation, peinture ponctuelle, nettoyage de fin de chantier. Un artisan polyvalent pour tout gérer.",
    items: [
      "Petits travaux & réparations",
      "Montage de meubles",
      "Fixations & accrochages",
      "Joints & étanchéité",
      "Peinture & retouches",
      "Nettoyage fin de chantier",
    ],
  },
];

const engagements = [
  "Devis gratuit sous 24h",
  "Tarif unique 38 €/h HT",
  "Artisans qualifiés & assurés",
  "Intervention toute la France",
  "Matériaux certifiés NF",
  "Garantie décennale",
  "Chantier propre & respect des délais",
  "Suivi client transparent",
];

export default function TravauxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A6B] py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Travaux BATIMTEC"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/35 text-[#C9A84C] px-4 py-2 rounded-full text-sm font-semibold mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            Pôle Travaux
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Électricité, plomberie,<br />
            <span className="text-[#C9A84C]">menuiserie & dépannage</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            BATIMTEC intervient sur tous corps de métier du bâtiment. Tarif transparent à{" "}
            <strong className="text-white">38 €/h HT</strong> — hors déplacement et fournitures.
            Devis gratuit sous <strong className="text-white">24h</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
            >
              Demander un devis gratuit
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

      {/* Pôles de compétences */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1B3A6B] mb-4">Nos 5 métiers</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Une expertise multi-corps pour prendre en charge l&apos;intégralité de vos chantiers.
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {poles.map((pole, i) => {
              const Icon = pole.icon;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={pole.title} delay={0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
                    {/* Image */}
                    <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden group">
                      <Image
                        src={pole.image}
                        alt={pole.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A84C] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#1B3A6B]" />
                        </div>
                        <span className="text-white font-bold text-xl">{pole.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-3xl font-black text-[#1B3A6B] mb-4">{pole.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">{pole.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {pole.items.map((item) => (
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

      {/* Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1B3A6B] mb-3">Nos engagements</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Des engagements clairs pour chaque intervention, partout en France.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <ScrollReveal key={e} delay={0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-4 shadow-sm border border-blue-50">
                  <CheckCircle className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <span className="text-sm font-semibold text-[#1B3A6B]">{e}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1B3A6B] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <HardHat className="w-12 h-12 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">Prêt à démarrer votre chantier ?</h2>
          <p className="text-white/65 mb-10 text-lg">
            Devis gratuit sous 24h · 38 €/h HT · Toute la France
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
