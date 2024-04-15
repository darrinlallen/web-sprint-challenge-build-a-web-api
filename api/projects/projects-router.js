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
  router.get('/:id', async  (req, res) => {
    try {await Project.get(req.params.id)
      .then(proj=> {
        if (proj){
        res.status(200).json(proj)}
        else {
          res.status(404).json("not found")
        }
   })}
   catch(err) {
      console.log(err)
   }
    
  })
  router.post('/', async  (req, res) => {
    try {await Project.insert(req.body)
      .then(proj=> {
        res.status(201).json(proj)
   })}
   catch(err) {
      res.status(400).json("trouble")
   }
    
  })
  router.delete('/:id', async  (req, res) => {
    try {await Project.remove(req.params.id)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ message: 'The projhas been nuked' });
        } else {
          res.status(404).json({ message: 'The proj could not be found' });
        }
   })}
   catch(err) {
      res.status(404).json("trouble")
   }
    
  })
module.exports = router