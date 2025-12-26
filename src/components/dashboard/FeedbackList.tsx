import { useState } from "react";
import { FeedbackCard } from "./FeedbackCard";
import { AIResponseModal } from "./AIResponseModal";
import { mockFeedbacks, Feedback, Source, Sentiment } from "@/data/mockFeedbacks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export function FeedbackList() {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredFeedbacks = mockFeedbacks.filter((feedback) => {
    const matchesSearch = feedback.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "pending") return matchesSearch && !feedback.responded;
    if (activeTab === "positive") return matchesSearch && feedback.sentiment === "positive";
    if (activeTab === "negative") return matchesSearch && feedback.sentiment === "negative";
    return matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList className="bg-secondary/50">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="pending">Pendentes</TabsTrigger>
            <TabsTrigger value="positive">Positivos</TabsTrigger>
            <TabsTrigger value="negative">Negativos</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar feedbacks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-secondary/50 border-border/50"
          />
        </div>
      </div>

      <div className="space-y-3">
        {filteredFeedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            feedback={feedback}
            onGenerateResponse={setSelectedFeedback}
          />
        ))}

        {filteredFeedbacks.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Nenhum feedback encontrado.
          </div>
        )}
      </div>

      <AIResponseModal
        feedback={selectedFeedback}
        open={!!selectedFeedback}
        onClose={() => setSelectedFeedback(null)}
      />
    </div>
  );
}
