import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormRow } from "@/components/patterns";
import { Input } from "@/components/ui";

const meta = {
  title: "Patterns/FormRow",
  component: FormRow,
} satisfies Meta<typeof FormRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[900px] rounded-lg border border-[var(--border)] bg-white p-4">
      <FormRow label="제목" required hint="최대 60자">
        <Input placeholder="공지 제목" />
      </FormRow>
    </div>
  ),
};
