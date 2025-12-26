import { Badge } from "@/components/ui/badge";

const sources = [
  { name: "Google Reviews", color: "bg-blue-500" },
  { name: "Facebook", color: "bg-blue-600" },
  { name: "Instagram", color: "bg-pink-500" },
  { name: "Twitter/X", color: "bg-slate-600" },
  { name: "TripAdvisor", color: "bg-green-500" },
  { name: "Email", color: "bg-amber-500" },
  { name: "WhatsApp", color: "bg-emerald-500" },
  { name: "Reclame Aqui", color: "bg-orange-500" },
];

export function SourcesSection() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Integrações com as principais plataformas
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {sources.map((source) => (
            <div
              key={source.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${source.color}`} />
              <span className="text-sm text-muted-foreground">{source.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
