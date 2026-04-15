import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SectionHeader } from "@/components/patterns";
import { Button } from "@/components/ui";

const meta = {
  title: "Patterns/SectionHeader",
  component: SectionHeader,
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[900px] rounded-lg border border-[var(--border)] bg-white p-4">
      <SectionHeader
        title="회원 목록"
        description="오늘 기준 운영 계정 목록"
        action={<Button size="sm">등록</Button>}
      />
    </div>
  ),
};
