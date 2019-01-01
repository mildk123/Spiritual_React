import React, { Component } from "react";

import Carousel from "../../Components/Carousel";
import BookingShortcut from "../../Components/BookingShortcut";


import Grid from "@material-ui/core/Grid";
import Stepper from "../../Components/Stepper";

class Homescreen extends Component {
  render() {
    return (
      <Grid container>
        
        

        <Grid item>
          <Carousel />
        </Grid>

        <Grid item>
          <BookingShortcut />
        </Grid>

        <Grid item style={{width: '100vw'}}>
          <Stepper />
        </Grid>

      </Grid>
    );
  }
}

export default Homescreen;
