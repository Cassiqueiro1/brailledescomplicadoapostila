import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { BookImageFallback } from "@/components/BookImageFallback";

interface Props {
  storageKey: string;
  alt: string;
}

const BUCKET = "book-images";

// Imagens enviadas pelo editor ficam no Lovable Cloud; quando o bucket do remix está vazio,
// usamos uma ilustração local estável para que o livro nunca fique com espaços quebrados.
export function ImagePlaceholder({ storageKey, alt }: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Resolve URL pública: lista arquivos do bucket com o prefixo desta chave
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .list("", { search: storageKey, limit: 100 });
      if (cancelled || error || !data?.length) return;
      // pega o mais recente que começa com `${storageKey}.`
      const match = data
        .filter((f) => f.name.startsWith(`${storageKey}.`))
        .sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""))[0];
      if (!match) return;
      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(match.name);
      setSrc(pub.publicUrl);
    })();

    return () => {
      cancelled = true;
    };
  }, [storageKey]);

  const handleFile = async (file: File) => {
    if (!alt.trim()) {
      toast({
        title: "ALT TEXT obrigatório",
        description: "Informe a descrição da imagem antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    setUploading(true);
    try {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
      const path = `${storageKey}.${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type || undefined,
      });
      if (error) throw error;
      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
      setSrc(pub.publicUrl);
      toast({ title: "Imagem enviada", description: "Disponível para todos os leitores." });
    } catch (e: any) {
      toast({
        title: "Falha no upload",
        description: e?.message ?? "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-secondary/60 to-accent/40">
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-contain p-3" loading="lazy" />
        ) : (
          <BookImageFallback storageKey={storageKey} alt={alt} />
        )}
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}
      </div>
      <figcaption className="border-t border-border/70 px-4 py-3 text-sm text-muted-foreground">
        {alt}
      </figcaption>
    </figure>
  );
}
