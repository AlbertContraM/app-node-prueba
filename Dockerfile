#Specify tha base image
FROM node:10

# Select a working dir
WORKDIR /usr/src/app

# COPY the first files to the container
COPY package*.json .

# INSTALL dependencies
RUN npm install

# Copy the files
COPY . .

#Application default port to expose
EXPOSE 3010

# Default command to start the app
CMD [ "node", "index.js" ]
