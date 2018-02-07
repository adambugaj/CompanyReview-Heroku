// Remember default export without {}, not defualt within {}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addReview } from './actions/review-generators';
import CRAppRouter from './routers/CRAppRouter';
import configureStore from './store/configureStore';
import { removeReview } from './actions/review-generators';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './material/MyAwesomeReactComponent';


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
