import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function   Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">FeedHub</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/dashboard">Entrar</Link>
          </Button>
          <Button variant="hero" className="gap-2" asChild>
            <Link to="/dashboard">
              <Sparkles className="w-4 h-4" />
              Criar conta
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
