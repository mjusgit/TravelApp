
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:3000",
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use('/user', require('./routes/user'));
app.use('/login', require('./routes/login'));
app.use('/user', require('./routes/updatePassword'));
app.use('/register',  require('./routes/register'));
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));

app.listen(port, () => {
  console.log("Server is running on " + port);
});

const db = require('./actions/key.js').mongoURL; 
const mongoose = require("mongoose");

mongoose.connect(db, { useNewUrlParser: true, dbName: 'Maps'})
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));