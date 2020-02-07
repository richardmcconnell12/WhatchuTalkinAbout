import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  //   const { auth, profile } = props;
  //   const links = auth.id ? <SignInLinks profile={profile} /> : <SignOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Whatchu Talkin About?
        </Link>
        {/* {links} */}
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(NavBar);
