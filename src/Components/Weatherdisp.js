import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  WiCloudy,
  WiRainWind,
  WiHot,
  WiDaySunny,
  WiDayHaze,
} from "weather-icons-react";

const useStyles = makeStyles((theme) => ({
  screen: {
    marginTop: "5rem",
  },
  root: {
    flexGrow: 1,
    margin: "5rem 0",
  },
  griditmes: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  outerDiv: {
    margin: "0 15rem",
  },
  footerDiv: {
    margin: "5rem 15rem",
    border: 1,
  },
}));

const Weatherdisp = ({ Weatherdata }) => {
  let min_temp;
  let max_temp;
  let temp;
  let weatherDesp;
  let faicon;

  var options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  var prnDt = new Date().toLocaleTimeString("en-us", options);
  faicon = <WiHot size={50} color="#fff" />;

  if (Weatherdata.main) {
    min_temp = Math.ceil(Weatherdata.main.temp_min - 273.15);
    max_temp = Math.ceil(Weatherdata.main.temp_max - 273.15);
    temp = Math.ceil(Weatherdata.main.temp - 273.15);
    weatherDesp = Weatherdata.weather[0].description;
    if (Weatherdata.weather[0].main === "Clear") {
      faicon = <WiDaySunny size={50} color="#fff" />;
    }
    if (Weatherdata.weather[0].main === "Clouds") {
      faicon = <WiCloudy size={50} color="#fff" />;
    }
    if (Weatherdata.weather[0].main === "Rain") {
      faicon = <WiRainWind size={50} color="#fff" />;
    }
    if (Weatherdata.weather[0].main === "Haze") {
      faicon = <WiDayHaze size={50} color="#fff" />;
    }
  }

  const classes = useStyles();

  return (
    <Container className={classes.screen}>
      <div className={classes.outerDiv}>
        <div className={classes.griditmes}>
          {Weatherdata.sys ? (
            <div>
              <Typography variant="h5">
                {Weatherdata.name},{Weatherdata.sys.country}
              </Typography>
              <Typography variant="h5">
                {temp}
                <span>&deg;C</span>
              </Typography>
              <Typography variant="h6">{prnDt}</Typography>
              {faicon}
            </div>
          ) : null}
        </div>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Min Temp: {min_temp}
              <span>&deg;C</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              Max Temp: {max_temp}
              <span>&deg;C</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.footerDiv}>
        <Typography variant="h6">{weatherDesp}</Typography>
      </div>
    </Container>
  );
};

export default Weatherdisp;
