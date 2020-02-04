import React from "react";
import UsernameForm from "./components/UserForm/UsernameForm";

function App() {
  const onUsernameSubmitted = username => {
    fetch("http:/localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        console.log("success");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <UsernameForm onSubmit={onUsernameSubmitted} />
    </div>
  );
}

export default App;
