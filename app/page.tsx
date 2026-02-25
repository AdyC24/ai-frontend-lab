import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero 
        title="Modern Cafe Experience"
        description="A cozy place for coffee and conversation."
        background="dark"
        primaryCta="Book a Table"
        secondaryCta="See Our Menu"
      />
    </main>
  )
}