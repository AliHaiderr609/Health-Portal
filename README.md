# Health Portal

Health Portal is a full-stack web application with:

- a React frontend in `front`
- a Node.js/Express backend in `backend`
- MongoDB as the primary database

## Project Structure

```text
Health Portal-main/
|- backend/   # Express API, auth, appointments, payments, dashboard
|- front/     # React client application
```

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)
- MongoDB instance (local or cloud)

## Environment Configuration

### Backend (`backend/.env`)

Create a `.env` file in `backend` and add:

```env
BASE_URL=http://localhost:3000
PORT=3000
MONGO_URI=your_mongodb_connection_string
ADMIN_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
PW_ENCRYPTION_KEY=your_password_encryption_key
PWD_SALT_ROUNDS=10
JWT_EXPIRATION_MINUTES=60
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend (`front/.env`)

Create a `.env` file in `front` and add:

```env
REACT_APP_BASE_ADMIN_API=http://localhost:3000
REACT_APP_BASE_API=http://localhost:3000
REACT_APP_BACKEND_FILE_URL=http://localhost:3000
```

Adjust URLs for your deployment environment.

## Installation

Install dependencies in both apps:

```bash
cd backend
npm install

cd ../front
npm install
```

## Running the Project

Open two terminals.

1) Start backend:

```bash
cd backend
npm run dev
```

2) Start frontend:

```bash
cd front
npm start
```

Frontend usually runs on `http://localhost:3000` (or the next available port), and should connect to the backend URL configured in frontend environment variables.

## Available Scripts

### Backend

- `npm run dev` - starts backend with nodemon

### Frontend

- `npm start` - runs React app in development mode
- `npm run build` - builds production bundle
- `npm test` - runs tests

## Notes

- Keep secrets in `.env` files and do not commit them.
- If backend and frontend share the same port during local development, change one of them.
