import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTable, StatusBadge } from "@/components/patterns";
import type { UserRow } from "@/lib/admin-types";
import { userRows } from "@/lib/mock-data";

const columns: ColumnDef<UserRow>[] = [
  { accessorKey: "이름", header: "이름" },
  { accessorKey: "이메일", header: "이메일" },
  {
    accessorKey: "상태",
    header: "상태",
    cell: ({ row }) => <StatusBadge status={row.original.상태} />,
    enableSorting: false,
  },
  { accessorKey: "가입일", header: "가입일" },
  {
    accessorKey: "메모",
    header: "메모",
    cell: ({ row }) => (
      <span className="table-cell-truncate" title={row.original.메모}>
        {row.original.메모}
      </span>
    ),
  },
];

const meta = {
  title: "Patterns/DataTable",
  component: DataTable<UserRow>,
} satisfies Meta<typeof DataTable<UserRow>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[1000px]">
      <DataTable columns={columns} data={userRows} />
    </div>
  ),
};
