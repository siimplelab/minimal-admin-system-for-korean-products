"use client";

import { X } from "lucide-react";

import { cn } from "@/lib/cn";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: DialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/30"
        onClick={() => onOpenChange(false)}
        aria-label="닫기"
      />
      <section
        className={cn(
          "relative z-10 w-full max-w-lg rounded-lg border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-md)]",
        )}
      >
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground-strong)]">
              {title}
            </h3>
            {description ? (
              <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-md p-1 text-[var(--foreground-muted)] hover:bg-[var(--surface-muted)]"
            aria-label="닫기"
          >
            <X size={16} />
          </button>
        </header>

        <div>{children}</div>

        {footer ? (
          <footer className="mt-5 flex items-center justify-end gap-2">{footer}</footer>
        ) : null}
      </section>
    </div>
  );
}
