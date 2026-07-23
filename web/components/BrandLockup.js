import config from "@/config"
import Logo from "@/components/Logo"

export default function BrandLockup({
  logoClassName = "h-10 w-auto md:h-12",
  wordmarkClassName = "text-white",
  gapClassName = "gap-3",
}) {
  const wordmark = config.brand.wordmark || config.brand.logoText.toUpperCase()

  return (
    <span className={`inline-flex items-center ${gapClassName}`}>
      <Logo className={logoClassName} />
      <span
        className={`font-heading text-sm font-bold uppercase tracking-[0.16em] md:text-base ${wordmarkClassName}`}
      >
        {wordmark}
      </span>
    </span>
  )
}
