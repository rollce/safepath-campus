import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { MantineThemeProvider } from "@/components/theme-provider";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafePath Campus",
  description: "Night safety toolkit for students and campus communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineThemeProvider>
          <SiteNav />
          {children}
        </MantineThemeProvider>
      </body>
    </html>
  );
}
