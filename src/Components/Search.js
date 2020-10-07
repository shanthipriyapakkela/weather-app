import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Button, createMuiTheme } from "@material-ui/core";

import { getWeatherData } from "../store/actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    screen: {
      display: "border-box",
      width: "100%",
    },
    form: {
      color: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    textColor: {
      color: "white",
    },
  })
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
  },
});

const Search = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");

  const getWeatherInfo = () => {
    if (cityName === "") {
      return;
    } else {
      dispatch(getWeatherData(cityName, countryName, 0));
    }
  };

  const classes = useStyles();
  return (
    <Container>
      <form className={classes.form} noValidate autoComplete="off">
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.root}
            id="standard-basic"
            label="Enter City Name"
            color="white"
            InputProps={{
              classes: {
                input: classes.textColor,
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
              focused: "focused",
            }}
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
        </ThemeProvider>

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "30px" }}
          onClick={getWeatherInfo}
        >
          Get Weather
        </Button>
      </form>
    </Container>
  );
};

export default Search;
