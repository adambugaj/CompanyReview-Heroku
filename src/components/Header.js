import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';

const HeaderComponent = () => {
  return (
    <div>
      <AppBar
        title="Company Review App"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Subheader inset={true}>The big App is comming</Subheader>
    </div>
  );
}
const Header = () => {
  return (
    <MuiThemeProvider>
        <HeaderComponent />
    </MuiThemeProvider>
  );
};

export default Header;
