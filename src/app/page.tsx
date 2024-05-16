import Image from "next/image";
import FAQs from "./components/FAQs";
import LandingPage from "./components/LandingPage"
import Tracks from "./components/Tracks"
import Foreword from "./components/Foreword"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <section className="bg-black">
    <LandingPage />
    <Foreword />
    <Tracks />
    <FAQs /> 
    </section>
  );
}

