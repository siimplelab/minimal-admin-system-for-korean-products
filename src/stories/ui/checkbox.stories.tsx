import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@/components/ui";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <label className="inline-flex items-center gap-2 text-sm">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        선택 ({checked ? "ON" : "OFF"})
      </label>
    );
  },
};
