import { AdminShell, OrdersTemplate } from "@/components/templates";

export default function OrdersPage() {
  return (
    <AdminShell currentPath="/orders">
      <OrdersTemplate />
    </AdminShell>
  );
}
