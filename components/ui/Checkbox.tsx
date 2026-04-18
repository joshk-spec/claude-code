import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex cursor-pointer items-center gap-3 text-sm text-ink",
          props.disabled && "cursor-not-allowed opacity-60",
          className,
        )}
      >
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-border-soft bg-cream checked:border-navy checked:bg-navy focus:outline-none focus:ring-2 focus:ring-brass/40"
            {...props}
          />
          <Check
            className="pointer-events-none absolute h-3.5 w-3.5 text-cream opacity-0 peer-checked:opacity-100"
            strokeWidth={3}
            aria-hidden
          />
        </span>
        {label ? <span>{label}</span> : null}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";
