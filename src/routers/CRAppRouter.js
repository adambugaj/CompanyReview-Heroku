import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import CreateReviewPage from '.././components/create-page/CreateReviewPage';
import Header from '.././components/Header';
import LoginPage from '.././components/LoginPage';
import MainPage from '.././components/MainPage';
import PageNotExisted from '.././components/PageNotExisted';
import ReviewList from '.././components/create-page/ReviewList';
import UserDashboard from '.././components/dashboard/UserDashboard';
import EditReview from '../components/EditReview';
import CompanyList from '../components/CompanyList';

class CRAppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={MainPage} exact={true}/>
            <Route path="/companies" component={CompanyList} />
            <Route path="/dashboard/:username" component={UserDashboard}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/create-company-review" component={CreateReviewPage}/>
            <Route path="/edit/:id" component={EditReview}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default CRAppRouter;
