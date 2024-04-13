// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model.js');
const router = express.Router()

router.get('/api/projects', (req, res) => {
    Projects.find()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
        });
      });
  })

