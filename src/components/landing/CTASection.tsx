import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(262_83%_58%_/_0.1)_0%,_transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Comece em menos de 5 minutos</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para transformar seus{" "}
            <span className="gradient-text">feedbacks em insights?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a empresas que já usam o FeedHub para melhorar 
            a experiência dos seus clientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/dashboard">
                Contratar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl">
              Suporte
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Venha fazer parte e revolucionar a forma como sua empresa lida com feedbacks!
          </p>
        </div>
      </div>
    </section>
  );
}
