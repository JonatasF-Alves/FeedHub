import { MessageSquare, Instagram, Twitter, Facebook, Linkedin, Globe, Zap, Shield, BarChart3 } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import IntegrationBadge from "@/components/IntegrationBadge";

const plans = [
  {
    name: "Básico",
    price: "19,90",
    description: "Ideal para otimizar o seu atendimento ao cliente",
    features: [
      "Até 500 feedbacks/mês",
      "1 widget de feedback",
      "Integração com 2 redes",
      "Dashboard básico",
      "Suporte por email",
      "Relatórios semanais",
    ],
  },
  {
    name: "Profissional",
    price: "49,90",
    description: "Alavanque seu negócio com insights avançados",
    features: [
      "Até 5.000 feedbacks/mês",
      "Widgets ilimitados",
      "Integração com 4 redes",
      "Dashboard avançado com analytics",
      "Suporte prioritário",
      "Relatórios personalizados",
      "Marca personalizada",
    ],
    featured: true,
  },
  {
    name: "Empresarial",
    price: "99,90",
    description: "Para grandes operações e equipes",
    features: [
      "Feedbacks ilimitados",
      "Widgets ilimitados",
      "Todas as integrações + API avançada",
      "avançado com analytics e previsões",
      "Suporte dedicado",
      "Relatórios em tempo real",
      "Treinamento personalizado",
    ],
  },
];

const integrations = [
  { icon: Instagram, name: "Instagram" },
  { icon: Twitter, name: "Twitter/X" },
  { icon: Facebook, name: "Facebook" },
  { icon: Linkedin, name: "LinkedIn" },
  { icon: Globe, name: "Website" },
  { icon: MessageSquare, name: "WhatsApp" },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 pb-4 px-4">
          <div className="container mx-auto flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FeedHub</span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-16 pb-8 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 opacity-0 animate-fade-in">
              <span className="text-foreground">Colete Feedbacks de</span>
              <br />
              <span className="gradient-text">Todas as Plataformas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Centralize feedbacks de clientes de redes sociais, websites e mais em um único lugar. Tome decisões baseadas em dados reais.
            </p>

            {/* Integration badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {integrations.map((integration, index) => (
                <IntegrationBadge
                  key={integration.name}
                  icon={integration.icon}
                  name={integration.name}
                  delay={400 + index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Pills */}
        <section className="pb-8 px-4">
          <div className="container mx-auto flex flex-wrap justify-center gap-6 max-w-3xl">
            <div className="flex items-center gap-2 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm">otimize seu negócio em minutos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Dados seguros (LGPD)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-sm">Analytics em tempo real</span>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
                Escolha seu Plano
              </h2>
              <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
                Sem taxas ocultas. Cancele quando quiser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <PricingCard
                  key={plan.name}
                  {...plan}
                  delay={500 + index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center opacity-0 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <div className="bg-gradient-to-b from-secondary/50 to-card border border-border rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-8">
                Teste grátis por 14 dias. Sem cartão de crédito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(190,100%,50%)] to-[hsl(220,100%,60%)] text-primary-foreground font-semibold h-12 px-8 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  Começar Teste Grátis
                </button>
                <button className="inline-flex items-center justify-center gap-2 border border-border bg-transparent text-foreground font-semibold h-12 px-8 rounded-xl hover:bg-secondary hover:border-primary/50 transition-all duration-300">
                  Falar com Vendas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>© 2025 FeedbackHub. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Plans;