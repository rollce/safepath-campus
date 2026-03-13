"use client";

import { Badge, Button, Card, Container, Grid, NumberInput, Select, Stack, Table, Text, Title } from "@mantine/core";
import { useState } from "react";

interface RouteVariant {
  name: string;
  eta: number;
  lighting: string;
  patrol: string;
}

interface RouteResult {
  riskScore: number;
  recommendation: string;
  routeVariants: RouteVariant[];
}

const points = ["Dormitory", "Library", "Downtown", "Riverside", "Sports", "Northgate"];

export default function RouteLabPage() {
  const [from, setFrom] = useState("Dormitory");
  const [to, setTo] = useState("Library");
  const [hour, setHour] = useState(22);
  const [result, setResult] = useState<RouteResult | null>(null);

  async function analyzeRoute() {
    const response = await fetch("/api/routes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, hour }),
    });

    const payload = await response.json();
    if (response.ok) {
      setResult(payload);
    }
  }

  return (
    <Container size="xl" py="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card withBorder radius="lg" p="lg">
            <Title order={2}>Route risk lab</Title>
            <Text c="dimmed" mt="xs">Estimate risk before walking alone at night.</Text>
            <Stack mt="md">
              <Select label="From" value={from} onChange={(v) => setFrom(v ?? "Dormitory")} data={points} />
              <Select label="To" value={to} onChange={(v) => setTo(v ?? "Library")} data={points} />
              <NumberInput label="Departure hour" min={0} max={23} value={hour} onChange={(v) => setHour(Number(v))} />
              <Button onClick={analyzeRoute}>Analyze Route</Button>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card withBorder radius="lg" p="lg" h="100%">
            <Title order={2}>Result</Title>
            {!result ? <Text c="dimmed" mt="sm">Run analysis to view risk profile and route options.</Text> : null}
            {result ? (
              <>
                <Badge mt="sm" color={result.riskScore >= 7 ? "red" : result.riskScore >= 5 ? "yellow" : "green"}>
                  Risk score: {result.riskScore.toFixed(1)} / 10
                </Badge>
                <Text mt="sm">{result.recommendation}</Text>

                <Table mt="md" striped withTableBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Route</Table.Th>
                      <Table.Th>ETA</Table.Th>
                      <Table.Th>Lighting</Table.Th>
                      <Table.Th>Patrol</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {result.routeVariants.map((variant) => (
                      <Table.Tr key={variant.name}>
                        <Table.Td>{variant.name}</Table.Td>
                        <Table.Td>{variant.eta} min</Table.Td>
                        <Table.Td>{variant.lighting}</Table.Td>
                        <Table.Td>{variant.patrol}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </>
            ) : null}
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
