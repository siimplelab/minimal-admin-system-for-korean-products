import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button, Tooltip } from "@/components/ui";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip content="상세 설명을 확인합니다.">
      <Button variant="outline">도움말</Button>
    </Tooltip>
  ),
};
