"use client"

import * as LucideIcons from "lucide-react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { LeafPattern } from "@/components/landing/decorations"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

const BLOB_STYLES = [
  "bg-[#7E4B1F]/15 text-[#7E4B1F]",
  "bg-[#2F5F3B]/10 text-[#2F5F3B]",
  "bg-[#FFD238]/20 text-[#7E4B1F]",
]

export default function Problem() {
  const { eyebrow, title, subtitle, items } = config.landing.problem

  return (
    <LandingSection id="problem" variant="warm">
      <LeafPattern className="-right-10 -top-10 size-56 text-[#2F5F3B]" />

      <MotionStagger className="relative z-10">
        <MotionItem>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} variant="onWarm" />
        </MotionItem>

        <ul className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((item, i) => (
            <MotionCard key={item.title}>
              <li className="bp-card bp-card-white h-full">
                <div
                  className={`bp-icon-blob mb-6 ${BLOB_STYLES[i % BLOB_STYLES.length]}`}
                >
                  <Icon name={item.icon} className="size-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#2F5F3B]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#2F5F3B]/70">{item.body}</p>
              </li>
            </MotionCard>
          ))}
        </ul>
      </MotionStagger>
    </LandingSection>
  )
}
