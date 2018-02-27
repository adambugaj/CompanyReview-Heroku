import { createStore, combineReducers } from 'redux';
import reviewReducer from '../reducers/reviewReducer';
import filtersReducer from '../reducers/filters';

// Store creation - stores function
export default () => {
  const store = createStore(
    combineReducers({
      reviewReducer: reviewReducer,
      filtersReducer: filtersReducer
    })
  );
  return store;
};
