require('dotenv').config();
const express = require('express');
const router = express.Router();

const Score = require('../models/score');

router.get('/', async (req, res) => {
  Score.find()
    .then((result) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(result)
      }
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router