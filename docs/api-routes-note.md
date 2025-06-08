# API Routes for Travel Safety Alert App

Below are the primary API endpoints for the backend, grouped by functionality. All routes are prefixed with `/api`.

---

## Authentication
- **POST** `/auth/register`: Register a new user (email, phone, password, name).
- **POST** `/auth/login`: Authenticate user and return JWT token.
- **POST** `/auth/refresh-token`: Refresh JWT token.
- **POST** `/auth/reset-password`: Initiate password reset via email/SMS OTP.

---

## Users
- **GET** `/users/:id`: Fetch user profile by ID.
- **PUT** `/users/:id/profile`: Update user profile (avatar, bio).
- **PUT** `/users/:id/preferences`: Update user preferences (notifications, language).
- **PUT** `/users/:id/emergency-contacts`: Update emergency contact list.

---

## Incidents
- **POST** `/incidents`: Create a new incident (type, description, location, media).
- **GET** `/incidents`: Fetch incidents by location and radius (`?lat=&lon=&radius=`).
- **GET** `/incidents/:id`: Fetch a specific incident.
- **PUT** `/incidents/:id`: Update incident (e.g., mark resolved).
- **DELETE** `/incidents/:id`: Delete incident (admin only).

---

## Comments
- **POST** `/incidents/:id/comments`: Add a comment to an incident.
- **GET** `/incidents/:id/comments`: Fetch comments for an incident.

---

## Travel Groups & Chat
- **POST** `/groups`: Create a travel group.
- **GET** `/groups/:id`: Fetch group details.
- **POST** `/groups/:id/chat`: Send a chat message in a group.

---

## Emergency SOS
- **POST** `/sos`: Trigger an SOS alert with current location.
- **GET** `/users/:id/emergency-contacts`: Fetch user’s emergency contacts.

---

## Routes
- **POST** `/routes`: Save a new route.
- **GET** `/routes/:id`: Fetch a specific route.

---

## Notes
- All routes except `/auth/register` and `/auth/login` require JWT authentication via the `Authorization` header.
- Use query parameters for filtering (e.g., `/incidents?lat=6.5&lon=3.3&radius=10`).
- Secure sensitive routes (e.g., `/incidents/:id/delete`) with role-based access (admin only).

