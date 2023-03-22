import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//history
import { history } from './helpers/history';

//pages
import HomePage from "./components/home/Home"
import LoginPage from "./components/login/Login"

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <RouteGuard
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    path="/login"
                    component={Login}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes
