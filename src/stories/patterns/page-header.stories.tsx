import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PageHeader } from "@/components/patterns";
import { Button } from "@/components/ui";

const meta = {
  title: "Patterns/PageHeader",
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[980px] rounded-lg border border-[var(--border)] bg-white p-4">
      <PageHeader
        title="사용자 관리"
        description="운영 계정 상태를 조회하고 수정합니다"
        actions={
          <>
            <Button variant="outline">다운로드</Button>
            <Button>등록</Button>
          </>
        }
      />
    </div>
  ),
};
