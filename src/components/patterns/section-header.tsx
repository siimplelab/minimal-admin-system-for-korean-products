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
    <div className={cn("mb-4 flex items-center justify-between gap-3", className)}>
      <div>
        <h2 className="inline-flex items-center gap-2.5 text-[18px] font-semibold tracking-tight text-[var(--foreground-strong)]">
          {icon ? (
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground-muted)]">
              {icon}
            </span>
          ) : null}
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-[15px] text-[var(--foreground-muted)]">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
