// CityItineraryPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CityItineraryPage = () => {
  const { cityId } = useParams();
  const [itineraryData, setItineraryData] = useState(null);

  useEffect(() => {
    // Fetch the city itinerary data using the cityId from the URL
    axios.get(`http://localhost:5000/itineraries/itineraries/city/${cityId}`)
      .then((response) => {
        setItineraryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching itinerary data:', error);
      });
  }, [cityId]);

  if (!itineraryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-red-600 text-center">City Itinerary Page</h1>
      {itineraryData.map((itinerary) => (
        <div key={itinerary._id} className="border rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-red-900 mx-auto">{itinerary.title}</h2>
          <div style={{ overflow: 'hidden', position: 'relative', height: 0, padding: '74.94781% 0 0 0', width: '100%' }}>
            <iframe
              src={itinerary.profilePictureURL}
              title={itinerary.title}
              className="w-full rounded-lg mb-4"
              style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          </div>
          <p className="mb-2">Rating: {itinerary.rating}</p>
          <p className="mb-2">Duration: {itinerary.duration}</p>
          <p className="mb-2">Price: {itinerary.price}</p>
          <div className="flex flex-wrap">
            {/* Display hashtags as rounded containers */}
            {itinerary.hashtags.map((tag, index) => (
              <div key={index} className="bg-red-800 text-white rounded-full py-1 px-3 mr-2 mb-2">
                {tag}
              </div>
            ))}
          </div>
          {/* Display other itinerary information as needed */}
        </div>
      ))}
    </div>
  );
};

export default CityItineraryPage;
 