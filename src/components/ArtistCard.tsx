import { useState } from "react";
import { Eye, EyeOff, Palette } from "lucide-react";

interface ArtistCardProps {
  nome: string;
  descricao: string;
  foto: string;
  obraPrincipal: string;
  obraNome: string;
  dataPresenca?: string;
  ocultarData?: boolean;
}

const ArtistCard = ({
  nome,
  descricao,
  foto,
  obraPrincipal,
  obraNome,
  dataPresenca,
  ocultarData = false,
}: ArtistCardProps) => {
  const [mostrarData, setMostrarData] = useState(!ocultarData);
  const [mostrarObra, setMostrarObra] = useState(false);

  return (
    <div className="card-artist rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-500">
      
      {/* Artist photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={foto}
          alt={nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <h3 className="absolute bottom-4 left-5 text-2xl font-display font-bold text-cream">
          {nome}
        </h3>
      </div>

      <div className="p-5 space-y-4">
        <p className="font-body text-muted-foreground text-sm leading-relaxed">{descricao}</p>

        {/* Date with toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {mostrarData && dataPresenca ? (
              <span className="bg-moss text-cream px-3 py-1 rounded-full text-xs font-body font-semibold">
                {dataPresenca}
              </span>
            ) : dataPresenca ? (
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-body italic">
                Data oculta
              </span>
            ) : (
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-body italic">
                A confirmar
              </span>
            )}
          </div>
          {dataPresenca && (
            <button
              onClick={() => setMostrarData(!mostrarData)}
              className="text-moss hover:text-moss-light transition-colors p-1"
              title={mostrarData ? "Ocultar data" : "Mostrar data"}
            >
              {mostrarData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Main artwork toggle */}
        <div>
          <button
            onClick={() => setMostrarObra(!mostrarObra)}
            className="flex items-center gap-2 text-sm font-body font-semibold text-moss hover:text-moss-light transition-colors"
          >
            <Palette className="w-4 h-4" />
            {mostrarObra ? "Ocultar obra principal" : "Ver obra principal"}
          </button>

          {mostrarObra && (
            <div className="mt-3 rounded-xl overflow-hidden border border-border">
              <img
                src={obraPrincipal}
                alt={obraNome}
                className="w-full h-48 object-cover"
              />
              <div className="bg-muted px-4 py-2">
                <span className="text-xs font-body font-semibold text-muted-foreground italic">
                  {obraNome}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
