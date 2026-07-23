import { NextResponse, after } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendWaitlistConfirm } from "@/lib/resend/send"

// Inserta el email en la tabla `waitlist` de Supabase.
// La policy RLS permite insert anónimo (ver migration 007).
// Si el correo ya existe (unique), lo tratamos como éxito.
export async function POST(request) {
  try {
    const { email, source: rawSource } = await request.json()

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 })
    }

    const normalized = email.toLowerCase().trim()
    const source =
      typeof rawSource === "string" && rawSource.trim() ? rawSource.trim().slice(0, 64) : "landing"
    const supabase = await createClient()
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: normalized, source })

    // 23505 = unique_violation → el correo ya estaba en la lista.
    if (error && error.code !== "23505") {
      console.error("[waitlist] insert error:", error.message)
      return NextResponse.json(
        { error: "No pudimos guardar tu correo." },
        { status: 500 }
      )
    }

    // Manda la confirmación solo si es un alta nueva. Best-effort,
    // después de responder (no bloquea la UI). No-op si Resend está off.
    if (!error) {
      after(() => sendWaitlistConfirm(normalized))
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    )
  }
}
