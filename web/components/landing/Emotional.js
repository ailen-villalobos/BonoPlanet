"use client"

import config from "@/config"
import { LandingSection } from "@/components/landing/ui"
import { IsotypeRing } from "@/components/landing/decorations"
import { MotionSection } from "@/components/landing/motion"

export default function Emotional() {
  const { title, tagline, body } = config.landing.emotional

  return (
    <LandingSection variant="warm" containerClass="max-w-3xl text-center">
      <IsotypeRing className="-right-12 top-4 size-40 text-[#2F5F3B]" opacity={0.05} />

      <MotionSection className="relative z-10">
        <h2 className="font-heading text-balance text-4xl font-bold leading-tight text-[#2F5F3B] md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="font-accent mt-4 text-2xl font-bold text-[#7E4B1F] md:text-3xl">{tagline}</p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2F5F3B]/75">{body}</p>
      </MotionSection>
    </LandingSection>
  )
}
