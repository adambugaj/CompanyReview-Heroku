import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';


// Component for login form
class LoginPage extends React.Component {
constructor(props) {
  super(props);
  //this object will help us to set up a sign in component
  this.usernameTest = {
    username: 'user',
    password: 'test'
  }
  // Object for test username and password
  this.state = {
      username: this.usernameTest.username,
      password: this.usernameTest.password,
      checkUsername: '',
      checkPassword: '',
      registerInfo: ''
    };
  }

  // Save username in the object
  onUsernameChange = (e) => {
    const getUsername = e.target.value;
    this.setState(() => ({ checkUsername: getUsername }));
  };
  // Save password in the object
  onPasswordChange = (e) => {
    const getPassword = e.target.value;
    this.setState(() => ({ checkPassword: getPassword }));
  };

  onSubmit = (e) => {
    console.log(this.state.username);
    e.preventDefault();
    console.log(!this.state.checkPassword);
    // Check if empty and show message
    if (!this.state.checkUsername || !this.state.checkPassword) {
    this.setState(() => ({registerInfo: 'Please type a username and password'}));
  } // Push to main page if username and pass is correct
   else if (this.state.checkUsername === this.state.username && this.state.checkPassword === this.state.password) {
    this.setState(() => ({registerInfo: 'Login Succeesful'}));
    setTimeout(() => {
    this.props.history.push(`/dashboard/${this.state.username}`);
  }, 800)
  } // Check if wrong and show message
  else {
    this.setState(() => ({registerInfo: 'Wrong username or password'}));
  }
  };

  render() {
    return (
      <div>
        <h2>Log In</h2>

        <MuiThemeProvider>
          <div>
            <form onSubmit={this.onSubmit}>
            <TextField
              type="text"
              floatingLabelText="Username: user"
              autoFocus
              floatingLabelFixed={true}
              value={this.state.q1}
              onChange={this.onUsernameChange}
            /> <br />
            <TextField
              type="text"
              floatingLabelText="Password: test"
              autoFocus
              floatingLabelFixed={true}
              value={this.state.q1}
              onChange={this.onPasswordChange}
            /> <br />
            <FlatButton type="submit" label="Login" />
            <Link to="/"><FlatButton type="submit" label="Test" /></Link>
            </form>
            {
              this.state.registerInfo &&
              <p>{this.state.registerInfo}</p>
            }
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default LoginPage;
