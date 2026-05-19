import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle, ArrowRight, Phone, FileText, ClipboardCheck, Shield, Clock, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance de bâtiment — BATIMTEC",
  description:
    "BATIMTEC assure la maintenance de vos bâtiments : contrats multiservices, contrôles techniques réglementaires, passage commission de sécurité. Toute la France.",
};

const poles = [
  {
    slug: "contrats",
    icon: FileText,
    title: "Contrats de maintenance",
    image: "https://plus.unsplash.com/premium_photo-1681823361676-8c5c8ba4037e?w=800&q=80",
    description:
      "Contrats sur mesure pour la maintenance préventive et curative de vos bâtiments. Un interlocuteur unique, un planning annuel, un budget maîtrisé.",
    items: [
      "Maintenance préventive programmée",
      "Maintenance curative réactive",
      "Contrat multiservices tout corps",
      "Rapport de visite mensuel",
      "Portail client en ligne",
      "Budget maîtrisé & prévisible",
    ],
  },
  {
    slug: "controles",
    icon: ClipboardCheck,
    title: "Contrôles techniques réglementaires",
    image: "https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?w=800&q=80",
    description:
      "Planification et suivi de l&apos;ensemble des contrôles réglementaires obligatoires : électricité, gaz, ascenseurs, installations de sécurité.",
    items: [
      "Vérification électrique périodique",
      "Contrôle installations gaz",
      "Suivi registre sécurité",
      "Contrôle extincteurs & BAES",
      "Vérification VMC & ventilation",
      "Contrôle portes coupe-feu",
    ],
  },
  {
    slug: "commission",
    icon: Shield,
    title: "Commission de sécurité",
    image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=800&q=80",
    description:
      "Préparation complète au passage de la commission de sécurité pour les ERP. Audit préalable, levée des non-conformités, accompagnement le jour J.",
    items: [
      "Audit préalable ERP",
      "Levée des non-conformités",
      "Mise à jour du registre de sécurité",
      "Plan d'évacuation & signalétique",
      "Formation du personnel",
      "Accompagnement commission",
    ],
  },
];

const formules = [
  {
    nom: "Préventive",
    couleur: "border-blue-200",
    description: "Visites régulières programmées pour prévenir les pannes et garantir la conformité.",
    avantages: [
      "Planning annuel d'interventions",
      "Rapport de visite détaillé",
      "Traçabilité complète",
      "Alertes proactives",
    ],
    highlight: false,
  },
  {
    nom: "Globale",
    couleur: "border-[#C9A84C]",
    description: "La formule complète : préventif + curatif + suivi réglementaire en un seul contrat.",
    avantages: [
      "Tout inclus préventif & curatif",
      "Suivi réglementaire complet",
      "Interlocuteur unique dédié",
      "Budget maîtrisé & forfaitaire",
    ],
    highlight: true,
  },
  {
    nom: "Curative",
    couleur: "border-blue-200",
    description: "Interventions réactives dès qu'une panne ou défaillance est signalée.",
    avantages: [
      "Astreinte 24h/24 – 7j/7",
      "Délai d'intervention < 4h",
      "Techniciens qualifiés",
      "Rapport d'intervention",
    ],
    highlight: false,
  },
];

const chiffres = [
  { icon: Clock, valeur: "24h", label: "Délai d'intervention max" },
  { icon: Bell, valeur: "24/7", label: "Astreinte disponible" },
  { icon: CheckCircle, valeur: "500+", label: "Chantiers réalisés" },
];

export default function MaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A6B] py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
          alt="Maintenance bâtiment BATIMTEC"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Contrats, contrôles techniques<br />
            <span className="text-[#C9A84C]">& commission de sécurité</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            BATIMTEC assure la maintenance complète de vos bâtiments et vous accompagne
            dans tous vos contrôles réglementaires. Devis gratuit sous{" "}
            <strong className="text-white">24h</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold"
            >
              Demander un contrat
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <a href="tel:+33623080105" className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors">
              <Phone className="w-5 h-5 shrink-0" />
              06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
            </a>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="bg-white border-b py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {chiffres.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div className="text-3xl font-black text-[#1B3A6B] mb-1">{c.valeur}</div>
                  <div className="text-sm text-gray-500">{c.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 pôles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1B3A6B] mb-4">Nos 3 spécialités maintenance</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Une offre complète pour tous types de bâtiments, en Centre-Val de Loire et toute la France.
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {poles.map((pole, i) => {
              const Icon = pole.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={pole.title} id={pole.slug} className="scroll-mt-20">
                <ScrollReveal delay={0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
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
                        <span className="text-white font-bold text-lg leading-tight max-w-xs">{pole.title}</span>
                      </div>
                    </div>

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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section id="interventions" className="scroll-mt-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#1B3A6B] mb-3">Choisissez votre formule</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Des contrats adaptés à la taille et aux besoins de votre bâtiment.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formules.map((f) => (
              <ScrollReveal key={f.nom} delay={0.1}>
                <div className={`relative bg-white rounded-2xl border-2 ${f.couleur} p-8 ${f.highlight ? "shadow-xl ring-2 ring-[#C9A84C]/20" : "shadow-sm"}`}>
                  {f.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#C9A84C] text-[#1B3A6B] text-xs font-bold px-4 py-1.5 rounded-full">
                        Recommandée
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-black text-[#1B3A6B] mb-3">{f.nom}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{f.description}</p>
                  <ul className="space-y-3 mb-8">
                    {f.avantages.map((a) => (
                      <li key={a} className="flex items-center gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#C9A84C] shrink-0" />
                        <span className="font-medium text-[#1B3A6B]">{a}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/contact"
                    className="w-full justify-center font-semibold bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white transition-colors"
                  >
                    Demander un devis
                  </ButtonLink>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA urgence */}
      <section className="bg-[#1B3A6B] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Bell className="w-12 h-12 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">Urgence ou question ?</h2>
          <p className="text-white/65 mb-10 text-lg">
            Notre équipe répond sous 24h · Astreinte disponible pour les clients sous contrat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-bold transition-colors"
            >
              Nous contacter
            </ButtonLink>
            <a href="tel:+33623080105" className="flex items-center gap-2 text-base font-semibold text-white/80 hover:text-[#C9A84C] transition-colors">
              <Phone className="w-5 h-5 shrink-0" />
              06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
