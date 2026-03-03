import ArtistCard from "./ArtistCard";

import artistBasquiat from "@/assets/artist-basquiat.jpg";
import artistEmicida from "@/assets/artist-emicida.jpg";
import artistAlcione from "@/assets/artist-alcione.jpg";
import artistZeca from "@/assets/artist-zeca.jpg";
import artistGrafiteiro from "@/assets/artist-grafiteiro.jpg";

import obraBasquiat from "@/assets/obra-basquiat.jpg";
import obraEmicida from "@/assets/obra-emicida.jpg";
import obraAlcione from "@/assets/obra-alcione.jpg";
import obraZeca from "@/assets/obra-zeca.jpg";
import obraGrafiteiro from "@/assets/obra-grafiteiro.jpg";

const artistas = [
  {
    nome: "Jean-Michel Basquiat",
    descricao: "Artista neo-expressionista que transcendeu as fronteiras entre arte de rua e galerias. Sua obra questiona estruturas de poder e celebra a identidade negra.",
    foto: artistBasquiat,
    obraPrincipal: obraBasquiat,
    obraNome: "Untitled (Skull), 1982",
    ocultarData: true,
    dataPresenca: undefined,
  },
  {
    nome: "Emicida",
    descricao: "Rapper, cantor e compositor brasileiro. Um dos maiores nomes do hip-hop nacional, sua arte conecta poesia, ancestralidade e resistência.",
    foto: artistEmicida,
    obraPrincipal: obraEmicida,
    obraNome: "AmarElo (Álbum, 2019)",
    dataPresenca: "22 de Março, 2026",
  },
  {
    nome: "Alcione",
    descricao: "A Marrom. Ícone do samba brasileiro, Alcione é referência em musicalidade e potência vocal, carregando décadas de história cultural.",
    foto: artistAlcione,
    obraPrincipal: obraAlcione,
    obraNome: "Não Deixe o Samba Morrer (1975)",
    dataPresenca: "05 de Abril, 2026",
  },
  {
    nome: "Zeca Pagodinho",
    descricao: "Sambista carioca de alma e coração. Zeca é sinônimo de alegria, autenticidade e da essência mais pura do pagode brasileiro.",
    foto: artistZeca,
    obraPrincipal: obraZeca,
    obraNome: "Deixa a Vida Me Levar (2002)",
    dataPresenca: "19 de Abril, 2026",
  },
  {
    nome: "Grafiteiro Anônimo",
    descricao: "Artista urbano cuja identidade permanece desconhecida. Suas intervenções em muros transformam espaços cinzas em explosões de cor e mensagem.",
    foto: artistGrafiteiro,
    obraPrincipal: obraGrafiteiro,
    obraNome: "Intervenção Urbana — Série Raízes",
    dataPresenca: "15 de Março, 2026",
  },
];

const DivulgacoesSection = () => {
  return (
    <section id="divulgacoes" className="py-24 bg-section-earth">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
          Artistas Confirmados
        </h2>
        <p className="text-muted-foreground text-center mb-16 font-body text-lg">
          Conheça os artistas que fazem parte do movimento Raízes Vivas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artistas.map((artista, i) => (
            <div
              key={artista.nome}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <ArtistCard {...artista} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivulgacoesSection;
