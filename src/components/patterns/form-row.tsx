import { cn } from "@/lib/cn";

type FormRowProps = {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
};

export function FormRow({
  label,
  required,
  hint,
  children,
  className,
}: FormRowProps) {
  return (
    <div className={cn("grid gap-2 md:grid-cols-[120px_1fr] md:items-center", className)}>
      <label className="text-[13px] font-medium text-[var(--foreground-strong)]">
        {label}
        {required ? <span className="ml-1 text-[#b91c1c]">*</span> : null}
        {hint ? (
          <span className="ml-2 text-[11px] font-normal text-[var(--foreground-muted)]">
            {hint}
          </span>
        ) : null}
      </label>
      <div>{children}</div>
    </div>
  );
}
