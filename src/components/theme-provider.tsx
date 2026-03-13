"use client";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "indigo",
  defaultRadius: "md",
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Merriweather, serif" },
});

export function MantineThemeProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
