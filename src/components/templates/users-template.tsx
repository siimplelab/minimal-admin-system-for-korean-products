"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";

import {
  BulkActionBar,
  ConfirmDialog,
  DataTable,
  DetailDrawer,
  PageHeader,
  SearchForm,
  StatusBadge,
  TableToolbar,
} from "@/components/patterns";
import { Button } from "@/components/ui";
import { useDetailDrawer } from "@/hooks/use-detail-drawer";
import type { UserRow } from "@/lib/admin-types";
import { userRows } from "@/lib/mock-data";

export function UsersTemplate() {
  const [selectedRows, setSelectedRows] = React.useState<UserRow[]>([]);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const { open, data, openDrawer, closeDrawer } = useDetailDrawer<UserRow>();

  const columns = React.useMemo<ColumnDef<UserRow, unknown>[]>(
    () => [
      {
        accessorKey: "이름",
        header: "이름",
        cell: ({ row }) => (
          <button
            type="button"
            className="font-medium text-[var(--foreground-strong)] hover:underline"
            onClick={() => openDrawer(row.original)}
          >
            {row.original.이름}
          </button>
        ),
      },
      { accessorKey: "이메일", header: "이메일" },
      { accessorKey: "소속", header: "소속" },
      {
        accessorKey: "상태",
        header: "상태",
        cell: ({ row }) => <StatusBadge status={row.original.상태} />,
        enableSorting: false,
      },
      { accessorKey: "가입일", header: "가입일" },
      {
        accessorKey: "메모",
        header: "메모",
        cell: ({ row }) => (
          <p className="table-cell-truncate" title={row.original.메모}>
            {row.original.메모}
          </p>
        ),
      },
    ],
    [openDrawer],
  );

  return (
    <div className="space-y-4">
      <PageHeader
        title="사용자 관리"
        description="운영 계정과 권한 상태를 조회하고 관리합니다."
        actions={
          <>
            <Button variant="outline">다운로드</Button>
            <Button>등록</Button>
          </>
        }
      />

      <section className="grid gap-3 sm:grid-cols-3">
        <article className="panel-inset px-4 py-3">
          <p className="text-[14px] text-[var(--foreground-muted)]">총 운영 계정</p>
          <p className="mt-1 text-lg font-semibold text-[var(--foreground-strong)]">
            {userRows.length}명
          </p>
        </article>
        <article className="panel-inset px-4 py-3">
          <p className="text-[14px] text-[var(--foreground-muted)]">활성 계정</p>
          <p className="mt-1 text-lg font-semibold text-[var(--foreground-strong)]">
            {userRows.filter((row) => row.상태 === "사용중").length}명
          </p>
        </article>
        <article className="panel-inset px-4 py-3">
          <p className="text-[14px] text-[var(--foreground-muted)]">대기/중지</p>
          <p className="mt-1 text-lg font-semibold text-[var(--foreground-strong)]">
            {
              userRows.filter((row) => row.상태 === "대기" || row.상태 === "중지").length
            }
            명
          </p>
        </article>
      </section>

      <SearchForm onSearch={() => undefined} />

      <BulkActionBar
        selectedCount={selectedRows.length}
        onApprove={() => undefined}
        onStop={() => undefined}
        onDelete={() => setConfirmOpen(true)}
      />

      <TableToolbar
        totalCount={userRows.length}
        selectedCount={selectedRows.length}
        onRefresh={() => undefined}
        onDownload={() => undefined}
      />

      <DataTable
        columns={columns}
        data={userRows}
        onSelectionChange={setSelectedRows}
        rowActions={(row) => (
          <div className="space-y-1 text-[15px]">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-left hover:bg-[var(--surface-muted)]"
              onClick={() => openDrawer(row)}
            >
              <Eye size={14} />
              상세보기
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-left hover:bg-[var(--surface-muted)]"
            >
              <Pencil size={14} />
              수정
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-left text-[var(--destructive)] hover:bg-[var(--destructive-weak)]"
              onClick={() => setConfirmOpen(true)}
            >
              <Trash2 size={14} />
              삭제
            </button>
          </div>
        )}
      />

      <DetailDrawer
        open={open}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            closeDrawer();
          }
        }}
        title={data ? `${data.이름} 상세 정보` : "상세 정보"}
        description="사용자 계정 운영 정보를 확인합니다."
        fields={
          data
            ? [
                { label: "이름", value: data.이름 },
                { label: "이메일", value: data.이메일 },
                { label: "소속", value: data.소속 },
                { label: "상태", value: data.상태 },
                { label: "가입일", value: data.가입일 },
                { label: "메모", value: data.메모 },
              ]
            : []
        }
        footer={
          <>
            <Button variant="outline" onClick={closeDrawer}>
              닫기
            </Button>
            <Button>수정</Button>
          </>
        }
      />

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="사용자 삭제"
        description="선택한 사용자를 삭제하시겠습니까?"
        confirmLabel="삭제"
        onConfirm={() => undefined}
      />
    </div>
  );
}
