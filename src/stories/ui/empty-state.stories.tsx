import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button, EmptyState } from "@/components/ui";

const meta = {
  title: "UI/EmptyState",
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[480px]">
      <EmptyState
        title="조회 결과가 없습니다"
        description="필터를 조정하거나 검색어를 확인해 주세요"
        action={<Button variant="outline">필터 초기화</Button>}
      />
    </div>
  ),
};
