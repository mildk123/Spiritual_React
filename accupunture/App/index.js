import React, { Component, Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import Homescreen from "../Screens/Homescreen";
// import Auth from '../Screens/Auth'

class App extends Component {
  render() {
    return (
      <Fragment>
          <CssBaseline />
        <Homescreen />
      </Fragment>
    );
  }
}

export default App;
