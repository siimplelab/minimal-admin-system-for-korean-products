import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";
import type { Option } from "@/types/common";

type SelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
};

export function Select({
  options,
  value,
  onChange,
  placeholder,
  className,
  disabled,
  name,
}: SelectProps) {
  return (
    <div className={cn("relative", className)}>
      <select
        name={name}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="h-11 w-full appearance-none rounded-md border border-[var(--border-strong)] bg-[var(--input-bg)] px-4 pr-10 text-[15px] text-[var(--foreground)] focus-visible:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
      />
    </div>
  );
}
