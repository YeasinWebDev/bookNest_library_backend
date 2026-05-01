# BookNest Backend

A module-based Node.js backend using Express.js, TypeScript, and MongoDB.

## Features

- TypeScript with ESM
- MVC/Module-based architecture
- JWT Authentication
- Password hashing with bcrypt
- Request validation with Zod
- Centralized error handling
- CORS support

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in the values
4. Start MongoDB
5. Run in development: `npm run dev`
6. Build and start: `npm run build && npm start`

## API Endpoints

### User Module

- POST /api/users/signup
- POST /api/users/login
- GET /api/users/profile (requires auth)

## Folder Structure

```
src/
├── app.ts
├── server.ts
├── config/
│   ├── database.ts
│   └── env.ts
├── middlewares/
│   ├── auth.ts
│   ├── errorHandler.ts
│   ├── notFound.ts
│   └── validate.ts
├── modules/
│   └── user/
│       ├── controller.ts
│       ├── interface.ts
│       ├── model.ts
│       ├── route.ts
│       ├── service.ts
│       └── validation.ts
└── utils/
    ├── ApiError.ts
    ├── ApiResponse.ts
    └── asyncHandler.ts
```

## Postman Collection

Import the following routes into Postman:

- Signup: POST http://localhost:5000/api/users/signup
  Body: { "name": "John Doe", "email": "john@example.com", "password": "password123" }

- Login: POST http://localhost:5000/api/users/login
  Body: { "email": "john@example.com", "password": "password123" }

- Get Profile: GET http://localhost:5000/api/users/profile
  Headers: Authorization: Bearer <token>