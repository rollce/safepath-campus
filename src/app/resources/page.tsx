"use client";

import { IconBook, IconPhoneCall, IconShieldLock } from "@tabler/icons-react";
import { Card, Container, Grid, List, Text, Title } from "@mantine/core";

export default function ResourcesPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1}>Safety resources center</Title>
      <Text c="dimmed" mt="sm">
        A dedicated support section for emergency contacts, prevention guides, and reporting channels.
      </Text>

      <Grid mt="lg">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="lg" p="md" h="100%">
            <IconPhoneCall size={24} />
            <Title order={3} mt="sm">Emergency contacts</Title>
            <List mt="sm" spacing="xs">
              <List.Item>Campus security: +1 555 0101</List.Item>
              <List.Item>Night shuttle desk: +1 555 0202</List.Item>
              <List.Item>City emergency: 911</List.Item>
            </List>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="lg" p="md" h="100%">
            <IconShieldLock size={24} />
            <Title order={3} mt="sm">Prevention checklist</Title>
            <List mt="sm" spacing="xs">
              <List.Item>Share route before departure</List.Item>
              <List.Item>Avoid poorly lit shortcuts</List.Item>
              <List.Item>Enable timed check-ins</List.Item>
            </List>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="lg" p="md" h="100%">
            <IconBook size={24} />
            <Title order={3} mt="sm">Policy notes</Title>
            <Text mt="sm" c="dimmed">
              SafePath provides guidance and support flows, but cannot replace emergency services.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
