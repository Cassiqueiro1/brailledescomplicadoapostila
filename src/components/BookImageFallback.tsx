interface BookImageFallbackProps {
  storageKey: string;
  alt: string;
}

type VisualKind =
  | "reading"
  | "portrait"
  | "building"
  | "daily"
  | "tools"
  | "cell"
  | "hands"
  | "letters"
  | "reglete"
  | "author"
  | "generic";

const visualKinds: Record<string, VisualKind> = {
  MONTAGEM_LEITURA: "reading",
  BUSTO_LOUIS_BRAILLE: "portrait",
  FACHADA_IBC: "building",
  BRAILLE_COTIDIANO: "daily",
  ATIVIDADES_TATEIS: "tools",
  LEGO_BRAILLE: "tools",
  JOGOS_PRE_BRAILLE: "tools",
  CELA_CHEIA_VAZIA: "cell",
  CELA_LEITURA: "cell",
  CELA_ESCRITA: "cell",
  CELA_CORTE_SUPERIOR: "cell",
  SERIES_SUPERIOR_INFERIOR: "cell",
  COLUNAS: "cell",
  SIMPLES_COMPOSTO: "cell",
  MODELOS_ALFABRAILLE: "tools",
  ALFABRAILLE_CAIXA_OVOS: "tools",
  MAOS_TATEANDO: "hands",
  JOGOS_LETRAS: "letters",
  NUMEROS_BRAILLE: "letters",
  MAIUSCULAS_BRAILLE: "letters",
  PALAVRAS_5: "letters",
  SEGUNDA_SERIE: "letters",
  TERCEIRA_SERIE: "letters",
  PALAVRAS_8: "letters",
  LETRA_W: "letters",
  LINHAS: "letters",
  BRAILLE_ACETATO: "letters",
  BRAILLETE_FOLHA: "letters",
  POSICAO_MAOS: "hands",
  PESSOA_LENDO: "reading",
  QUADRO_7_SERIES: "letters",
  TIPOS_REGLETE: "reglete",
  REGLETE_PASSO_A_PASSO: "reglete",
  TRANSCRICAO: "hands",
  FOTO_AUTORA: "author",
};

const shortTitles: Record<string, string> = {
  MONTAGEM_LEITURA: "Leitura em tinta e Braille",
  BUSTO_LOUIS_BRAILLE: "Louis Braille",
  FACHADA_IBC: "Instituto Benjamin Constant",
  BRAILLE_COTIDIANO: "Braille no cotidiano",
  ATIVIDADES_TATEIS: "Atividades táteis",
  LEGO_BRAILLE: "Braille Bricks",
  JOGOS_PRE_BRAILLE: "Jogos pré-Braille",
  FOTO_AUTORA: "Luciane Molina · Braillu",
};

export function BookImageFallback({ storageKey, alt }: BookImageFallbackProps) {
  const kind = visualKinds[storageKey] ?? "generic";
  const title = shortTitles[storageKey] ?? humanizeKey(storageKey);

  return (
    <div
      role="img"
      aria-label={alt}
      className="relative h-full w-full overflow-hidden bg-gradient-to-br from-secondary/70 via-card to-accent/40"
    >
      <BrailleTexture />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {kind === "reading" && <ReadingScene />}
        {kind === "portrait" && <PortraitScene />}
        {kind === "building" && <BuildingScene />}
        {kind === "daily" && <DailyScene />}
        {kind === "tools" && <ToolsScene />}
        {kind === "cell" && <CellScene storageKey={storageKey} />}
        {kind === "hands" && <HandsScene />}
        {kind === "letters" && <LettersScene storageKey={storageKey} />}
        {kind === "reglete" && <RegleteScene />}
        {kind === "author" && <AuthorScene />}
        {kind === "generic" && <GenericScene />}
      </div>
      <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-md border border-border/70 bg-background/85 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{title}</p>
      </div>
    </div>
  );
}

function humanizeKey(key: string) {
  return key
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function BrailleTexture() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 800 450" preserveAspectRatio="none">
      {Array.from({ length: 13 }).map((_, row) =>
        Array.from({ length: 24 }).map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={34 + col * 34}
            cy={28 + row * 34}
            r={(row + col) % 4 === 0 ? 3.2 : 1.8}
            fill="hsl(var(--primary) / 0.22)"
          />
        )),
      )}
    </svg>
  );
}

function ReadingScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      <rect x="86" y="90" width="210" height="154" rx="14" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="4" />
      <rect x="344" y="90" width="210" height="154" rx="14" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="4" />
      <path d="M116 128h116M116 154h98M116 180h126M116 206h82" stroke="hsl(var(--muted-foreground) / 0.55)" strokeWidth="9" strokeLinecap="round" />
      <BrailleDots x={386} y={125} rows={4} columns={8} />
      <path d="M355 235c35-15 78-14 121 0" stroke="hsl(var(--primary))" strokeWidth="12" strokeLinecap="round" />
      <path d="M120 255c35 26 91 26 128 0" stroke="hsl(var(--primary) / 0.35)" strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}

function PortraitScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-xl" viewBox="0 0 520 340">
      <path d="M260 44c-54 0-92 42-92 96 0 49 31 83 67 94l-20 42h90l-20-42c38-12 67-45 67-94 0-54-38-96-92-96Z" fill="hsl(var(--primary) / 0.20)" stroke="hsl(var(--primary))" strokeWidth="5" />
      <path d="M174 286h172l26 34H148l26-34Z" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="5" />
      <circle cx="229" cy="139" r="8" fill="hsl(var(--foreground) / 0.55)" />
      <circle cx="291" cy="139" r="8" fill="hsl(var(--foreground) / 0.55)" />
      <path d="M228 184c22 16 45 16 66 0" stroke="hsl(var(--foreground) / 0.45)" strokeWidth="7" strokeLinecap="round" />
      <BrailleDots x={205} y={246} rows={2} columns={6} />
    </svg>
  );
}

function BuildingScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      <path d="M114 132 320 48l206 84Z" fill="hsl(var(--primary) / 0.22)" stroke="hsl(var(--primary))" strokeWidth="5" />
      <rect x="146" y="132" width="348" height="166" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      {[190, 260, 330, 400].map((x) => (
        <g key={x}>
          <rect x={x} y="156" width="38" height="118" rx="6" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="4" />
          <path d={`M${x + 9} 178h20M${x + 9} 205h20M${x + 9} 232h20`} stroke="hsl(var(--primary) / 0.42)" strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
      <rect x="118" y="298" width="404" height="26" rx="8" fill="hsl(var(--primary) / 0.18)" />
    </svg>
  );
}

function DailyScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      {[
        [92, 74, 130, 86],
        [256, 74, 130, 86],
        [420, 74, 130, 86],
        [174, 200, 130, 86],
        [338, 200, 130, 86],
      ].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="16" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="4" />
          <BrailleDots x={x + 26} y={y + 24} rows={2} columns={4} size={5} gap={16} />
          <path d={`M${x + 26} ${y + 64}h76`} stroke="hsl(var(--primary) / 0.55)" strokeWidth="7" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function ToolsScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      <rect x="96" y="84" width="168" height="168" rx="18" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      <BrailleDots x={127} y={116} rows={4} columns={4} size={8} gap={30} />
      <rect x="320" y="86" width="60" height="60" rx="10" fill="hsl(var(--primary) / 0.22)" stroke="hsl(var(--primary))" strokeWidth="4" />
      <rect x="390" y="126" width="60" height="60" rx="10" fill="hsl(var(--accent))" stroke="hsl(var(--border))" strokeWidth="4" />
      <rect x="460" y="166" width="60" height="60" rx="10" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="4" />
      <path d="M324 260c48-30 113-28 164 0" stroke="hsl(var(--primary) / 0.45)" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

function CellScene({ storageKey }: { storageKey: string }) {
  const isWriting = storageKey.includes("ESCRITA");
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-xl" viewBox="0 0 520 340">
      <rect x="126" y="48" width="268" height="248" rx="34" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => {
          const number = isWriting ? [4, 1, 5, 2, 6, 3][row * 2 + col] : [1, 4, 2, 5, 3, 6][row * 2 + col];
          return (
            <g key={`${row}-${col}`}>
              <circle cx={204 + col * 112} cy={100 + row * 70} r="23" fill="hsl(var(--primary) / 0.24)" stroke="hsl(var(--primary))" strokeWidth="5" />
              <text x={204 + col * 112} y={108 + row * 70} textAnchor="middle" fontSize="22" fontWeight="700" fill="hsl(var(--primary))">
                {number}
              </text>
            </g>
          );
        }),
      )}
    </svg>
  );
}

function HandsScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      <rect x="136" y="86" width="368" height="168" rx="18" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      <BrailleDots x={184} y={124} rows={4} columns={12} size={4.5} gap={18} />
      <path d="M164 278c48-68 100-76 148-21" fill="none" stroke="hsl(var(--primary) / 0.42)" strokeWidth="28" strokeLinecap="round" />
      <path d="M476 278c-48-68-100-76-148-21" fill="none" stroke="hsl(var(--primary) / 0.42)" strokeWidth="28" strokeLinecap="round" />
    </svg>
  );
}

function LettersScene({ storageKey }: { storageKey: string }) {
  const label = storageKey.includes("NUMEROS") ? "123" : storageKey.includes("LETRA_W") ? "W" : "ABC";
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      {[92, 206, 320, 434].map((x, i) => (
        <g key={x}>
          <rect x={x} y="82" width="88" height="128" rx="15" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="4" />
          <BrailleDots x={x + 24} y={110} rows={3} columns={2} size={6} gap={20} />
          <text x={x + 44} y="252" textAnchor="middle" fontSize="34" fontWeight="800" fill="hsl(var(--primary))">
            {label[i % label.length]}
          </text>
        </g>
      ))}
    </svg>
  );
}

function RegleteScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-2xl" viewBox="0 0 640 360">
      <rect x="92" y="124" width="456" height="112" rx="18" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={116 + i * 42} y="148" width="28" height="64" rx="9" fill="hsl(var(--secondary))" stroke="hsl(var(--primary) / 0.45)" strokeWidth="3" />
      ))}
      <path d="M164 262h312" stroke="hsl(var(--primary) / 0.55)" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

function AuthorScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-xl" viewBox="0 0 520 340">
      <circle cx="260" cy="120" r="58" fill="hsl(var(--primary) / 0.22)" stroke="hsl(var(--primary))" strokeWidth="5" />
      <path d="M160 296c18-74 68-108 100-108s82 34 100 108" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      <rect x="318" y="174" width="84" height="102" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="4" />
      <BrailleDots x={338} y={200} rows={3} columns={3} size={4.5} gap={16} />
    </svg>
  );
}

function GenericScene() {
  return (
    <svg aria-hidden className="h-full max-h-80 w-full max-w-xl" viewBox="0 0 520 340">
      <path d="M116 92c52-26 99-24 144 0v166c-46-24-93-26-144 0Z" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      <path d="M260 92c45-24 92-26 144 0v166c-51-26-98-24-144 0Z" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="5" />
      <BrailleDots x={150} y={130} rows={4} columns={4} />
      <BrailleDots x={302} y={130} rows={4} columns={4} />
    </svg>
  );
}

function BrailleDots({ x, y, rows, columns, size = 4, gap = 18 }: { x: number; y: number; rows: number; columns: number; size?: number; gap?: number }) {
  return (
    <g>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={x + col * gap}
            cy={y + row * gap}
            r={(row + col) % 3 === 0 ? size : size * 0.62}
            fill={(row + col) % 3 === 0 ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.22)"}
          />
        )),
      )}
    </g>
  );
}