import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import CreateMessage from '../messages /CreateMessage';

class Dashboard extends Component {
  state = {
    timestamp: 'no timestamp yet',
  };


  render() {
    const { messages, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="message-list-container col s12 m6">
            This is the timer value:
            {' '}
            {this.state.timestamp}
            {/* <MessageList messages={messages} /> */}
          </div>
        </div>
        <CreateMessage />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Dashboard);
