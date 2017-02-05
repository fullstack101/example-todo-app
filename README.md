#A Simple To-Do Service

![build status](https://api.travis-ci.org/fullstack101/nodejs-todo-example.svg?branch=master)

This is a simple to-do service with a NodeJS backend.

There is no database integration (yet). Items are stored in-memory.

The frontend does not use any frameworks (yet), but follows a uni-directional data flow.

This example is part of the teaching materials for the http://fullstack101.xyz course.

The application is built using travis-ci.

##Getting Started

###Running with docker
```bash
docker-compose up

```

###Running locally
```bash
#install project dependencies
npm install

#check for errors
npm run lint

#build the frontend bundle
npm run build

#run tests
npm run test

#run the server
npm run start
```
