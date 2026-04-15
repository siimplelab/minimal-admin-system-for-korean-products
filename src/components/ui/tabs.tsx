"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs>");
  }

  return context;
}

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
};

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface-muted)] p-1.5 shadow-[var(--shadow-sm)]",
        className,
      )}
      {...props}
    />
  );
}

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: TabsTriggerProps) {
  const context = useTabsContext();
  const active = context.value === value;

  return (
    <button
      type="button"
      className={cn(
        "rounded-sm px-3.5 py-1.5 text-[14px] text-[var(--foreground-muted)] transition-colors",
        active &&
          "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-strong)] shadow-[var(--shadow-sm)]",
        className,
      )}
      onClick={() => context.setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function TabsContent({
  value,
  className,
  children,
  ...props
}: TabsContentProps) {
  const context = useTabsContext();

  if (context.value !== value) {
    return null;
  }

  return (
    <div className={cn("pt-3", className)} {...props}>
      {children}
    </div>
  );
}
