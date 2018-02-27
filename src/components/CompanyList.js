import React from 'react';
import { connect } from 'react-redux';
import {DashboardButtonComponent} from './test/LoginHeader';
import ReviewList from './create-page/ReviewList';
import FindReviewFilter from './filters/FindReviewFilter';

const CompanyList = (props) => {
  console.log(props.filters.filtersReducer.text);
  return (
    <div>
      <DashboardButtonComponent />
      <FindReviewFilter />
      {props.review.map((rev) => {
        if (props.filters.filtersReducer.text === rev.companyName) {
          return <ReviewList key={rev.q1 + Math.random()}{...rev} />
        } else {
          return <ReviewList key={rev.q1 + Math.random()}{...rev} />
        }
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
    review: state.reviewReducer,
    filters: state
  };
}

export default connect(mapStateToProps)(CompanyList);
