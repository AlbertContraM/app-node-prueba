#Specify tha base image
FROM node:10-alpine

# Select a working dir
WORKDIR /usr/src/app

# Description of the image
LABEL description="This app use a MongoDB container to store and find data" 
LABEL vendor="PronnusSystems" 
LABEL version="v1.0.1"

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
