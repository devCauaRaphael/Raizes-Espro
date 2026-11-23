import { useState } from "react";
import { MapPin, Calendar, Ticket } from "lucide-react";
import balada from "@/assets/event-balada.jpg";
import beneficente from "@/assets/event-beneficente.jpg";
import show from "@/assets/event-show.jpg";
import exposicao from "@/assets/event-exposicao.jpg";
import gastronomia from "@/assets/event-gastronomia.jpg";
import standup from "@/assets/event-standup.jpg";

type Evento = {
  titulo: string;
  categoria: string;
  descricao: string;
  local: string;
  data: string;
  preco: string;
  imagem: string;
  cor: "purple" | "lime" | "lavender";
};

// Post de divulgação no Instagram (destino do botão "Quero ir").
const INSTAGRAM_POST_URL = "https://www.instagram.com/r0teiriza.sp/p/DfSLJ8eoaqi/?img_index=1";

const eventos: Evento[] = [
  { titulo: "Baile Black Power", categoria: "Baile", descricao: "Soul, funk e charme celebrando a estética e a música preta.", local: "Casa de Cultura Hip Hop — Diadema", data: "Qui, 19 Nov · 22h", preco: "R$ 30", imagem: balada, cor: "purple" },
  { titulo: "Feira Afroempreendedora", categoria: "Feira Afro", descricao: "Moda, turbantes, livros e culinária de empreendedores negros.", local: "Praça da Liberdade — Liberdade", data: "Dom, 22 Nov · 11h", preco: "Entrada Franca", imagem: beneficente, cor: "lime" },
  { titulo: "Roda de Samba Raiz", categoria: "Show", descricao: "Samba de terreiro e partido-alto em homenagem aos mestres.", local: "Aparelha Luzia — Campos Elíseos", data: "Dom, 15 Nov · 18h", preco: "R$ 20", imagem: show, cor: "purple" },
  { titulo: "Memórias de Zumbi", categoria: "Exposição", descricao: "Arte afro-brasileira contemporânea e a história de Palmares.", local: "Museu Afro Brasil — Ibirapuera", data: "Sex, 13 Nov · 10h", preco: "Entrada Franca", imagem: exposicao, cor: "lavender" },
  { titulo: "Sabores da Diáspora", categoria: "Gastronomia", descricao: "Acarajé, feijoada e comidas de matriz africana com DJ.", local: "Galeria Olido — Centro", data: "Sáb, 21 Nov · 13h", preco: "Entrada Franca", imagem: gastronomia, cor: "lime" },
  { titulo: "Slam Quilombo", categoria: "Poesia", descricao: "Batalha de poesia falada sobre resistência e ancestralidade.", local: "Centro Cultural São Paulo — Paraíso", data: "A confirmar", preco: "Entrada Franca", imagem: standup, cor: "lavender" },
];

const corBadge = (cor: Evento["cor"]) =>
  cor === "purple"
    ? "bg-purple text-cream"
    : cor === "lime"
    ? "bg-lime text-ink"
    : "bg-lavender text-ink";

const EventCard = ({ evento }: { evento: Evento }) => {
  return (
    <article className="sticker group bg-cream rounded-2xl overflow-hidden flex flex-col">
      <div className="relative h-52 overflow-hidden border-b-2 border-ink">
        <img
          src={evento.imagem}
          alt={evento.titulo}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-widest border-2 border-ink ${corBadge(
            evento.cor,
          )}`}
        >
          {evento.categoria}
        </span>
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-body font-bold uppercase bg-ink text-lime border-2 border-ink">
          {evento.preco}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display text-2xl text-ink uppercase leading-tight">
          {evento.titulo}
        </h3>
        <p className="text-ink/70 font-body text-sm leading-relaxed">
          {evento.descricao}
        </p>

        <div className="flex items-center gap-2 text-ink/80 font-body text-sm">
          <MapPin className="w-4 h-4 text-purple shrink-0" />
          <span>{evento.local}</span>
        </div>

        <div className="flex items-center gap-2 text-ink/80 font-body text-sm">
          <Calendar className="w-4 h-4 text-purple shrink-0" />
          <span className="font-semibold">{evento.data}</span>
        </div>

        <a
          href={INSTAGRAM_POST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-ink text-cream font-body font-bold uppercase tracking-wide text-sm py-2.5 rounded-full hover:bg-purple transition-colors border-2 border-ink"
        >
          <Ticket className="w-4 h-4" />
          Quero ir
        </a>
      </div>
    </article>
  );
};

const EventosSection = () => {
  const [filtro, setFiltro] = useState<string>("Tudo");
  const categorias = ["Tudo", "Baile", "Show", "Feira Afro", "Exposição", "Gastronomia", "Poesia"];
  const eventosFiltrados = filtro === "Tudo" ? eventos : eventos.filter((e) => e.categoria === filtro);

  return (
    <section id="eventos" className="py-24 relative overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-halftone opacity-40" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-purple text-cream text-xs font-body font-bold uppercase tracking-widest mb-4">
              /Divulgações
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-none">
              Eventos em <span className="text-purple font-graffiti">destaque</span>
            </h2>
          </div>
          <p className="text-ink/70 font-body text-lg max-w-sm">
            Rolês que celebram a cultura negra em todos os cantos de SP.
          </p>
        </div>

        {/* Category filter chips (visual only) */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categorias.map((cat) => {
            const ativo = filtro === cat;
            return (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-widest border-2 border-ink transition-colors ${
                  ativo ? "bg-ink text-lime" : "bg-cream text-ink hover:bg-lavender"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {eventosFiltrados.length === 0 ? (
          <p className="text-center font-body text-ink/60 py-16">
            Nenhum evento nesta categoria ainda. Volte em breve!
          </p>
        ) : (
          <div key={filtro} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosFiltrados.map((evento, i) => (
              <div
                key={evento.titulo}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <EventCard evento={evento} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventosSection;