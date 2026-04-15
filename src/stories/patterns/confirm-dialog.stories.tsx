import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ConfirmDialog } from "@/components/patterns";
import { Button } from "@/components/ui";

const meta = {
  title: "Patterns/ConfirmDialog",
  component: ConfirmDialog,
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          삭제 확인 열기
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="삭제 확인"
          description="정말 삭제하시겠습니까?"
          onConfirm={() => undefined}
        />
      </>
    );
  },
};
