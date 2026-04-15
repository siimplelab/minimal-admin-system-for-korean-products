"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import { Button, Input, Select } from "@/components/ui";
import { FilterBar } from "@/components/patterns/filter-bar";
import { FormRow } from "@/components/patterns/form-row";
import type { DatePreset, StatusFilter } from "@/types/common";

const schema = z.object({
  keyword: z.string().trim().optional(),
  status: z.enum(["전체", "사용중", "대기", "중지"] as const),
  datePreset: z.enum(["오늘", "최근 7일", "최근 1개월", "직접 선택"] as const),
});

export type SearchFormValues = z.infer<typeof schema>;

type SearchFormProps = {
  onSearch?: (values: SearchFormValues) => void;
  defaultValues?: Partial<SearchFormValues>;
};

export function SearchForm({ onSearch, defaultValues }: SearchFormProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      keyword: "",
      status: "전체",
      datePreset: "최근 7일",
      ...defaultValues,
    },
  });
  const statusValue = useWatch({ control: form.control, name: "status" });
  const datePresetValue = useWatch({ control: form.control, name: "datePreset" });

  const statusOptions: { label: StatusFilter; value: StatusFilter }[] = [
    { label: "전체", value: "전체" },
    { label: "사용중", value: "사용중" },
    { label: "대기", value: "대기" },
    { label: "중지", value: "중지" },
  ];

  const dateOptions: { label: DatePreset; value: DatePreset }[] = [
    { label: "오늘", value: "오늘" },
    { label: "최근 7일", value: "최근 7일" },
    { label: "최근 1개월", value: "최근 1개월" },
    { label: "직접 선택", value: "직접 선택" },
  ];

  return (
    <form onSubmit={form.handleSubmit((values) => onSearch?.(values))}>
      <FilterBar>
        <div className="lg:col-span-6">
          <FormRow label="검색어">
            <Input
              placeholder="이름, 이메일, 주문번호, 공지 제목"
              {...form.register("keyword")}
            />
          </FormRow>
        </div>

        <div className="lg:col-span-3">
          <FormRow label="상태">
            <Select
              options={statusOptions}
              value={statusValue}
              onChange={(value) =>
                form.setValue("status", value as SearchFormValues["status"])
              }
            />
          </FormRow>
        </div>

        <div className="lg:col-span-3">
          <FormRow label="기간">
            <Select
              options={dateOptions}
              value={datePresetValue}
              onChange={(value) =>
                form.setValue("datePreset", value as SearchFormValues["datePreset"])
              }
            />
          </FormRow>
        </div>

        <div className="lg:col-span-12 flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-3">
          <p className="text-[12px] font-medium text-[var(--foreground-muted)]">빠른 기간:</p>
          {dateOptions.map((option) => {
            const active = option.value === datePresetValue;

            return (
              <button
                key={option.value}
                type="button"
                className={
                  active
                    ? "rounded-md border border-[var(--foreground-strong)] bg-[var(--foreground-strong)] px-2.5 py-1 text-[12px] text-white"
                    : "rounded-md border border-[var(--border)] bg-white px-2.5 py-1 text-[12px] text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                }
                onClick={() =>
                  form.setValue("datePreset", option.value as SearchFormValues["datePreset"])
                }
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-12 flex justify-end gap-2 border-t border-[var(--border)] pt-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => form.reset({ keyword: "", status: "전체", datePreset: "최근 7일" })}
          >
            초기화
          </Button>
          <Button type="submit">
            <Search size={14} />
            조회
          </Button>
        </div>
      </FilterBar>
    </form>
  );
}
