"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  className?: string;
};

export function Tooltip({ content, children, className }: TooltipProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open ? (
        <span className="absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--foreground-strong)] px-2 py-1 text-[12px] text-white shadow-[var(--shadow-sm)]">
          {content}
        </span>
      ) : null}
    </span>
  );
}
