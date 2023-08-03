import axios from 'axios';
// actions/cityActions.js

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



export const fetchCitiesData = () => async (dispatch) => {
  try {
    dispatch(fetchCitiesLoading());
    
    const response = await axios.get('http://localhost:5000/cities/all');
    const data = response.data;
    console.log('Fetched data:', data);

    dispatch(fetchCitiesSuccess(data));
  } catch (error) {
    dispatch(fetchCitiesFailure(error.message));
  }
};

