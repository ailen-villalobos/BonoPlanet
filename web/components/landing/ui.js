import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Eyebrow({ children, variant = "default", className = "" }) {
  const styles = {
    default: "border-[#7E4B1F]/30 bg-[#7E4B1F]/10 text-[#7E4B1F]",
    onGreen: "border-white/20 bg-white/10 text-[#FBED8C]",
    onWarm: "border-[#7E4B1F]/25 bg-[#7E4B1F]/8 text-[#7E4B1F]",
    onDark: "border-[#FFD238]/30 bg-[#FFD238]/15 text-[#FFD238]",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, variant = "default", align = "center" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"
  const titleColor =
    variant === "onGreen" || variant === "onDark"
      ? "text-white"
      : variant === "onWarm"
        ? "text-[#2F5F3B]"
        : "text-[#2F5F3B]"
  const subtitleColor =
    variant === "onGreen" || variant === "onDark"
      ? "text-white/75"
      : "text-[#2F5F3B]/70"

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow variant={variant}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-heading mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-accent mt-5 text-lg leading-relaxed md:text-xl ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  )
}

export function PrimaryButton({ href, children, className = "", size = "lg" }) {
  const sizeClass = size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"

  return (
    <Link
      href={href}
      className={`bp-btn-primary group font-accent inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${sizeClass} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

export function SecondaryButton({ href, children, variant = "onGreen", className = "", size = "lg" }) {
  const sizeClass = size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"
  const variantClass =
    variant === "onGreen"
      ? "border-white/40 text-white hover:border-white hover:bg-white/10"
      : variant === "onDark"
        ? "border-white/35 text-white hover:border-[#FFD238] hover:text-[#FFD238]"
        : "border-[#2F5F3B]/25 text-[#2F5F3B] hover:border-[#7E4B1F] hover:bg-[#7E4B1F]/5"

  return (
    <Link
      href={href}
      className={`font-accent inline-flex items-center justify-center gap-2 rounded-full border-2 bg-transparent font-semibold backdrop-blur-sm transition ${sizeClass} ${variantClass} ${className}`}
    >
      {children}
    </Link>
  )
}

export function LandingSection({
  id,
  children,
  variant = "green",
  className = "",
  containerClass = "",
}) {
  const variants = {
    green: "bp-section-green",
    warm: "bp-section-warm",
    dark: "bp-section-dark",
    light: "bp-section-light",
  }

  return (
    <section id={id} className={`relative overflow-hidden py-24 md:py-32 lg:py-36 ${variants[variant]} ${className}`}>
      <div className={`relative z-10 mx-auto max-w-7xl px-5 md:px-8 ${containerClass}`}>{children}</div>
    </section>
  )
}
