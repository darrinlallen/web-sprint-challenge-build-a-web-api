// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');
const router = express.Router()

router.get('/', async (req, res) => {
    
  try {
    await Actions.get()
      .then(actions=> {
  
        res.status(200).json(actions);
      })
  }
  catch(err) {
    console.log(err)
  }  
})





router.get('/:id', async (req, res) => {
    
  try {
    await Actions.get(req.params.id)
      .then(actions=> {
        if (actions){
        res.status(200).json(actions);}
        else {
          res.status(404).json("Not found")
        }
      })
  }
  catch(err) {
    console.log(err)
  }  
  })

  router.post('/', async (req, res) => {
    
    try {
      await Actions.insert()
        .then(actions=> {
    
          res.status(201).json(actions);
        })
    }
    catch(err) {
      res.status(400).json("trbl")
    }  
  })
  router.delete('/:id', async  (req, res) => {
    try {await Actions.remove(req.params.id)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ message: 'The act has been nuked' });
        } else {
          res.status(404).json({ message: 'The act could not be found' });
        }
   })}
   catch(err) {
      res.status(404).json("trouble")
   }
  })

module.exports = router;