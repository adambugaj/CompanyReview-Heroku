import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const LoginButton = () => {
  return (
    <div className="createLogin">
      <Link to="/login"><RaisedButton className="createLogin" label="LOGIN"/></Link>
      <Link to="/login"><RaisedButton className="createLogin" label="SIGNUP"/></Link>
    </div>
  );
};

export default () => {
    return (
      <MuiThemeProvider>
        <div >
          <LoginButton />
        </div>
      </MuiThemeProvider>
    );
};
