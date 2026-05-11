import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis gratuit — BATIMTEC",
  description:
    "Contactez BATIMTEC à Orléans pour un devis gratuit sous 24h. Tél : 09 86 66 96 10 · Mobile : 06 23 08 01 05 · contact@batimtec.com",
};

const infos = [
  {
    icon: MapPin,
    titre: "Adresse",
    contenu: "15 rue de l'Écu d'or\n45000 Orléans",
    href: "https://maps.google.com/?q=15+rue+de+l+Ecu+d+or+45000+Orléans",
  },
  {
    icon: Phone,
    titre: "Téléphone fixe",
    contenu: "09 86 66 96 10",
    href: "tel:+33986669610",
  },
  {
    icon: Phone,
    titre: "Mobile",
    contenu: "06 23 08 01 05",
    href: "tel:+33623080105",
  },
  {
    icon: Mail,
    titre: "Email",
    contenu: "contact@batimtec.com",
    href: "mailto:contact@batimtec.com",
  },
  {
    icon: Clock,
    titre: "Horaires",
    contenu: "Lun – Ven : 8h – 18h\nSam : 9h – 12h",
    href: null,
  },
  {
    icon: Building,
    titre: "SIRET",
    contenu: "979 251 485 00012",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/35 text-[#C9A84C] px-4 py-2 rounded-full text-sm font-semibold mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            Contact
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 max-w-2xl leading-tight">
            Devis gratuit<br />
            <span className="text-[#C9A84C]">sous 24h</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Remplissez le formulaire ou appelez-nous directement. Loukou GNAMIAN et son équipe
            vous répondent sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Coordonnées */}
            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#1B3A6B] mb-6">Nos coordonnées</h2>
              {infos.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.titre} className="border-0 shadow-sm">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                          {info.titre}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-semibold text-[#1B3A6B] hover:text-[#C9A84C] transition-colors whitespace-pre-line"
                            target={info.href.startsWith("https") ? "_blank" : undefined}
                            rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                          >
                            {info.contenu}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-[#1B3A6B] whitespace-pre-line">{info.contenu}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Urgence */}
              <Card className="border-0 shadow-sm mt-4 bg-[#1B3A6B] text-white overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/10 rounded-full -translate-y-8 translate-x-8" />
                  <p className="font-bold mb-1 text-[#C9A84C]">Urgence ?</p>
                  <p className="text-white/70 text-sm mb-4">
                    Appelez-nous directement — délai d&apos;intervention max 24h.
                  </p>
                  <a
                    href="tel:+33986669610"
                    className="flex items-center gap-2 text-lg font-black text-white hover:text-[#C9A84C] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
                  </a>
                  <a
                    href="tel:+33623080105"
                    className="flex items-center gap-2 text-base font-bold text-white/80 hover:text-[#C9A84C] transition-colors mt-2"
                  >
                    <Phone className="w-4 h-4" />
                    06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
