import React from "react";
import {
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR,
} from "./actions";

const initialState = {
  weatherInfo: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherInfo: action.payload,
        error: false,
      };
    case FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        error: true,
      };

    default: {
      return { ...state };
    }
  }
};

export default reducer;
