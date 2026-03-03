import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

const colors = [
  "text-moss",
  "text-brown-light",
  "text-moss-light",
  "text-cream",
];

const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBanner}
        alt="Raízes Vivas - Movimento Cultural"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-display font-900 mb-6 tracking-tight transition-colors duration-1000 ease-in-out ${colors[colorIndex]}`}
        >
          Raízes Vivas
        </h1>
        <p className="text-lg md:text-xl text-brown-light font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Um movimento cultural dedicado a disseminar arte e cultura, celebrando as raízes que nos conectam.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#datas"
            className="px-8 py-3 bg-moss text-cream font-body font-semibold rounded-lg hover:bg-moss-light transition-colors duration-300"
          >
            Ver Programação
          </a>
          <a
            href="#contato"
            className="px-8 py-3 border-2 border-moss text-cream font-body font-semibold rounded-lg hover:bg-moss/20 transition-colors duration-300"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
