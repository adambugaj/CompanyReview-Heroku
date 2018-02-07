import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review-generators';
import ReviewForm from './ReviewForm';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Default" />
  </div>
);

const RemoveReview = (props) => {
  return (
    <div>
      <MuiThemeProvider>
        <FlatButton label="Remove" secondary={true} onClick={ () => {
          const getCompanyName = prompt('Type the company name you want to remove');
          props.dispatch(removeReview({companyName: getCompanyName}));
          }}
        />
      </MuiThemeProvider>
    </div>
  )
}


export default connect()(RemoveReview);
