import React, { Component } from "react";

import HeaderBanner from "../../Components/HeaderBanner/headerBanner";
import Carousel from "../../Components/Carousel";
import BookingShortcut from "../../Components/BookingShortcut";

import Logo from "../../Assets/logo.png";

import Grid from "@material-ui/core/Grid";
import Navigation from "../../Components/Navigation";

class Homescreen extends Component {
  render() {
    return (
      <Grid container>
        <Grid item style={{width: '100%'}}>
          <HeaderBanner />
        </Grid>

        <Grid container style={{ zIndex: 20, position: 'absolute', top: 80}}>
            <Grid item  xs={1} />
          <Grid item xs={3}>
            <img src={Logo} alt="Logo" />
          </Grid>

          <Grid item xs={8}>
            <Navigation />
          </Grid>
        </Grid>

        <Carousel />
        <BookingShortcut />
      </Grid>
    );
  }
}

export default Homescreen;
