import { cn } from "@/lib/cn";

type FilterBarProps = {
  children: React.ReactNode;
  className?: string;
};

export function FilterBar({ children, className }: FilterBarProps) {
  return (
    <section
      className={cn(
        "mb-5 rounded-lg border border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-sm)]",
        className,
      )}
    >
      <div className="grid gap-4 lg:grid-cols-12">{children}</div>
    </section>
  );
}
