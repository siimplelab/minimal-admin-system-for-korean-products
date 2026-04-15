import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { designPrinciples, designTokens } from "@/foundations";

const meta = {
  title: "Foundations/Tokens",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="w-[900px] space-y-6">
      <section className="rounded-lg border border-[var(--border)] bg-white p-4">
        <h3 className="mb-3 text-base font-semibold text-[var(--foreground-strong)]">
          Design Principles
        </h3>
        <ul className="space-y-2">
          {designPrinciples.map((item) => (
            <li key={item.title}>
              <p className="text-sm font-semibold text-[var(--foreground-strong)]">
                {item.title}
              </p>
              <p className="text-sm text-[var(--foreground-muted)]">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-white p-4">
        <h3 className="mb-3 text-base font-semibold text-[var(--foreground-strong)]">
          Neutral Scale
        </h3>
        <div className="grid grid-cols-6 gap-2">
          {Object.entries(designTokens.color.neutral).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div
                className="h-12 rounded-md border border-[var(--border)]"
                style={{ background: value }}
              />
              <p className="text-[12px] text-[var(--foreground-muted)]">
                {key}: {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-white p-4">
        <h3 className="mb-3 text-base font-semibold text-[var(--foreground-strong)]">
          Typography & Spacing
        </h3>
        <p className="text-sm text-[var(--foreground-muted)]">
          기본 본문은 14px / line-height 1.5를 기준으로, 리스트 밀도와 가독성을 균형 있게 유지합니다.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-md border border-[var(--border)] p-3">
            {Object.entries(designTokens.typography.size).map(([key, value]) => (
              <p key={key} style={{ fontSize: value }} className="text-[var(--foreground)]">
                {key} ({value})
              </p>
            ))}
          </div>
          <div className="rounded-md border border-[var(--border)] p-3">
            {Object.entries(designTokens.spacing).map(([key, value]) => (
              <p key={key} className="text-sm text-[var(--foreground)]">
                space-{key}: {value}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  ),
};
