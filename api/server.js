
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const express = require('express');

const projectsRouter = require('./projects/projects-router.js');
const actionRouter = require('./actions/actions-router.js');

const server = express();

server.use(express.json());

server.use('api/projects/', projectsRouter); //uter
server.use('/api/actions/', actionRouter); // 

module.exports = server;
