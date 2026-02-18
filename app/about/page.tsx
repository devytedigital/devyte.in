import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutIntro } from "@/components/about-page/intro";
import { AboutVision } from "@/components/about-page/vision";
import { AboutStats } from "@/components/about-page/stats-grid";
import { TeamFeatured } from "@/components/about-page/team-featured";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-200 text-black selection:bg-blue-500/30">
      <Navbar />

      <div className="pt-20">
        <AboutIntro />
        <AboutVision />
        <TeamFeatured />
    
      </div>

      <Footer />
    </main>
  );
}
