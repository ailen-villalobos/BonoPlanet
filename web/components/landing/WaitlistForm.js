"use client"

import { useState } from "react"

export default function WaitlistForm({
  placeholder = "Ingresa tu email aquí",
  buttonLabel = "Registrarme",
  successMessage = "¡Listo! Te avisaremos pronto.",
  source = "landing",
  variant = "light",
  className = "",
}) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const isGreen = variant === "green"

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
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

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-2xl border px-6 py-4 text-center ${
          isGreen
            ? "border-white/20 bg-white/10 text-white"
            : "bp-card bp-card-warm text-[#2F5F3B]"
        } ${className}`}
      >
        <p className={`font-heading text-lg font-bold ${isGreen ? "" : ""}`}>{successMessage}</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <form
        onSubmit={onSubmit}
        className={`flex flex-col gap-3 ${isGreen ? "sm:flex-row sm:items-stretch" : "sm:flex-row"}`}
      >
        <label htmlFor={`waitlist-email-${source}`} className="sr-only">
          Correo electrónico
        </label>
        <input
          id={`waitlist-email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={
            isGreen
              ? "min-w-0 flex-1 rounded-full border-2 border-white/25 bg-white/10 px-6 py-4 text-white outline-none transition placeholder:text-white/50 focus:border-[#FFD238] focus:bg-white/15"
              : "flex-1 rounded-full border-2 border-[#2F5F3B]/15 bg-white px-6 py-4 text-[#2F5F3B] outline-none transition placeholder:text-[#2F5F3B]/40 focus:border-[#7E4B1F]"
          }
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className={
            isGreen
              ? "bp-btn-primary font-accent shrink-0 rounded-full px-8 py-4 font-bold uppercase tracking-wide disabled:opacity-60"
              : "bp-btn-primary rounded-full px-8 py-4 font-semibold disabled:opacity-60"
          }
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando…" : buttonLabel}
        </button>
      </form>

      {status === "error" && (
        <p role="alert" className={`mt-4 text-sm ${isGreen ? "text-[#FFD238]" : "text-red-600"}`}>
          {error}
        </p>
      )}
    </div>
  )
}
