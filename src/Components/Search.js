import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getWeatherData } from "../store/actions";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Button } from "@material-ui/core";

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
        <TextField
          id="standard-basic"
          label="City"
          color="white"
          InputProps={{
            classes: {
              input: classes.textColor,
            },
          }}
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        />

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
