import { Button } from "@/components/ui";

type BulkActionBarProps = {
  selectedCount: number;
  onDelete?: () => void;
  onApprove?: () => void;
  onStop?: () => void;
};

export function BulkActionBar({
  selectedCount,
  onDelete,
  onApprove,
  onStop,
}: BulkActionBarProps) {
  if (selectedCount <= 0) {
    return null;
  }

  return (
    <div className="mb-2 flex items-center justify-between rounded-md border border-[#bfdbfe] bg-[#eff6ff] px-3 py-2">
      <p className="text-sm text-[var(--foreground-strong)]">
        {selectedCount}건 선택됨
      </p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onApprove}>
          승인
        </Button>
        <Button variant="outline" size="sm" onClick={onStop}>
          중지
        </Button>
        <Button variant="destructive" size="sm" onClick={onDelete}>
          삭제
        </Button>
      </div>
    </div>
  );
}
