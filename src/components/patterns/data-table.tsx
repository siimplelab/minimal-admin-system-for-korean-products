"use client";

import * as React from "react";
import {
  type ColumnDef,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Checkbox, EmptyState, Pagination } from "@/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

type DataTableProps<TData> = {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  pageSize?: number;
  loading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  onSelectionChange?: (rows: TData[]) => void;
  rowActions?: (row: TData) => React.ReactNode;
};

export function DataTable<TData>({
  columns,
  data,
  pageSize = 10,
  loading,
  emptyTitle = "데이터가 없습니다",
  emptyDescription,
  onSelectionChange,
  rowActions,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [page, setPage] = React.useState(1);

  const actionColumn = React.useMemo<ColumnDef<TData, unknown> | null>(() => {
    if (!rowActions) {
      return null;
    }

    return {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <details className="relative">
          <summary className="ml-auto inline-flex h-7 w-7 cursor-pointer list-none items-center justify-center rounded-md border border-[var(--border)] bg-[var(--input-bg)] text-[var(--foreground-muted)] hover:bg-[var(--accent)] [&::-webkit-details-marker]:hidden">
            <MoreHorizontal size={14} />
          </summary>
          <div className="absolute right-0 z-20 mt-1 min-w-[132px] rounded-md border border-[var(--border)] bg-[var(--surface)] p-1 shadow-[var(--shadow-md)]">
            {rowActions(row.original)}
          </div>
        </details>
      ),
      enableSorting: false,
    };
  }, [rowActions]);

  const internalColumns = React.useMemo<ColumnDef<TData, unknown>[]>(() => {
    const selectionColumn: ColumnDef<TData, unknown> = {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked)}
          aria-label="전체 선택"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(checked) => row.toggleSelected(checked)}
          aria-label="행 선택"
        />
      ),
      enableSorting: false,
    };

    const normalizedColumns = columns.map((column) => {
      if (column.enableSorting === false) {
        return column;
      }

      return {
        ...column,
        header:
          typeof column.header === "function"
            ? column.header
            : ({ column: tableColumn }: { column: { toggleSorting: (value?: boolean) => void } }) => (
                <button
                  type="button"
                  className="inline-flex items-center gap-1"
                  onClick={() => tableColumn.toggleSorting()}
                >
                  <span>{String(column.header ?? "")}</span>
                  <ArrowUpDown size={12} />
                </button>
              ),
      } as ColumnDef<TData, unknown>;
    });

    return [selectionColumn, ...normalizedColumns, ...(actionColumn ? [actionColumn] : [])];
  }, [actionColumn, columns]);

  const table = useReactTable({
    data,
    columns: internalColumns,
    state: {
      sorting,
      rowSelection,
      pagination: {
        pageIndex: page - 1,
        pageSize,
      },
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
  });

  const totalPages = Math.max(table.getPageCount(), 1);

  React.useEffect(() => {
    const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original);
    onSelectionChange?.(selectedRows);
  }, [onSelectionChange, rowSelection, table]);

  React.useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  if (loading) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center text-sm text-[var(--foreground-muted)]">
        데이터를 불러오는 중입니다...
      </div>
    );
  }

  const rows = table.getRowModel().rows;

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
      <Table className="[&_td]:whitespace-nowrap">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="!bg-[var(--surface-muted)] hover:!bg-[var(--surface-muted)]"
            >
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
                className={row.getIsSelected() ? "!bg-[var(--selection)]" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={internalColumns.length} className="p-6">
                <EmptyState title={emptyTitle} description={emptyDescription} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] bg-[var(--accent)] px-3 py-2">
        <p className="text-[14px] text-[var(--foreground-muted)]">
          페이지 {page} / {totalPages}
        </p>
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
