// import React, { Component } from 'react';
// import Sidebar from 'react-sidebar';

// class SideNav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sideNavOpen: true,
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }


//   onSetSidebarOpen = (open) => {
//     this.setState({ sideNavOpen: open });
//   };

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Your friends</b>}
//         open={this.state.sideNavOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: 'white' } }}
//       >
//         <button
//           type="button"
//           className="sideNav-btn"
//           onClick={() => this.onSetSidebarOpen(true)}
//         >
//           Friends
//         </button>
//       </Sidebar>
//     );
//   }
// }

// export default SideNav;
