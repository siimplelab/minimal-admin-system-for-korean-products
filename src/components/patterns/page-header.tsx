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
        "mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-4",
        className,
      )}
    >
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
          Admin Module
        </p>
        <h1 className="mt-1.5 text-[28px] font-bold tracking-tight text-[var(--foreground-strong)]">
          {title}
        </h1>
        {description ? (
          <p className="mt-1.5 text-[16px] text-[var(--foreground-muted)]">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  );
}
