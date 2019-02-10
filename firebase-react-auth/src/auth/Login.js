import React from 'react';
import fire from '../config/fire';

class Login extends React.Component {
// 1. Set up email, password inside state  
  state = {
    email: '',
    password: ''
  }

// 2. Create a handleInputChange() function to handle the input elements inside our form when a user types inside them  
  handleInputChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

// 3. Create a handleLogin and handleSignup function to handle when the user clicks either button  
  handleLogin = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password) // NOTE: this is a promise
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className = "login-wrapper-div">
        <form>

          <div className = "form-group">
            <label for = "emailInput">Email Address</label>
            <input 
              value = {this.state.email}
              onChange = {this.handleInputChange}
              type = "email"
              name = "email"
              className = "email-input-element"
              id = "emailInput"
              placeholder = "Email Address"
            />
          </div>

          <div className = "form-group">
            <label for = "passwordInput">Password</label>
            <input 
              value = {this.state.password}
              onChange = {this.handleInputChange}
              type = "password"
              name = "password"
              className = "password-input-element"
              id = "passwordInput"
              placeholder = "Email Address"
            />
          </div>

          <button type = "submit" onClick = {this.handleLogin} class = "loggin-button">Login</button>
          <button type = "submit" onClick = {this.handleSignup} class = "signup-button">Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;