import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homescreen from "../Screens/Homescreen";
import Auth from "../Screens/Auth";
import BookOnline from "../Screens/BookOnline";
import Error from "../Screens/Error";
import PageHeader from "../Helper/pageHeader";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />

        <BrowserRouter>
          <div>
            <PageHeader />
            <Switch>
              <Route path="/" component={Homescreen} exact />
              <Route path="/Authentication" component={Auth} />
              <Route path="/bookonline" component={BookOnline} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
