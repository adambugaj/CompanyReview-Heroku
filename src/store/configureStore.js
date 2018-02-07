import { createStore, combineReducers } from 'redux';
import reviewReducer from '../reducers/reviewReducer';


// Store creation - stores function
export default () => {
  const store = createStore(
    combineReducers({
      reviewReducer: reviewReducer
    })
  );
  return store;
};
