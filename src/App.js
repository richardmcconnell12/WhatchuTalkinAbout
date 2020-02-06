import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    timestamp: "no timestamp yet"
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          This is the timer value: {this.state.timestamp}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
