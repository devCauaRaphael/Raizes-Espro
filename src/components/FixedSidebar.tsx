import { useEffect, useState } from "react";

const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "datas", label: "Agenda" },
  { id: "eventos", label: "Eventos" },
  { id: "contato", label: "Contato" },
];

const FixedSidebar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = "";
      for (const item of navItems) {
        const el = item.id ? document.getElementById(item.id) : document.body;
        if (el && scrollY >= el.offsetTop) current = item.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          title={item.label}
          className="group relative flex items-center"
        >
          <span
            className={`block rounded-full transition-all duration-300 border-2 border-ink ${
              active === item.id
                ? "w-3.5 h-3.5 bg-purple"
                : "w-2.5 h-2.5 bg-cream hover:bg-lime"
            }`}
          />
          <span className="absolute left-7 px-2 py-1 rounded bg-ink text-cream text-xs font-body font-semibold uppercase tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FixedSidebar;
