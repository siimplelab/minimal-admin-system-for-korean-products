import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  action,
  icon,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-3 flex items-center justify-between gap-2", className)}>
      <div>
        <h2 className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[var(--foreground-strong)]">
          {icon ? (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground-muted)]">
              {icon}
            </span>
          ) : null}
          {title}
        </h2>
        {description ? (
          <p className="mt-0.5 text-[13px] text-[var(--foreground-muted)]">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
