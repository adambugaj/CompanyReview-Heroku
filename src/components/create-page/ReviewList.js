import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RemoveReview from './RemoveReview';

const ReviewList = ({companyName, q1, q2}) => {
  console.log(q1);
  return (
    <div>
      <h2><Link to={`/edit/${companyName}`}>{companyName}</Link></h2>
      <p>{q2}</p>
      <RemoveReview/>
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
