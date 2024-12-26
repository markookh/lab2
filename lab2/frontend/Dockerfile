# Use an official Node.js runtime as a parent image
FROM node:16-alpine as build

# Create app directory
WORKDIR /usr/src/app

# Copy project files
COPY package*.json ./
RUN npm install

COPY . .

# Build the app
RUN npm run build

# Use a lightweight web server to serve static content
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

