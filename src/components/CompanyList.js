import React from 'react';
import { connect } from 'react-redux';
import {DashboardButtonComponent} from './test/LoginHeader';
import ReviewList from './create-page/ReviewList';
import FindReviewFilter from './filters/FindReviewFilter';
import reviewSelector from '../selectors/reviewSelector';

const CompanyList = (props) => {
  let array = [1,2,2,3]
  console.log([...new Set(array)]);

  console.log(array);
  return (
    <div>
      <DashboardButtonComponent />
      <FindReviewFilter />
      {props.review.map((rev) => {

          return <ReviewList key={rev.q1 + Math.random()}{...rev} />
      })}
      {
        // Check if a review is added if not, prevent from adding an empty review
        !props.review && <ReviewList />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    review: reviewSelector(state.reviewReducer, state.filtersReducer)
  };
}

export default connect(mapStateToProps)(CompanyList);
