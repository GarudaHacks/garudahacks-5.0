import Image from "next/image";
import FAQs from "./components/FAQs";
import LandingPage from "./components/LandingPage"
import Tracks from "./components/Tracks"
import Foreword from "./components/Foreword"
import AnimatedSection from './components/AnimatedSection';
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel'
import Judges from './components/Judges'
import Sponsors from './components/Sponsors'
import React from "react";

export default function Home() {
  return (
    <section className="bg-black m-0 p-0 overflow-x:hidden">
      <AnimatedSection>
      <LandingPage />
      </AnimatedSection>
    <AnimatedSection>
    <Foreword />
</AnimatedSection>
<AnimatedSection>
<Tracks />
      </AnimatedSection>
      {/* <AnimatedSection>
      <HorizontalScrollCarousel />
      </AnimatedSection> */}
        <Judges />
      <AnimatedSection>
      <FAQs />
      </AnimatedSection>
      <AnimatedSection>
      <Sponsors />
      </AnimatedSection>
    </section>
  );
}

// hello
