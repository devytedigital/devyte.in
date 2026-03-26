import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#191816] text-white selection:bg-green-500/30">
      <Navbar />

      {/* Ultra-Minimalist Hero */}
      <section className="pt-24 pb-12 md:pt-40 md:pb-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="max-w-7xl">
            <h1 className="text-6xl md:text-[10vw] font-normal leading-[1.05] tracking-tighter lowercase mb-16 md:mb-24">
              we&apos;re always <br />
              happy to talk.
            </h1>

            {/* Pill Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {/* Email Pill - Vibrant Green */}
              <a
                href="mailto:devyte.digital@gmail.com"
                className="bg-[#3BB34A] hover:bg-[#34a142] text-black px-8 md:px-12 py-5 md:py-8 rounded-full text-base md:text-xl font-medium transition-all whitespace-nowrap"
              >
                devyte.digital@gmail.com
              </a>

              {/* Instagram Pill - Outlined */}
              <a
                href="#"
                className="border border-white/20 hover:bg-white hover:text-black px-8 md:px-12 py-5 md:py-8 rounded-full text-base md:text-xl font-medium transition-all whitespace-nowrap"
              >
                Instagram
              </a>

              {/* LinkedIn Pill - Outlined */}
              <a
                href="#"
                className="border border-white/20 hover:bg-white hover:text-black px-8 md:px-12 py-5 md:py-8 rounded-full text-base md:text-xl font-medium transition-all whitespace-nowrap"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Split Editorial Layout */}
      <section className="pb-24 px-6 md:px-12 pt-32 md:pt-48">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
            {/* Left Column - Large Statement */}
            <div className="flex flex-col justify-start">
              <h2 className="text-5xl md:text-8xl lg:text-[7vw] font-normal leading-[1.1] tracking-tighter lowercase">
                tell us what&apos;s <br />
                {/* <span className="text-white/30 text-4xl md:text-6xl lg:text-[4vw]">on your mind.</span> */}
              </h2>
            </div>

            {/* Right Column - Interaction */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Office & Details Section */}
      <section className="pb-48 px-6 md:px-12 pt-8 md:pt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-48 lg:gap-64">
            {/* Redesigned Office Block */}
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-white" />
                <h3 className="text-2xl md:text-3xl tracking-tight">
                  our office
                </h3>
              </div>
              <div className="flex flex-col space-y-2 text-left">
                <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-sm">
                  noviindus technologies, 1st floor, gsbc, east nadakkave,
                  kozhikode, kerala 673006
                </p>
              </div>
            </div>

            {/* Redesigned Phone Block */}
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-white" />
                <h3 className="text-2xl md:text-3xl  tracking-tight">
                  phone number
                </h3>
              </div>
              <a
                href="tel:+919747659606"
                className="text-xl md:text-2xl font-light block hover:text-white/60 transition-colors tracking-tight text-left leading-relaxed"
              >
                +91 97476 59606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Map Section */}
      <section className="">
        <div className="container mx-auto">
          <div className="w-full mx-auto overflow-hidden  border border-white/5  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8719277026!2d75.78906567585094!3d11.261271649818815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65922379364a5%3A0x6a9486241b21901a!2sNoviindus%20Technologies!5e0!3m2!1sen!2sin!4v1711435800000!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[500px]"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
