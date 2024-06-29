import Image from "next/image";
import FAQs from "./components/FAQs";
import LandingPage from "./components/LandingPage"
import Tracks from "./components/Tracks"
import Foreword from "./components/Foreword"
import Sponsors from './components/Sponsors'
import AnimatedSection from './components/AnimatedSection';
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel'
import Judges from './components/Judges'

export default function Home() {
  return (
    <section className="bg-black">
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
      <AnimatedSection>
        <Judges />
      </AnimatedSection>
      <AnimatedSection>
      <FAQs />
      </AnimatedSection>
      <AnimatedSection>
      <Sponsors />
      </AnimatedSection>
    </section>
  );
}

