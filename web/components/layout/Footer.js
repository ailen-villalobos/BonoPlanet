import Link from "next/link"
import config from "@/config"
import Logo from "@/components/Logo"
import { LeafPattern, SoilTexture } from "@/components/landing/decorations"

function FooterLink({ link, className }) {
  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {link.label}
    </Link>
  )
}

export default function Footer() {
  const { tagline, columns = [] } = config.landing.footer

  return (
    <footer className="relative overflow-hidden bg-[#2F5F3B] text-white">
      <SoilTexture />
      <LeafPattern className="-left-20 top-10 size-80 text-white" />
      <LeafPattern className="-right-16 bottom-0 size-64 rotate-45 text-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="size-9" variant="onGreen" />
              <span className="font-heading text-xl font-bold">{config.brand.logoText}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{tagline}</p>
            <div className="mt-6 inline-flex rounded-full border border-[#7E4B1F]/40 bg-[#7E4B1F]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FBED8C]">
              Innovación mexicana
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold uppercase tracking-wider text-[#FFD238]">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      link={link}
                      className="text-sm text-white/60 transition hover:text-[#FBED8C]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {config.brand.logoText}. Todos los derechos reservados.
          </span>
          <span>Economía circular · Tecnología regenerativa</span>
        </div>
      </div>
    </footer>
  )
}
