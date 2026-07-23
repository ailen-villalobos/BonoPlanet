"use client"

import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { MotionItem, MotionStagger } from "@/components/landing/motion"

export default function FAQ() {
  const { eyebrow, title, items } = config.landing.faq

  return (
    <LandingSection id="faq" variant="light" containerClass="max-w-3xl">
      <MotionStagger>
        <MotionItem>
          <SectionHeading eyebrow={eyebrow} title={title} variant="default" />
        </MotionItem>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <MotionItem key={i}>
              <details className="group rounded-2xl border border-[#2F5F3B]/10 bg-white p-5 transition open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#2F5F3B]">
                  {item.q}
                  <span className="text-[#7E4B1F]/50 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#2F5F3B]/70">{item.a}</p>
              </details>
            </MotionItem>
          ))}
        </div>
      </MotionStagger>
    </LandingSection>
  )
}
