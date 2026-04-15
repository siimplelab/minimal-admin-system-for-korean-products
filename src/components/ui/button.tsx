import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--foreground-strong)] text-white shadow-[var(--shadow-sm)] hover:bg-[#0f172a]",
        secondary:
          "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground-strong)] hover:bg-[#eef2f7]",
        outline:
          "border-[var(--border-strong)] bg-white text-[var(--foreground-strong)] hover:bg-[var(--surface-muted)]",
        ghost: "text-[var(--foreground)] hover:bg-[var(--surface-muted)]",
        destructive: "bg-[#b91c1c] text-white hover:bg-[#991b1b]",
      },
      size: {
        sm: "h-8 px-3 text-[12px]",
        md: "h-9 px-4 text-[13px]",
        lg: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
