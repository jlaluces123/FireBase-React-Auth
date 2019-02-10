import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 1. Import initialized App variable `fire` and other Components we make
import fire from './config/fire';
import Login from './auth/Login';
import Home from './views/Home';

class App extends Component {
// 3. Don't forget to set up your state
  state = {
    user: {}
  }  

// 4. When component mounts, invoke the authListener to check for changes  
  componentDidMount = () => {
    this.authListener();
  }

// 2. Create the authListener() function to check when the auth state has changed
// 2a. If a user logs in get user object
// 2b. If user logs out, set user to null
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if ( user ) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

// 5. If user is logged in, render the home component, else send to Login form
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}

export default App;
