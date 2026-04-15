import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RadioGroup } from "@/components/ui";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("all");

    return (
      <RadioGroup
        name="status"
        value={value}
        onValueChange={setValue}
        options={[
          { label: "전체", value: "all" },
          { label: "사용중", value: "active" },
          { label: "대기", value: "pending" },
          { label: "중지", value: "stopped" },
        ]}
      />
    );
  },
};
