"use client";

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { designPrinciples, designTokens } from "@/foundations";
import {
  BulkActionBar,
  DataTable,
  FilterBar,
  FormRow,
  PageHeader,
  SearchForm,
  SectionHeader,
  StatusBadge,
  TableToolbar,
} from "@/components/patterns";
import {
  Badge,
  Button,
  Checkbox,
  EmptyState,
  Input,
  Pagination,
  RadioGroup,
  Select,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
} from "@/components/ui";
import type { UserRow } from "@/lib/admin-types";
import { userRows } from "@/lib/mock-data";

export function DesignSystemTemplate() {
  const [selectedRows, setSelectedRows] = React.useState<UserRow[]>([]);
  const [switchValue, setSwitchValue] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const sampleRows = userRows.slice(0, 4);

  const columns = React.useMemo<ColumnDef<UserRow, unknown>[]>(
    () => [
      { accessorKey: "이름", header: "이름" },
      { accessorKey: "이메일", header: "이메일" },
      {
        accessorKey: "상태",
        header: "상태",
        cell: ({ row }) => <StatusBadge status={row.original.상태} />,
        enableSorting: false,
      },
      { accessorKey: "가입일", header: "가입일" },
    ],
    [],
  );

  return (
    <div className="space-y-4">
      <PageHeader
        title="디자인 시스템 검증 화면"
        description="토큰, 프리미티브, 패턴을 한 화면에서 점검하는 내부 QA용 페이지"
      />

      <section className="card p-4">
        <SectionHeader title="Design Principles" description="시스템이 지켜야 할 기본 원칙" />
        <ul className="grid gap-2 md:grid-cols-2">
          {designPrinciples.map((item) => (
            <li key={item.title} className="panel-inset px-3 py-2">
              <p className="text-[13px] font-semibold text-[var(--foreground-strong)]">{item.title}</p>
              <p className="mt-1 text-[12px] text-[var(--foreground-muted)]">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-4">
        <SectionHeader title="Color Tokens" description="중립 스케일과 상태 색상 확인" />
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="space-y-2">
            <p className="text-[12px] font-semibold text-[var(--foreground-muted)]">Neutral</p>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(designTokens.color.neutral).map(([key, value]) => (
                <div key={key} className="rounded-md border border-[var(--border)] bg-white p-2">
                  <div className="h-7 rounded border border-[var(--border)]" style={{ background: value }} />
                  <p className="mt-1 text-[11px] text-[var(--foreground-muted)]">{key}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] font-semibold text-[var(--foreground-muted)]">Status</p>
            <div className="flex flex-wrap gap-2 rounded-md border border-[var(--border)] bg-white p-3">
              <StatusBadge status="사용중" />
              <StatusBadge status="대기" />
              <StatusBadge status="중지" />
              <Badge variant="primary">● 정보</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="card p-4">
        <SectionHeader title="Primitive Components" description="기본 UI 단위 컴포넌트 점검" />
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button>기본</Button>
            <Button variant="secondary">보조</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="destructive">삭제</Button>
            <Tooltip content="도움말 샘플">
              <Button variant="ghost">툴팁</Button>
            </Tooltip>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <FormRow label="입력 필드">
              <Input placeholder="검색어 입력" />
            </FormRow>
            <FormRow label="선택 필드">
              <Select
                options={[
                  { label: "전체", value: "all" },
                  { label: "사용중", value: "active" },
                ]}
                value="all"
              />
            </FormRow>
          </div>

          <FormRow label="텍스트 영역">
            <Textarea placeholder="운영 메모를 입력하세요" />
          </FormRow>

          <div className="flex flex-wrap items-center gap-5 rounded-md border border-[var(--border)] bg-white px-3 py-2">
            <label className="inline-flex items-center gap-2 text-[13px]">
              <Checkbox checked={checked} onCheckedChange={setChecked} />
              체크박스
            </label>
            <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
            <RadioGroup
              name="sample-status"
              value="all"
              options={[
                { label: "전체", value: "all" },
                { label: "사용중", value: "active" },
                { label: "중지", value: "stop" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="card p-4">
        <SectionHeader title="Pattern Components" description="한국형 백오피스 패턴 조합" />
        <SearchForm onSearch={() => undefined} />

        <FilterBar>
          <div className="lg:col-span-4">
            <FormRow label="직접 패턴 확인">
              <Input placeholder="필터 키워드" />
            </FormRow>
          </div>
        </FilterBar>

        <BulkActionBar selectedCount={selectedRows.length} />
        <TableToolbar totalCount={sampleRows.length} selectedCount={selectedRows.length} />
        <DataTable columns={columns} data={sampleRows} onSelectionChange={setSelectedRows} />
      </section>

      <section className="card p-4">
        <SectionHeader title="Tabs / Empty / Pagination" description="화면 구성 요소 최종 점검" />
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">가이드</TabsTrigger>
            <TabsTrigger value="b">예외 상태</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="space-y-3">
            <p className="text-[13px] text-[var(--foreground)]">
              이 화면은 디자인 시스템 구성요소를 빠르게 회귀 점검하기 위한 내부 페이지입니다.
            </p>
          </TabsContent>
          <TabsContent value="b" className="space-y-3">
            <EmptyState title="샘플 비어 있음" description="데이터가 없는 상태를 확인합니다." />
          </TabsContent>
        </Tabs>

        <div className="mt-3 border-t border-[var(--border)] pt-3">
          <Pagination page={page} totalPages={7} onPageChange={setPage} />
        </div>
      </section>
    </div>
  );
}
