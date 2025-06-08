# Travel Safety Alert App Backend

## Overview
The Travel Safety Alert App Backend powers a mobile application that enables users to report location-based incidents (e.g., accidents, roadblocks), receive real-time alerts, manage travel groups, and trigger emergency SOS signals. Built with Node.js, Express, PostgreSQL (with PostGIS), Prisma, JWT, Socket.io (for real-time alerts), and AWS S3 (for media storage), it serves APIs and real-time events to a React Native frontend. This README provides setup and collaboration instructions for the development team.

---

## Project Structure
- `/docs`: Project documentation (`backend-guide.md`, `api-routes-note.md`).
- `/prisma`: Prisma schema (`schema.prisma`) for database models.
- `/src`: Source code, including routes and utilities.
- `package.json`: Node.js dependencies and scripts.
- `.env`: Environment variables (e.g., database URL, JWT secret).

---

## Tech Stack
- **Node.js & Express**: REST API server.
- **PostgreSQL with PostGIS**: Relational database with geospatial query support.
- **Prisma**: ORM for database interactions and migrations.
- **JWT**: Stateless authentication.
- **Socket.io**: Real-time alerts and group chats (optional).
- **AWS S3**: Media storage for incident photos/videos.

---

## Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v14 or higher)
- PostGIS extension for PostgreSQL
- AWS Account (for S3)
- Git
- VS Code (recommended)

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/<your-username>/travel-safety-backend.git
cd travel-safety-backend
```

### 2. Install Dependencies
```sh
npm install
```
Key dependencies: express, @prisma/client, jsonwebtoken, socket.io, aws-sdk, express-validator, bcrypt.

### 3. Set Up PostgreSQL and PostGIS
- Install PostgreSQL locally or use a cloud provider.
- Enable PostGIS extension:
  ```sql
  CREATE EXTENSION postgis;
  ```
- Create a database (e.g., `travel_safety_db`).

### 4. Configure Environment Variables
Copy `.env.example` to `.env`:
```sh
cp .env.example .env
```
Update `.env` with your credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/travel_safety_db?schema=public"
JWT_SECRET="your-secret-key"
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_S3_BUCKET="your-bucket-name"
```

### 5. Set Up Prisma
Apply database migrations:
```sh
npx prisma migrate dev
```
Generate Prisma client:
```sh
npx prisma generate
```

### 6. Run the Application
Start the server:
```sh
npm start
```
Or use nodemon for development:
```sh
npm run dev
```
The server runs on [http://localhost:3000](http://localhost:3000).

### 7. Test APIs
Use Postman or Thunder Client (VS Code extension) to test endpoints (see `/docs/api-routes-note.md`).
Example:
```http
POST http://localhost:3000/api/auth/register
{
  "email": "test@example.com",
  "password": "password123"
}
```

---

## Project Documentation
- **Backend Guide**: `/docs/backend-guide.md` (features, database schema, implementation steps).
- **API Routes**: `/docs/api-routes-note.md` (all endpoints).
- **Prisma Schema**: `/prisma/schema.prisma` (database models).

---

## Collaboration
- **Team**: 2 developers.
- **Task Division:**
  - Developer 1: User Management, Emergency SOS, Prisma setup.
  - Developer 2: Incident Reporting, Location Services, Socket.io (real-time alerts).

- **Git Workflow:**
  - Work on feature branches (e.g., `git checkout -b feature/auth`).
  - Commit changes: `git commit -m "Add user login endpoint"`.
  - Push to GitHub: `git push origin feature/auth`.
  - Create pull requests (PRs) for code review and merging into main.

- **Communication:**
  - Use Slack/WhatsApp for quick updates.
  - Schedule weekly check-ins to discuss progress and blockers.

- **Task Tracking:**
  - Use GitHub Issues or Trello to assign tasks (e.g., “Implement /api/sos”, “Set up PostGIS queries”).

---

## Development Workflow
1. Pull latest changes: `git pull origin main`.
2. Work on assigned features (e.g., auth or incidents).
3. Test locally with Postman or unit tests (`npm test`).
4. Commit and push to your branch.
5. Open a PR and review each other’s code.
6. Merge into main after approval.

---

## Testing
- **Unit Tests**: Use Jest for controllers and services (e.g., `authController.test.js`).
- **Integration Tests**: Use Supertest to test API endpoints.
- **Manual Testing**: Test real-time alerts with Socket.io and geospatial queries with sample data.

---

## Deployment
- Deploy to a platform like Heroku, AWS Elastic Beanstalk, or Render.
- Set up environment variables in the deployment platform.
- Ensure PostgreSQL/PostGIS is accessible (e.g., via AWS RDS).
- Use HTTPS for secure API calls.

---

## Contributing
- Follow the coding style in existing files (e.g., `src/routes/incidents.js`).
- Add comments for complex logic (e.g., PostGIS queries).
- Update `/docs/backend-guide.md` with new implementation details.
- Test all changes before creating a PR.

---

## Resources
- [Prisma Docs](https://www.prisma.io/docs)
- [PostGIS Docs](https://postgis.net/docs/)
- [Socket.io Docs](https://socket.io/docs/)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3/index.html)
- [Express Docs](https://expressjs.com/)

---

## Contact
For questions, create a GitHub Issue or message the team on Slack/WhatsApp.
