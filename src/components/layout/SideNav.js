import React from "react";

const SideNav = props => {
  const { auth } = props;
  // Bring in other users when they are created to chat

  return (
    <div>
      <ul id="slide-out" class="side-nav fixed">
        <li>
          <a href="#!">First Sidebar Link</a>
        </li>
        <li>
          <a href="#!">Second Sidebar Link</a>
        </li>
      </ul>
      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="mdi-navigation-menu"></i>
      </a>
    </div>
  );
};

export default SideNav;
