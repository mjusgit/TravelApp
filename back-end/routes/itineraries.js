
const express = require('express');
const router = express.Router();

const ItineraryModel = require('./models/itineraryModel'); 

router.get('/all', async (req, res) => {
  try {
    const allItineraries = await ItineraryModel.find();
    res.send(allItineraries);
  } catch (error) {
    console.error('Error fetching itineraries:', error);
    res.status(500).send('Error fetching data from the database');
  }
});


router.get('/itineraries/city/:cityId', async (req, res) => {
  try {
    const cityId = req.params.cityId; 
    console.log('City ID:', cityId);
    const itineraries = await ItineraryModel.find({ id : cityId });
  
    res.send(itineraries);
    console.log(itineraries)
    console.log(cityId)
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
