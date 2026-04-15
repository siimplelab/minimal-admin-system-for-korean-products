import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FilterBar, FormRow } from "@/components/patterns";
import { Input, Select } from "@/components/ui";

const meta = {
  title: "Patterns/FilterBar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[920px]">
      <FilterBar>
        <div className="lg:col-span-6">
          <FormRow label="검색어">
            <Input placeholder="이름, 이메일" />
          </FormRow>
        </div>
        <div className="lg:col-span-3">
          <FormRow label="상태">
            <Select
              options={[
                { label: "전체", value: "all" },
                { label: "사용중", value: "active" },
              ]}
            />
          </FormRow>
        </div>
      </FilterBar>
    </div>
  ),
};
