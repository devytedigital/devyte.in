import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServiceIntro } from "@/components/service-intro";
import { ProjectShowcase } from "@/components/project-showcase";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <ServiceIntro />
      <ProjectShowcase />
      {/* <Services /> */}
      <About />
      {/* <Work /> */}

      <CTA />

      <Footer />
    </main>
  );
}
