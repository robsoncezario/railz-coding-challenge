import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import HomeScreen from "./Home";
import LocationScreen from "./Location";

export default function Routes() {
  return (
    <Switch>
      <Route
        path={["/", "/home", "/index", "/explore"]}
        component={HomeScreen}
        exact={true}
      />

      <Route
        path={["/location", "/place", "/maps"]}
        component={LocationScreen}
        exact={true}
      />
      <Route path="*" component={() => <Redirect to={"/"} />} />
    </Switch>
  );
}
