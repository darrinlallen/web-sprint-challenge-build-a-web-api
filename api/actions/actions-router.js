// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');
const router = express.Router()
router.get('/api/actions', (req, res) => {
    Actions.find()
      .then(found=> {
        res.json(found);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
        });
      });
  })

module.exports = router