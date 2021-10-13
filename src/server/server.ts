import express, { Request, Response } from 'express';
//const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result: any) => app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}))
  .catch((err: any) => console.log(err))

// Any other request goes to index
/* app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
}); */

app.get('/', async (req: Request, res: Response) => {
  res.send('Sending res');
})

/* module.exports = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}); */
