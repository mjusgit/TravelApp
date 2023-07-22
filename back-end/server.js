
const express = require("express");
const app = express();
const port = ({}).PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on " + port);
});

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());



/*const { MongoClient } = require('mongodb')



let dbConnection;

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect('mongodb://localhost27107/cities')
    .then((client)=>{
      dbConnection = client.db()
      return cb()
    })
    .catch((err) =>{
      console.log(err)
      return cb(err)
    })
  },
  getDb: () => {dbConnection}

}

const express = require ('express')
const mongoose = require('mongoose');

const app = express()

app.listen(3000,()=>{
  console.log('on port 3000')
})*/