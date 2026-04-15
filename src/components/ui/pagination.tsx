import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/cn";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const safeTotalPages = Math.max(totalPages, 1);
  const items = Array.from({ length: safeTotalPages }, (_, index) => index + 1);

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="페이지네이션"
    >
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-sm)] hover:bg-[var(--accent)] disabled:opacity-50"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        <ChevronLeft size={14} />
      </button>

      {items.map((item) => {
        const active = item === page;

        return (
          <button
            type="button"
            key={item}
            onClick={() => onPageChange(item)}
            className={cn(
              "inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2.5 text-[14px]",
              active
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--accent)]",
            )}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-sm)] hover:bg-[var(--accent)] disabled:opacity-50"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= safeTotalPages}
      >
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}
