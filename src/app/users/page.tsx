import { AdminShell, UsersTemplate } from "@/components/templates";

export default function UsersPage() {
  return (
    <AdminShell currentPath="/users">
      <UsersTemplate />
    </AdminShell>
  );
}
