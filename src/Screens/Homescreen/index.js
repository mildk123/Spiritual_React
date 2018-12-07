import React, { Component } from "react";

import HeaderBanner from "../../Components/headerBanner";
import Carousel from "../../Components/Carousel";


import Grid from "@material-ui/core/Grid";

class Homescreen extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <HeaderBanner />
          <Carousel />
        </Grid>
      </Grid>
    );
  }
}

export default Homescreen;
