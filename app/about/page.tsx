import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-page/hero";
import { AboutVision } from "@/components/about-page/vision";
import { AboutSuccess } from "@/components/about-page/success";
import { AboutTeam } from "@/components/about-page/team";
import { CTA } from "@/components/cta";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#191816] text-white selection:bg-blue-500/30">
      <Navbar />

      <AboutHero />
      <AboutVision />
      <AboutSuccess />
      <AboutTeam />
      <CTA />

      <Footer />
    </main>
  );
}
