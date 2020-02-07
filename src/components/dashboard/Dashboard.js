import React, { Component } from "react";

// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";
// import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  state = {
    timestamp: "no timestamp yet"
  };

  render() {

    // const { projects, auth, notifications } = this.props;

    // const { messages, auth } = this.props;

    // if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">

          <div className="message-list-container col s12 m6">

          <div className="messages-list-container col s12 m6">

            This is the timer value: {this.state.timestamp}
            {/* <MessageList messages={messages} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
