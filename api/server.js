
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const express = require('express');

const projectsRouter = require('./projects/projects-router');
const actionRouter = require('./actions/actions-router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter); //uter
server.use('/api/actions', actionRouter); // 

// error handling middleware
server.use((error, req, res, next) => {
    // here you could inspect the error and decide how to respond
    res.status(error.status || 500).json({ message: error.message });
  });
module.exports = server;
