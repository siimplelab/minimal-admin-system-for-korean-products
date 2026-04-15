import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Pagination } from "@/components/ui";

const meta = {
  title: "UI/Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);

    return <Pagination page={page} totalPages={8} onPageChange={setPage} />;
  },
};
