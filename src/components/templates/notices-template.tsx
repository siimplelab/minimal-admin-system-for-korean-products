"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";

import {
  DataTable,
  FormRow,
  PageHeader,
  SectionHeader,
  StatusBadge,
} from "@/components/patterns";
import { Button, Input, Tabs, TabsContent, TabsList, TabsTrigger, Textarea } from "@/components/ui";
import type { NoticeRow } from "@/lib/admin-types";
import { noticeRows } from "@/lib/mock-data";

export function NoticesTemplate() {
  const columns = React.useMemo<ColumnDef<NoticeRow, unknown>[]>(
    () => [
      {
        accessorKey: "제목",
        header: "제목",
        cell: ({ row }) => (
          <p className="table-cell-truncate" title={row.original.제목}>
            {row.original.제목}
          </p>
        ),
      },
      { accessorKey: "카테고리", header: "카테고리" },
      {
        accessorKey: "상태",
        header: "상태",
        cell: ({ row }) => <StatusBadge status={row.original.상태} />,
        enableSorting: false,
      },
      { accessorKey: "작성자", header: "작성자" },
      { accessorKey: "수정일", header: "수정일" },
    ],
    [],
  );

  return (
    <div className="space-y-4">
      <PageHeader
        title="공지 관리"
        description="운영 공지를 작성하고 게시 상태를 제어합니다."
        actions={<Button>등록</Button>}
      />

      <section className="panel-inset px-4 py-3 text-[15px] text-[var(--foreground)]">
        게시 전 검수, 게시 후 노출 확인, 만료 공지 아카이브까지 한 화면에서 관리하도록 설계되었습니다.
      </section>

      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">공지 목록</TabsTrigger>
          <TabsTrigger value="edit">공지 작성/수정</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-3">
          <DataTable
            columns={columns}
            data={noticeRows}
            rowActions={() => (
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-[15px] hover:bg-[var(--surface-muted)]"
              >
                <Pencil size={14} />
                수정
              </button>
            )}
          />
        </TabsContent>

        <TabsContent value="edit" className="mt-3">
          <section className="card p-5">
            <SectionHeader
              title="공지 편집"
              description="백오피스 운영자가 실제로 사용하는 밀도 높은 폼 예시"
            />
            <div className="space-y-4">
              <FormRow label="제목" required>
                <Input placeholder="공지 제목을 입력하세요" />
              </FormRow>
              <FormRow label="카테고리" required>
                <Input placeholder="서비스 공지" />
              </FormRow>
              <FormRow label="내용" required>
                <Textarea placeholder="운영 공지 내용을 입력하세요" />
              </FormRow>
            </div>
            <div className="mt-5 flex justify-end gap-2.5 border-t border-[var(--border)] pt-4">
              <Button variant="outline">취소</Button>
              <Button>저장</Button>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
