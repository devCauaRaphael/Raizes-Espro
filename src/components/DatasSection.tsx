import { CalendarDays, MapPin, Clock } from "lucide-react";

const eventos = [
  { data: "15 de Março, 2026", local: "Centro Cultural Banco do Brasil — Rio de Janeiro, RJ", horario: "14h às 22h" },
  { data: "22 de Março, 2026", local: "SESC Pompeia — São Paulo, SP", horario: "16h às 23h" },
  { data: "05 de Abril, 2026", local: "Fundação de Arte de Ouro Preto — Ouro Preto, MG", horario: "10h às 20h" },
  { data: "19 de Abril, 2026", local: "Mercado da Ribeira — Salvador, BA", horario: "15h às 00h" },
];

const DatasSection = () => {
  return (
    <section id="datas" className="py-24 relative overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-darker via-brown-dark to-brown-darker" />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--moss)) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 20%, hsl(var(--brown-light)) 0%, transparent 40%),
                            radial-gradient(circle at 60% 80%, hsl(var(--moss-light)) 0%, transparent 45%)`,
        }}
      />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--moss)/0.1) 30px, hsl(var(--moss)/0.1) 31px)`,
        }}
      />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-moss/20 text-moss text-sm font-body font-semibold mb-4 border border-moss/30">
            Agenda 2026
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-4">
            Programação
          </h2>
          <p className="text-brown-light font-body text-lg max-w-xl mx-auto">
            Confira as datas e locais dos próximos eventos do movimento
          </p>
        </div>

        <div className="space-y-5">
          {eventos.map((evento, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 opacity-0 animate-fade-in-up border border-moss/10 hover:border-moss/30 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brown-darker/80 via-brown-dark/60 to-brown-darker/80 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-moss/0 group-hover:bg-moss/5 transition-colors duration-500" />
              
              {/* Number indicator */}
              <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-moss/40 text-moss font-display font-bold text-lg shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 flex items-center gap-3 md:min-w-[240px]">
                <CalendarDays className="w-5 h-5 text-moss shrink-0" />
                <span className="font-display font-bold text-cream text-lg">{evento.data}</span>
              </div>
              <div className="relative z-10 flex items-center gap-3 flex-1">
                <MapPin className="w-5 h-5 text-moss/70 shrink-0" />
                <span className="font-body text-brown-light">{evento.local}</span>
              </div>
              <div className="relative z-10 flex items-center gap-2">
                <Clock className="w-4 h-4 text-moss shrink-0 md:hidden" />
                <span className="bg-moss/90 text-cream px-5 py-2 rounded-full text-sm font-body font-semibold shadow-lg shadow-moss/20">
                  {evento.horario}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatasSection;
