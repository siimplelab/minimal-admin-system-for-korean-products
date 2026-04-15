import { AdminShell, DashboardTemplate } from "@/components/templates";
import { PageHeader } from "@/components/patterns";

export default function DashboardPage() {
  return (
    <AdminShell currentPath="/dashboard">
      <PageHeader
        title="대시보드 홈"
        description="한국형 백오피스 운영 환경에 최적화된 기본 화면"
      />
      <DashboardTemplate />
    </AdminShell>
  );
}
