import { cn } from "@/lib/cn";

type SwitchProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function Switch({
  checked = false,
  onCheckedChange,
  disabled,
  className,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative h-5 w-9 rounded-full border border-[var(--border-strong)] bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-50",
        checked && "border-[var(--foreground-strong)] bg-[var(--foreground-strong)]",
        className,
      )}
    >
      <span
        className={cn(
          "absolute left-[2px] top-[2px] h-3.5 w-3.5 rounded-full bg-[var(--foreground-muted)] transition-transform",
          checked && "translate-x-4 bg-white",
        )}
      />
    </button>
  );
}
