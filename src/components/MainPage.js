import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewList from './create-page/ReviewList';
import UserDashboard from '.././components/dashboard/UserDashboard';
import LoginHeader from './test/LoginHeader';

// Component for main site
const MainPage = (props) => {
            console.log('PROPS:', props.review);
    return (
      <div>
        <LoginHeader/>
        <h1>{}</h1>
        { props.review.map((rev) => {
          return <ReviewList key={rev.q1 + Math.random()}{...rev} />
        })}
        {
          // Check if a review is added if not, prevent from adding an empty review
          !props.review && <ReviewList/>
        }
      </div>
    )
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      review: state.reviewReducer
    };
  }


export default connect(mapStateToProps)(MainPage);
