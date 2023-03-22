import React from "react";
import { Navigate, Routes, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//history
import { history } from './helpers/history';

//pages
import HomePage from "./components/home/Home"
import LoginPage from "./components/login/Login"

export default function Routes() {
    return (
        <Router history={history}>
            <Routes>
                <RouteGuard
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    path="/login"
                    component={LoginPage}
                />
                <Navigate to="/" />
            </Routes>
        </Router>
    );
}
