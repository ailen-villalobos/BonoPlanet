"use client"

import * as LucideIcons from "lucide-react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { LeafPattern, SoilTexture } from "@/components/landing/decorations"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

const BLOB_STYLES = [
  "bg-[#FFD238]/20 text-[#FFD238]",
  "bg-[#FBED8C]/15 text-[#FBED8C]",
  "bg-[#7E4B1F]/25 text-[#FBED8C]",
]

export default function Features() {
  const { eyebrow, title, subtitle, items } = config.landing.features

  return (
    <LandingSection id="features" variant="green">
      <SoilTexture />
      <div className="bp-leaf-pattern absolute inset-0 opacity-60" aria-hidden />
      <LeafPattern className="bottom-0 left-[10%] size-72 text-white" />

      <MotionStagger className="relative z-10">
        <MotionItem>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            variant="onGreen"
          />
        </MotionItem>

        <ul className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((item, i) => (
            <MotionCard key={item.title}>
              <li className="bp-card group h-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <div
                  className={`bp-icon-blob mb-6 group-hover:scale-110 ${BLOB_STYLES[i % BLOB_STYLES.length]}`}
                >
                  <Icon name={item.icon} className="size-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">{item.body}</p>
              </li>
            </MotionCard>
          ))}
        </ul>
      </MotionStagger>
    </LandingSection>
  )
}
