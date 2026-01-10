import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  delay?: number;
}

const PricingCard = ({ name, price, description, features, featured = false, delay = 0 }: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]",
        "opacity-0 animate-fade-in",
        featured
          ? "bg-gradient-to-b from-secondary to-card border-2 border-primary/30 card-glow animate-pulse-glow"
          : "bg-card border border-border hover:border-primary/20"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="gradient-text bg-gradient-to-r from-[hsl(190,100%,50%)] to-[hsl(220,100%,60%)] px-4 py-1 rounded-full text-sm font-semibold border border-primary/30 bg-clip-text">
            Mais Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={cn(
          "text-xl font-bold mb-2",
          featured ? "gradient-text" : "text-foreground"
        )}>
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">R$</span>
          <span className={cn(
            "text-5xl font-extrabold tracking-tight",
            featured ? "gradient-text" : "text-foreground"
          )}>
            {price}
          </span>
          <span className="text-muted-foreground">/mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={cn(
              "rounded-full p-1 mt-0.5",
              featured ? "bg-primary/20" : "bg-secondary"
            )}>
              <Check className={cn(
                "w-3.5 h-3.5",
                featured ? "text-primary" : "text-muted-foreground"
              )} />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? "featured" : "outline"}
        size="lg"
        className="w-full"
      >
        {featured ? "Começar Agora" : "Selecionar Plano"}
      </Button>
    </div>
  );
};

export default PricingCard;
