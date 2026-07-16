import "./globals.css"
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google"
import config from "@/config"

const headingFallback = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading-fallback",
  display: "swap",
})

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-fallback",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || config.app.defaultUrl
  ),
  title: {
    default: config.app.name,
    template: `%s · ${config.app.name}`,
  },
  description: config.app.description,
  openGraph: {
    title: config.app.name,
    description: config.app.description,
    type: "website",
    locale: config.app.locale === "es" ? "es_MX" : "en_US",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
}

export const viewport = {
  themeColor: config.brand.primary,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang={config.app.locale}
      data-theme="vibefast"
      suppressHydrationWarning
      className={`${headingFallback.variable} ${bodyFont.variable}`}
      style={{
        "--font-heading": `"${config.brand.fonts.heading}"`,
        "--font-body": `"${config.brand.fonts.body}"`,
        "--font-accent": `"${config.brand.fonts.accent}"`,
        "--color-primary": config.brand.primary,
        "--color-secondary": config.brand.secondary,
        "--color-accent": config.brand.accent,
        "--color-primary-content": config.brand.primaryContent,
        "--color-secondary-content": config.brand.secondaryContent,
        "--color-accent-content": config.brand.accentContent,
      }}
    >
      <body className="bg-base-100 text-base-content">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='vibefast'||t==='vibefast-dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
