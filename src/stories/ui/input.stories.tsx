import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/ui";

const meta = {
  title: "UI/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    className: "w-[320px]",
  },
};
