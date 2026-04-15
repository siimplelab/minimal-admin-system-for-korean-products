import * as React from "react";

import { cn } from "@/lib/cn";

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom border-collapse text-[13px]", className)}
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
        "border-b border-[var(--border)] transition-colors odd:bg-white even:bg-[#fcfdff] hover:bg-[#f8fafc]",
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
        "h-9 px-3 text-left align-middle text-[12px] font-semibold tracking-tight text-[var(--foreground-muted)]",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn("h-9 px-3 align-middle text-[13px] text-[var(--foreground)]", className)}
      {...props}
    />
  );
}
