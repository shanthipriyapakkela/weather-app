import React from "react";
import * as actions from "./actiontypes";

const initialState = {
  weatherInfo: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherInfo: action.payload,
        error: false,
      };
    case actions.FETCH_WEATHER_DATA_ERROR:
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
