import { cn } from "@/lib/cn";
import type { Option } from "@/types/common";

type RadioGroupProps = {
  name: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: Option[];
  className?: string;
};

export function RadioGroup({
  name,
  value,
  onValueChange,
  options,
  className,
}: RadioGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)} role="radiogroup">
      {options.map((option) => {
        const checked = option.value === value;

        return (
          <label
            key={option.value}
            className="inline-flex cursor-pointer items-center gap-2 text-sm text-[var(--foreground)]"
          >
            <input
              className="h-4 w-4 border-[var(--border-strong)] text-[var(--primary)] focus:ring-[var(--focus-ring)]"
              type="radio"
              name={name}
              value={option.value}
              checked={checked}
              onChange={(event) => onValueChange?.(event.target.value)}
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
