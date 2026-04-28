import { Link } from "react-router-dom";
import { CHAPTERS } from "@/data/chapters";
import { useEffect } from "react";

export default function Sumario() {
  useEffect(() => {
    document.title = "Sumário — Braille Descomplicado";
  }, []);
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary md:text-4xl">Sumário</h1>
      <ol className="space-y-3">
        {CHAPTERS.map((c, i) => (
          <li key={c.slug}>
            <Link
              to={`/${c.slug}`}
              className="flex items-baseline justify-between gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/60"
            >
              <span className="font-medium">{c.title}</span>
              <span aria-hidden className="text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
