import React from "react";
import "./App.css";
import NavbarComp from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
