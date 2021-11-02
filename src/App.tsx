import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UIKit from "./template/UIKit";
import Animation from "./template/animation";
import MaterialUi from "./template/material-ui";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">material-ui</Link>
          <Link to="/uikit">UIKit</Link>
          <Link to="/animation">animation</Link>
        </nav>

        <hr></hr>
        <Switch>
          <Route exact path="/">
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
