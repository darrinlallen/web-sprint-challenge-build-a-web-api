// Write your "projects" router here!
const express = require('express');

const Project = require('./projects-model.js');
const router = require('express').Router();

router.get('/', async  (req, res) => {
    try {await Project.get()
      .then(proj=> {
        res.status(200).json(proj)
   })}
   catch(err) {
      console.log(err)
   }
    
  })

module.exports = router