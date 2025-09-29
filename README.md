⚛️ MERN Stack Application Boilerplate
This repository provides a complete, foundational structure for a MERN (MongoDB, Express, React, Node.js) Stack application. It enforces a clean separation between the backend API and the React client, ensuring rapid development and production readiness.

🛠️ Tech Stack
This project is built using the industry-standard MERN stack augmented with modern tooling for efficiency:

Database: MongoDB (via Mongoose) – A document database for flexible, scalable data storage.

Backend API: Express.js (Node.js) – A high-performance, unopinionated server for creating RESTful APIs.

Frontend Client: React (with Vite) – A component-based UI library for dynamic client-side rendering.

Styling: Tailwind CSS – A utility-first CSS framework for rapid responsive design.

Prerequisites
To run this project locally, ensure you have the following software installed:

Node.js (v18+ recommended)

npm (Node Package Manager)

Access to a MongoDB Atlas Cluster (or local MongoDB instance) to provide the connection string.

⚙️ Getting Started
Follow these three steps to set up the project environment on your local machine.

1. Clone the Repository
git clone [YOUR_REPOSITORY_URL]
cd [YOUR_REPOSITORY_NAME]

2. Configure Environment Variables
Create a file named .env inside the backend/ directory. This file secures your sensitive connection details.

backend/.env example:

# MongoDB Atlas Connection URI (Replace with your actual credentials)
MONGO_URI="mongodb+srv://<username>:<password>@<cluster-url>/mern_app_db?retryWrites=true&w=majority"

# Port for the Express server to listen on
PORT=5000

3. Install Dependencies
You must install dependencies separately in both the server and client directories.

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Return to the root directory
cd ..

▶️ Running the Application
The project is configured to use a concurrent script to run both services simultaneously, providing the smoothest development workflow (requires the concurrently package to be installed in the root directory).

To start everything:

npm run start:dev

Here are the primary scripts available:

npm run start:dev (Root Directory): Runs both the backend and frontend simultaneously. This is the recommended script for development.

npm start (backend/): Starts the Express API server in production mode.

npm run dev (backend/): Starts the Express API server using nodemon (watch mode).

npm run dev (frontend/): Starts the React development server.

The Backend API will be accessible at http://localhost:5000.

The Frontend Client will be accessible at http://localhost:3000 (or another available port).

Note: The frontend is configured to automatically proxy all /api requests to the backend server during development, eliminating CORS issues locally.

✅ Health Check Endpoint
You can verify the status of the server and database connection by making a GET request to the /api/status endpoint. This route returns the current running status of the Express server and the MongoDB connection state. THanks
