import { AdminShell, DesignSystemTemplate } from "@/components/templates";

export default function DesignSystemPage() {
  return (
    <AdminShell currentPath="/design-system">
      <DesignSystemTemplate />
    </AdminShell>
  );
}
