/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,

} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import { createBrowserHistory } from "history";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const PrivateRouter = ({ component, ...options }) => {
  const finalComponent =
    Auth.getUserDetails() !== undefined &&
      Auth.getUserDetails() !== null &&
      Auth.getToken() !== undefined ? (
      <Route {...options} component={component} />
    ) : (
      <Navigate to="/PageNotFound" />
    );

  return finalComponent;
};

class Templete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>

        <Router ref={registerNav}>
          <Routes>
            {HomeRoutes.map((homeRoute, index) => {
              return (
                <Route
                  key={index}
                  path={homeRoute.path}
                  exact={homeRoute.exact}
                  element={props => {
                    return (
                      <homeRoute.layout {...props}>
                        <homeRoute.component {...props} />
                      </homeRoute.layout>
                    );
                  }}
                />
              );
            })}
            {PrivateRoutes.map((privateRoute, index) => {
              return (
                <Route
                  key={index}
                  path={privateRoute.path}
                  exact={privateRoute.exact}
                  element={props => {
                    return (
                      <PrivateRouter>
                        <privateRoute.layout {...props}>
                          <privateRoute.component {...props} />
                        </privateRoute.layout>
                      </PrivateRouter>
                    );
                  }}
                />
              );
            })}
            <Route Redirect path="*" to="/PageNotFound" exact component={PageNotFound} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Templete;
