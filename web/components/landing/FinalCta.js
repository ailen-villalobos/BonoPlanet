"use client"

import config from "@/config"
import { BuyButton, LandingSection } from "@/components/landing/ui"
import { CircleRing, FloatingDot, OrganicBlob, SoilTexture } from "@/components/landing/decorations"
import { MotionSection } from "@/components/landing/motion"
import WaitlistForm from "@/components/landing/WaitlistForm"

export default function FinalCta() {
  const { title, subtitle, signup } = config.landing.finalCta
  const shop = config.landing.shop

  return (
    <LandingSection id="buy" variant="green" containerClass="max-w-3xl text-center">
      <SoilTexture />
      <div className="bp-petal-pattern absolute inset-0" aria-hidden />
      <OrganicBlob className="left-[10%] top-[20%] size-40" color="#FFD238" />
      <CircleRing className="right-[15%] top-[30%] size-32 border-white/15" />
      <FloatingDot className="bottom-[25%] right-[20%]" size={8} color="#FBED8C" />

      <MotionSection className="relative z-10">
        <h2 className="font-heading text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="font-accent mx-auto mt-5 max-w-lg text-lg text-white/75 md:text-xl">{subtitle}</p>

        <div className="mt-10 flex justify-center">
          <BuyButton href={shop.href} size="xl">
            {shop.label}
          </BuyButton>
        </div>

        {signup && (
          <div className="mt-14 border-t border-white/15 pt-10">
            <p className="font-accent text-lg text-white/85 md:text-xl">{signup.title}</p>
            <WaitlistForm
              className="mx-auto mt-6 max-w-lg"
              placeholder={signup.placeholder}
              buttonLabel={signup.buttonLabel}
              successMessage={signup.successMessage}
              source="final-cta"
              variant="green"
            />
          </div>
        )}
      </MotionSection>
    </LandingSection>
  )
}
