import React from "react";
import "./App.css";
// import ReactWow from "./components/ReactWow";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Portfolio/Nav";
import Home from "./Portfolio/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  );
}

export default App;
