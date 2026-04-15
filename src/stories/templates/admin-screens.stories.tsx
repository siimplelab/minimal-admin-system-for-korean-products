import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  AdminShell,
  DashboardTemplate,
  DesignSystemTemplate,
  NoticesTemplate,
  OrdersTemplate,
  UsersTemplate,
} from "@/components/templates";

const meta = {
  title: "Templates/AdminScreens",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => (
    <AdminShell currentPath="/dashboard">
      <DashboardTemplate />
    </AdminShell>
  ),
};

export const Users: Story = {
  render: () => (
    <AdminShell currentPath="/users">
      <UsersTemplate />
    </AdminShell>
  ),
};

export const Orders: Story = {
  render: () => (
    <AdminShell currentPath="/orders">
      <OrdersTemplate />
    </AdminShell>
  ),
};

export const Notices: Story = {
  render: () => (
    <AdminShell currentPath="/notices">
      <NoticesTemplate />
    </AdminShell>
  ),
};

export const DesignSystem: Story = {
  render: () => (
    <AdminShell currentPath="/design-system">
      <DesignSystemTemplate />
    </AdminShell>
  ),
};
