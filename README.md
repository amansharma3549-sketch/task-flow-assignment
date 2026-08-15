# TaskFlow

A small full-stack task board built for the TaskFlow take-home assignment.

## Stack
- React + Vite frontend
- Node.js + Express backend
- SQLite via better-sqlite3
- Jest + Supertest tests

## Features
Create, edit, delete and move tasks between columns; priority filtering; backend validation; persistent SQLite data; seed data; SQL reporting queries; tests.

## Run locally
Requirements: Node.js 18+.

### Backend
```bash
cd backend
npm install
npm start
```
API runs at `http://localhost:4000`.

### Frontend
In another terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the URL shown by Vite (usually `http://localhost:5173`).

### Tests
```bash
cd backend
npm test
```

## Database
`backend/schema.sql` defines boards, columns and tasks with primary/foreign keys, required fields and constraints. The database is automatically initialized with seed data on first backend start.

Required non-trivial SQL examples are implemented in `GET /api/reports/tasks-per-column` and `GET /api/reports/tasks-by-priority?priority=High`.

## Decisions / assumptions
I used a simple single-board model because accounts, multiple teams and real-time collaboration are explicitly out of scope. Task movement uses a dropdown because the brief states that a working control is preferable to broken drag-and-drop.

## If I had more time
I would add drag-and-drop, title search, richer automated API coverage, and deployment with a hosted database.

## Time / learning
I focused on the required functionality first, then validation, persistence and tests. One useful detail was using SQLite foreign keys and database-level checks so validation is not dependent only on the frontend.
