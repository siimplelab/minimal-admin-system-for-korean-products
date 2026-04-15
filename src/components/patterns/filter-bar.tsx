import { cn } from "@/lib/cn";

type FilterBarProps = {
  children: React.ReactNode;
  className?: string;
};

export function FilterBar({ children, className }: FilterBarProps) {
  return (
    <section
      className={cn(
        "mb-4 rounded-lg border border-[var(--border)] bg-white px-4 py-3 shadow-[var(--shadow-sm)]",
        className,
      )}
    >
      <div className="grid gap-3 lg:grid-cols-12">{children}</div>
    </section>
  );
}
