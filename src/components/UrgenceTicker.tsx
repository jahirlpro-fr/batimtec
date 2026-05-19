export default function UrgenceTicker() {
  return (
    <div
      className="sticky top-0 z-[70] bg-[#991B1B] overflow-hidden"
      style={{ height: 32 }}
    >
      <a
        href="tel:+33749345768"
        className="block w-full h-full"
        aria-label="Urgence 24h/7j — Appeler le 07 49 34 57 68"
      >
        <div
          className="ticker-track text-white uppercase font-medium"
          style={{
            letterSpacing: "0.12em",
            fontSize: "clamp(11px, 1.8vw, 12px)",
            lineHeight: "32px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="inline-flex items-center gap-4 pr-16">
              <span>🔴 URGENCE 24h/7j</span>
              <span className="opacity-40">·</span>
              <span>Astreinte&nbsp;: 07&nbsp;49&nbsp;34&nbsp;57&nbsp;68</span>
              <span className="opacity-40">·</span>
              <span>Intervention rapide</span>
              <span className="opacity-40">·</span>
              <span>Dépannage sous 24h</span>
              <span className="opacity-40">·</span>
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}
