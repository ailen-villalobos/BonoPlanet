"use client"

import * as LucideIcons from "lucide-react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { IsotypeRing } from "@/components/landing/decorations"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

const BLOB_STYLES = [
  "bg-[#FFD238]/20 text-[#FFD238]",
  "bg-[#7E4B1F]/20 text-[#FBED8C]",
  "bg-[#FBED8C]/20 text-[#2F5F3B]",
  "bg-white/10 text-[#FFD238]",
]

export default function Features() {
  const { eyebrow, title, items } = config.landing.features

  return (
    <LandingSection id="features" variant="warm">
      <IsotypeRing className="-right-16 -top-16 size-56 text-[#2F5F3B]" opacity={0.04} />

      <MotionStagger className="relative z-10">
        <MotionItem>
          <SectionHeading eyebrow={eyebrow} title={title} variant="onWarm" />
        </MotionItem>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <MotionCard key={item.title}>
              <li className="bp-card bp-card-white group h-full">
                <div
                  className={`bp-icon-blob mb-5 group-hover:scale-110 ${BLOB_STYLES[i % BLOB_STYLES.length]}`}
                >
                  <Icon name={item.icon} className="size-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2F5F3B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2F5F3B]/70">{item.body}</p>
              </li>
            </MotionCard>
          ))}
        </ul>
      </MotionStagger>
    </LandingSection>
  )
}
