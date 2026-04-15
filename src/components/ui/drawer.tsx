"use client";

import { X } from "lucide-react";

import { cn } from "@/lib/cn";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  widthClassName?: string;
};

export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  widthClassName,
}: DrawerProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/25 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => onOpenChange(false)}
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-xl border-l border-[var(--border)] bg-white shadow-[var(--shadow-md)] transition-transform",
          open ? "translate-x-0" : "translate-x-full",
          widthClassName,
        )}
      >
        <header className="flex items-start justify-between border-b border-[var(--border)] px-5 py-4">
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
            className="rounded-md p-1 text-[var(--foreground-muted)] hover:bg-[var(--surface-muted)]"
            onClick={() => onOpenChange(false)}
            aria-label="닫기"
          >
            <X size={16} />
          </button>
        </header>

        <div className="h-[calc(100%-132px)] overflow-y-auto px-5 py-4">{children}</div>

        {footer ? (
          <footer className="flex h-[68px] items-center justify-end gap-2 border-t border-[var(--border)] px-5">
            {footer}
          </footer>
        ) : null}
      </aside>
    </>
  );
}
