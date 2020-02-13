import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => (
  <ul className="right">
    <li>
      <a href="/signin" onClick={props.signOut}>Log Out</a>
    </li>
    <li>
      <NavLink to="/" className="btn btn-floating teal lighten-1">
        RM
        {/* {props.profile.initials} */}
      </NavLink>
    </li>
  </ul>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignInLinks);
