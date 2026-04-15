"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

import {
  DataTable,
  PageHeader,
  SearchForm,
  StatusBadge,
  TableToolbar,
} from "@/components/patterns";
import { Button } from "@/components/ui";
import type { OrderRow } from "@/lib/admin-types";
import { orderRows } from "@/lib/mock-data";

export function OrdersTemplate() {
  const [selectedRows, setSelectedRows] = React.useState<OrderRow[]>([]);

  const columns = React.useMemo<ColumnDef<OrderRow, unknown>[]>(
    () => [
      { accessorKey: "주문번호", header: "주문번호" },
      {
        accessorKey: "상품명",
        header: "상품명",
        cell: ({ row }) => (
          <p className="table-cell-truncate" title={row.original.상품명}>
            {row.original.상품명}
          </p>
        ),
      },
      { accessorKey: "고객명", header: "고객명" },
      { accessorKey: "결제금액", header: "결제금액" },
      {
        accessorKey: "상태",
        header: "상태",
        cell: ({ row }) => <StatusBadge status={row.original.상태} />,
        enableSorting: false,
      },
      { accessorKey: "주문일시", header: "주문일시" },
    ],
    [],
  );

  return (
    <div className="space-y-3">
      <PageHeader
        title="주문/예약 관리"
        description="주문 상태, 결제 정보, 예약 처리 흐름을 운영합니다."
        actions={<Button>다운로드</Button>}
      />

      <section className="grid gap-2 sm:grid-cols-3">
        <article className="panel-inset px-3 py-2">
          <p className="text-[12px] text-[var(--foreground-muted)]">총 주문 건수</p>
          <p className="mt-1 text-lg font-semibold text-[var(--foreground-strong)]">
            {orderRows.length}건
          </p>
        </article>
        <article className="panel-inset px-3 py-2">
          <p className="text-[12px] text-[var(--foreground-muted)]">오늘 주문</p>
          <p className="mt-1 text-lg font-semibold text-[var(--foreground-strong)]">1건</p>
        </article>
        <article className="panel-inset px-3 py-2">
          <p className="text-[12px] text-[var(--foreground-muted)]">승인 대기</p>
          <p className="mt-1 text-lg font-semibold text-[var(--foreground-strong)]">
            {orderRows.filter((row) => row.상태 === "대기").length}건
          </p>
        </article>
      </section>

      <SearchForm defaultValues={{ datePreset: "오늘" }} onSearch={() => undefined} />

      <TableToolbar
        totalCount={orderRows.length}
        selectedCount={selectedRows.length}
        onRefresh={() => undefined}
        onDownload={() => undefined}
      />

      <DataTable
        columns={columns}
        data={orderRows}
        onSelectionChange={setSelectedRows}
        rowActions={() => (
          <div className="space-y-0.5 text-sm">
            <button
              type="button"
              className="block w-full rounded px-2 py-1 text-left text-[13px] hover:bg-[var(--surface-muted)]"
            >
              주문 상세
            </button>
            <button
              type="button"
              className="block w-full rounded px-2 py-1 text-left text-[13px] hover:bg-[var(--surface-muted)]"
            >
              승인 처리
            </button>
          </div>
        )}
      />
    </div>
  );
}
