import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review-generators';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// we use reviewlist instead of this component
const RemoveReview = (props) => {
  return (
    <div>
      <h2>{}</h2>
      <MuiThemeProvider>
        <Card>
          <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Link to={`/edit/$`}>
            <FlatButton label="Edit"/>
          </Link>
          <FlatButton label="Remove" secondary={true} onClick={ () => {
            console.log(props);
            const getCompanyName = prompt('Type the company name you want to remove');
            props.dispatch(removeReview({companyName: getCompanyName}));
            }}
          />
        </Card>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    review: state.reviewReducer
  };
}

export default connect(mapStateToProps)(RemoveReview);
