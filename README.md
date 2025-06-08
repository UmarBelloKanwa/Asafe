🚨 Travel Safety Alert App Backend
📌 Overview
The Travel Safety Alert App Backend powers a mobile app for reporting incidents (e.g., accidents, roadblocks), receiving real-time alerts, managing travel groups, and triggering emergency SOS signals.

Built with:

Node.js, Express, PostgreSQL + PostGIS

Prisma, JWT, Socket.io

AWS S3 for media storage

This backend serves APIs and real-time events to a React Native frontend.

🗂️ Project Structure
bash
Copy
Edit
/docs       → Documentation (backend-guide.md, api-routes-note.md)
/prisma     → Prisma schema (schema.prisma)
/src        → Source code (routes, utilities)
/.env       → Environment variables
package.json → Project dependencies & scripts
🧰 Tech Stack
Node.js + Express – RESTful API server

PostgreSQL + PostGIS – Database with geospatial support

Prisma – ORM for managing DB models and migrations

JWT – Stateless authentication

Socket.io – Real-time alerts & chat (optional)

AWS S3 – Media storage

✅ Prerequisites
Node.js (v16+)

PostgreSQL (v14+) + PostGIS extension

AWS Account for S3

Git

VS Code (Recommended)

🚀 Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-username>/travel-safety-backend.git
cd travel-safety-backend
2. Install Dependencies
bash
Copy
Edit
npm install
Includes: express, @prisma/client, jsonwebtoken, socket.io, aws-sdk, express-validator, bcrypt

3. Set Up PostgreSQL + PostGIS
Install or connect to a PostgreSQL instance

Enable PostGIS:

sql
Copy
Edit
CREATE EXTENSION postgis;
Create the database:

bash
Copy
Edit
createdb travel_safety_db
4. Configure Environment Variables
bash
Copy
Edit
cp .env.example .env
Edit .env:

env
Copy
Edit
DATABASE_URL="postgresql://user:password@localhost:5432/travel_safety_db?schema=public"
JWT_SECRET="your-secret-key"
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_S3_BUCKET="your-bucket-name"
5. Prisma Setup
bash
Copy
Edit
npx prisma migrate dev
npx prisma generate
6. Start the Server
bash
Copy
Edit
npm start         # for production
npm run dev       # for development with nodemon
Server runs at: http://localhost:3000

🔌 Testing the API
Use Postman or Thunder Client (VS Code).

Example:

http
Copy
Edit
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
More routes in: /docs/api-routes-note.md

📚 Project Documentation
Backend Guide: /docs/backend-guide.md
Includes features, DB schema, and design flow

API Reference: /docs/api-routes-note.md
All endpoints and usage examples

Database Models: /prisma/schema.prisma

👥 Collaboration
👨‍💻 Team: 2 Developers
Developer	Responsibilities
Dev 1	User Management, SOS, Prisma Setup
Dev 2	Incident Reports, Location Features, Socket.io

🔁 Git Workflow
bash
Copy
Edit
# Create a new branch
git checkout -b feature/your-feature

# Commit your changes
git commit -m "Add: your feature"

# Push to GitHub
git push origin feature/your-feature
Create a Pull Request

Review & merge into main

💬 Communication
Use Slack or WhatsApp for updates

Schedule weekly check-ins

📋 Task Tracking
Use GitHub Issues or Trello
(e.g., “Implement /api/sos”, “Set up PostGIS queries”)

🔄 Development Workflow
Pull latest code: git pull origin main

Work on your assigned feature

Test locally (Postman, npm test)

Commit & push to your branch

Open a PR and request review

Merge after approval

🧪 Testing
Unit Tests – using Jest

Integration Tests – using Supertest

Manual Tests – Socket.io alerts & PostGIS queries

🚢 Deployment
Deploy to:

Heroku, Render, or AWS Elastic Beanstalk

Requirements:

Set up environment variables on the platform

Use HTTPS for all API calls

Ensure PostgreSQL + PostGIS support (e.g., via AWS RDS)

🤝 Contributing
Follow coding style in existing files

Comment complex logic (e.g., PostGIS usage)

Update /docs/backend-guide.md with your changes

Test your code before opening a PR

📘 Resources
📚 Prisma Docs

📍 PostGIS Docs

💬 Socket.io Docs

🗃️ AWS S3 Docs

📦 Express Docs

📞 Contact
For questions or help:

Open a GitHub Issue

Or message the team via Slack/WhatsApp