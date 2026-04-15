import { AdminShell, NoticesTemplate } from "@/components/templates";

export default function NoticesPage() {
  return (
    <AdminShell currentPath="/notices">
      <NoticesTemplate />
    </AdminShell>
  );
}
