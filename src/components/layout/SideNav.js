import React, { Component } from "react";
import Sidebar from "react-sidebar";

const defaultStyles = {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  sidebar: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out"
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)"
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0
  }
};

class SideNav extends Component {
  state = {
    sideNavOpen: true
  };

  onSetSidebarOpen = open => {
    this.setState({ sideNavOpen: open });
  };

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar Content</b>}
        open={this.state.sideNavOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "grey" } }}
      >
        <button
          className="sideNav-btn"
          onClick={() => this.onSetSidebarOpen(true)}
        >
          Open Sidebar
        </button>
      </Sidebar>
    );
  }
}

export default SideNav;
