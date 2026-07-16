"use client"

import { Star } from "lucide-react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { OrganicBlob } from "@/components/landing/decorations"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

export default function Testimonials() {
  const { eyebrow, title, subtitle, items } = config.landing.testimonials
  const socialProof = config.landing.socialProof

  return (
    <LandingSection variant="dark">
      <OrganicBlob className="right-[5%] top-[10%] size-48" color="#2F5F3B" />
      <OrganicBlob className="bottom-[15%] left-[8%] size-36" color="#7E4B1F" />

      <MotionStagger className="relative z-10">
        <MotionItem>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            variant="onDark"
          />
        </MotionItem>

        <ul className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <MotionCard key={item.author}>
              <li className="bp-card flex h-full flex-col border border-white/8 bg-white/5 backdrop-blur-sm">
                <div className="flex gap-0.5 text-[#FFD238]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/80">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#FFD238]/20 font-heading text-sm font-bold text-[#FFD238]"
                    aria-hidden
                  >
                    {item.author.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="text-sm text-white/50">{item.role}</p>
                  </div>
                </div>
              </li>
            </MotionCard>
          ))}
        </ul>

        {socialProof && (
          <MotionItem>
            <div className="mt-20 text-center">
              <p className="text-sm uppercase tracking-wider text-white/50">{socialProof.text}</p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {socialProof.logos.map((logo) => (
                  <li
                    key={logo}
                    className="rounded-full border border-[#7E4B1F]/30 bg-[#7E4B1F]/15 px-5 py-2 text-sm font-semibold text-[#FBED8C]"
                  >
                    {logo}
                  </li>
                ))}
              </ul>
            </div>
          </MotionItem>
        )}
      </MotionStagger>
    </LandingSection>
  )
}
