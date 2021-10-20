require('dotenv').config();
const express = require('express');
const router = express.Router();

const Score = require('../models/score');

router.post('/', async (req, res) => {
  const score = new Score();
  score.shape = req.body.shape;
  score.name = req.body.name;
  score.attempts = req.body.attempts;
  score.save()
    .then((result) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Score added');
      }
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router