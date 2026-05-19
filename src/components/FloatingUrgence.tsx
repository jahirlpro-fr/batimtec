import { Phone } from "lucide-react";

export default function FloatingUrgence() {
  return (
    <a
      href="tel:+33749345768"
      aria-label="Urgence 24h/7j — Appeler le 07 49 34 57 68"
      className="floating-urgence-btn fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 bg-[#991B1B] text-white rounded-full shadow-xl hover:bg-[#7f1d1d] transition-colors duration-200 px-4 py-3"
    >
      {/* Pulse indicator */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-300" />
      </span>
      <Phone className="w-4 h-4 shrink-0" />
      <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
        Urgence 24/7
      </span>
    </a>
  );
}
