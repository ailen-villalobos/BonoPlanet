"use client"

import config from "@/config"
import { LandingSection, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/landing/ui"
import { CircleRing, FloatingDot, OrganicBlob, SoilTexture } from "@/components/landing/decorations"
import { MotionSection } from "@/components/landing/motion"

export default function FinalCta() {
  const { eyebrow, title, subtitle, cta, ctaSecondary } = config.landing.finalCta

  return (
    <LandingSection variant="green" containerClass="max-w-4xl text-center">
      <SoilTexture />
      <div className="bp-leaf-pattern absolute inset-0" aria-hidden />
      <OrganicBlob className="left-[10%] top-[20%] size-40" color="#FFD238" />
      <CircleRing className="right-[15%] top-[30%] size-32 border-white/15" />
      <FloatingDot className="bottom-[25%] right-[20%]" size={8} color="#FBED8C" />

      <MotionSection className="relative z-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          variant="onGreen"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
          {ctaSecondary && (
            <SecondaryButton href={ctaSecondary.href} variant="onGreen">
              {ctaSecondary.label}
            </SecondaryButton>
          )}
        </div>
      </MotionSection>
    </LandingSection>
  )
}
