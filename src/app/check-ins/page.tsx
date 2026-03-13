"use client";

import { Alert, Button, Card, Container, NumberInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { useState } from "react";

interface CheckinResult {
  status: string;
  contact: string;
  duration: number;
  nextCheckInInMinutes: number;
  backupProtocol: string;
}

export default function CheckInsPage() {
  const [contact, setContact] = useState("");
  const [duration, setDuration] = useState(30);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CheckinResult | null>(null);

  async function activate() {
    setError("");
    const response = await fetch("/api/checkins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, duration }),
    });

    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error ?? "Could not activate check-ins");
      setResult(null);
      return;
    }

    setResult(payload);
  }

  return (
    <Container size="md" py="xl">
      <Card withBorder radius="lg" p="lg">
        <Title order={1}>Timed check-in protection</Title>
        <Text c="dimmed" mt="sm">
          If you miss scheduled check-ins, the app escalates to your trusted contact and security flow.
        </Text>
        <Stack mt="md">
          <TextInput label="Emergency contact" placeholder="Name or phone" value={contact} onChange={(e) => setContact(e.currentTarget.value)} />
          <NumberInput label="Trip duration (minutes)" min={5} max={180} value={duration} onChange={(v) => setDuration(Number(v))} />
          <Button onClick={activate}>Arm Check-ins</Button>
        </Stack>

        {error ? <Alert color="red" mt="md">{error}</Alert> : null}
        {result ? (
          <Alert color="teal" mt="md">
            Status: {result.status}. Next check-in in {result.nextCheckInInMinutes} minutes. Protocol: {result.backupProtocol}
          </Alert>
        ) : null}
      </Card>
    </Container>
  );
}
