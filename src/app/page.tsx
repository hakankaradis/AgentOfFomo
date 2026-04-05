import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Lore from "@/components/Lore";
import Token from "@/components/Token";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Lore />
        <Token />
        <Roadmap />
        <Community />
        <Disclaimer />
      </main>
    </>
  );
}
