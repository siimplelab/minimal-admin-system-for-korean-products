import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Switch } from "@/components/ui";

const meta = {
  title: "UI/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return <Switch checked={checked} onCheckedChange={setChecked} />;
  },
};
