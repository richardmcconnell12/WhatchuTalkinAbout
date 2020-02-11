import React, { Component } from "react";

class CreateMessage extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createMessage(this.state);
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="message-input input-field">
            <textarea
              id="message"
              placeholder="Message...."
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <div>
              <button className="btn teal lighten-1 z-depth-0">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateMessage;
