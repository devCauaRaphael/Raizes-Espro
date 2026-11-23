import { Link } from "react-router-dom";
import { ArrowLeft, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";

const nomes = [
  { nome: "Zumbi dos Palmares", desc: "Líder do Quilombo dos Palmares, símbolo maior da resistência negra. Morto em 20 de novembro de 1695." },
  { nome: "Dandara", desc: "Guerreira de Palmares, lutou pela liberdade do seu povo até o fim." },
  { nome: "Luiz Gama", desc: "Ex-escravizado que se tornou advogado e libertou mais de 500 pessoas." },
  { nome: "Carolina Maria de Jesus", desc: "Escritora de 'Quarto de Despejo', voz da periferia paulistana." },
  { nome: "Abdias Nascimento", desc: "Artista, político e fundador do Teatro Experimental do Negro." },
  { nome: "Lélia Gonzalez", desc: "Intelectual que pensou raça, gênero e a amefricanidade." },
];

const ConscienciaNegra = () => (
  <div className="min-h-screen bg-cream">
    <Navbar />
    <section className="relative pt-32 pb-20 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-stripes opacity-40" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-purple/40 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-lime/20 blur-[120px]" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Crown className="w-12 h-12 text-lime mx-auto mb-6" />
        <span className="inline-block px-3 py-1 rounded-full bg-lime text-ink text-xs font-body font-bold uppercase tracking-widest mb-6">
          /Dedicatória · 20 de Novembro
        </span>
        <h1 className="font-display text-5xl md:text-7xl text-cream leading-none mb-8">
          Às nossas <span className="text-lime font-graffiti">raízes</span>
        </h1>
        <p className="font-body text-lavender text-lg md:text-xl leading-relaxed">
          Dedicamos este espaço a cada pessoa negra que construiu, e segue construindo, a cultura de São Paulo e do Brasil.
          Do samba ao hip hop, do terreiro à quebrada: sem vocês, não existe rolê. Este é o nosso muito obrigado.
        </p>
      </div>
    </section>

    <section className="py-20 relative bg-cream">
      <div className="absolute inset-0 bg-halftone opacity-50" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-10 text-center">
          Quem <span className="text-purple font-graffiti">abriu caminho</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nomes.map((n, i) => (
            <div key={n.nome} className="sticker bg-cream rounded-2xl p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-10 h-1.5 bg-purple mb-4 rounded-full" />
              <h3 className="font-display text-xl text-ink uppercase mb-2">{n.nome}</h3>
              <p className="font-body text-ink/70 text-sm leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="sticker mt-16 bg-purple text-cream rounded-2xl p-8 md:p-12 text-center">
          <p className="font-graffiti text-2xl md:text-4xl leading-snug">"Enquanto houver racismo, não haverá democracia."</p>
          <footer className="font-body mt-4 text-lime uppercase tracking-widest text-sm font-bold">— Lélia Gonzalez</footer>
        </blockquote>

        <div className="text-center mt-12">
          <Link to="/" className="sticker inline-flex items-center gap-2 px-8 py-3 bg-lime text-ink font-body font-bold uppercase rounded-full">
            <ArrowLeft className="w-4 h-4" /> Ver a agenda
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ConscienciaNegra;
