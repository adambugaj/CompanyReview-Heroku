import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './create-page/ReviewForm';
import { editReview } from '../actions/review-generators';


const EditReview = (props) => {
  return (
    <div>
      <h2>Edit Review</h2>
      <p>You are editing <strong>{props.review.companyName}</strong> review</p>
      <ReviewForm
        review={props.review}
        onSubmit={(review) => {
            console.log(props.review.companyName);
          props.dispatch(editReview(props.review.companyName, review));
          props.history.push('/')
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    review: state.reviewReducer.find((review) => {
      // Change to lower case and compare
      const companyNameLowerCase = review.companyName.toLowerCase();
      return companyNameLowerCase === props.match.params.id
    })
  };
};




export default connect(mapStateToProps)(EditReview);
