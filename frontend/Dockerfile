# Use an official Node.js runtime as the base image
FROM node:16 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the entire project to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight Nginx image as the base image
FROM nginx:1.21.0-alpine

# Copy the built Angular app from the previous stage to the Nginx public directory
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
