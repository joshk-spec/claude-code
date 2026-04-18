import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "brass" | "navy" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-cream-dark text-navy",
  brass: "bg-brass/20 text-navy border border-brass/40",
  navy: "bg-navy text-cream",
  outline: "border border-border-soft text-ink",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
