/** Forma orgánica tipo gota de agua — decoración de fondo. */
export function LeafPattern({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute opacity-[0.07] ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
    >
      <path
        d="M200 20C120 80 60 160 80 260C95 340 160 380 200 380C240 380 305 340 320 260C340 160 280 80 200 20Z"
        fill="currentColor"
      />
      <path
        d="M200 60C150 110 110 170 125 240C135 295 175 330 200 330C225 330 265 295 275 240C290 170 250 110 200 60Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  )
}

/** Pétalos escalonados del isotipo — patrón decorativo sutil (3–8% opacidad). */
export function PetalPattern({ className = "", opacity = 0.06 }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <circle
          key={deg}
          cx={100 + 72 * Math.cos((deg * Math.PI) / 180)}
          cy={100 + 72 * Math.sin((deg * Math.PI) / 180)}
          r="10"
          fill="currentColor"
        />
      ))}
      <circle cx="100" cy="100" r="52" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  )
}

/** Silueta circular orgánica del isotipo — solo contorno. */
export function IsotypeRing({ className = "", opacity = 0.05 }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full border border-current ${className}`}
      style={{ opacity }}
      aria-hidden
    />
  )
}

export function SoilTexture({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.04] ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden
    />
  )
}

export function OrganicBlob({ className = "", color = "#FFD238" }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} viewBox="0 0 200 200" aria-hidden>
      <path
        d="M45 95C25 55 65 15 110 25C155 35 185 75 175 120C165 165 125 195 80 185C35 175 15 135 45 95Z"
        fill={color}
        opacity="0.35"
      />
    </svg>
  )
}

export function FloatingDot({ className = "", size = 12, color = "#FFD238" }) {
  return (
    <span
      className={`bp-float pointer-events-none absolute rounded-full ${className}`}
      style={{ width: size, height: size, backgroundColor: color }}
      aria-hidden
    />
  )
}

export function CircleRing({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full border-2 border-[#7E4B1F]/20 ${className}`}
      aria-hidden
    />
  )
}

export function ProductVisual({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[#FFD238]/20 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#3d7350] to-[#1f3d28] p-8 shadow-2xl shadow-black/25 md:p-12">
        <div className="absolute inset-0 bp-hero-shine opacity-40" aria-hidden />

        <div className="relative flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative flex-1">
            <div className="aspect-square max-w-sm rounded-[1.75rem] bg-[#FBED8C]/15 p-8 backdrop-blur-sm">
              <svg viewBox="0 0 200 200" className="h-full w-full" aria-label="Bono Tabs">
                <defs>
                  <linearGradient id="tabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD238" />
                    <stop offset="100%" stopColor="#c9a82a" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="155" rx="55" ry="12" fill="#1a2e1f" opacity="0.3" />
                <rect x="55" y="45" width="90" height="100" rx="28" fill="url(#tabGrad)" />
                <rect x="65" y="55" width="70" height="80" rx="22" fill="#2F5F3B" opacity="0.15" />
                <path
                  d="M100 70 C85 95 80 115 100 130 C120 115 115 95 100 70Z"
                  fill="#2F5F3B"
                  opacity="0.6"
                />
                <circle cx="130" cy="65" r="8" fill="#7E4B1F" opacity="0.5" />
                <circle cx="70" cy="120" r="5" fill="#FBED8C" opacity="0.7" />
              </svg>
            </div>
            <FloatingDot className="right-4 top-8" size={14} color="#FFD238" />
            <FloatingDot className="bottom-12 left-0" size={8} color="#FBED8C" />
          </div>

          <div className="flex-1 space-y-4 text-white">
            <span className="inline-flex rounded-full bg-[#FFD238] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2F5F3B]">
              Bono Tabs
            </span>
            <p className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Una tableta.
              <br />
              Dos meses de nutrición.
            </p>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              Materia orgánica recuperada con liberación lenta y retención de agua. Nutrición natural
              en formato compacto.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Liberación lenta", "Hecho en México", "Retiene agua"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#7E4B1F]/40 bg-[#7E4B1F]/20 px-3 py-1 text-xs font-medium text-[#FBED8C]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}