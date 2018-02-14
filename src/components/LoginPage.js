import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Subheader from 'material-ui/Subheader';


const cardStyle = {
    width: '30vw'
};

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
      registerInfo: '',
      changeColor: '',
      registerSuccess: ''
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
    e.preventDefault();
    // Check if empty and show message
    if (!this.state.checkUsername || !this.state.checkPassword) {
    this.setState(() => ({registerInfo: 'Please type a username and password'}));
  } // Push to main page if username and pass is correct
   else if (this.state.checkUsername === this.state.username && this.state.checkPassword === this.state.password) {
    this.setState(() => ({
      registerInfo: '',
      registerSuccess: 'Login Succeesful',
      changeColor: 'green'
    }));
    setTimeout(() => {
    this.props.history.push(`/dashboard/${this.state.username}`);
  }, 800)
  } // Check if wrong and show message
  else {
    this.setState(() => ({registerInfo: 'Wrong username or password'}));
    console.log(this.state.registerInfo);
  }
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="login-fields">
            <form onSubmit={this.onSubmit}>
            <TextField
              type="text"
              floatingLabelText="Username: user"
              autoFocus
              style={cardStyle}
              underlineStyle={this.state.changeColor && {borderColor: '#E0E0E0'} || {borderColor: '#E0E0E0'}}
              className="login-fields1"
              floatingLabelFixed={true}
              value={this.state.q1}
              errorText={
                this.state.registerInfo &&
                <span></span>
              }
              onChange={this.onUsernameChange}
            /> <br />
            <TextField
              type="Password"
              floatingLabelText="Password: test"
              floatingLabelFixed={true}
              className="login-fields1"
              underlineStyle={this.state.changeColor && {borderColor: '#E0E0E0'} || {borderColor: '#E0E0E0'}}
              value={this.state.q1}
              style={cardStyle}
              errorText={
                this.state.registerInfo && this.state.registerInfo
              }
              onChange={this.onPasswordChange}
            /> <br />
            <div className="button-login-container">
              <FlatButton type="submit" label="Login" />
              <Link to="/"><FlatButton type="submit" label="Test" /></Link>
            </div>
            </form>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default LoginPage;
