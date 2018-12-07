import React, { Component } from 'react';
import HeaderBanner from '../../Components/headerBanner'

import Grid from '@material-ui/core/Grid';

class Homescreen extends Component {
  render() {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <HeaderBanner />
            </Grid>
      </Grid>
    )
  }
}

export default Homescreen;
