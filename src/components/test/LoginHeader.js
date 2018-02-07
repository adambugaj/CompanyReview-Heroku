import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HeaderComponent from '../Header';

const style = {
  marginLeft: 100,
  marginTop: 100
}

const CreateReviewButton = () => {
  return (
    <Link to="/create-company-review"><FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton></Link>
  );
};

const LoginButton = () => {
  return (
    <div>
      <Link to="/login"><RaisedButton label="LOGIN"/></Link>
      <Link to="/login"><RaisedButton label="SIGNUP"/></Link>
    </div>
  )
}

export default () => {
    return (
      <MuiThemeProvider>
        <div>
          <LoginButton />
          <CreateReviewButton />
        </div>
      </MuiThemeProvider>
    );
};
