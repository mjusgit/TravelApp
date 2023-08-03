const mongoose = require('mongoose')
const citySchema = new mongoose.Schema(
  {
  name :{
    type: String,
    required: true,
    unique: true
  },
  country:{
    type: String,
    required: true
  }, 
  image:{
    type: String
  }
}, {collection : 'cities'});

module.exports = mongoose.model('CityModel', citySchema);
