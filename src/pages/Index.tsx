import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import DatasSection from "@/components/DatasSection";
import EventosSection from "@/components/EventosSection";
import ContatoSection from "@/components/ContatoSection";
import ScrollArrows from "@/components/ScrollArrows";
import FixedSidebar from "@/components/FixedSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream scroll-smooth">
      <Navbar />
      <FixedSidebar />
      <ScrollArrows />
      <HeroSection />
      <SobreSection />
      <DatasSection />
      <EventosSection />
      <ContatoSection />
      <footer className="py-8 bg-ink border-t-2 border-purple">
        <p className="text-center text-lavender font-body text-sm">
          © 2026 <span className="font-display text-cream">Roteiriza</span>
          <span className="font-graffiti text-lime">SP</span> — Cultura para todos.
        </p>
      </footer>
    </div>
  );
};

export default Index;
