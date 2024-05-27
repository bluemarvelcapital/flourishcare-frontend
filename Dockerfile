# Use a Node.js base image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json ./

# Install dependencies
RUN yarn add .

# Copy the rest of the application
COPY . .

# Expose the port on which the API will run
EXPOSE 3000

# Command to run the API
CMD ["npm", "run", "dev"]
