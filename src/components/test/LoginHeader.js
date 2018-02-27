import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  width: '20rem'
}

const LoginButton = () => {
  return (
    <div className="createLogin">
      <Link to="/login"><RaisedButton style={style} className="createLogin createLogin__button" label="LOGIN"/></Link>
      <Link to="/login"><RaisedButton style={style} className="createLogin createLogin__button" label="SIGNUP"/></Link>
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

const DashboardButton = (props) => {
  return (
    <div className="createLogin">
      <Link to="/"><RaisedButton style={style} className="createLogin createLogin__button" label="DASHBOARD"/></Link>
    </div>
  );
};

export const DashboardButtonComponent = () => {
  return (
    <MuiThemeProvider>
      <div>
        <DashboardButton />
      </div>
    </MuiThemeProvider>
  )
}
