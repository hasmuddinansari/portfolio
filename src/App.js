import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Portfolio/Nav";
import Home from "./Portfolio/Home";
import Technology from "./Portfolio/Technology";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <Technology/>
      <Proficiencies/>
    </Router>
  );
}

export default App;
