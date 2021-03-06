# Code Overview
The main purpose of this repository is to show an authentaction and authorization with Node.js API Server 

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone  https://github.com/SaharAlassaf/W08D02.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Start the local server
```
npm run dev
```

# Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routers/controllers` - This folder contains configuration for passport as well as a central location for configuration/environment variables. It has 2 files 1- role.js for craete roles and show roles. 2- user.js for signin and sign up.

- `routers/routes` - This folder contains the route definitions for our API. It has 2 files 1- role.js for post roles and get roles. 2- user.js for post signin and post sign up.
- `db/index.js` - This folder contains the schema definitions for our Mongoose models.
- `db/models` - This folder contains the schema definitions for our Mongoose models. It has 2 files 1- role.js for role schema. 2- user.js for user schema.

# Dependencies
Dependencies are managed through `package.json`.

## `dependencies`

| Package                         | Description                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| express                         | Node.js web framework.                                                                  |
| dotenv                          | Loads environment variables from .env file.                                             |
| mongoose                        | MongoDB ODM.                                                                            |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                                         |
| cors                           |  for providing a Connect/Express middleware that can be used to enable CORS with various options.                                                                                                                    |
| jsonwebtoken                   | An implementation of [JSON Web Tokens](https://datatracker.ietf.org/doc/html/rfc7519).   |
| morgan                        | HTTP request logger middleware for node.js                                                |
| nodemon                        | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.                                                                                      |


