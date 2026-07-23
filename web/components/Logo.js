"use client"

import Image from "next/image"
import config from "@/config"

export default function Logo({ className = "h-10 w-auto md:h-12" }) {
  if (!config.brand.logoSrc) return null

  return (
    <Image
      src={config.brand.logoSrc}
      alt=""
      width={48}
      height={56}
      unoptimized
      className={`object-contain ${className}`}
      priority
    />
  )
}
