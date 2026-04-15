import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/cn";

type CheckboxProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled,
  className,
  ...props
}: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "flex h-4 w-4 items-center justify-center rounded-[4px] border border-[var(--border-strong)] bg-white text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-50",
        checked && "border-[var(--foreground-strong)] bg-[var(--foreground-strong)]",
        className,
      )}
      {...props}
    >
      {checked ? <Check size={12} strokeWidth={3} /> : null}
    </button>
  );
}
