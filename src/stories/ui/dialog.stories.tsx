import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button, Dialog } from "@/components/ui";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>다이얼로그 열기</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="삭제 확인"
          description="선택한 항목을 삭제하시겠습니까?"
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                취소
              </Button>
              <Button variant="destructive" onClick={() => setOpen(false)}>
                삭제
              </Button>
            </>
          }
        >
          <p className="text-sm text-[var(--foreground-muted)]">복구할 수 없는 작업입니다.</p>
        </Dialog>
      </>
    );
  },
};
