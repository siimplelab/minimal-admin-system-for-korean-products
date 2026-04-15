import * as React from "react";

import { cn } from "@/lib/cn";

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom border-collapse text-[14px]", className)}
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn(
        "sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--surface-muted)]",
        className,
      )}
      {...props}
    />
  );
}

export function TableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

export function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-[var(--border)] transition-colors odd:bg-[var(--surface)] even:bg-[var(--surface-muted)] hover:bg-[var(--accent)]",
        className,
      )}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "h-11 px-4 text-left align-middle text-[13px] font-semibold tracking-tight text-[var(--foreground-muted)]",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn("h-11 px-4 align-middle text-[14px] text-[var(--foreground)]", className)}
      {...props}
    />
  );
}
