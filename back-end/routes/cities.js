const express = require("express");
const router = express.Router();
const CityModel = require('./models/model')

router.get('/all', (req, res) => {
  CityModel.find()
    .then(files => {
      res.send(files);
      console.log(files)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error fetching data from the database');
    });
});

router.post('/', (req, res) => {
  console.log('Request Body:', req); 
  const newCity = new CityModel({
    name: req.body.name,
    country: req.body.country
  });



  newCity.save()
    .then((city) => {
      console.log('City saved:', city); 
      res.send(city);
    })
    .catch(err => {
      console.error('Error saving city:', err); // Add this line to see any errors
      res.status(500).send("Server error");
    });
});

module.exports = router;