import { Heart, Users, Music, Paintbrush } from "lucide-react";

const valores = [
  { icon: Heart, titulo: "Paixão pela Cultura", desc: "Acreditamos que a arte transforma vidas e conecta comunidades." },
  { icon: Users, titulo: "Comunidade", desc: "Criamos espaços de encontro e troca entre artistas e público." },
  { icon: Music, titulo: "Diversidade Artística", desc: "Do samba ao grafite, celebramos todas as formas de expressão." },
  { icon: Paintbrush, titulo: "Resistência", desc: "Preservamos e difundimos a cultura popular brasileira." },
];

const SobreSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-dark via-brown-darker to-brown-dark" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-moss blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brown-light blur-[100px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4 text-center">
          Sobre Nós
        </h2>
        <p className="text-brown-light text-center mb-6 font-body text-lg max-w-2xl mx-auto">
          O movimento Raízes Vivas nasceu da vontade de reconectar pessoas com a arte e a cultura brasileira em suas formas mais autênticas.
        </p>
        <p className="text-brown-light/80 text-center mb-16 font-body max-w-3xl mx-auto leading-relaxed">
          Desde 2022, organizamos eventos, exposições e encontros que celebram a diversidade cultural do Brasil. 
          Nosso objetivo é criar pontes entre artistas consagrados e novos talentos, levando arte para espaços públicos 
          e democratizando o acesso à cultura. Já impactamos mais de 15 mil pessoas em 4 estados brasileiros.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v, i) => (
            <div
              key={v.titulo}
              className="group p-6 rounded-2xl border border-moss/20 bg-brown-darker/50 backdrop-blur-sm hover:border-moss/50 hover:bg-moss/10 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-moss/20 flex items-center justify-center mb-4 group-hover:bg-moss/30 transition-colors duration-300">
                <v.icon className="w-7 h-7 text-moss" />
              </div>
              <h3 className="font-display font-bold text-cream text-lg mb-2">{v.titulo}</h3>
              <p className="font-body text-brown-light text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "50+", label: "Eventos realizados" },
            { num: "15k+", label: "Pessoas impactadas" },
            { num: "120+", label: "Artistas participantes" },
            { num: "4", label: "Estados brasileiros" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-moss">{s.num}</span>
              <p className="font-body text-brown-light text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
