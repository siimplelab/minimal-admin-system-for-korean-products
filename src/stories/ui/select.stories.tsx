import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Select } from "@/components/ui";

const meta = {
  title: "UI/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[220px]">
      <Select
        placeholder="상태 선택"
        options={[
          { label: "전체", value: "all" },
          { label: "사용중", value: "active" },
          { label: "대기", value: "pending" },
          { label: "중지", value: "stopped" },
        ]}
      />
    </div>
  ),
};
