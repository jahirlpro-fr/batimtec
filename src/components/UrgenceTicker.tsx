export default function UrgenceTicker() {
  return (
    <div
      className="sticky top-0 z-[70] bg-[#991B1B] overflow-hidden"
      style={{ height: 32 }}
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
            <span>
              Astreinte&nbsp;:{" "}
              <a
                href="tel:+33623080105"
                className="font-bold hover:underline underline-offset-2 decoration-white/60"
              >
                06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
              </a>
            </span>
            <span className="opacity-40">·</span>
            <span>Intervention rapide</span>
            <span className="opacity-40">·</span>
            <span>Partout en France</span>
            <span className="opacity-40">·</span>
            <span>Dépannage sous 24h</span>
            <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
