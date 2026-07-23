"use client"

import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { IsotypeRing } from "@/components/landing/decorations"
import { MotionSection } from "@/components/landing/motion"

export default function About() {
  const { eyebrow, title, body } = config.landing.about

  return (
    <LandingSection id="about" variant="light" containerClass="max-w-3xl">
      <IsotypeRing className="-left-16 bottom-0 size-52 text-[#2F5F3B]" opacity={0.04} />

      <MotionSection className="relative z-10">
        <SectionHeading eyebrow={eyebrow} title={title} variant="default" align="left" />
        <p className="mt-8 text-lg leading-relaxed text-[#2F5F3B]/75">{body}</p>
      </MotionSection>
    </LandingSection>
  )
}
