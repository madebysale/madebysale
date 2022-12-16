import {
  CREATE_BRAND,
  DELETE_ALL_BRAND,
  DELETE_BRAND,
  GET_BRAND,
} from '../actions/BrandActions';

const initialState = [];

const BrandReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_BRAND: {
      return [...action.payload];
    }
    case CREATE_BRAND: {
      return [...action.payload];
    }
    case DELETE_BRAND: {
      return [...action.payload];
    }
    case DELETE_ALL_BRAND: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default BrandReducer;
