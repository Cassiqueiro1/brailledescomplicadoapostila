import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CHAPTERS } from "@/data/chapters";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Hand, Sparkles } from "lucide-react";

const Index = () => {
  const [last, setLast] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Braille Descomplicado — Semeando Leitores e Escritores Competentes";
    try {
      setLast(localStorage.getItem("ultimaLeitura"));
    } catch {
      // ignore
    }
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 via-background to-accent/40 p-8 md:flex md:min-h-[36rem] md:items-center md:p-14 shadow-[var(--shadow-elegant)]"
      >
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Edição interativa · 2026
          </p>
          <h1 id="hero-title" className="text-4xl font-bold leading-tight tracking-tight text-primary md:text-6xl">
            Braille Descomplicado
          </h1>
          <p className="mt-3 text-xl font-medium text-foreground/90 md:text-2xl">
            Semeando Leitores e Escritores Competentes
          </p>
          <p className="mt-4 text-lg italic text-muted-foreground">
            Um percurso metodológico, sensorial e significativo
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Luciane Molina · Braillu</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to={`/${last ?? "abertura"}`}>
                {last && last !== "abertura" ? "Continuar leitura" : "Começar leitura"} <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/cela">
                <Hand /> Experimentar a cela interativa
              </Link>
            </Button>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
        />
      </section>
    </div>
  );
};

export default Index;
