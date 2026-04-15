import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[12px] font-medium",
  {
    variants: {
      variant: {
        neutral:
          "border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--foreground)]",
        primary: "border-[var(--focus-ring)] bg-[var(--primary-weak)] text-[var(--primary-hover)]",
        success:
          "border-[var(--status-active-border)] bg-[var(--status-active-bg)] text-[var(--status-active-fg)]",
        warning:
          "border-[var(--status-pending-border)] bg-[var(--status-pending-bg)] text-[var(--status-pending-fg)]",
        danger:
          "border-[var(--status-stopped-border)] bg-[var(--status-stopped-bg)] text-[var(--status-stopped-fg)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
