// import React, { Component } from "react";
// import Chatkit from "@pusher/chatkit";

// class ChatScreen extends Component {
//   componentDidMount() {
//     const chatManager = new Chatkit.ChatManager({
//       instanceLocator: "v1:us1:32bb4c8e-12be-4848-af89-3496228e8147",
//       userId: this.props.username,
//       tokenProvider: new Chatkit.TokenProvider({
//         url: "http://localhost:3000/authenicate"
//       })
//     });
//     chatManager
//       .connect()
//       .then(currentUser => console.log("CurrentUser", currentUser))
//       .catch(error => console.error(error));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Chat Screen!</h1>
//         <p>Hello {this.props.username}</p>
//       </div>
//     );
//   }
// }

// export default ChatScreen;
