import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <AppBar
        title="Company Review app"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Subheader className="header-container__subheader" inset={true}>Save reviews of interviews with CRa</Subheader>
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
