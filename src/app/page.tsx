import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      {/* Upcoming sections (added as you share each design): */}
      {/* <ServicesPreview />→ /services */}
      {/* <Contact /> */}
    </>
  );
}
