import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default () => {
  return (
    <div className="createButton">
      <MuiThemeProvider>
        <Link to="/create-company-review">
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
        </Link>
      </MuiThemeProvider>
    </div>
  );
};
