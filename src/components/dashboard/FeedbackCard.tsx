import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Feedback, sourceConfig, sentimentConfig } from "@/data/mockFeedbacks";
import { Sparkles, Star, Clock, CheckCircle2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface FeedbackCardProps {
  feedback: Feedback;
  onGenerateResponse: (feedback: Feedback) => void;
}

export function FeedbackCard({ feedback, onGenerateResponse }: FeedbackCardProps) {
  const source = sourceConfig[feedback.source];
  const sentiment = sentimentConfig[feedback.sentiment];

  return (
    <Card variant="interactive" className="group">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-semibold">
              {feedback.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium">{feedback.author}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {formatDistanceToNow(feedback.createdAt, { addSuffix: true, locale: ptBR })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {feedback.responded && (
              <Badge variant="success" className="gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Respondido
              </Badge>
            )}
            <Badge variant="source" className={`${source.bgColor} ${source.color}`}>
              {source.label}
            </Badge>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">{feedback.content}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={sentiment.color}>
              {sentiment.label}
            </Badge>
            <Badge variant="outline">{feedback.category}</Badge>
            {feedback.rating && (
              <div className="flex items-center gap-1 text-warning">
                {Array.from({ length: feedback.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            )}
          </div>

          {!feedback.responded && (
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity gap-2"
              onClick={() => onGenerateResponse(feedback)}
            >
              <Sparkles className="w-4 h-4" />
              Gerar Resposta
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
