import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import DatasSection from "@/components/DatasSection";
import DivulgacoesSection from "@/components/DivulgacoesSection";
import ContatoSection from "@/components/ContatoSection";
import ScrollArrows from "@/components/ScrollArrows";
import FixedSidebar from "@/components/FixedSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <FixedSidebar />
      <ScrollArrows />
      <HeroSection />
      <SobreSection />
      <DatasSection />
      <DivulgacoesSection />
      <ContatoSection />
      <footer className="py-8 bg-section-dark border-t border-moss/20">
        <p className="text-center text-brown-light font-body text-sm">
          © 2026 Raízes Vivas — Movimento Cultural. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
