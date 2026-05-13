import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import Chapter from "./pages/Chapter.tsx";
import CelaPage from "./pages/CelaPage.tsx";
import Sumario from "./pages/Sumario.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />

            <Route path="/inicio" element={<Index />} />
            <Route path="/sumario" element={<Sumario />} />
            <Route path="/cela" element={<CelaPage />} />

            <Route path="/:slug" element={<Chapter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;