"use client"

import * as LucideIcons from "lucide-react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

export default function HowItWorks() {
  const { eyebrow, title, steps, note } = config.landing.howItWorks

  return (
    <LandingSection id="how-it-works" variant="light">
      <MotionStagger>
        <MotionItem>
          <SectionHeading eyebrow={eyebrow} title={title} variant="default" />
        </MotionItem>

        <ol className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <MotionCard key={step.title}>
              <li className="bp-card bp-card-white relative h-full text-center">
                <span className="font-heading absolute -top-4 left-1/2 inline-flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#FFD238] text-lg font-bold text-[#2F5F3B]">
                  {i + 1}
                </span>
                <div className="bp-icon-blob mx-auto mb-5 mt-4 bg-[#2F5F3B]/10 text-[#2F5F3B]">
                  <Icon name={step.icon} className="size-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#2F5F3B]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2F5F3B]/70">{step.body}</p>
              </li>
            </MotionCard>
          ))}
        </ol>

        {note && (
          <MotionItem>
            <p className="mx-auto mt-12 max-w-lg text-center text-sm italic text-[#7E4B1F]/80 md:text-base">
              {note}
            </p>
          </MotionItem>
        )}
      </MotionStagger>
    </LandingSection>
  )
}
