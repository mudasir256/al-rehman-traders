import Image from "next/image";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServiceIndex } from "@/components/service-index";
import { Process } from "@/components/process";
import { Catalogue } from "@/components/catalogue";
import { CustomGoods } from "@/components/custom-goods";
import { Branches } from "@/components/branches";
import { ContactForm, PhoneStack } from "@/components/contact-block";
import { SectionIntro } from "@/components/section-intro";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ServiceIndex />
      <Process />
      <Catalogue />
      <CustomGoods preview />
      <Branches />
      <section id="contact" className="border-t border-ink/15 bg-paper-2 py-20 md:py-28">
        <div className="wrap">
          <div className="relative mb-12 aspect-[16/7] overflow-hidden rounded-lg">
            <Image
              src="/photos/desk.jpg"
              alt="The workshop desk, with paper samples and a telephone"
              fill
              sizes="(min-width: 768px) 76rem, 100vw"
              className="object-cover"
            />
          </div>
          <SectionIntro index="06" label="Contact" title="Talk to the desk.">
            WhatsApp is the fastest way in. If you would rather speak, both
            numbers are answered by the workshop, not a call centre.
          </SectionIntro>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <PhoneStack />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
