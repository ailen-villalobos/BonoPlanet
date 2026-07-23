"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import config from "@/config"
import BrandLockup from "@/components/BrandLockup"
import { BuyButton } from "@/components/landing/ui"

export default function Navbar() {
  const shop = config.landing.shop

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
              <li>
                <a
                  href={shop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FFD238] hover:text-[#FFD238]"
                >
                  {shop.label}
                </a>
              </li>
            </ul>
          </div>

          <Link href="/" className="transition-opacity hover:opacity-90">
            <BrandLockup />
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
          <BuyButton href={shop.href} size="sm" className="shadow-md">
            {shop.label}
          </BuyButton>
        </div>
      </nav>
    </header>
  )
}
