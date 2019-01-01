import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  AppBar: {
    backgroundColor: "#413d3c",
    padding: 15
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar className={classes.AppBar} position="static">
      <Grid container style={{width: '100%'}}>
        <Grid container style={{width: '70%'}} justify="flex-start">
          <Grid item lg={1} md={1} sm={1} />
          <Grid item lg={2} md={3} sm={5}>
            <MailIcon fontSize="small" />
            <span>Info@printers.com</span>
          </Grid>

          <Grid item>
            <PhoneIcon fontSize="small" />
            <span>+91 0800 123 4567</span>
          </Grid>
        </Grid>

        <Grid container style={{width: '30%'}} justify="flex-start">
          <Grid item sm={1} md={1} lg={1}>
            <MailIcon fontSize="small" />
          </Grid>

          <Grid item sm={1} md={1} lg={1}>
            <PhoneIcon fontSize="small" />
          </Grid>

          <Grid item sm={1} md={1} lg={1}>
            <MailIcon fontSize="small" />
          </Grid>
          <Grid item sm={1} md={1} lg={1}>
            <PhoneIcon fontSize="small" />
          </Grid>

          <Grid item sm={1} md={1} lg={1}>
            <MailIcon fontSize="small" />
          </Grid>
          <Grid item sm={1} md={1} lg={1}>
            <PhoneIcon fontSize="small" />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default withStyles(styles)(ButtonAppBar);
