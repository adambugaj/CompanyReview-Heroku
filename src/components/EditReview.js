import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './create-page/ReviewForm';
import { editReview } from '../actions/review-generators';


const EditReview = (props, state) => {
  return (
    <div>
      <div className="header-container">
        <h2 className="header-container__edit-create">Review Edition</h2>
        <p className="sunheader__edit">You are editing <strong>{props.review.companyName}</strong> company review</p>
      </div>
      <ReviewForm
        reviewCompare={props.reviewCompare}
        review={props.review}
        onSubmit={(review) => {
          props.dispatch(editReview(props.review.companyName, review))
          props.history.push('/')
          }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    reviewCompare: state.reviewReducer.map((review) => {
      console.log(review.companyName);
      return review.companyName;
    }),
    review: state.reviewReducer.find((review) => {
      // Change to lower case and compare
      console.log(review, state);
      const companyNameLowerCase = review.companyName.toLowerCase();
      return companyNameLowerCase === props.match.params.id;
    })
  };
};




export default connect(mapStateToProps)(EditReview);
