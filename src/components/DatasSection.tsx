import { CalendarDays, MapPin, Clock } from "lucide-react";

const eventos = [
  { dia: "13", mes: "NOV", data: "Sexta, 13 de Novembro", local: "Museu Afro Brasil — Ibirapuera", horario: "10h às 18h", tag: "Exposição" },
  { dia: "15", mes: "NOV", data: "Domingo, 15 de Novembro", local: "Aparelha Luzia — Campos Elíseos", horario: "18h às 23h", tag: "Roda de Samba" },
  { dia: "19", mes: "NOV", data: "Quinta, 19 de Novembro", local: "Casa de Cultura Hip Hop — Diadema", horario: "20h · madrugada", tag: "Baile" },
  { dia: "20", mes: "NOV", data: "Sexta, 20 de Novembro", local: "Marcha — MASP → Praça da Sé", horario: "14h às 19h", tag: "Marcha" },
  { dia: "22", mes: "NOV", data: "Domingo, 22 de Novembro", local: "Praça da Liberdade — Liberdade", horario: "11h às 20h", tag: "Feira Afro" },
];

const DatasSection = () => {
  return (
    <section id="datas" className="py-24 relative overflow-hidden bg-ink">
      {/* Rich decorative background */}
      <div className="absolute inset-0 opacity-30 bg-stripes" />
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-purple/40 blur-[140px]" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-lime/20 blur-[140px]" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--lime) / 0.3) 1px, transparent 1.5px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-lime text-ink text-xs font-body font-bold uppercase tracking-widest mb-4 border-2 border-cream">
              /Agenda · 2026
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-cream leading-none">
              Novembro <span className="text-lime font-graffiti">Negro</span>
            </h2>
          </div>
          <p className="text-lavender font-body text-lg max-w-sm">
            Toda a programação da Consciência Negra em SP, em ordem cronológica.
          </p>
        </div>

        <div className="space-y-4">
          {eventos.map((evento, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden opacity-0 animate-fade-in-up bg-cream border-2 border-cream hover:border-lime transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                {/* Date block */}
                <div className="flex md:flex-col items-center justify-center gap-3 md:gap-0 px-6 py-4 md:py-6 md:w-32 bg-purple text-cream border-b-2 md:border-b-0 md:border-r-2 border-ink">
                  <span className="font-display text-4xl md:text-5xl leading-none">{evento.dia}</span>
                  <span className="font-body text-sm uppercase tracking-widest font-bold">{evento.mes}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1">
                    <span className="inline-block bg-ink text-lime text-[10px] font-body font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2">
                      {evento.tag}
                    </span>
                    <p className="font-display text-ink text-lg mb-2 uppercase">{evento.data}</p>
                    <div className="flex items-center gap-2 text-ink/70 font-body text-sm">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {evento.local}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock className="w-4 h-4 text-purple" />
                    <span className="font-body font-semibold text-ink text-sm">{evento.horario}</span>
                  </div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-lime scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatasSection;
