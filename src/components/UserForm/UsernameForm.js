import React, { Component } from "react";

class UsernameForm extends Component {
  state = {
    username: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  onChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h5 className="grey-text text-darken-3">What is your Username?</h5>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Username" onChange={this.onChange} />
          <input type="submit" className="btn grey lighten-1 z-depth-0" />
        </form>
      </div>
    );
  }
}

export default UsernameForm;
