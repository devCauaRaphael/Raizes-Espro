import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/roteriza.jpeg";
const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#datas", label: "Agenda" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
  { href: "/consciencia-negra", label: "Dedicatória" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-md border-b-2 border-ink">
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3 font-display text-xl text-ink tracking-tight">
          <img
            src={logoAsset}
            alt="Logo RoteirizaSP"
            className="w-10 h-10 rounded-full object-cover border-2 border-ink bg-cream"
          />
          Roteiriza<span className="text-purple font-graffiti">SP</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href.startsWith("#") ? `/${l.href}` : l.href}
              className="text-ink/70 hover:text-purple font-body text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t-2 border-ink px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-ink hover:text-purple font-body text-sm font-semibold uppercase tracking-wide"
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
