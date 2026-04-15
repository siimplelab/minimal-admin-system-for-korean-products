import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-3 flex items-center justify-between gap-2", className)}>
      <div>
        <h2 className="text-[15px] font-semibold tracking-tight text-[var(--foreground-strong)]">
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
