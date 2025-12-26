import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Feedback, sentimentConfig } from "@/data/mockFeedbacks";
import { Sparkles, Copy, Send, RefreshCw, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface AIResponseModalProps {
  feedback: Feedback | null;
  open: boolean;
  onClose: () => void;
}

const aiResponses: Record<string, string[]> = {
  positive: [
    "Muito obrigado pelo seu feedback positivo! 💙 Ficamos muito felizes em saber que você teve uma ótima experiência conosco. Sua satisfação é nossa maior motivação!",
    "Que alegria receber seu comentário! Trabalhamos todos os dias para oferecer o melhor atendimento e saber que conseguimos te ajudar nos deixa muito felizes. Conte sempre conosco!",
    "Uau! Comentários como o seu fazem nossa equipe sorrir! 😊 Agradecemos muito por compartilhar sua experiência. Esperamos vê-lo novamente em breve!",
  ],
  neutral: [
    "Obrigado por entrar em contato! Ficaremos felizes em ajudá-lo. Por favor, nos diga como podemos melhorar sua experiência.",
    "Agradecemos seu feedback! Gostaríamos de saber mais sobre sua experiência para podermos melhorar nossos serviços. Poderia nos dar mais detalhes?",
    "Olá! Recebemos sua mensagem e queremos garantir sua total satisfação. Como podemos ajudá-lo hoje?",
  ],
  negative: [
    "Lamentamos muito pelo ocorrido e entendemos sua frustração. Isso não representa o padrão que buscamos oferecer. Já estamos trabalhando para resolver seu problema com a máxima prioridade. Entraremos em contato em até 24h.",
    "Pedimos sinceras desculpas pela experiência negativa. Levamos seu feedback muito a sério e queremos fazer o possível para resolver essa situação. Nosso time de atendimento entrará em contato imediatamente.",
    "Sentimos muito por não termos atendido suas expectativas. Estamos tomando providências imediatas para resolver seu problema. Você poderia nos enviar mais detalhes por DM para agilizarmos a solução?",
  ],
};

export function AIResponseModal({ feedback, open, onClose }: AIResponseModalProps) {
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (feedback && open) {
      generateResponse();
    }
  }, [feedback, open]);

  const generateResponse = () => {
    if (!feedback) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const responses = aiResponses[feedback.sentiment];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setResponse(randomResponse);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(response);
    setCopied(true);
    toast({
      title: "Copiado!",
      description: "Resposta copiada para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    toast({
      title: "Resposta enviada!",
      description: "A resposta foi enviada com sucesso.",
    });
    onClose();
  };

  if (!feedback) return null;

  const sentiment = sentimentConfig[feedback.sentiment];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Resposta Gerada por IA
          </DialogTitle>
          <DialogDescription>
            Resposta sugerida para o feedback de {feedback.author}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium">Feedback original:</span>
              <Badge variant="outline" className={sentiment.color}>
                {sentiment.label}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{feedback.content}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Resposta sugerida:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={generateResponse}
                disabled={isGenerating}
                className="gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
                Regenerar
              </Button>
            </div>
            
            {isGenerating ? (
              <div className="h-32 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  Gerando resposta...
                </div>
              </div>
            ) : (
              <Textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="min-h-[120px] bg-secondary/30 border-border/50 resize-none"
              />
            )}
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={copyToClipboard} className="gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copiado" : "Copiar"}
            </Button>
            <Button variant="hero" onClick={handleSend} className="gap-2">
              <Send className="w-4 h-4" />
              Enviar Resposta
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
