import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React from "react";
import { Navbar } from "./components/navbar";
import { FlavorSection } from "./sections/flavor-section";
import { HeroSection } from "./sections/hero-section";
import { MessageSection } from "./sections/message-section";
import { NutritionSection } from "./sections/nutrition-section";
import { BenefitSection } from "./sections/benefits-section";
import { TestimonialSection } from "./sections/testimonial-section";
import { FooterSection } from "./sections/footer-section";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main className="">
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          {/* the extra div is required for the overlapping effect from the testimonal section */}
          <div className="">
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
