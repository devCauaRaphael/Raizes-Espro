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
    <section id="contato" className="py-24 bg-section-dark">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4 text-center">
          Contato
        </h2>
        <p className="text-brown-light text-center mb-16 font-body text-lg">
          Faça parte do movimento. Entre em contato conosco.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-moss flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-cream" />
              </div>
              <div>
                <p className="font-body font-semibold text-cream">E-mail</p>
                <p className="text-brown-light font-body text-sm">contato@raizesvivas.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-moss flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-cream" />
              </div>
              <div>
                <p className="font-body font-semibold text-cream">Instagram</p>
                <p className="text-brown-light font-body text-sm">@raizesvivas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-moss flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-cream" />
              </div>
              <div>
                <p className="font-body font-semibold text-cream">Telefone</p>
                <p className="text-brown-light font-body text-sm">(11) 99999-0000</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-lg bg-card text-foreground border border-border font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-lg bg-card text-foreground border border-border font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Sua mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              rows={5}
              className="w-full px-5 py-3 rounded-lg bg-card text-foreground border border-border font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-moss text-cream font-body font-semibold rounded-lg hover:bg-moss-light transition-colors duration-300"
            >
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
