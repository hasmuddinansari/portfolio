import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Portfolio/Nav";
import Home from "./Portfolio/Home";
import Technology from "./Portfolio/Technology";
import Proficiencies from "./Portfolio/Proficiencies"
import Projects from "./Portfolio/Projects"

function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <Technology/>
      <Proficiencies/>
      <Projects/>
    </Router>
  );
}

export default App;
