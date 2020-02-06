import React, { Component } from "react";
import UsernameForm from "./components/UserForm/UsernameForm";
import ChatScreen from "./components/Chat/ChatScreen";

class App extends Component {
  state = {
    currentUsername: "",
    currentScreen: "WhatIsYourUsernameScreen"
  };

  onUsernameSubmitted(username) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        console.log("USER", username);
        this.setState({
          currentUsername: username,
          currentScreen: "ChatScreen"
        });
      })
      .catch(error => console.error("error", error));
  }

  render() {
    if (this.state.currentScreen === "WhatIsYourUsernameScreen") {
      return (
        <div className="App">
          <UsernameForm onSubmit={this.onUsernameSubmitted} />
        </div>
      );
    } else if (this.state.currentScreen === "ChatScreen") {
      return <ChatScreen currentUsername={this.state.currentUsername} />;
    }
  }
}

export default App;
