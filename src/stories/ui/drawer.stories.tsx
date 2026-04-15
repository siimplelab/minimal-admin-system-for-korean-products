import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button, Drawer } from "@/components/ui";

const meta = {
  title: "UI/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>드로어 열기</Button>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          title="사용자 상세"
          description="운영 계정 정보를 확인합니다."
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                닫기
              </Button>
              <Button onClick={() => setOpen(false)}>저장</Button>
            </>
          }
        >
          <p className="text-sm text-[var(--foreground-muted)]">드로어 콘텐츠 영역</p>
        </Drawer>
      </>
    );
  },
};
