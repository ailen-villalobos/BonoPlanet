import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import HowItWorks from "@/components/landing/HowItWorks"
import Emotional from "@/components/landing/Emotional"
import CircularEconomy from "@/components/landing/CircularEconomy"
import About from "@/components/landing/About"
import FAQ from "@/components/landing/FAQ"
import FinalCta from "@/components/landing/FinalCta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Emotional />
      <CircularEconomy />
      <About />
      <FAQ />
      <FinalCta />
    </>
  )
}
