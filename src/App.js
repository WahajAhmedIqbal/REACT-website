import React from "react";
import "./App.css";
import NavbarComp from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
