import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Submit from "./components/post/Submit";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import PostState from "./context/post/PostState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

function App() {
  return (
    <AuthState>
      <PostState>
        <AlertState>
          <Router>
            <div>
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/submit" component={Submit} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </PostState>
    </AuthState>
  );
}

export default App;
