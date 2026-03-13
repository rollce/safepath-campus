"use client";

import { IconHeartbeat, IconMapRoute, IconShieldHalfFilled, IconStack3 } from "@tabler/icons-react";
import { Anchor, Group, Paper, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview", icon: <IconShieldHalfFilled size={16} /> },
  { href: "/route-lab", label: "Route Lab", icon: <IconMapRoute size={16} /> },
  { href: "/check-ins", label: "Check-ins", icon: <IconHeartbeat size={16} /> },
  { href: "/resources", label: "Resources", icon: <IconStack3 size={16} /> },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <Paper
      withBorder
      radius={0}
      px="md"
      py="sm"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,0.9)",
      }}
    >
      <Group justify="space-between" wrap="wrap" maw={1200} mx="auto">
        <Anchor component={Link} href="/" underline="never">
          <Text fw={700} size="lg" c="dark">
            SafePath Campus
          </Text>
        </Anchor>
        <Group gap="xs">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                underline="never"
                px="sm"
                py={6}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: active ? "#e7f0ff" : "white",
                  fontWeight: 600,
                  color: "#1f2937",
                }}
              >
                {link.icon}
                {link.label}
              </Anchor>
            );
          })}
        </Group>
      </Group>
    </Paper>
  );
}
