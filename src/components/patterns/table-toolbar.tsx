import { Download, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui";

type TableToolbarProps = {
  totalCount: number;
  selectedCount: number;
  onRefresh?: () => void;
  onDownload?: () => void;
  actions?: React.ReactNode;
};

export function TableToolbar({
  totalCount,
  selectedCount,
  onRefresh,
  onDownload,
  actions,
}: TableToolbarProps) {
  return (
    <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-md border border-[var(--border)] bg-white px-4 py-3">
      <div className="text-[15px] text-[var(--foreground-muted)]">
        총 <span className="font-semibold text-[var(--foreground-strong)]">{totalCount}</span>
        건
        {selectedCount > 0 ? (
          <span className="ml-2 text-[var(--foreground-strong)]">
            (선택 {selectedCount}건)
          </span>
        ) : null}
      </div>

      <div className="flex items-center gap-2">
        {actions}
        <Button variant="outline" size="sm" onClick={onDownload}>
          <Download size={14} />
          다운로드
        </Button>
        <Button variant="outline" size="sm" onClick={onRefresh}>
          <RefreshCw size={14} />
          새로고침
        </Button>
      </div>
    </div>
  );
}
