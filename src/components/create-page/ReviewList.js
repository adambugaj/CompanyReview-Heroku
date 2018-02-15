import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review-generators';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const cardStyle = {
    width: '70%'
};

const removeStyle = {
  display: 'flex',
  'marginLeft': 'auto',
  'flexDirection': 'row'
}

const ReviewList = ({companyName, q1, q2}) => {
  return (
    <div>
      <MuiThemeProvider>
        <div className="create-card">
        <Card className="review-form_mobile" style={cardStyle}>
          <CardHeader
            title={companyName}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <div className="_review-list__buttons">
          <Link to={`/edit/${companyName}`}>
            <FlatButton label="Edit"/>
          </Link>
          <FlatButton  label="Remove" secondary={true} onClick={ () => {
            const getCompanyName = prompt('Type the company name you want to remove');
            props.dispatch(removeReview({companyName: getCompanyName}));
            }}/>
          </div>
        </Card>
      </div>
      </MuiThemeProvider>
      <div className="create-card1">
      </div>
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
