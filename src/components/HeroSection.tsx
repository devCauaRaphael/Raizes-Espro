import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import logoAsset from "@/assets/roteriza.jpeg";

const spSuffixColors = ["text-purple", "text-lime", "text-lavender"];

const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % spSuffixColors.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      <img
        src={heroBanner}
        alt="Skyline de São Paulo em estilo graffiti"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-halftone opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink text-cream text-xs font-body font-semibold tracking-widest uppercase mb-6 border-2 border-ink">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          Cultura para todos · Ao vivo em SP
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-ink mb-6">
          Roteiriza
          <span
            className={`inline-block font-graffiti transition-colors duration-700 ease-in-out ${spSuffixColors[colorIndex]}`}
          >
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-ink/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
        <span className="paint-underline font-semibold">Os melhores locais</span> de <span className="paint-underline font-semibold">São Paulo</span> — todos os rolês da cidade em um só lugar.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#eventos"
            className="sticker px-8 py-3 bg-purple text-cream font-body font-bold uppercase tracking-wide rounded-full"
          >
            Ver Rolês
          </a>
          <a
            href="#contato"
            className="sticker px-8 py-3 bg-lime text-ink font-body font-bold uppercase tracking-wide rounded-full"
          >
            Divulgar Evento
          </a>
        </div>

        <img
          src={logoAsset}
          alt="RoteirizaSP"
          className="mx-auto mt-14 max-w-[280px] md:max-w-[360px] opacity-90 drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
