"use client";

import * as React from "react";

export function useDetailDrawer<T>() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);

  const openDrawer = React.useCallback((nextData: T) => {
    setData(nextData);
    setOpen(true);
  }, []);

  const closeDrawer = React.useCallback(() => {
    setOpen(false);
  }, []);

  return {
    open,
    data,
    openDrawer,
    closeDrawer,
  };
}
