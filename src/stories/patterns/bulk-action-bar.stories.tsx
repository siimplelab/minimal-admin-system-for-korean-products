import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BulkActionBar } from "@/components/patterns";

const meta = {
  title: "Patterns/BulkActionBar",
  component: BulkActionBar,
} satisfies Meta<typeof BulkActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCount: 3,
  },
};
