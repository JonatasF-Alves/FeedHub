import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(199_89%_48%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(222_47%_14%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(222_47%_14%_/_0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="info" className="mb-6 animate-fade-in">
            <Sparkles className="w-3 h-3 mr-1" />
            Powered by DJ
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Otimizando o seu negócio{" "}
            <span className="gradient-text">em 5 minutos</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Centralize feedbacks do Google, redes sociais, email e mais. 
            Use IA para entender sentimentos e responder de forma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/demo">
                Ver Demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button variant="glass" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/plans">
                Contratar
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10k+</div>
              <div className="text-sm text-muted-foreground">Feedbacks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Empresas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold gradient-text">
                4.9
                <Star className="w-5 h-5 fill-warning text-warning" />
              </div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
          </div>
        </div>

        {/* Floating cards preview */}
        <div className="mt-16 relative animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="glass rounded-2xl border border-border/50 p-4 max-w-5xl mx-auto shadow-2xl">
            <div className="bg-secondary/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="text-sm text-muted-foreground">Dashboard - FeedHub</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">Positivos</span>
                  </div>
                  <div className="text-2xl font-bold">1,234</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Total</span>
                  </div>
                  <div className="text-2xl font-bold">2,567</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">IA Respostas</span>
                  </div>
                  <div className="text-2xl font-bold">892</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
