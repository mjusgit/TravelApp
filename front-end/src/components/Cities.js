import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { connect } from 'react-redux';
import { fetchCitiesData } from '../store/actions/cityAction';
import { Link } from 'react-router-dom';

const CityForm = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityData = {
      name: name,
      country: country
    };

    axios.post('http://localhost:5000/cities', cityData)
      .then((response) => {
        console.log('City successfully uploaded:', response.data);

        // Trigger the page refresh after successful upload
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error uploading city:', error);
      });
  };

  return (
    <div className="max-w-xs mx-auto">
    <h2 className="text-1.2 text-center font-bold mb-4 text-red-600">Add a New Destination Here!</h2>
<form onSubmit={handleSubmit} className="max-w-xs mx-auto">
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="City Name"
    className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
  />
  <input
    type="text"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    placeholder="Country"
    className="block w-full px-4 py-2 mb-4 text-red-600 placeholder-red-400 border-red-500 rounded-lg focus:ring-red-500 focus:border-red-500"
  />
  <button
    type="submit"
    className="block w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-100 focus:outline-none"
  >
    Upload City
  </button>
</form>
</div>
  );
};

const CityFilter = () => {
  const [inputValue, setInputValue] = useState('');
  const [allOptions, setAllOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cities/all');
        const options = response.data.map((city) => ({
          value: city.name,
          label: `${city.name}, ${city.country}`,
          type: 'city',
          country: city.country, // Store country separately for easy access later
        }));
        setAllOptions(options);
      } catch (error) {
        console.error('Error fetching cities:', error);
        setAllOptions([]);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    if (!inputValue) {
      setFilteredOptions(allOptions);
    } else {
      const filterRegex = new RegExp(`^${inputValue}`, 'i');
      const filtered = allOptions.filter(
        (option) => filterRegex.test(option.value) || filterRegex.test(option.country)
      );
      setFilteredOptions(filtered);
    }
  }, [inputValue, allOptions]);

  const handleInputChange = (newValue) => {
    const sanitizedInputValue = newValue.replace(/\W/g, '');
    setInputValue(sanitizedInputValue);
  };

  const handleOptionSelect = (selectedOption) => {
    // Extract the city and country from the label
    const [city, country] = selectedOption.label.split(', ');
    console.log('Selected City:', city);
    console.log('Selected Country:', country);

    // Do whatever you want with the city and country
    // For example, you can pass them to another component or use them in your application's state.
  };

  return (
    <Select
      isClearable
      isSearchable
      value={null}
      options={filteredOptions}
      onInputChange={handleInputChange}
      onChange={handleOptionSelect}
      placeholder="Type to filter cities and countries..."
    />
  );
};


const Cities = (props) => {
  const { isLoading, error, data, fetchCitiesData } = props;

  useEffect(() => {
    fetchCitiesData();
  }, [fetchCitiesData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(data)
 console.log(isLoading)

  return (
    <div>
      <CityFilter />
      {data.map((city) => (
        <Link key={city._id} to={`/city/${city._id}`}>
        <div key={city._id} className="bg-red-500 text-white rounded-lg p-4 shadow-md m-8">
          <h2>{city.name}, {city.country}</h2>
        </div>
        </Link>
      ))}
      <CityForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.cities.isLoading,
  error: state.cities.error,
  data: state.cities.data,
});

const mapDispatchToProps = {
  fetchCitiesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);


