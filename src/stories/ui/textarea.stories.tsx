import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Textarea } from "@/components/ui";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "공지 내용을 입력하세요",
    className: "w-[420px]",
  },
};
