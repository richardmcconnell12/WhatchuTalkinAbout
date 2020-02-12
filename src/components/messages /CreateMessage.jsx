import React, { Component } from 'react';
import { connect } from 'react-redux';
import createMessage from '../../store/actions/createMessage';

class CreateMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { createMsg } = this.props;
    createMsg(this.state);
  };


  render() {
    // const { auth } = this.props;
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
              <button type="submit" className="btn teal lighten-1 z-depth-0">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createMsg: (message) => dispatch(createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMessage);
