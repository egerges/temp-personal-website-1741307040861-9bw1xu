import SnapshotSection from "@/components/SnapshotSection";
import Hero from "@components/Hero";
import FeatureSection from "@/components/FeatureSection";
import { SkillsSection } from "@components/SkillsSection";

export default function Home() {
  return (
    <main className="mt-20 md:mt-0">
      <Hero />
      <SnapshotSection />
      <FeatureSection />
      <SkillsSection />
    </main>
  );
}

