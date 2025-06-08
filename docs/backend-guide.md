# Backend Project Guide for Travel Safety Alert App

## Tech Stack

- **Node.js & Express**: For building a scalable REST API server.
- **PostgreSQL with PostGIS**: PostgreSQL for relational data storage, with the PostGIS extension for geospatial queries (e.g., `ST_DWithin` for location-based incident fetching).
- **Prisma**: ORM for type-safe database interactions, schema migrations, and query building.
- **JWT Authentication**: For secure, stateless user authentication.
- **Socket.io (optional)**: Enables real-time features like alerts and group chats.
- **Cloud Storage (AWS S3)**: For secure storage of incident media (photos/videos).

---

## 1. Project Overview

The backend powers a Travel Safety Alert App, enabling users to report location-based incidents (e.g., accidents, roadblocks), receive real-time alerts, manage travel groups, and trigger emergency SOS signals. It integrates with a React Native frontend, providing APIs for user data, incident reports, map services, and notifications. The system prioritizes geospatial functionality, real-time communication, and security.

**Key Goals:**
- Deliver fast, location-based incident querying for map rendering.
- Ensure secure user authentication and data privacy.
- Support real-time alerts and group communication.
- Scale to handle multiple users and frequent incident updates.

---

## 2. Core Features & Modules

### a. User Management
- **Registration**: Users sign up with email, phone, and password. Optional fields include name and avatar.
- **Login**: Issues a JWT token for session management (e.g., 24-hour validity).
- **Profile Management**: Update avatar, bio, and preferences (e.g., notification settings).
- **Role Management**: Roles include user (standard features) and admin (incident deletion, moderation).
- **Password Reset**: Sends a one-time password (OTP) via email or SMS.

**Example Workflow:**
1. User submits registration data via `/api/auth/register`.
2. Backend hashes the password (using bcrypt) and stores user data via Prisma.
3. On login, Prisma verifies credentials, and a JWT token is returned.

### b. Incident Reporting
- **Create Incidents**: Submit incident details (type: bandit/accident/roadblock, description, lat/lon, media, timestamp). Links to reporter’s ID.
- **Fetch Incidents**: Query incidents within a radius of a user’s location (using PostGIS `ST_DWithin`).
- **Update Incidents**: Mark as resolved or confirm validity.
- **Delete Incidents**: Admin-only moderation.
- **Incident Comments**: Add/edit comments on incidents.

**Example:**
A user reports a roadblock at (lat: 6.5244, lon: 3.3792). The backend stores it and notifies nearby users via Socket.io.

### c. Location & Map Services
- **Last Known Location**: Stores user’s latest coordinates.
- **Nearby Incidents**: Queries incidents near a user’s location using PostGIS.
- **Route Planning**: Provides routes with incident markers and calculates distances.
- **Distance Calculation**: Uses PostGIS `ST_Distance` or geolib for lat/lon distances.

### d. Real-time Alerts (Optional but Recommended)
- **WebSocket with Socket.io**: Users join rooms based on location or group ID.
- **Subscription Model**: Subscribe to alerts for regions or groups.
- **Push Notifications**: Triggered for critical incidents.

### e. Emergency SOS
- **SOS Creation**: Triggers SOS with current location and emergency contacts.
- **Auto Messages**: Sends templated distress messages via SMS/email.
- **Emergency Contacts**: Manage contact lists.

### f. Travel Groups & Chat
- **Group Creation**: Create groups with routes, members, and ETAs.
- **Group Chat**: Real-time messaging via Socket.io.
- **Incident Sharing**: Share incidents within groups.

### g. Route Planning
- **Route Saving**: Store user-defined routes.
- **Safe Route Suggestions**: Recommend routes based on incident data.
- **Incident Awareness**: Mark incidents along routes.

### h. Settings & Preferences
- **Notifications**: Toggle push/email notifications.
- **Privacy**: Control location sharing or SOS contact visibility.
- **Language**: Support multiple languages.

---

## 3. Database Schema Overview

Below is the Prisma schema for PostgreSQL, leveraging PostGIS for geospatial data.

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id                Int       @id @default(autoincrement())
  name              String?
  email             String    @unique
  phone             String?   @unique
  passwordHash      String
  avatarUrl         String?
  role              String    @default("user")
  preferences       Json      @default("{\"notifications\": true, \"language\": \"en\"}")
  emergencyContacts String[]  @default([])
  lastLocation      Point?
  createdAt         DateTime  @default(now())
  incidents         Incident[]
  comments          Comment[]
  groups            Group[]   @relation("GroupMembers")
  chats             Chat[]
  routes            Route[]
}

model Incident {
  id          Int       @id @default(autoincrement())
  type        String
  description String
  location    Point
  mediaUrls   String[]  @default([])
  reporterId  Int
  reporter    User      @relation(fields: [reporterId], references: [id])
  timestamp   DateTime  @default(now())
  status      String    @default("active")
  comments    Comment[]
}

model Comment {
  id         Int       @id @default(autoincrement())
  incidentId Int
  userId     Int
  incident   Incident  @relation(fields: [incidentId], references: [id])
  user       User      @relation(fields: [userId], references: [id])
  text       String
  timestamp  DateTime  @default(now())
}

model Group {
  id        Int       @id @default(autoincrement())
  name      String
  route     Json
  members   User[]    @relation("GroupMembers")
  chats     Chat[]
  createdAt DateTime  @default(now())
}

model Chat {
  id        Int       @id @default(autoincrement())
  groupId   Int
  userId    Int
  group     Group     @relation(fields: [groupId], references: [id])
  user      User      @relation(fields: [userId], references: [id])
  message   String
  timestamp DateTime  @default(now())
}

model Route {
  id          Int       @id @default(autoincrement())
  userId      Int
  user        User      @relation(fields: [userId], references: [id])
  origin      Point
  destination Point
  waypoints   Json      @default("[]")
  preferences Json      @default("{\"avoidIncidents\": true}")
  createdAt   DateTime  @default(now())
}

// Custom Point type for PostGIS
 type Point {
  lat Float
  lon Float
}
```

---
