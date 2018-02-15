import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review-generators';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RemoveReview from './RemoveReview';


const cardStyle = {
    width: '80%'
};

const removeStyle = {
  display: 'flex',
  'marginLeft': 'auto',
  'flexDirection': 'row'
}

const ReviewList = ({companyName, q1, q2, }) => {
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
          <CardText expandable={true}>
            <div className="answers-list">
              <p>Home-office days: {q1}</p>
              <p>Learning days: {q2}</p>
              <p>Wage amount:</p>
              <p>Your opinion:</p>
            </div>
          </CardText>
            <div className="_review-list__buttons">
              <Link to={`/edit/${companyName}`}>
                <FlatButton label="Edit"/>
              </Link>
              <RemoveReview />
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
