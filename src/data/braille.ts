// Mapeamento dos 64 sinais Braille (cela de 6 pontos).
// Cada chave é uma máscara binária dos 6 pontos: bit 0 = ponto 1, bit 1 = ponto 2,
// bit 2 = ponto 3, bit 3 = ponto 4, bit 4 = ponto 5, bit 5 = ponto 6.

export type DotMask = number;

export interface BrailleSign {
  mask: DotMask;
  dots: number[]; // pontos ativos, ex: [1,2,4]
  unicode: string; // U+2800..U+283F
  letter?: string; // letra associada (Grade 1 PT)
  number?: string; // dígito quando precedido pelo indicador numérico
  description: string; // descrição acessível
  series?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export const dotsToMask = (dots: number[]): DotMask =>
  dots.reduce((m, d) => m | (1 << (d - 1)), 0);

export const maskToDots = (mask: DotMask): number[] => {
  const out: number[] = [];
  for (let i = 0; i < 6; i++) if (mask & (1 << i)) out.push(i + 1);
  return out;
};

export const maskToUnicode = (mask: DotMask): string =>
  String.fromCharCode(0x2800 + mask);

// Letras (Grade 1, base + acentuadas comuns em PT-BR)
const letterDefs: Array<{ letter: string; dots: number[]; series: 1 | 2 | 3 | 4 | 5 | 6 | 7 }> = [
  // 1ª série (a-j)
  { letter: "a", dots: [1], series: 1 },
  { letter: "b", dots: [1, 2], series: 1 },
  { letter: "c", dots: [1, 4], series: 1 },
  { letter: "d", dots: [1, 4, 5], series: 1 },
  { letter: "e", dots: [1, 5], series: 1 },
  { letter: "f", dots: [1, 2, 4], series: 1 },
  { letter: "g", dots: [1, 2, 4, 5], series: 1 },
  { letter: "h", dots: [1, 2, 5], series: 1 },
  { letter: "i", dots: [2, 4], series: 1 },
  { letter: "j", dots: [2, 4, 5], series: 1 },
  // 2ª série (k-t) = 1ª + ponto 3
  { letter: "k", dots: [1, 3], series: 2 },
  { letter: "l", dots: [1, 2, 3], series: 2 },
  { letter: "m", dots: [1, 3, 4], series: 2 },
  { letter: "n", dots: [1, 3, 4, 5], series: 2 },
  { letter: "o", dots: [1, 3, 5], series: 2 },
  { letter: "p", dots: [1, 2, 3, 4], series: 2 },
  { letter: "q", dots: [1, 2, 3, 4, 5], series: 2 },
  { letter: "r", dots: [1, 2, 3, 5], series: 2 },
  { letter: "s", dots: [2, 3, 4], series: 2 },
  { letter: "t", dots: [2, 3, 4, 5], series: 2 },
  // 3ª série (u, v, x, y, z, ç) = 1ª + pontos 3 e 6
  { letter: "u", dots: [1, 3, 6], series: 3 },
  { letter: "v", dots: [1, 2, 3, 6], series: 3 },
  { letter: "x", dots: [1, 3, 4, 6], series: 3 },
  { letter: "y", dots: [1, 3, 4, 5, 6], series: 3 },
  { letter: "z", dots: [1, 3, 5, 6], series: 3 },
  { letter: "ç", dots: [1, 2, 3, 4, 6], series: 3 },
  // w (exceção) — pontos 2,4,5,6
  { letter: "w", dots: [2, 4, 5, 6], series: 3 },
  // 4ª série (vogais acentuadas) — formada pela 1ª + ponto 6
  { letter: "â", dots: [1, 6], series: 4 },
  { letter: "ê", dots: [1, 2, 6], series: 4 },
  { letter: "î", dots: [1, 4, 6], series: 4 },
  { letter: "ô", dots: [1, 4, 5, 6], series: 4 },
  { letter: "û", dots: [1, 5, 6], series: 4 },
  // 5ª série (vogais com til/agudo selecionadas)
  { letter: "á", dots: [1, 2, 3, 5, 6], series: 5 },
  { letter: "é", dots: [1, 2, 3, 4, 5, 6], series: 5 },
  { letter: "í", dots: [3, 4], series: 5 },
  { letter: "ó", dots: [3, 4, 6], series: 5 },
  { letter: "ú", dots: [2, 3, 4, 5, 6], series: 5 },
  { letter: "ã", dots: [3, 4, 5], series: 5 },
  { letter: "õ", dots: [2, 4, 6], series: 5 },
  { letter: "ü", dots: [1, 2, 5, 6], series: 5 },
  { letter: "à", dots: [1, 2, 4, 6], series: 5 },
];

// Números: usam a 1ª série precedida do indicador numérico (3,4,5,6)
const numberMap: Record<string, string> = {
  a: "1", b: "2", c: "3", d: "4", e: "5",
  f: "6", g: "7", h: "8", i: "9", j: "0",
};

// Símbolos especiais e pontuação comuns
const specialDefs: Array<{ dots: number[]; description: string }> = [
  { dots: [], description: "Cela vazia (espaço)" },
  { dots: [3, 4, 5, 6], description: "Indicador de número" },
  { dots: [4, 6], description: "Indicador de maiúscula" },
  { dots: [2], description: "Vírgula" },
  { dots: [2, 5, 6], description: "Ponto final" },
  { dots: [2, 3], description: "Ponto e vírgula" },
  { dots: [2, 5], description: "Dois pontos" },
  { dots: [2, 3, 5], description: "Ponto de interrogação" },
  { dots: [2, 3, 5, 6], description: "Ponto de exclamação" },
  { dots: [3, 6], description: "Hífen" },
  { dots: [5], description: "Apóstrofo / acento" },
  { dots: [6], description: "Sinal de reforço" },
  { dots: [1, 2, 3, 4, 5, 6], description: "Símbolo gerador (cela cheia)" },
];

// Construir o mapa completo dos 64 sinais
const map = new Map<DotMask, BrailleSign>();

for (let mask = 0; mask < 64; mask++) {
  map.set(mask, {
    mask,
    dots: maskToDots(mask),
    unicode: maskToUnicode(mask),
    description: mask === 0 ? "Cela vazia (espaço)" : `Combinação de pontos ${maskToDots(mask).join(", ")}`,
  });
}

// Aplicar letras
for (const def of letterDefs) {
  const mask = dotsToMask(def.dots);
  const existing = map.get(mask)!;
  map.set(mask, {
    ...existing,
    letter: def.letter,
    series: def.series,
    description: `Letra ${def.letter.toUpperCase()} — pontos ${def.dots.join(", ")}`,
    number: numberMap[def.letter],
  });
}

// Aplicar especiais (sobrescreve descrição quando aplicável)
for (const sp of specialDefs) {
  const mask = dotsToMask(sp.dots);
  const existing = map.get(mask)!;
  map.set(mask, { ...existing, description: sp.description });
}

export const brailleMap = map;

export function lookupSign(mask: DotMask): BrailleSign {
  return map.get(mask)!;
}

export const ALL_SIGNS: BrailleSign[] = Array.from(map.values()).sort((a, b) => a.mask - b.mask);

export const FIRST_SERIES = ALL_SIGNS.filter((s) => s.series === 1);
export const SECOND_SERIES = ALL_SIGNS.filter((s) => s.series === 2);
export const THIRD_SERIES = ALL_SIGNS.filter((s) => s.series === 3);
