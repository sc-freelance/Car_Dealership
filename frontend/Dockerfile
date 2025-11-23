# Use Node image as the base image
FROM node:18

# Set up the working directory
WORKDIR/ app

# Copy package.json and package-lock.json to working directory
COPY package*.json ./

# Install dependencies
RUN npm Install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the React port
EXPOSE 3000

# Run server
CMD ["npm", "start"]