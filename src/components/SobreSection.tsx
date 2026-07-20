import { Sparkles, Users, MapPin, HeartHandshake } from "lucide-react";

const valores = [
  { icon: Sparkles, titulo: "Todo tipo de rolê", desc: "De balada eletrônica a bazar solidário, tudo cabe no mapa." },
  { icon: MapPin, titulo: "Feito para SP", desc: "Cobertura de bairro a bairro — do centro à zona leste." },
  { icon: Users, titulo: "Curadoria da cena", desc: "Selecionamos o que realmente vale a pena aparecer." },
  { icon: HeartHandshake, titulo: "Cultura para todos", desc: "Eventos gratuitos, pagos e beneficentes, sem filtro social." },
];

const SobreSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-halftone opacity-60" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-lime/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple/20 blur-3xl" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-ink text-lime text-xs font-body font-bold uppercase tracking-widest mb-5">
            /Sobre nós
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-ink mb-6 leading-tight">
            A cidade não dorme.<br />
            <span className="text-purple">A gente também não.</span>
          </h2>
          <p className="text-ink/75 font-body text-lg leading-relaxed">
            O <strong>RoteirizaSP</strong> é o guia colaborativo dos rolês paulistanos.
            De baladas na Barra Funda a feirinhas beneficentes em Pinheiros, mapeamos
            tudo o que acontece na cidade — sem julgamento, sem panelinha, para todo mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((v, i) => (
            <div
              key={v.titulo}
              className="sticker p-6 rounded-2xl bg-cream opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-lime border-2 border-ink flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-display text-ink text-lg mb-2 uppercase">{v.titulo}</h3>
              <p className="font-body text-ink/70 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t-2 border-ink pt-10">
          {[
            { num: "300+", label: "Rolês por mês" },
            { num: "96", label: "Bairros mapeados" },
            { num: "40k", label: "Paulistanos ativos" },
            { num: "5", label: "Categorias de evento" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="text-4xl md:text-5xl font-display text-purple">{s.num}</span>
              <p className="font-body text-ink/70 text-sm mt-1 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
