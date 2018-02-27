// Remember default export without {}, not defualt within {}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addReview } from './actions/review-generators';
import CRAppRouter from './routers/CRAppRouter';
import configureStore from './store/configureStore';
import { removeReview } from './actions/review-generators';
import './styles/styles.scss';

const store = configureStore();
console.log('test');

// Created component for a test
store.dispatch(addReview({companyName: 'Google', q1: 1, q2: 0, q3: 8500, shortNote: 'Good Wage, opportunity to grow, big plus to work there', checkboxGerman: 'Yes', checkboxEnglish: 'Yes'}));

store.dispatch(addReview({companyName: 'Amazon', q1: 1, q2: 0, q3: 8000, shortNote: 'Good Wage, opportunity to grow, big plus to work there', checkboxGerman: 'No', checkboxEnglish: 'Yes'}))

store.dispatch(addReview({companyName: 'Zurich', q1: 1, q2: 0, q3: 7800, shortNote: 'Good Wage, opportunity to grow, big plus to work there', checkboxGerman: 'Yes', checkboxEnglish: 'Yes'}))

// Very important part to connect Provider with store!
const jsx = (
  <Provider store={store}>
    <CRAppRouter/>
  </Provider>
);


// Render App
ReactDOM.render(jsx, document.getElementById('app'));
