# Building-A-REST-API

## A REST API with Node, Express, TypeScript & MongoDB.
### Features:
- register a user and login with auth controller.
- fetch users with getusers controller and by middleware to check if user is authenticated when handling GET request.
- delete user by the owner of userID middleware with DELETE request handler.
- edit user profile by the owner user middleware with PATCH request handler.
  
### setup environment:
  - Start a new project.
  - Create a package.json file with npm init -y.
  - Install TypeScript & other dependencies (nodemon, express, body-parser, cookie-parser, compression, cors, mongoose).
  - Generating tsconfig.json.
  - Create express server that listens to a port and mongoDB to connect to it.
  - Update Start script in package.json file with nodemon for Watching file changes.
  - Run the code with npm start.

### setup MongoDB URL:
  signIn to mongoDB Atlas (cloud database), create your own database and the user then get the url from connection configuration.

  The workflow of Express (Routes and Controllers): 
  ![express](public/mvc_express.png)

