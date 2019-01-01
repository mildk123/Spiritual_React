import React, { Component } from 'react'

import HeaderBanner from "../../Components/HeaderBanner/headerBanner";
import Logo from "../../Assets/logo.png";
import Navigation from "../../Components/Navigation";
import Grid from "@material-ui/core/Grid";


export class pageHeader extends Component {
  render() {
    return (
      <div>
        <Grid item style={{ width: "100%" }}>
          <HeaderBanner />
        </Grid>

        <Grid container style={{ zIndex: 20, position: "absolute", top: 80 }}>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <img src={Logo} alt="Logo" />
          </Grid>

          <Grid item xs={8}>
            <Navigation />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default pageHeader
