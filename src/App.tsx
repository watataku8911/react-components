import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UIKit from "./template/UIKit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/uikit">UIKit</Link>
        </nav>

        <hr></hr>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/uikit">
            <UIKit />
          </Route>
          {/* <Route path="/animation">
            <Circle />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
