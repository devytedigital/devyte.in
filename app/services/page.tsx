import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ServicesGrid } from "@/components/services-grid";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Services | Digital Solution Company, SEO & Digital Marketing Kerala",
  description:
    "Devyte is a top-rated digital solution company in Kerala and technical SEO services India provider. We offer custom website development, mobile app development in Kerala, UI UX design, GMB optimization, and Meta ads management.",
  keywords: [
    "Web development company in Kerala",
    "Website development company in India",
    "Custom website development services",
    "Mobile app development company Kerala",
    "React web development agency",
    "Next.js development company India",
    "E-commerce website development Kerala",
    "UI UX design company Kerala",
    "SEO company in Kerala",
    "Technical SEO services India",
    "Local SEO services Kerala",
    "Google ranking services India",
    "GMB profile optimization Kerala",
    "Facebook ads agency Kerala",
    "Meta ads management services",
    "Instagram ads agency India",
    "Affordable website development company in Kerala",
    "Best website development company for small business Kerala",
    "Custom React website development India",
    "SEO services for small businesses Kerala",
    "Google Business profile setup for local shops",
    "Facebook ads for small business Kerala",
    "Website and SEO package for startups India",
    "Web design and development agency Kerala",
    "Website development company Kozhikode",
    "SEO services Kochi",
    "App development company Malappuram",
    "Digital marketing agency Trivandrum",
    "Devyte web development",
    "Devyte Kerala",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <ServicesGrid />
      <CTA />
      <Footer />
    </main>
  );
}
