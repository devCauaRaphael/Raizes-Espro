import { useState } from "react";
import { Mail, Instagram, Phone, Send } from "lucide-react";

const ContatoSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-30 bg-stripes" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-lime/20 blur-3xl" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-lime text-ink text-xs font-body font-bold uppercase tracking-widest mb-4 border-2 border-cream">
            /Contato
          </span>
          <h2 className="text-5xl md:text-7xl font-display text-cream leading-none mb-5">
            Fala com a <span className="text-lime font-graffiti">gente</span>
          </h2>
          <p className="text-lavender font-body text-lg">
            Tem um rolê pra divulgar? Uma parceria em mente? Manda ver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "E-mail", value: "contato@roteirizasp.com.br" },
              { icon: Instagram, label: "Instagram", value: "@roteirizasp" },
              { icon: Phone, label: "WhatsApp", value: "(11) 99999-0000" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="sticker bg-cream rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple text-cream flex items-center justify-center border-2 border-ink shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body font-bold uppercase tracking-widest text-xs text-ink/60">{label}</p>
                  <p className="font-display text-ink text-lg">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="sticker bg-cream rounded-2xl p-6 space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-cream text-ink border-2 border-ink font-body placeholder:text-ink/40 focus:outline-none focus:border-purple"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-cream text-ink border-2 border-ink font-body placeholder:text-ink/40 focus:outline-none focus:border-purple"
            />
            <textarea
              placeholder="Conta o rolê..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-cream text-ink border-2 border-ink font-body placeholder:text-ink/40 focus:outline-none focus:border-purple resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple text-cream font-body font-bold uppercase tracking-wide rounded-full border-2 border-ink hover:bg-ink transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
