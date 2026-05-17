import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle, ArrowRight, Phone, Thermometer, Wind, Zap, Flame, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "CVC — Chauffage, Ventilation, Climatisation — BATIMTEC",
  description:
    "BATIMTEC installe et entretient vos équipements CVC : chaudière, VMC, climatisation, pompe à chaleur. Intervention en Centre-Val de Loire et toute la France. Devis gratuit sous 24h.",
};

const specialites = [
  {
    slug: "chauffage",
    icon: Flame,
    title: "Chauffage",
    image: "https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?w=800&q=80",
    description: "Installation et entretien de systèmes de chauffage central, plancher chauffant électrique ou hydraulique. Diagnostic thermique inclus.",
    items: [
      "Chaudière gaz, fioul, bois",
      "Plancher chauffant hydraulique",
      "Plancher chauffant électrique",
      "Radiateurs & convecteurs",
      "Entretien annuel obligatoire",
      "Dépannage express",
    ],
  },
  {
    slug: "ventilation",
    icon: Wind,
    title: "Ventilation",
    image: "https://plus.unsplash.com/premium_photo-1714875083906-e9771ecea92f?w=800&q=80",
    description: "Pose et maintenance de VMC simple ou double flux. Renouvellement d'air réglementaire pour logements, bureaux et ERP.",
    items: [
      "VMC simple flux autoréglable",
      "VMC double flux avec récupération",
      "Extraction cuisine et sanitaires",
      "Caisson de ventilation",
      "Nettoyage et entretien gaines",
      "Mise en conformité réglementaire",
    ],
  },
  {
    slug: "climatisation",
    icon: Zap,
    title: "Climatisation",
    image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?w=800&q=80",
    description: "Installation de systèmes de climatisation réversible : split, multi-split, gainable. Maintenance annuelle et rechargement de fluide frigorigène.",
    items: [
      "Split system mono et multi",
      "Climatisation gainable",
      "Climatisation réversible",
      "Maintenance annuelle",
      "Recharge fluide frigorigène",
      "Attestation d'aptitude",
    ],
  },
  {
    slug: "pac",
    icon: RefreshCw,
    title: "Pompe à chaleur",
    image: "https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?w=800&q=80",
    description: "Installation de PAC air/air et air/eau pour un chauffage économique et écologique. Éligible aux aides MaPrimeRénov' et CEE.",
    items: [
      "PAC air/air",
      "PAC air/eau",
      "Dimensionnement thermique",
      "Mise en service et réglages",
      "Contrat d'entretien annuel",
      "Aide MaPrimeRénov' possible",
    ],
  },
  {
    slug: "chaudiere",
    icon: Thermometer,
    title: "Chaudière",
    image: "https://plus.unsplash.com/premium_photo-1661921394349-9e3f394d80da?w=800&q=80",
    description: "Installation de chaudières à condensation gaz, fioul ou biomasse. Entretien annuel obligatoire et dépannage toutes marques.",
    items: [
      "Chaudière à condensation gaz",
      "Chaudière fioul",
      "Chaudière biomasse / bois",
      "Entretien annuel légal",
      "Dépannage toutes marques",
      "Remplacement brûleur",
    ],
  },
];


export default function CVCPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A6B] py-24 md:py-32">
        <Image
          src="https://plus.unsplash.com/premium_photo-1663047278323-ddc23b56c6a2?w=1920&q=80"
          alt="Installation CVC BATIMTEC"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Chauffage, Ventilation<br />
            <span className="text-[#C9A84C]">& Climatisation</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            BATIMTEC installe et entretient l&apos;ensemble de vos équipements CVC.
            Artisans qualifiés RGE, éligibilité aux aides de l&apos;État. Devis gratuit sous{" "}
            <strong className="text-white">24h</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold transition-colors"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <span className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors cursor-default select-all">
              <Phone className="w-5 h-5 shrink-0" />
              09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
            </span>
          </div>
        </div>
      </section>

      {/* Aides de l'état */}
      <section className="py-16 bg-[#f4f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1B3A6B] mb-3">Aides & subventions disponibles</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Plusieurs dispositifs peuvent réduire significativement le coût de vos travaux CVC.
              BATIMTEC vous accompagne dans vos démarches.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["MaPrimeRénov'", "CEE", "TVA à 5,5 %", "Éco-PTZ"].map((aide) => (
              <ScrollReveal key={aide} delay={0.05}>
                <div className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl px-4 py-5 border border-[#dde3ef] shadow-sm">
                  <CheckCircle className="w-6 h-6 text-[#C9A84C]" />
                  <span className="text-sm font-bold text-[#1B3A6B]">{aide}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1B3A6B] mb-4">Nos 5 spécialités CVC</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Du confort thermique à la qualité de l&apos;air, une offre complète pour particuliers,
              professionnels et collectivités.
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {specialites.map((spec, i) => {
              const Icon = spec.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={spec.title} id={spec.slug} className="scroll-mt-20">
                <ScrollReveal delay={0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
                    <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden group">
                      <Image
                        src={spec.image}
                        alt={spec.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A84C] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#1B3A6B]" />
                        </div>
                        <span className="text-white font-bold text-lg">{spec.title}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-[#1B3A6B] mb-4">{spec.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">{spec.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {spec.items.map((item) => (
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
          <h2 className="text-4xl font-black mb-4">Un projet CVC ?</h2>
          <p className="text-white/65 mb-10 text-lg">
            Devis gratuit sous 24h · Toute la France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
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
