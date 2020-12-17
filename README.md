# Simple Nodejs App

## USE

* Node
* Express
* MongoDB
* Docker
* Docker-compose


## Instalation

1. Clone the repository
1. Run $npm install
1. Run $node index.js
1. To connect with MongoDB outside localhost change the connection URL in env.js
1. You can create a new image with the Dockerfile and upload to the DockerHub, or use the image already created
1. To pull this image use $docker pull albertcontra/app-node-prueba:v0.1.0
1. Run the container with docker cli
    1. To run the container use the command $docker run -p 3010:3010 -d  albertcontra/pruebaexpress:v0.0.0
1. Run two copies of the container
    1. To run two containers with the same image use the docker-compose file with the command $docker-compose up


## Functions

* http://localhost:3010/     : Send a hello message
* http://localhost:3010/new  : Add a new random user to database
* http://localhost:3010/all  : Get all the current users