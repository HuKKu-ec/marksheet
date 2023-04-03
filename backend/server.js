const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(express.json());
const teacherRouter = require('./routes/teacherRouter');
const studentRouter = require('./routes/studentRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', teacherRouter);
app.use('/api/student', studentRouter);
app.get('/', (req, res) => {
  res.send('try with correct end point');
});
app.listen(process.env.PORT, () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log(
        `mongodb is connected also port is listening to port ${process.env.PORT}`
      );
    })
    .catch((error) => {
      console.log(error);
      console.log(
        `listening at port ${process.env.PORT} but database have error ${error}`
      );
    });
});
