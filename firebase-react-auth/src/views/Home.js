import React from 'react';
import fire from '../config/fire';

class Home extends React.Component {

  handleLogout = () => {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className = "home-wrapper">
        <h3>Home Page</h3>
        <button onClick = {this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;