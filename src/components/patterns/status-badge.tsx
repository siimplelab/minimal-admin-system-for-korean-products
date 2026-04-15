import { Badge } from "@/components/ui";
import type { AdminStatus } from "@/lib/admin-types";

type StatusBadgeProps = {
  status: AdminStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "사용중") {
    return <Badge variant="success">● 사용중</Badge>;
  }

  if (status === "대기") {
    return <Badge variant="warning">● 대기</Badge>;
  }

  return <Badge variant="danger">● 중지</Badge>;
}
