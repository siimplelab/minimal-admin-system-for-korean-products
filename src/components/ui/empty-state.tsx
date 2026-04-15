import { Inbox } from "lucide-react";

import { cn } from "@/lib/cn";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-[var(--border-strong)] bg-white px-6 py-10 text-center",
        className,
      )}
    >
      <div className="mb-3 rounded-full bg-[var(--surface-muted)] p-2">
        <Inbox size={16} className="text-[var(--foreground-muted)]" />
      </div>
      <h4 className="text-sm font-semibold text-[var(--foreground-strong)]">{title}</h4>
      {description ? (
        <p className="mt-1 text-sm text-[var(--foreground-muted)]">{description}</p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
