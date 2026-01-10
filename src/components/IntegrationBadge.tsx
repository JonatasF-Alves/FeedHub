import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IntegrationBadgeProps {
  icon: LucideIcon;
  name: string;
  delay?: number;
}

const IntegrationBadge = ({ icon: Icon, name, delay = 0 }: IntegrationBadgeProps) => {
  return (
    <div
      className="flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 opacity-0 animate-fade-in hover:border-primary/30 transition-colors duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-sm text-muted-foreground">{name}</span>
    </div>
  );
};

export default IntegrationBadge;
