import Link from "next/link";
import type { ComponentType } from "react";
import { BellRing, LayoutGrid, Library, ShoppingBag, Users } from "lucide-react";

import { cn } from "@/lib/cn";

type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  group: "운영" | "콘텐츠" | "시스템";
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "대시보드", icon: LayoutGrid, group: "운영" },
  { href: "/users", label: "사용자 관리", icon: Users, group: "운영" },
  { href: "/orders", label: "주문/예약 관리", icon: ShoppingBag, group: "운영" },
  { href: "/notices", label: "공지 관리", icon: BellRing, group: "콘텐츠" },
  { href: "/design-system", label: "디자인 시스템", icon: Library, group: "시스템" },
];

type AdminShellProps = {
  currentPath: string;
  children: React.ReactNode;
};

export function AdminShell({ currentPath, children }: AdminShellProps) {
  const groups = ["운영", "콘텐츠", "시스템"] as const;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="border-b border-[var(--border)] bg-white/90 backdrop-blur">
        <div className="admin-container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--foreground-strong)] text-[12px] font-semibold text-white">
              MA
            </span>
            <div className="text-[16px] font-semibold tracking-tight text-[var(--foreground-strong)]">
              Minimal Admin System
            </div>
          </div>
          <div className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-[13px] text-[var(--foreground-muted)]">
            KR Ops Backoffice
          </div>
        </div>
      </header>

      <div className="admin-container grid gap-5 py-5 md:grid-cols-[260px_1fr]">
        <aside className="card sticky top-5 h-fit p-4">
          <div className="mb-3 border-b border-[var(--border)] pb-3">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
              Navigation
            </p>
          </div>

          <nav className="space-y-3">
            {groups.map((group) => (
              <div key={group}>
                <p className="mb-1.5 px-2 text-[12px] font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
                  {group}
                </p>
                <div className="space-y-1">
                  {navItems
                    .filter((item) => item.group === group)
                    .map((item) => {
                      const active = currentPath === item.href;
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md border px-3.5 py-2.5 text-[15px] transition-colors",
                            active
                              ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                              : "border-transparent text-[var(--foreground)] hover:border-[var(--border)] hover:bg-[var(--surface-muted)]",
                          )}
                        >
                          <Icon
                            size={16}
                            className={active ? "text-[var(--primary-foreground)]" : "text-[var(--foreground-muted)]"}
                          />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
