import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/components/ui";

const meta = {
  title: "UI/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="neutral">전체</Badge>
      <Badge variant="success">사용중</Badge>
      <Badge variant="warning">대기</Badge>
      <Badge variant="danger">중지</Badge>
      <Badge variant="primary">신규</Badge>
    </div>
  ),
};
