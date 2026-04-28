import { useEffect } from "react";
import { BrailleCell } from "@/components/BrailleCell";

export default function CelaPage() {
  useEffect(() => {
    document.title = "Cela Braille Interativa — Braille Descomplicado";
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Cela Braille Interativa
        </h1>
        <p className="mt-2 text-muted-foreground">
          Explore os 64 símbolos do Sistema Braille tocando ou clicando nos seis pontos da cela.
          Acessível por toque, mouse e teclado, compatível com leitores de tela.
        </p>
      </header>

      <BrailleCell />
    </div>
  );
}
