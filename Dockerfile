# Stage 1: Build the React application
FROM node:16 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Use nginx to serve the built app
FROM nginx:alpine
# Copy the built application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 3002

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
