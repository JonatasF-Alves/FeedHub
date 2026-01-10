import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { FeedbackList } from "@/components/dashboard/FeedbackList";
import { Button } from "@/components/ui/button";
import { Bell, Plus, RefreshCw } from "lucide-react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Gerencie todos os feedbacks em um só lugar
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="outline" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Sincronizar
              </Button>
              <Button variant="hero" className="gap-2">
                <Plus className="w-4 h-4" />
                Nova Integração
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          <DashboardStats />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Feedbacks Recentes</h2>
            <FeedbackList />
          </div>
        </div>
      </main>
    </div>
  );
}
