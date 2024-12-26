# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Bundle app source
COPY . .

# Expose port
EXPOSE 3001

# Define command to run the app
CMD [ "npm", "start" ]

