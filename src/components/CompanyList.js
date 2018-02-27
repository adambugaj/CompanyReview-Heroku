import React from 'react';
import { connect } from 'react-redux';
import LoginHeader from './test/LoginHeader';
import ReviewList from './create-page/ReviewList';

const CompanyList = (props) => {
  console.log(props.review);
  return (
    <div>
      <LoginHeader />
      {props.review.map((rev) => {
        return <ReviewList key={rev.q1 + Math.random()}{...rev} />
      })}
      {
        // Check if a review is added if not, prevent from adding an empty review
        !props.review && <ReviewList />
      }
      <button className="review-form_mobile" onClick={() => {props.history.push('/')}}>Dashboard</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    review: state.reviewReducer
  };
}

export default connect(mapStateToProps)(CompanyList);
