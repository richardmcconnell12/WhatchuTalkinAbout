import React, { Component } from "react";

class App extends Component {
  state = {
    timestamp: "no timestamp yet"
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
