import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoRaizes from "@/assets/logo-raizes.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#datas", label: "Programação" },
  { href: "#divulgacoes", label: "Artistas" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brown-darker/90 backdrop-blur-md border-b border-moss/20">
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3 font-display font-bold text-xl text-cream tracking-tight">
          <img src={logoRaizes} alt="Logo Raízes Vivas" className="w-9 h-9 rounded-full object-cover border border-moss/40" />
          Raízes <span className="text-moss">Vivas</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-brown-light hover:text-cream font-body text-sm font-semibold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brown-darker/95 backdrop-blur-md border-t border-moss/20 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-brown-light hover:text-cream font-body text-sm font-semibold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
