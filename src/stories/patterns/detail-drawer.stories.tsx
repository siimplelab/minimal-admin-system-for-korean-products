import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DetailDrawer } from "@/components/patterns";
import { Button } from "@/components/ui";

const meta = {
  title: "Patterns/DetailDrawer",
  component: DetailDrawer,
} satisfies Meta<typeof DetailDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>상세 열기</Button>
        <DetailDrawer
          open={open}
          onOpenChange={setOpen}
          title="사용자 상세"
          fields={[
            { label: "이름", value: "김민수" },
            { label: "이메일", value: "minsu.kim@sample.co.kr" },
          ]}
        />
      </>
    );
  },
};
