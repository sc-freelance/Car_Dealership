# Use Node image as the base image
FROM node:20

# Set up the working directory
WORKDIR /app

# Copy package.json and package-lock.json to working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the React port
EXPOSE 5173

# Run server
CMD ["npm", "run", "dev", "--", "--host"]