import axios from 'axios';

export const fetchCitiesLoading = () => {
  return {
    type: 'FETCH_CITIES_LOADING',
  };
};

export const fetchCitiesSuccess = (data) => {
  return {
    type: 'FETCH_CITIES_SUCCESS',
    payload: data,
  };
};

export const fetchCitiesFailure = (error) => {
  return {
    type: 'FETCH_CITIES_FAILURE',
    payload: error,
  };
};



export const fetchCitiesData = (selectedCity, selectedCountry) => async (dispatch) =>  {
 dispatch(fetchCitiesLoading()); 
 try {
     let url = 'http://localhost:5000/cities/all';
      if (selectedCity && selectedCountry) {
        url += `?city=${selectedCity}&country=${selectedCountry}`;
      }
    const response = await axios.get(url);
    const data = response.data;
    console.log('Fetched data:', data);

    dispatch(fetchCitiesSuccess(data));
  } catch (error) {
    dispatch(fetchCitiesFailure(error.message));
  }
};

