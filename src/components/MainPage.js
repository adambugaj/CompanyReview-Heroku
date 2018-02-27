import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserDashboard from '.././components/dashboard/UserDashboard';
import LoginHeader from './test/LoginHeader';
import CreateReviewButton from './create-page/CreateReviewButton';
import NumberInterviews from './create-page/NumberInterviews';


// Component for main site
const MainPage = (props) => {
    return (
      <div>
        <LoginHeader />
        <h1>{}</h1>
        <NumberInterviews />
        <CreateReviewButton />
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
