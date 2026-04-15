import { Drawer } from "@/components/ui";

type DetailDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  fields: Array<{ label: string; value: string }>;
  footer?: React.ReactNode;
};

export function DetailDrawer({
  open,
  onOpenChange,
  title,
  description,
  fields,
  footer,
}: DetailDrawerProps) {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footer={footer}
    >
      <dl className="space-y-3">
        {fields.map((field) => (
          <div key={field.label} className="grid grid-cols-[120px_1fr] gap-3 text-sm">
            <dt className="text-[var(--foreground-muted)]">{field.label}</dt>
            <dd className="text-[var(--foreground-strong)]">{field.value}</dd>
          </div>
        ))}
      </dl>
    </Drawer>
  );
}
