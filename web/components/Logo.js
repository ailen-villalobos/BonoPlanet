"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import config from "@/config"

const ENDPOINT =
  "http://127.0.0.1:7497/ingest/169cafa9-0af3-4053-8db7-f4215937c7e5"

export default function Logo({ className = "h-10 w-auto md:h-12" }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const log = (hypothesisId, message, data) => {
      // #region agent log
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "dbbaa4" },
        body: JSON.stringify({
          sessionId: "dbbaa4",
          runId: "verify-halo",
          hypothesisId,
          location: "Logo.js:useEffect",
          message,
          data,
          timestamp: Date.now(),
        }),
      }).catch(() => {})
      // #endregion
    }

    const inspect = () => {
      const styles = getComputedStyle(el)
      const nw = el.naturalWidth
      const nh = el.naturalHeight
      let cornerAlpha = null
      let centerAlpha = null
      let transparentCorners = 0

      if (nw > 0 && nh > 0) {
        const canvas = document.createElement("canvas")
        canvas.width = nw
        canvas.height = nh
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(el, 0, 0)
          const corners = [
            [0, 0],
            [nw - 1, 0],
            [0, nh - 1],
            [nw - 1, nh - 1],
          ]
          cornerAlpha = corners.map(([x, y]) => ctx.getImageData(x, y, 1, 1).data[3])
          transparentCorners = cornerAlpha.filter((a) => a < 10).length
          centerAlpha = ctx.getImageData(Math.floor(nw / 2), Math.floor(nh / 2), 1, 1).data[3]
        }
      }

      log("B", "Logo CSS styles", {
        src: config.brand.logoSrc,
        mixBlendMode: styles.mixBlendMode,
        backgroundColor: styles.backgroundColor,
        width: el.clientWidth,
        height: el.clientHeight,
      })
      log("C", "Logo loaded pixel alpha", {
        naturalWidth: nw,
        naturalHeight: nh,
        currentSrc: el.currentSrc?.slice(-40),
        cornerAlpha,
        transparentCorners,
        centerAlpha,
      })
    }

    if (el.complete) inspect()
    else el.addEventListener("load", inspect, { once: true })
  }, [])

  if (!config.brand.logoSrc) return null

  return (
    <Image
      ref={ref}
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
