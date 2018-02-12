import React from 'react';
import { connect } from 'react-redux';
import RemoveReview from './RemoveReview';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ReviewList = ({companyName, q1, q2}) => {
  return (
    <div>
      <MuiThemeProvider>
        <Card>
          <CardHeader
            title={companyName}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Link to={`/edit/${companyName}`}>
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
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     name: 'Adam',
//     status: 'Win!',
//     review: state.review
//   };
// }
//

export default ReviewList;

// zapisuje 2 obiekty, ale 3 już nie, check and fix
