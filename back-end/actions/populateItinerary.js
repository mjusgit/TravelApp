const { MongoClient } = require('mongodb');
const { mongoURL } = require('./key.js'); // Import the mongoURL from your key.js
const itineraryData = require('../ItineraryData.js');

async function populateItineraries() {
  const client = new MongoClient(mongoURL, {
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("Maps"); 
    const collection = database.collection("itineraries");

    // Loop through each city and its itineraries
    for (const cityId in itineraryData) {
      const cityItineraries = itineraryData[cityId];

      // Insert each itinerary into the database with the corresponding cityId
      for (const itinerary of cityItineraries) {
        itinerary.cityId = cityId;
        await collection.insertOne(itinerary);
        console.log(cityId)
      }
    }

    console.log("Itineraries populated successfully!");
  } catch (error) {
    console.error("Error populating itineraries:", error);
  } finally {
    await client.close();
  }
}
// Call the function to populate the itineraries
populateItineraries();


