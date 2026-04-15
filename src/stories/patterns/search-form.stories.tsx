import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchForm } from "@/components/patterns";

const meta = {
  title: "Patterns/SearchForm",
  component: SearchForm,
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[960px]">
      <SearchForm />
    </div>
  ),
};
