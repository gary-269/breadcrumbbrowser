import React from "react";
import "./styles.css";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Switch } from "react-router-dom";
import Accessories from "./pages/accessories";
import Camera from "./pages/camera";
import Refrigerator from "./pages/refrigerator";
import Onedoor from "./pages/onedoor"
import Twodoor from "./pages/twodoor"
import TV from "./pages/tv";
import Breadcrumbs from "./pages/breadcrumbs";

export default function App() {
  return (
    <div>
      <Breadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/accessories" render={props => <Accessories {...props} />} />
        <Route
          exact
          path="/accessories/camera"
          render={props => <Camera {...props} />}
        />
        <Route
          exact
          path="/accessories/tv"
          render={props => <TV {...props} />}
        />
        <Route
          exact
          path="/accessories/refrigerator"
          render={props => <Refrigerator {...props} />}
        />
        <Route
          exact
          path="/accessories/refrigerator/one"
          render={props => <Onedoor {...props} />}
        />
        <Route
          exact
          path="/accessories/refrigerator/two"
          render={props => <Twodoor {...props} />}
        />
      </Switch>
    </div>
  );
}

