import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, MessageSquare, Sparkles, Clock } from "lucide-react";
import { mockFeedbacks } from "@/data/mockFeedbacks";

export function DashboardStats() {
  const total = mockFeedbacks.length;
  const positive = mockFeedbacks.filter(f => f.sentiment === "positive").length;
  const negative = mockFeedbacks.filter(f => f.sentiment === "negative").length;
  const pending = mockFeedbacks.filter(f => !f.responded).length;

  const stats = [
    {
      label: "Total de Feedbacks",
      value: total,
      icon: MessageSquare,
      iconColor: "text-primary",
      iconBg: "bg-primary/20",
    },
    {
      label: "Positivos",
      value: positive,
      icon: TrendingUp,
      iconColor: "text-success",
      iconBg: "bg-success/20",
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      label: "Negativos",
      value: negative,
      icon: TrendingDown,
      iconColor: "text-destructive",
      iconBg: "bg-destructive/20",
      change: "-5%",
      changeType: "positive" as const,
    },
    {
      label: "Aguardando Resposta",
      value: pending,
      icon: Clock,
      iconColor: "text-warning",
      iconBg: "bg-warning/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} variant="elevated" className="overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                {stat.change && (
                  <p className={`text-xs mt-1 ${stat.changeType === "positive" ? "text-success" : "text-destructive"}`}>
                    {stat.change} vs mês anterior
                  </p>
                )}
              </div>
              <div className={`w-10 h-10 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
