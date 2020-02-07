import React, { Profiler } from "react";
import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import { signOut } from "../../store/actions/authActions";

const SignInLinks = props => {
  return (
    <ul className="right">
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>

        <NavLink to="/" className="btn btn-floating teal lighten-1">
          {/* {props.profile.initials} */}
          RM

        </NavLink>
      </li>
    </ul>
  );
};

export default SignInLinks;
