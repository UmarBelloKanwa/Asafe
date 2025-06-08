Travel Safety Alert App Backend
Overview
The Travel Safety Alert App Backend powers a mobile application that enables users to report location-based incidents (e.g., accidents, roadblocks), receive real-time alerts, manage travel groups, and trigger emergency SOS signals. Built with Node.js, Express, PostgreSQL (with PostGIS), Prisma, JWT, Socket.io (for real-time alerts), and AWS S3 (for media storage), it serves APIs and real-time events to a React Native frontend. This README provides setup and collaboration instructions for the development team.
Project Structure

/docs: Contains project documentation (backend-guide.md, api-routes-note.md).
/prisma: Prisma schema (schema.prisma) for database models.
/src: Source code, including routes (auth.js, incidents.js, sos.js) and utilities (s3.js).
package.json: Node.js dependencies and scripts.
.env: Environment variables (e.g., database URL, JWT secret).

Tech Stack

Node.js & Express: REST API server.
PostgreSQL with PostGIS: Relational database with geospatial query support.
Prisma: ORM for database interactions and migrations.
JWT: Stateless authentication.
Socket.io: Real-time alerts and group chats (optional).
AWS S3: Media storage for incident photos/videos.

Prerequisites

Node.js (v16 or higher): Download.
PostgreSQL (v14 or higher): Download or use a cloud provider (e.g., Supabase, AWS RDS).
PostGIS: Geospatial extension for PostgreSQL.
AWS Account: For S3 media storage.
Git: For version control.
VS Code: Recommended for editing code and markdown files.

Setup Instructions

Clone the Repository:
git clone https://github.com/<your-username>/travel-safety-backend.git
cd travel-safety-backend


Install Dependencies:
npm install

Key dependencies: express, @prisma/client, jsonwebtoken, socket.io, aws-sdk, express-validator, bcrypt.

Set Up PostgreSQL and PostGIS:

Install PostgreSQL locally or use a cloud provider.
Enable PostGIS extension:CREATE EXTENSION postgis;


Create a database (e.g., travel_safety_db).


Configure Environment Variables:

Copy .env.example to .env:cp .env.example .env


Update .env with your credentials:DATABASE_URL="postgresql://user:password@localhost:5432/travel_safety_db?schema=public"
JWT_SECRET="your-secret-key"
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_S3_BUCKET="your-bucket-name"




Set Up Prisma:

Apply database migrations:npx prisma migrate dev


Generate Prisma client:npx prisma generate




Run the Application:

Start the server:npm start

or use nodemon for development:npm run dev


The server runs on http://localhost:3000.


Test APIs:

Use Postman or Thunder Client (VS Code extension) to test endpoints (see /docs/api-routes-note.md).
Example: POST http://localhost:3000/api/auth/register with { "email": "test@example.com", "password": "password123" }.



Project Documentation

Backend Guide: /docs/backend-guide.md details features, database schema, and implementation steps. View in VS Code (press Ctrl+Shift+V for preview) or on GitHub.
API Routes: /docs/api-routes-note.md lists all endpoints (e.g., /api/auth/register, /api/incidents). Test these routes to verify functionality.
Prisma Schema: /prisma/schema.prisma defines database models (e.g., User, Incident).

Collaboration

Team: 2 developers.
Task Division:
Developer 1: User Management, Emergency SOS, Prisma setup.
Developer 2: Incident Reporting, Location Services, Socket.io (real-time alerts).


Git Workflow:
Work on feature branches (e.g., git checkout -b feature/auth).
Commit changes: git commit -m "Add user login endpoint".
Push to GitHub: git push origin feature/auth.
Create pull requests (PRs) for code review and merging into main.


Communication:
Use Slack/WhatsApp for quick updates.
Schedule weekly check-ins to discuss progress and blockers.


Task Tracking:
Use GitHub Issues or Trello to assign tasks (e.g., “Implement /api/sos”, “Set up PostGIS queries”).



Development Workflow

Pull latest changes: git pull origin main.
Work on assigned features (e.g., auth or incidents).
Test locally with Postman or unit tests (npm test).
Commit and push to your branch.
Open a PR and review each other’s code.
Merge into main after approval.

Testing

Unit Tests: Use Jest for controllers and services (e.g., authController.test.js).
Integration Tests: Use Supertest to test API endpoints.
Manual Testing: Test real-time alerts with Socket.io and geospatial queries with sample data.

Deployment

Deploy to a platform like Heroku, AWS Elastic Beanstalk, or Render.
Set up environment variables in the deployment platform.
Ensure PostgreSQL/PostGIS is accessible (e.g., via AWS RDS).
Use HTTPS for secure API calls.

Contributing

Follow the coding style in existing files (e.g., src/routes/incidents.js).
Add comments for complex logic (e.g., PostGIS queries).
Update /docs/backend-guide.md with new implementation details.
Test all changes before creating a PR.

Resources

Prisma Docs
PostGIS Docs
Socket.io Docs
AWS S3 Docs
Express Docs

Contact
For questions, create a GitHub Issue or message the team on Slack/WhatsApp.
