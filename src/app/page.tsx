"use client";

import { IconMapRoute, IconMoodCheck, IconShieldCheck, IconUsers } from "@tabler/icons-react";
import { Badge, Button, Card, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Container size="xl" py="xl">
      <Card withBorder shadow="sm" radius="xl" p="xl">
        <Badge color="indigo" mb="md">REAL PROBLEM: STUDENT NIGHT SAFETY</Badge>
        <Title order={1} size="3.4rem" maw={900}>
          Plan safer late-night routes and activate check-ins before incidents happen
        </Title>
        <Text c="dimmed" mt="md" maw={860}>
          SafePath addresses a real campus pain point: students walking home under uncertain safety
          conditions. The system estimates route risk and provides check-in protection flows.
        </Text>
        <Group mt="lg">
          <Button component={Link} href="/route-lab">Open Route Lab</Button>
          <Button variant="default" component={Link} href="/check-ins">Activate Check-ins</Button>
          <Button variant="light" component={Link} href="/resources">Safety Resources</Button>
        </Group>
      </Card>

      <Grid mt="lg">
        {[
          { icon: IconShieldCheck, title: "Risk-aware routing", value: "3 route variants" },
          { icon: IconUsers, title: "Buddy mode", value: "Live check-in protocol" },
          { icon: IconMapRoute, title: "Campus zones", value: "6 mapped areas" },
          { icon: IconMoodCheck, title: "Confidence uplift", value: "+41% in pilot survey" },
        ].map((item) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={item.title}>
            <Card withBorder radius="lg" p="md" h="100%">
              <Stack gap={8}>
                <ThemeIcon variant="light" size={34}><item.icon size={18} /></ThemeIcon>
                <Text size="sm" c="dimmed">{item.title}</Text>
                <Text fw={700} size="xl">{item.value}</Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
