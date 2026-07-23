"use client"

import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { MotionSection } from "@/components/landing/motion"
import WaitlistForm from "@/components/landing/WaitlistForm"

export default function Waitlist() {
  const { eyebrow, title, subtitle, buttonLabel, placeholder, successMessage } =
    config.landing.waitlist

  return (
    <LandingSection id="waitlist" variant="light" containerClass="max-w-2xl text-center">
      <MotionSection>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} variant="default" />

        <WaitlistForm
          className="mx-auto mt-12 max-w-lg"
          placeholder={placeholder}
          buttonLabel={buttonLabel}
          successMessage={successMessage}
          source="landing"
          variant="light"
        />
      </MotionSection>
    </LandingSection>
  )
}
