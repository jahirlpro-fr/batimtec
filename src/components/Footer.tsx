import Link from "next/link";
import { HardHat, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  { href: "/travaux", label: "Travaux du bâtiment" },
  { href: "/renovation", label: "Rénovation" },
  { href: "/maintenance", label: "Maintenance technique" },
  { href: "/contact", label: "Demander un devis" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/20">
                <HardHat className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight">BATIMTEC</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              Votre expert bâtiment en Centre-Val de Loire et toute la France.
              Travaux, rénovation, maintenance — tarif transparent à 38&nbsp;€/h&nbsp;HT.
            </p>
            <p className="text-white/40 text-xs">SIRET&nbsp;: 979&nbsp;251&nbsp;485&nbsp;00012</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">
              Nos services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-[#C9A84C] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A84C]" />
                <span>15 rue de l&apos;Écu d&apos;or<br />45000 Orléans</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <a href="tel:+33986669610" className="hover:text-[#C9A84C] transition-colors font-semibold">
                  09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <a href="tel:+33623080105" className="hover:text-[#C9A84C] transition-colors">
                  06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <a href="mailto:contact@batimtec.com" className="hover:text-[#C9A84C] transition-colors">
                  contact@batimtec.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <span>Lun – Ven : 8h – 18h · Sam : 9h–12h</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/15" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} BATIMTEC SAS — Loukou GNAMIAN. Tous droits réservés.</p>
          <p>Orléans, Centre-Val de Loire · Toute la France</p>
        </div>
      </div>
    </footer>
  );
}
