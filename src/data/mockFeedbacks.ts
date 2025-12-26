export type Sentiment = "positive" | "neutral" | "negative";
export type Source = "google" | "facebook" | "instagram" | "twitter" | "email" | "whatsapp" | "reclameaqui";

export interface Feedback {
  id: string;
  source: Source;
  author: string;
  avatar?: string;
  content: string;
  sentiment: Sentiment;
  rating?: number;
  createdAt: Date;
  responded: boolean;
  category: string;
}

export const mockFeedbacks: Feedback[] = [
  {
    id: "1",
    source: "google",
    author: "Maria Silva",
    content: "Excelente atendimento! A equipe foi super atenciosa e resolveu meu problema rapidamente. Recomendo demais!",
    sentiment: "positive",
    rating: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
    responded: false,
    category: "Atendimento",
  },
  {
    id: "2",
    source: "facebook",
    author: "João Santos",
    content: "Produto chegou com defeito e ainda estou aguardando a troca. Já faz uma semana e ninguém me dá retorno.",
    sentiment: "negative",
    rating: 1,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    responded: false,
    category: "Produto",
  },
  {
    id: "3",
    source: "instagram",
    author: "Ana Oliveira",
    content: "Amei a nova coleção! Super moderna e com preços justos. 💕",
    sentiment: "positive",
    rating: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    responded: true,
    category: "Produto",
  },
  {
    id: "4",
    source: "twitter",
    author: "@carlostech",
    content: "O app tá travando muito ultimamente. Alguém mais com esse problema?",
    sentiment: "negative",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
    responded: false,
    category: "Técnico",
  },
  {
    id: "5",
    source: "email",
    author: "Roberto Ferreira",
    content: "Gostaria de saber se vocês fazem entrega para o interior de SP. Aguardo resposta.",
    sentiment: "neutral",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    responded: true,
    category: "Dúvida",
  },
  {
    id: "6",
    source: "reclameaqui",
    author: "Lucia Mendes",
    content: "PÉSSIMO! Comprei um produto e nunca chegou. Quero meu dinheiro de volta!",
    sentiment: "negative",
    rating: 1,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    responded: false,
    category: "Entrega",
  },
  {
    id: "7",
    source: "whatsapp",
    author: "+55 11 99999-0000",
    content: "Boa tarde, consegui resolver aqui. Obrigado pelo suporte!",
    sentiment: "positive",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
    responded: true,
    category: "Suporte",
  },
  {
    id: "8",
    source: "google",
    author: "Pedro Costa",
    content: "Bom custo-benefício. Poderia melhorar a embalagem, mas no geral ok.",
    sentiment: "neutral",
    rating: 3,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    responded: false,
    category: "Produto",
  },
];

export const sourceConfig: Record<Source, { label: string; color: string; bgColor: string }> = {
  google: { label: "Google", color: "text-blue-400", bgColor: "bg-blue-500/20" },
  facebook: { label: "Facebook", color: "text-blue-500", bgColor: "bg-blue-600/20" },
  instagram: { label: "Instagram", color: "text-pink-400", bgColor: "bg-pink-500/20" },
  twitter: { label: "Twitter/X", color: "text-slate-400", bgColor: "bg-slate-500/20" },
  email: { label: "Email", color: "text-amber-400", bgColor: "bg-amber-500/20" },
  whatsapp: { label: "WhatsApp", color: "text-emerald-400", bgColor: "bg-emerald-500/20" },
  reclameaqui: { label: "Reclame Aqui", color: "text-orange-400", bgColor: "bg-orange-500/20" },
};

export const sentimentConfig: Record<Sentiment, { label: string; color: string; bgColor: string }> = {
  positive: { label: "Positivo", color: "text-success", bgColor: "bg-success/20" },
  neutral: { label: "Neutro", color: "text-muted-foreground", bgColor: "bg-muted" },
  negative: { label: "Negativo", color: "text-destructive", bgColor: "bg-destructive/20" },
};
