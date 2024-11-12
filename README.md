# Dockerized Fullstack Application

This project contains a Dockerized fullstack web application with both backend and frontend components. Below you'll find instructions for running the application, details on the Docker setup, and information on each service.

## Project Overview

The project includes a frontend built with React and a backend API built using Express.js. Both services are containerized using Docker for easy setup and deployment. The services interact seamlessly via a Docker network.

### Folder Structure

- `server/`: Contains the backend server files (`server.js`) built with Express.
- `src/`: Contains the frontend application files (React).
- `Dockerfile`: Used to create a Docker image for the frontend service.
- `docker-compose.yml`: Configuration for Docker Compose to build and run both the frontend and backend services.

## Prerequisites

To run this application, you need to have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Ensure that both Docker and Docker Compose are properly installed and running on your system.



### Alternative Method to Launch the Application

If you do not want to use Docker, you can also run the application directly on your local machine:

1. **Install Dependencies**:
   - Navigate to the backend (`server`) directory and run:
     ```bash
     cd server
     node server
     ```
   - Navigate to the frontend (`src`) directory and run:
     ```bash
     cd ../src
     npm install
     ```

2. **Run Backend**:
   - Start the backend server by running:
     ```bash
     node server
     ```
   The backend will be available at [http://localhost:5001](http://localhost:5001).

3. **Run Frontend**:
   - Navigate to the frontend directory (`src`) and start the React application:
     ```bash
     npm start
     ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NikitaPletnev/nokia-assessment.git
   cd nokia-assessment
   ```

2. **Run Docker Compose**:
   ```bash
   docker-compose up
   ```
   This command will build and start both the backend and frontend services.

3. **Access the Application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5001](http://localhost:5001)

## Docker Setup

### Dockerfile (Frontend)

The `Dockerfile` is used to containerize the React frontend. It performs the following tasks:

1. **Base Image**: Uses `node:16` as the base image.
2. **Working Directory**: Sets `/app` as the working directory.
3. **Install Dependencies**: Copies `package*.json` files and runs `npm install`.
4. **Copy Application Code**: Copies the entire project code into the container.
5. **Expose Port**: Exposes port `3000` for the frontend application.
6. **Run Application**: Starts the React application using `npm start`.

```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose

The `docker-compose.yml` file orchestrates the frontend and backend services:

- **Frontend (`web`)**:
  - Built from the Dockerfile in the root directory.
  - Exposes port `3000`.
  - Mounts the project directory for live updates.
  - Depends on the backend service (`server`).

- **Backend (`server`)**:
  - Built from the backend directory (`server/`).
  - Runs the `server.js` file using Node.
  - Exposes port `5001`.

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - '3000:3000'
    volumes:
      - .:/app
    depends_on:
      - server

  server:
    build: .
    command: node server/server.js
    ports:
      - '5001:5001'
```

## Backend API

The backend API is an Express server that provides data to the frontend application. It includes the following:

- **Data Generation**: Generates sample data for testing purposes.
- **CORS**: Configured to allow requests from the frontend (`http://localhost:3000`).
- **Endpoint**: The `/api/data` endpoint provides sample data to the frontend.

### Backend Setup (`server/server.js`)

The backend uses `Express` to create a REST API endpoint that provides sample data.

- **Port**: Runs on port `5001`.
- **CORS**: Allows cross-origin requests from the frontend.

## Stopping the Application

To stop the running containers, press `Ctrl + C` in the terminal where you ran `docker-compose up`. Alternatively, you can stop and remove the containers by running:

```bash
docker-compose down
```

## Troubleshooting

- **Port Conflict**: Make sure ports `3000` and `5001` are available before running Docker Compose.
- **Rebuild Containers**: If you make changes to the code, rebuild the Docker images with:
  ```bash
  docker-compose up --build
  ```
- **Network Issues**: If the frontend cannot connect to the backend, ensure that both services are running without errors and that Docker networking is correctly set up.

## Future Improvements

- **Environment Variables**: Use environment variables to manage configuration for different environments.
- **Production Build**: Modify the Docker setup to create production-ready builds of both the frontend and backend.
- **Database Integration**: Add a database container to persist the backend data.


## Contact

For any questions or support, please reach out to the project maintainer at [nickpletnev@mail.ru].

