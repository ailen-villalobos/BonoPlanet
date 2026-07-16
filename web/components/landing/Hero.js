"use client"

import config from "@/config"
import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/landing/ui"
import {
  CircleRing,
  FloatingDot,
  LeafPattern,
  OrganicBlob,
  ProductVisual,
  SoilTexture,
} from "@/components/landing/decorations"
import { MotionParallax, MotionSection } from "@/components/landing/motion"

export default function Hero() {
  const { eyebrow, title, subtitle, cta, ctaSecondary } = config.landing.hero

  return (
    <section className="relative overflow-hidden bg-[#2F5F3B] text-white">
      <SoilTexture />
      <div className="bp-leaf-pattern absolute inset-0" aria-hidden />
      <LeafPattern className="left-[5%] top-[15%] size-48 text-white md:size-64" />
      <LeafPattern className="right-[8%] top-[40%] size-32 rotate-12 text-white" />
      <OrganicBlob className="right-[15%] top-[8%] size-40" color="#FFD238" />
      <OrganicBlob className="bottom-[20%] left-[3%] size-32" color="#7E4B1F" />
      <CircleRing className="right-[25%] top-[25%] size-24" />
      <FloatingDot className="left-[20%] top-[30%]" size={10} color="#FBED8C" />
      <FloatingDot className="right-[35%] top-[18%]" size={6} color="#FFD238" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionSection>
            {eyebrow && (
              <div className="mb-8">
                <Eyebrow variant="onGreen">{eyebrow}</Eyebrow>
              </div>
            )}

            <h1 className="font-heading text-balance text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            <p className="font-accent mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
              {ctaSecondary && (
                <SecondaryButton href={ctaSecondary.href} variant="onGreen">
                  {ctaSecondary.label}
                </SecondaryButton>
              )}
            </div>

            <p className="mt-5 text-sm text-white/45">
              Acceso anticipado · Hecho en México · Cero plástico
            </p>
          </MotionSection>

          <MotionParallax>
            <ProductVisual />
          </MotionParallax>
        </div>
      </div>
    </section>
  )
}
