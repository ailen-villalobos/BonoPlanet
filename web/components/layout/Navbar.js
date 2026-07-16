"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import config from "@/config"
import Logo from "@/components/Logo"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#2F5F3B]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm px-2 text-white" aria-label="Abrir menú">
              <Menu className="size-5" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-2 w-52 rounded-2xl border border-white/10 bg-[#1a2e1f] p-2 shadow-xl"
            >
              {config.landing.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-[#FFD238]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-white">
            <Logo className="size-8" variant="onGreen" />
            {config.brand.logoText}
          </Link>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {config.landing.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-[#FFD238]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {config.features.googleAuth && (
            <Link
              href={config.auth.loginUrl}
              className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white/50 sm:inline-flex"
            >
              Entrar
            </Link>
          )}
          <Link href="#waitlist" className="bp-btn-primary rounded-full px-5 py-2.5 text-sm font-semibold">
            {config.landing.hero.cta.label}
          </Link>
        </div>
      </nav>
    </header>
  )
}
