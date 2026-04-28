import { cn } from "@/lib/utils";

interface BrailleLogoProps {
  className?: string;
}

export function BrailleLogo({ className }: BrailleLogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 88"
      className={cn("h-6 w-5", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="88" rx="18" fill="hsl(var(--primary))" />
      {[18, 44].map((cx) =>
        [20, 44, 68].map((cy) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8.5" fill="hsl(var(--primary-foreground))" />
        )),
      )}
    </svg>
  );
}