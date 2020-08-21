import React from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am on the chatpage</h1>
          </Route>
          <Route path="/">
            <h1>I am on the homepage</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;