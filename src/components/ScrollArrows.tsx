import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const sections = ["#", "#sobre", "#datas", "#divulgacoes", "#contato"];

const ScrollArrows = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let idx = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i].replace("#", "");
        const el = id ? document.getElementById(id) : document.body;
        if (el && scrollY >= el.offsetTop) {
          idx = i;
          break;
        }
      }
      setCurrentIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (dir: "up" | "down") => {
    const next = dir === "up" ? Math.max(0, currentIndex - 1) : Math.min(sections.length - 1, currentIndex + 1);
    const id = sections[next].replace("#", "");
    const el = id ? document.getElementById(id) : document.body;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-2">
      <button
        onClick={() => scrollTo("up")}
        disabled={currentIndex === 0}
        className="w-10 h-10 rounded-full bg-moss/90 text-cream flex items-center justify-center backdrop-blur-sm hover:bg-moss transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={() => scrollTo("down")}
        disabled={currentIndex === sections.length - 1}
        className="w-10 h-10 rounded-full bg-moss/90 text-cream flex items-center justify-center backdrop-blur-sm hover:bg-moss transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollArrows;
