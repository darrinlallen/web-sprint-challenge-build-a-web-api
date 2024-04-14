// Write your "projects" router here!
const express = require('express');

const Project = require('./projects-model.js');
const router = express.Router();

router.get('/api/projects', async (req, res) => {
    await Project.get
      .then(proj=> {
        res.send("LLLLLLLLLLLLLLLLLLLLLLLL")
        res.status(200).json("proj");
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({
        });
      });
  })

module.exports = router