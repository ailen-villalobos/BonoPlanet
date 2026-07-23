"use client"

import * as LucideIcons from "lucide-react"
import config from "@/config"
import { BuyButton } from "@/components/landing/ui"
import {
  CircleRing,
  FloatingDot,
  LeafPattern,
  OrganicBlob,
  ProductVisual,
  SoilTexture,
} from "@/components/landing/decorations"
import { MotionParallax, MotionSection, MotionStagger, MotionItem } from "@/components/landing/motion"

function BenefitIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Square
  return <Icon className="size-5 shrink-0 text-[#FFD238]" />
}

export default function Hero() {
  const { title, tagline, description, benefits } = config.landing.hero
  const shop = config.landing.shop

  return (
    <section className="relative overflow-hidden bg-[#2F5F3B] text-white">
      <SoilTexture />
      <div className="bp-leaf-pattern absolute inset-0" aria-hidden />
      <LeafPattern className="left-[5%] top-[15%] size-48 text-white md:size-64" />
      <LeafPattern className="right-[8%] top-[40%] size-32 rotate-12 text-white" />
      <OrganicBlob className="right-[15%] top-[8%] size-40" color="#FFD238" />
      <OrganicBlob className="bottom-[20%] left-[3%] size-32" color="#7E4B1F" />
      <CircleRing className="right-[25%] top-[25%] size-24" />
      <FloatingDot className="left-[20%] top-[30%]" size={10} color="#FBED8C" />
      <FloatingDot className="right-[35%] top-[18%]" size={6} color="#FFD238" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionSection>
            <h1 className="font-heading text-balance text-6xl font-bold leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
              {title}
            </h1>

            <p className="font-accent mt-6 text-xl font-bold leading-snug text-[#FBED8C] md:text-2xl">
              {tagline}
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>

            <MotionStagger className="mt-10 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <MotionItem key={item.text}>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm">
                    <BenefitIcon name={item.icon} />
                    <span className="text-sm leading-snug text-white/90">{item.text}</span>
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>

            <div className="mt-10">
              <BuyButton href={shop.href} size="xl">
                {shop.label}
              </BuyButton>
            </div>
          </MotionSection>

          <MotionParallax className="lg:pt-4">
            <ProductVisual />
          </MotionParallax>
        </div>
      </div>
    </section>
  )
}
