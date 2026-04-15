import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TableToolbar } from "@/components/patterns";

const meta = {
  title: "Patterns/TableToolbar",
  component: TableToolbar,
} satisfies Meta<typeof TableToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[960px] rounded-lg border border-[var(--border)] bg-white p-4">
      <TableToolbar totalCount={324} selectedCount={5} />
    </div>
  ),
};
