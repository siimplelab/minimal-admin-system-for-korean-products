import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { StatusBadge } from "@/components/patterns";

const meta = {
  title: "Patterns/StatusBadge",
  component: StatusBadge,
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2">
      <StatusBadge status="사용중" />
      <StatusBadge status="대기" />
      <StatusBadge status="중지" />
    </div>
  ),
};
