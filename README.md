# SafePath Campus

SafePath Campus is a student safety web app for nighttime mobility planning. It estimates route risk and provides timed check-in safety workflows.

Live: https://safe.rollsev.work

## Why this project exists

Late-night movement on or near campus can feel unsafe, especially when students walk alone. This project models a practical safety stack: risk estimation + check-in escalation.

## Product goals

- Estimate route risk before a walk
- Offer safer route variants with context
- Arm timed check-ins with emergency fallback protocol
- Provide actionable resources and prevention guidance

## Pages and user flows

- `/` Overview
  - Product framing and capability summary
- `/route-lab`
  - Enter route points and time to estimate risk
- `/check-ins`
  - Configure timed check-in with trusted contact
- `/resources`
  - Safety checklist and emergency guidance

## API surface

### `POST /api/routes`
Input:
- `from` (string)
- `to` (string)
- `hour` (number, optional; defaults to 21)

Risk logic:
- Zone baseline from internal map (`dormitory`, `library`, `downtown`, etc.)
- Night factor added when `hour >= 22` or `hour <= 5`
- Final risk score capped at `10`

Output:
- `riskScore`
- `recommendation`
- `routeVariants` with ETA, lighting, and patrol availability

### `POST /api/checkins`
Input:
- `contact` (required)
- `duration` in minutes (5..180)

Output:
- `status`
- `nextCheckInInMinutes`
- `backupProtocol`

## Safety workflow model

- Student configures contact + duration
- System arms periodic check-in expectation
- If missed, fallback protocol advises contact and security escalation

## UI / UX stack

- Mantine (`Tabs`, `Card`, `Table`, `Badge`, `Alert`, inputs)
- Tabler icons for route/safety semantics
- Tailwind CSS + component-level styles

## Technical stack

- Next.js 16 (App Router + Route Handlers)
- TypeScript
- Tailwind CSS 4
- Mantine

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

- Deployed on Railway
- Public domain: `safe.rollsev.work`

## Portfolio value

SafePath demonstrates risk-oriented API design and safety UX, combining decision logic with behavioral fallback workflows.

## Roadmap

- Add real geospatial routing integration
- Add push notifications for check-in reminders
- Add institutional dashboards for campus safety teams
