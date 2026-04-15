import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui";

const meta = {
  title: "UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button>기본</Button>
      <Button variant="secondary">보조</Button>
      <Button variant="outline">아웃라인</Button>
      <Button variant="ghost">고스트</Button>
      <Button variant="destructive">삭제</Button>
    </div>
  ),
};
