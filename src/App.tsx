import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UIKit from "./template/UIKit";
import Animation from "./template/animation";
import MaterialUi from "./template/material-ui";
import Mui from "./template/mui";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">material-ui(Ver.5)</Link>
          <Link to="/materialUi">material-ui(Ver.4))</Link>
          <Link to="/uikit">UIKit</Link>
          <Link to="/animation">animation</Link>
        </nav>

        <hr></hr>
        <Switch>
          <Route exact path="/">
            <Mui />
          </Route>
          <Route path="/materialUi">
            <MaterialUi />
          </Route>
          <Route path="/uikit">
            <UIKit />
          </Route>
          <Route path="/animation">
            <Animation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
