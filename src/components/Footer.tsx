import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  { href: "/travaux", label: "Travaux du bâtiment" },
  { href: "/renovation", label: "Rénovation" },
  { href: "/maintenance", label: "Maintenance technique" },
  { href: "/cvc", label: "CVC — Chauffage & Clim" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Demander un devis" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo-c-Batimtec.png"
                alt="BATIMTEC"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              Votre expert bâtiment en Centre-Val de Loire et toute la France.
              Travaux, rénovation, maintenance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">
              Navigation
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
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <a href="tel:+33623080105" className="hover:text-[#C9A84C] transition-colors font-semibold">
                  06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <a href="tel:+33749345768" className="hover:text-[#C9A84C] transition-colors">
                  07&nbsp;49&nbsp;34&nbsp;57&nbsp;68
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                <a href="mailto:contact@batimtec.com" className="hover:text-[#C9A84C] transition-colors">
                  contact@batimtec.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/15" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} BATIMTEC SAS — Loukou GNAMIAN. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <span>·</span>
            <span>Orléans, Centre-Val de Loire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
