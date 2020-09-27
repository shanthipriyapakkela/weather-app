import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import WeatherDisp from "./Weatherdisp";
import { getWeatherData } from "../store/actions";
import "../App.css";

const Mainpage = () => {
  const dispatch = useDispatch();
  const Weatherinformation = useSelector((state) => state.weatherInfo);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          getWeatherData(position.coords.latitude, position.coords.longitude, 1)
        );
      });
    }
  }, [dispatch]);

  var classname = "App";
  if (Weatherinformation.main) {
    const weatherDesp = Weatherinformation.weather[0].main;
    if (weatherDesp === "Clear") {
      classname += " App-clear";
    }
    if (weatherDesp === "Clouds") {
      classname += " App-clouds";
    }
    if (weatherDesp === "Rain") {
      classname += " App-rain";
    }
    if (weatherDesp === "Haze") {
      classname += " App-haze";
    }
  }
  return (
    <div className={classname}>
      <Search />
      <WeatherDisp Weatherdata={Weatherinformation} />
    </div>
  );
};

export default Mainpage;
