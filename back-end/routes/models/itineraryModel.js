// models/ItineraryModel.js

const mongoose = require('mongoose');

// Define the schema for the Itinerary model
const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  hashtags: {
    type: [String],
    required: true,
  },
  cityId: {
   type: mongoose.Schema.Types.ObjectId,  // This is to store the MongoDB ObjectId of the related city
    ref: 'CityModel', // Reference to the City model (use 'City' as you named it in the cities model file)
    required: true,
  },
});

// Create the Itinerary model using the schema
const ItineraryModel = mongoose.model('itineraries', itinerarySchema);

module.exports = ItineraryModel;
