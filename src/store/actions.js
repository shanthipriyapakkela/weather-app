import React from "react"
import axios from "axios"
import * as actions from "./actiontypes"

const API_KEY = "63b18967d188163301e02c976714db62"

export const getWeatherInfoFail=()=>{
    return{
        type : actions.FETCH_WEATHER_DATA_ERROR
    }
}

export const getWeatherInfoSuccess=(data)=>{
    return{
        type:actions.FETCH_WEATHER_DATA_SUCCESS,
        payload : data        
    }}

export const getWeatherData=(latcity,loncountry,cord)=>{
    console.log("before axios")
    return dispatch => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${latcity},${loncountry}&appid=${API_KEY}`;
        if(cord ===1){
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${latcity}&lon=${loncountry}&appid=${API_KEY}`
        }

        axios
          .get(url)
          .then(response => {
            dispatch(getWeatherInfoSuccess(response.data))
          })
          .catch((err)=>{
            dispatch(getWeatherInfoFail())
          })
      
      };

}