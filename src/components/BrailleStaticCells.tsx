import { cn } from "@/lib/utils";

// Layout visual padrão (igual ao usado em BrailleCell): 2 colunas x 3 linhas,
// pontos na ordem 1,4 / 2,5 / 3,6.
const VISUAL_ORDER = [1, 4, 2, 5, 3, 6];

export interface StaticCell {
  dots: number[];
  caption?: string;
}

export interface StaticCellGroup {
  label?: string;
  cells: StaticCell[];
}

interface Props {
  groups: StaticCellGroup[];
  /** separa visualmente as celas dentro de um grupo como pares (ex.: d / f) */
  pairs?: boolean;
  ariaLabel?: string;
}

function Cell({ dots, caption }: StaticCell) {
  const active = new Set(dots);
  const label = `Cela com pontos ${dots.length ? dots.join(", ") : "vazios"}`;
  return (
    <figure className="flex flex-col items-center gap-2">
      <div
        role="img"
        aria-label={label}
        className="grid grid-cols-2 gap-2 rounded-xl bg-gradient-to-br from-secondary/60 to-accent/60 p-3 shadow-inner"
      >
        {VISUAL_ORDER.map((dot) => {
          const on = active.has(dot);
          return (
            <span
              key={dot}
              aria-hidden
              className={cn(
                "h-7 w-7 rounded-full border-2 md:h-8 md:w-8",
                on
                  ? "border-primary bg-primary shadow-[var(--shadow-glow)]"
                  : "border-border bg-background",
              )}
            />
          );
        })}
      </div>
      {caption && (
        <figcaption className="text-sm font-medium text-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

export function BrailleStaticCells({ groups, pairs, ariaLabel }: Props) {
  return (
    <section
      aria-label={ariaLabel}
      className="my-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
    >
      <div
        className={cn(
          "flex flex-wrap items-start justify-center",
          pairs ? "gap-x-10 gap-y-6" : "gap-6",
        )}
      >
        {groups.map((g, gi) => (
          <div
            key={gi}
            className={cn(
              "flex items-center gap-4",
              pairs && "rounded-xl border border-border/60 bg-background/50 px-4 py-3",
            )}
          >
            {g.label && (
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {g.label}
              </p>
            )}
            <div className="flex flex-wrap items-start justify-center gap-4">
              {g.cells.map((c, ci) => (
                <div key={ci} className="flex items-center gap-3">
                  {pairs && ci > 0 && (
                    <span aria-hidden className="text-lg font-bold text-muted-foreground">
                      /
                    </span>
                  )}
                  <Cell {...c} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
