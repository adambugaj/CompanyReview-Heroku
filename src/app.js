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
// Very important part to connect Provider with store!
const jsx = (
  <Provider store={store}>
    <CRAppRouter/>
  </Provider>
);


// Render App
ReactDOM.render(jsx, document.getElementById('app'));
