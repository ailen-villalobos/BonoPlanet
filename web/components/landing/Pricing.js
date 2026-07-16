"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import config from "@/config"
import { LandingSection, PrimaryButton, SectionHeading } from "@/components/landing/ui"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

function formatPrice(plan) {
  if (plan.price === 0) return "Gratis"
  if (plan.currency === "MXN") return `$${plan.price}`
  return `$${plan.price}`
}

export default function Pricing() {
  const { eyebrow, title, subtitle, plans } = config.pricing

  return (
    <LandingSection id="pricing" variant="light">
      <MotionStagger>
        <MotionItem>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} variant="default" />
        </MotionItem>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <MotionCard key={plan.id}>
              <div
                className={`bp-card relative flex h-full flex-col ${
                  plan.highlighted ? "bp-card-warm ring-2 ring-[#FFD238]/60" : "bp-card-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="font-accent absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FFD238] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2F5F3B]">
                    Más popular
                  </span>
                )}

                <h3 className="font-heading text-2xl font-bold text-[#2F5F3B]">{plan.name}</h3>
                <p className="mt-2 text-sm text-[#2F5F3B]/60">{plan.description}</p>

                <div className="mt-8 flex items-baseline gap-1.5">
                  <span className="font-heading text-5xl font-bold tracking-tight text-[#2F5F3B]">
                    {formatPrice(plan)}
                  </span>
                  {plan.price !== 0 && (
                    <span className="text-sm text-[#7E4B1F]">
                      {plan.currency} / {plan.interval}
                    </span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2F5F3B]/10">
                        <Check className="size-3 text-[#2F5F3B]" />
                      </span>
                      <span className="text-[#2F5F3B]/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.highlighted ? (
                  <PrimaryButton href="#waitlist" className="mt-10 w-full justify-center">
                    {plan.cta}
                  </PrimaryButton>
                ) : (
                  <Link
                    href="#waitlist"
                    className="font-accent mt-10 inline-flex w-full items-center justify-center rounded-full border-2 border-[#2F5F3B]/20 px-8 py-4 text-center font-semibold text-[#2F5F3B] transition hover:border-[#7E4B1F] hover:bg-[#7E4B1F]/5"
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </MotionCard>
          ))}
        </div>
      </MotionStagger>
    </LandingSection>
  )
}
