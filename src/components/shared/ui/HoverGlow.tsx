import { cn } from "@/lib/utils";

interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "span";
}

export function HoverGlow({
  children,
  className,
  style,
  as = "div",
}: HoverGlowProps) {
  if (as === "span") {
    return (
      <span className={cn("hover-glow-root inline-block", className)} style={style}>
        {children}
      </span>
    );
  }

  return (
    <div className={cn("hover-glow-root", className)} style={style}>
      {children}
    </div>
  );
}
