import { Link, useNavigate, useParams } from "react-router-dom";
import { CHAPTERS, getChapterBySlug, type Block } from "@/data/chapters";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { BrailleCell } from "@/components/BrailleCell";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUp, BookOpen } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Chapter() {
  const { slug = "abertura" } = useParams();
  const chapter = getChapterBySlug(slug);
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (chapter) {
      document.title = `${chapter.title} — Braille Descomplicado`;
      window.requestAnimationFrame(() => titleRef.current?.focus({ preventScroll: true }));
      try {
        localStorage.setItem("ultimaLeitura", chapter.slug);
      } catch {
        // ignore
      }
    }
  }, [chapter]);

  if (!chapter) {
    return (
      <div className="prose">
        <h1>Capítulo não encontrado</h1>
        <Link to="/">Voltar ao início</Link>
      </div>
    );
  }

  const idx = CHAPTERS.findIndex((c) => c.slug === chapter.slug);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 border-b border-border/60 pb-6">
        {chapter.number !== undefined && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary/70">
            Capítulo {chapter.number}
          </p>
        )}
        <h1 ref={titleRef} tabIndex={-1} className="mt-2 text-3xl font-bold tracking-tight text-primary outline-none md:text-4xl">
          {chapter.title.replace(/^Capítulo \d+: ?/, "")}
        </h1>
      </header>

      {/* Navegação superior */}
      <nav
        aria-label="Navegação rápida"
        className="mb-8 flex"
      >
        <Button asChild variant="outline" size="sm" className="justify-start">
          <Link to="/sumario">
            <BookOpen /> Voltar ao sumário
          </Link>
        </Button>
      </nav>

      <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground">
        {chapter.blocks.map((b, i) => (
          <BlockRender key={i} block={b} />
        ))}
      </div>

      {/* Navegação */}
      <nav aria-label="Navegação entre capítulos" className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        {prev ? (
          <Button onClick={() => navigate(`/${prev.slug}`)} className="justify-start">
            <ArrowLeft /> Capítulo anterior: {prev.shortTitle}
          </Button>
        ) : <span />}
        <Button
          variant="ghost"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
        >
          <ArrowUp /> Topo
        </Button>
        {next ? (
          <Button onClick={() => navigate(`/${next.slug}`)} className="justify-end">
            Próximo capítulo: {next.shortTitle} <ArrowRight />
          </Button>
        ) : <span />}
      </nav>
    </article>
  );
}

function BlockRender({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 className="mt-8 text-2xl font-bold text-primary">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-6 text-xl font-semibold text-primary">{block.text}</h3>;
    case "ol":
      return (
        <ol className="ml-6 list-decimal space-y-2 marker:text-primary">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      );
    case "ul":
      return (
        <ul className="ml-6 list-disc space-y-2 marker:text-primary">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      );
    case "image":
      return <ImagePlaceholder storageKey={block.key} alt={block.alt} />;
    case "video":
      return (
        <p className="rounded-lg border border-border bg-card p-4">
          🎬{" "}
          <a href={block.url} target="_blank" rel="noreferrer" className="font-medium text-primary underline">
            {block.label}
          </a>
        </p>
      );
    case "callout":
      return (
        <aside className="rounded-xl border-l-4 border-primary bg-accent/40 p-4 text-accent-foreground">
          {block.text}
        </aside>
      );
    case "interactive-cell":
      return <BrailleCell />;
  }
}
