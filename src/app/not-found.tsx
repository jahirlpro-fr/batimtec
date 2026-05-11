import { ButtonLink } from "@/components/ui/button-link";
import { HardHat, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-2xl bg-[#1B3A6B] flex items-center justify-center mx-auto mb-8">
          <HardHat className="w-8 h-8 text-[#C9A84C]" />
        </div>
        <div className="text-7xl font-black text-[#1B3A6B] mb-4">404</div>
        <h1 className="text-2xl font-black text-[#1B3A6B] mb-3">Page introuvable</h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil
          pour découvrir nos services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink
            href="/"
            size="lg"
            className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
          >
            <Home className="mr-2 w-5 h-5" />
            Retour à l&apos;accueil
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline">
            Nous contacter
            <ArrowRight className="ml-2 w-5 h-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
