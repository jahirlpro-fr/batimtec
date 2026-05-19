import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales, politique de confidentialité et informations légales de BATIMTEC SAS.",
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: "1. Éditeur du site",
    content: `Raison sociale : BATIMTEC SAS
SIRET : 979 251 485 00012
Forme juridique : Société par Actions Simplifiée (SAS)
Siège social : 15 rue de l'Écu d'or, 45000 Orléans
Responsable de publication : Loukou GNAMIAN
Téléphone : 06 23 08 01 05
Mobile : 06 23 08 01 05
Email : contact@batimtec.com`,
  },
  {
    title: "2. Hébergement",
    content: `Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis — https://vercel.com`,
  },
  {
    title: "3. Propriété intellectuelle",
    content: `L'ensemble des contenus de ce site (textes, images, structure, code) sont la propriété exclusive de BATIMTEC SAS, sauf mention contraire.

Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable de BATIMTEC SAS est strictement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`,
  },
  {
    title: "4. Données personnelles et RGPD",
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants sur vos données personnelles :

• Droit d'accès (art. 15 RGPD)
• Droit de rectification (art. 16 RGPD)
• Droit à l'effacement / droit à l'oubli (art. 17 RGPD)
• Droit à la limitation du traitement (art. 18 RGPD)
• Droit d'opposition (art. 21 RGPD)
• Droit à la portabilité (art. 20 RGPD)

Responsable du traitement : Loukou GNAMIAN — contact@batimtec.com

Données collectées : les données saisies dans le formulaire de contact (nom, email, téléphone, message) sont utilisées exclusivement pour répondre à votre demande et ne sont ni cédées ni vendues à des tiers.

Durée de conservation : 3 ans à compter de la dernière interaction.

Pour exercer vos droits, contactez-nous à : contact@batimtec.com. En cas de réclamation non résolue, vous pouvez saisir la CNIL — https://www.cnil.fr`,
  },
  {
    title: "5. Cookies",
    content: `Ce site n'utilise pas de cookies publicitaires ou de traçage. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés. Aucun consentement n'est requis pour ces cookies (art. 82 de la loi Informatique et Libertés).`,
  },
  {
    title: "6. Liens hypertextes",
    content: `Ce site peut contenir des liens vers des sites tiers. BATIMTEC SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.`,
  },
  {
    title: "7. Limitation de responsabilité",
    content: `BATIMTEC SAS s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou la pertinence des informations à tout moment. BATIMTEC SAS se réserve le droit de modifier, corriger ou supprimer tout contenu sans préavis.`,
  },
  {
    title: "8. Droit applicable",
    content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents sont ceux du ressort de la Cour d'appel d'Orléans.`,
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A6B] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-3">Mentions légales</h1>
          <p className="text-white/60 text-sm">Dernière mise à jour : mai 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            {sections.map((section) => (
              <div key={section.title} className="p-8">
                <h2 className="text-lg font-black text-[#1B3A6B] mb-4">{section.title}</h2>
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
