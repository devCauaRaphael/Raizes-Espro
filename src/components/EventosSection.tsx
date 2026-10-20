import { useState } from "react";
import { MapPin, Calendar, Ticket, Eye, EyeOff } from "lucide-react";
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
  ocultarData?: boolean;
};

// Eventos de outubro — transcritos do post de divulgação.
// TODO: o post não informa horários nem preços ("Consultar"). As imagens abaixo
// são reaproveitadas das categorias mais próximas; troque por fotos específicas.
const eventos: Evento[] = [
  // ───────── Shows ─────────
  {
    titulo: "ZAYN",
    categoria: "Show",
    descricao: "O cantor britânico apresenta sua turnê em São Paulo, trazendo os principais sucessos da carreira solo.",
    local: "Nubank Parque",
    data: "Sáb, 10 Out",
    preco: "Consultar",
    imagem: show,
    cor: "purple",
  },
  {
    titulo: "Robbie Williams",
    categoria: "Show",
    descricao: "O cantor britânico retorna a São Paulo para uma apresentação com grandes sucessos de sua carreira.",
    local: "Nubank Parque",
    data: "Ter, 13 Out",
    preco: "Consultar",
    imagem: show,
    cor: "purple",
  },
  {
    titulo: "Jorge Ben Jor",
    categoria: "Show",
    descricao: "O cantor e compositor brasileiro apresenta um show com clássicos que marcaram sua trajetória na música brasileira.",
    local: "Nubank Parque",
    data: "Sáb, 17 Out",
    preco: "Consultar",
    imagem: show,
    cor: "purple",
  },
  {
    titulo: "Iron Maiden",
    categoria: "Show",
    descricao: "A banda britânica traz a turnê Run For Your Lives World Tour para São Paulo, celebrando sua trajetória e seus grandes sucessos.",
    local: "Nubank Parque",
    data: "25 e 27 Out",
    preco: "Consultar",
    imagem: show,
    cor: "purple",
  },
  {
    titulo: "The Pussycat Dolls",
    categoria: "Show",
    descricao: "O grupo retorna aos palcos com a turnê PCD Forever Tour, reunindo seus maiores sucessos.",
    local: "Nubank Parque",
    data: "Sex, 30 Out",
    preco: "Consultar",
    imagem: show,
    cor: "purple",
  },
  {
    titulo: "O Maior Encontro do Samba",
    categoria: "Show",
    descricao: "Zeca Pagodinho, Alcione e Jorge Aragão se reúnem em um grande encontro dedicado ao samba.",
    local: "Nubank Parque",
    data: "Sáb, 31 Out",
    preco: "Consultar",
    imagem: show,
    cor: "purple",
  },

  // ───────── Games, esporte e sustentabilidade ─────────
  {
    titulo: "Brasil Game Show",
    categoria: "Games",
    descricao: "Grande evento de games e cultura geek, com jogos, lançamentos, experiências, competições e convidados.",
    local: "Distrito Anhembi",
    data: "9 a 12 Out",
    preco: "Consultar",
    imagem: balada,
    cor: "purple",
  },
  {
    titulo: "UOL Run",
    categoria: "Esporte",
    descricao: "Corrida e caminhada pelas ruas da região do Ibirapuera, reunindo participantes em diferentes categorias.",
    local: "Obelisco do Ibirapuera",
    data: "Dom, 18 Out",
    preco: "Consultar",
    imagem: beneficente,
    cor: "lime",
  },
  {
    titulo: "ECO Expo Brasil",
    categoria: "Sustentabilidade",
    descricao: "Evento voltado à sustentabilidade, gestão de resíduos, soluções ambientais e inovação.",
    local: "Expo Center Norte",
    data: "20 a 22 Out",
    preco: "Consultar",
    imagem: beneficente,
    cor: "lime",
  },

  // ───────── Gastronomia ─────────
  {
    titulo: "São Paulo Food Film Fest",
    categoria: "Gastronomia",
    descricao: "Festival que mistura cinema e gastronomia, com filmes, aulas-show, feirinha e experiências sobre alimentação.",
    local: "CCSP, Reserva Cultural e outros espaços",
    data: "1 a 14 Out",
    preco: "Consultar",
    imagem: gastronomia,
    cor: "lime",
  },
  {
    titulo: "Wine&Jazz Sessions",
    categoria: "Gastronomia",
    descricao: "Festival que reúne vinhos, gastronomia, jazz e soul ao vivo, com chefs, restaurantes e experiências gastronômicas ao ar livre. Estações culturais.",
    local: "Parque Villa-Lobos",
    data: "17 e 18 Out",
    preco: "Consultar",
    imagem: gastronomia,
    cor: "lime",
  },
  {
    titulo: "Emiliano Market Day",
    categoria: "Gastronomia",
    descricao: "Feira gastronômica gratuita com produtores artesanais, chefs, degustações, oficinas, música e atividades para o público.",
    local: "Expo Center Norte",
    data: "6 a 8 Out",
    preco: "Entrada Franca",
    imagem: gastronomia,
    cor: "lime",
  },

  // ───────── Teatro ─────────
  {
    titulo: "O Pianista e o Poeta",
    categoria: "Teatro",
    descricao: "Espetáculo que combina piano e literatura, com João Carlos Martins e Gabriel Chalita.",
    local: "Teatro FAAP",
    data: "7, 8, 14, 15, 21 e 22 Out",
    preco: "Consultar",
    imagem: exposicao,
    cor: "lavender",
  },
  {
    titulo: "Savannah Bay É Você",
    categoria: "Teatro",
    descricao: "Peça-instalação inspirada na obra da escritora Marguerite Duras, que mistura teatro, projeções cinematográficas e artes visuais para explorar memórias e relações familiares.",
    local: "Itaú Cultural — Avenida Paulista",
    data: "Até 18 Out",
    preco: "Consultar",
    imagem: exposicao,
    cor: "lavender",
  },
  {
    titulo: "A História Que Se Repete",
    categoria: "Teatro",
    descricao: "Com Rocco Pitanga e Robson Nunes, a peça apresenta dois homens vivendo em um futuro distópico no qual tempo, memória e realidade se repetem em ciclos.",
    local: "Sesc Ipiranga",
    data: "9 Out a 8 Nov",
    preco: "Consultar",
    imagem: exposicao,
    cor: "lavender",
  },

  // ───────── Cinema ─────────
  {
    titulo: "Open Air Brasil",
    categoria: "Cinema",
    descricao: "Festival de cinema ao ar livre, com telão gigante, filmes, atrações musicais e área gastronômica.",
    local: "Jockey Club de São Paulo",
    data: "6 a 18 Out",
    preco: "Consultar",
    imagem: standup,
    cor: "lavender",
  },
  {
    titulo: "Cine na Praça — Monster-O-Rama",
    categoria: "Cinema",
    descricao: "Mostra gratuita de filmes de terror ao ar livre, com clássicos do gênero, microfone aberto e concurso de fantasias no Halloween.",
    local: "Jockey Club de São Paulo",
    data: "Durante outubro",
    preco: "Entrada Franca",
    imagem: standup,
    cor: "lavender",
  },
  {
    titulo: "50ª Mostra Internacional de Cinema de São Paulo",
    categoria: "Cinema",
    descricao: "A edição de 50 anos reúne 380 filmes de 93 países, além de sessões especiais, debates e convidados internacionais.",
    local: "Diversos cinemas e espaços culturais",
    data: "15 a 29 Out",
    preco: "Consultar",
    imagem: standup,
    cor: "lavender",
  },
];

const corBadge = (cor: Evento["cor"]) =>
  cor === "purple"
    ? "bg-purple text-cream"
    : cor === "lime"
    ? "bg-lime text-ink"
    : "bg-lavender text-ink";

const EventCard = ({ evento }: { evento: Evento }) => {
  const [mostrarData, setMostrarData] = useState(!evento.ocultarData);

  return (
    <article className="sticker group bg-cream rounded-2xl overflow-hidden flex flex-col h-full">
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

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-ink/80 font-body text-sm">
            <Calendar className="w-4 h-4 text-purple shrink-0" />
            {mostrarData ? (
              <span className="font-semibold">{evento.data}</span>
            ) : (
              <span className="italic text-ink/50">Data oculta</span>
            )}
          </div>
          <button
            onClick={() => setMostrarData((v) => !v)}
            className="text-ink/60 hover:text-purple transition-colors p-1"
            aria-label={mostrarData ? "Ocultar data" : "Mostrar data"}
          >
            {mostrarData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <button className="mt-auto inline-flex items-center justify-center gap-2 bg-ink text-cream font-body font-bold uppercase tracking-wide text-sm py-2.5 rounded-full hover:bg-purple transition-colors border-2 border-ink">
          <Ticket className="w-4 h-4" />
          Quero ir
        </button>
      </div>
    </article>
  );
};

const EventosSection = () => {
  const [filtro, setFiltro] = useState<string>("Tudo");
  // Chips gerados a partir dos eventos, para nunca ficarem fora de sincronia com as categorias.
  const categorias = ["Tudo", ...Array.from(new Set(eventos.map((e) => e.categoria)))];
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
            Curadoria semanal do que rola em SP — em todos os cantos e para todos os públicos.
          </p>
        </div>

        {/* Filtro por categoria */}
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
