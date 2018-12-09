import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class BookingShortcut extends Component {
  render() {
    return (
      <Grid
        container
        style={{
          padding: 50,
          height: "100%",
          maxHeight: "550px"
        }}
      >
        <Grid
          container
          style={{
            padding: 35,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center"
          }}
        >
          <Grid item />

          <Grid item xs={12} md={4} lg={3}>
            <img
              style={{
                width: "80%",
                minWidth: "250px",
                borderRadius: "100%",
                border: "6px solid #c6c6c6"
              }}
              src={require("../../Assets/Images/treatments-1.jpg")}
              alt="treatements1"
            />
            <div>
              <h3>Electroacupuncture</h3>
            </div>
          </Grid>

          <Grid item xs={12} sm={5} md={4} lg={3}>
            <img
              style={{
                width: "80%",
                minWidth: "250px",
                borderRadius: "100%",
                border: "6px solid #c6c6c6"
              }}
              src={require("../../Assets/Images/treatments-2.jpg")}
              alt="treatements2"
            />
            <div>
              <h3>Electroacupuncture</h3>
            </div>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <img
              style={{
                width: "80%",
                minWidth: "250px",
                borderRadius: "100%",
                border: "6px solid #c6c6c6"
              }}
              src={require("../../Assets/Images/treatment3.jpg")}
              alt="treatment3"
            />
            <div>
              <h3>Electroacupuncture</h3>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default BookingShortcut;
