import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="list">
      <TabsList>
        <TabsTrigger value="list">목록</TabsTrigger>
        <TabsTrigger value="edit">편집</TabsTrigger>
      </TabsList>
      <TabsContent value="list">목록 탭 콘텐츠</TabsContent>
      <TabsContent value="edit">편집 탭 콘텐츠</TabsContent>
    </Tabs>
  ),
};
