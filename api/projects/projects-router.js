// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');
const router = express.Router()

router.get('/api/projects', (req, res) => {
    Projects.find()
      .then(proj=> {
        res.status(200).json(proj);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
        });
      });
  })
  module.exports = router