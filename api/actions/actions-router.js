// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');
const router = express.Router()
router.get('/',async (req, res) => {
    
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

module.exports = router