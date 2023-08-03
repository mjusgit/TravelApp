// reducers/cityReducer.js

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CITIES_LOADING':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_CITIES_SUCCESS':
      
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case 'FETCH_CITIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
