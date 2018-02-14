import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { addReview } from '../../actions/review-generators';

const CreateReviewPage = (props) => {
  return (
    <div>
      <ReviewForm
        onSubmit={(review) => {
          // Be sure what you type as Parameter, don't use destructuring ({})

          props.dispatch(addReview(review))
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(CreateReviewPage);
