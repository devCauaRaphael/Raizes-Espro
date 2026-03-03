import { CalendarDays, MapPin, Clock } from "lucide-react";

const eventos = [
  { data: "15 de Março, 2026", local: "Centro Cultural Banco do Brasil — Rio de Janeiro, RJ", horario: "14h às 22h" },
  { data: "22 de Março, 2026", local: "SESC Pompeia — São Paulo, SP", horario: "16h às 23h" },
  { data: "05 de Abril, 2026", local: "Fundação de Arte de Ouro Preto — Ouro Preto, MG", horario: "10h às 20h" },
  { data: "19 de Abril, 2026", local: "Mercado da Ribeira — Salvador, BA", horario: "15h às 00h" },
];

const DatasSection = () => {
  return (
    <section id="datas" className="py-24 bg-gradient-to-b from-brown-darker via-brown-dark to-brown-darker">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-moss/20 text-moss text-sm font-semibold mb-4 border border-moss/30">
            Agenda 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Programação
          </h2>
          <p className="text-brown-light text-lg max-w-xl mx-auto">
            Confira as datas e locais dos próximos eventos do movimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventos.map((evento, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 bg-brown-dark/60 backdrop-blur-md border border-moss/20 hover:border-moss/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Número do evento */}
              <div className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-moss/20 text-moss font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Data */}
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays className="w-5 h-5 text-moss" />
                <span className="text-cream font-semibold text-lg">
                  {evento.data}
                </span>
              </div>

              {/* Local */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-moss/70 mt-1" />
                <span className="text-brown-light">
                  {evento.local}
                </span>
              </div>

              {/* Horário */}
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-moss" />
                <span className="bg-moss text-cream px-5 py-2 rounded-full text-sm font-semibold shadow-md">
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