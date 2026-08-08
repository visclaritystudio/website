import EyeHero from "@/components/EyeHero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WorkPreview from "@/components/WorkPreview";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <EyeHero />
      <Stats />
      <Services />
      <WorkPreview />
      <CTA />
    </main>
  );
}
