import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis gratuit — BATIMTEC",
  description:
    "Contactez BATIMTEC pour un devis gratuit sous 24h. Mobile : 06 23 08 01 05 · contact@batimtec.com",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
