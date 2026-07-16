"use client"

import { useState } from "react"
import config from "@/config"
import { LandingSection, SectionHeading } from "@/components/landing/ui"
import { MotionSection } from "@/components/landing/motion"

export default function Waitlist() {
  const { eyebrow, title, subtitle, buttonLabel, placeholder, successMessage } =
    config.landing.waitlist

  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "No pudimos guardar tu correo.")
      }
      setStatus("success")
      setEmail("")
    } catch (err) {
      setError(err.message)
      setStatus("error")
    }
  }

  return (
    <LandingSection id="waitlist" variant="light" containerClass="max-w-2xl text-center">
      <MotionSection>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} variant="default" />

        {status === "success" ? (
          <div
            role="status"
            className="bp-card bp-card-warm mx-auto mt-12 max-w-md text-[#2F5F3B]"
          >
            <p className="font-heading text-lg font-bold">{successMessage}</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 rounded-full border-2 border-[#2F5F3B]/15 bg-white px-6 py-4 text-[#2F5F3B] outline-none transition placeholder:text-[#2F5F3B]/40 focus:border-[#7E4B1F]"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className="bp-btn-primary rounded-full px-8 py-4 font-semibold disabled:opacity-60"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando…" : buttonLabel}
            </button>
          </form>
        )}

        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )}
      </MotionSection>
    </LandingSection>
  )
}
