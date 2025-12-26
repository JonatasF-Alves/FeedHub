import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, MessageSquareText, Layers, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Agregação Multi-fonte",
    description: "Colete feedbacks do Google, Facebook, Instagram, Twitter, email e mais em um dashboard unificado.",
  },
  {
    icon: Brain,
    title: "IA Inteligente",
    description: "Nossa IA analisa sentimentos e sugere respostas personalizadas para cada feedback recebido.",
  },
  {
    icon: BarChart3,
    title: "Analytics Avançados",
    description: "Visualize tendências, métricas de satisfação e insights acionáveis em tempo real.",
  },
  {
    icon: MessageSquareText,
    title: "Respostas Automáticas",
    description: "Configure respostas automáticas inteligentes baseadas em categorias e sentimentos.",
  },
  {
    icon: Zap,
    title: "Tempo Real",
    description: "Receba notificações instantâneas de novos feedbacks e responda rapidamente.",
  },
  {
    icon: Shield,
    title: "Seguro & Confiável",
    description: "Seus dados protegidos com criptografia de ponta a ponta e backups automáticos.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">gerenciar feedbacks</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas poderosas para centralizar, analisar e responder feedbacks de forma eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="interactive"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
