import { createStore, combineReducers, applyMiddleware } from 'redux';
import reviewReducer from '../reducers/reviewReducer';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// Store creation - stores function
export default () => {
  const store = createStore(
    combineReducers({
      reviewReducer: reviewReducer,
      filtersReducer: filtersReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
