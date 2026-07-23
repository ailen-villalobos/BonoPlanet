"use client"

import * as LucideIcons from "lucide-react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { IsotypeRing, OrganicBlob, SoilTexture } from "@/components/landing/decorations"
import { MotionCard, MotionItem, MotionStagger } from "@/components/landing/motion"

function StepIcon({ name, className }) {
  const Icon = LucideIcons[name] || LucideIcons.Square
  return <Icon className={className} />
}

const STEP_ACCENTS = [
  { blob: "bg-[#7E4B1F]/30 text-[#FBED8C]", ring: "border-[#7E4B1F]/50" },
  { blob: "bg-[#2F5F3B]/40 text-[#FBED8C]", ring: "border-[#2F5F3B]/60" },
  { blob: "bg-[#FFD238]/20 text-[#FFD238]", ring: "border-[#FFD238]/40" },
  { blob: "bg-white/10 text-white", ring: "border-white/20" },
  { blob: "bg-[#FFD238]/15 text-[#FFD238]", ring: "border-[#FFD238]/30" },
]

export default function CircularEconomy() {
  const { eyebrow, title, description, flow } = config.landing.circularEconomy

  return (
    <LandingSection id="circular" variant="dark">
      <SoilTexture />
      <OrganicBlob className="right-[5%] top-[10%] size-64" color="#2F5F3B" />
      <OrganicBlob className="bottom-[10%] left-[5%] size-48" color="#7E4B1F" />
      <IsotypeRing className="right-0 top-1/2 size-72 -translate-y-1/2 text-white" opacity={0.04} />

      <MotionStagger className="relative z-10">
        <MotionItem>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={description}
            variant="onDark"
          />
        </MotionItem>

        {/* Desktop: recorrido en serpiente (→ → → ↓ ← ←) */}
        <MotionItem>
          <div className="mx-auto mt-16 hidden max-w-6xl lg:block">
            <div className="flex items-stretch gap-3">
              {flow.slice(0, 3).map((step, i) => (
                <div key={step.title} className="flex flex-1 items-center gap-3">
                  <FlowCard step={step} index={i} />
                  {i < 2 && (
                    <LucideIcons.ArrowRight className="size-5 shrink-0 text-[#FFD238]/50" aria-hidden />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end py-3 pr-[16%]" aria-hidden>
              <LucideIcons.ArrowDown className="size-6 text-[#FFD238]/50" />
            </div>

            <div className="flex items-stretch justify-end gap-3">
              {[...flow.slice(3)].reverse().map((step, i) => (
                <div key={step.title} className="flex w-[31%] items-center gap-3">
                  {i > 0 && (
                    <LucideIcons.ArrowLeft className="size-5 shrink-0 text-[#FFD238]/50" aria-hidden />
                  )}
                  <FlowCard step={step} index={i + 3} />
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-[#FFD238]/40">
              Economía circular · México
            </p>
          </div>
        </MotionItem>

        {/* Mobile / tablet: timeline vertical con gradiente */}
        <MotionItem>
          <div className="relative mx-auto mt-16 max-w-lg lg:hidden">
            <div
              className="absolute bottom-4 left-[1.125rem] top-4 w-0.5 bg-gradient-to-b from-[#7E4B1F] via-[#2F5F3B] to-[#FFD238]"
              aria-hidden
            />
            <ol className="space-y-6">
              {flow.map((step, i) => (
                <MotionCard key={step.title}>
                  <li className="relative pl-14">
                    <span
                      className={`absolute left-2 top-6 size-4 rounded-full border-2 bg-[#1a2e1f] ${STEP_ACCENTS[i].ring}`}
                      aria-hidden
                    />
                    <FlowCard step={step} index={i} />
                  </li>
                </MotionCard>
              ))}
            </ol>
          </div>
        </MotionItem>
      </MotionStagger>
    </LandingSection>
  )
}

function FlowCard({ step, index, className = "" }) {
  const accent = STEP_ACCENTS[index % STEP_ACCENTS.length]

  return (
    <div
      className={`group h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#FFD238]/30 hover:bg-white/[0.08] ${className}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-110 ${accent.blob}`}
        >
          <StepIcon name={step.icon} className="size-6" />
        </div>
        <div className="min-w-0 text-left">
          <p className="font-heading text-base font-bold text-white">{step.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/65">{step.body}</p>
        </div>
      </div>
    </div>
  )
}
