import { cn } from "@/lib/cn";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--border)] pb-3",
        className,
      )}
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
          Admin Module
        </p>
        <h1 className="mt-1 text-[22px] font-bold tracking-tight text-[var(--foreground-strong)]">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 text-sm text-[var(--foreground-muted)]">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  );
}
