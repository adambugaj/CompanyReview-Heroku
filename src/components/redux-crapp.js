import { createStore, combineReducers } from 'redux';

// Setting up an object and constructor - create new review by filling the question and saving it by clicking a save button
const addReview = ({
  companyName = '',
  q1 = '',
  q2 = '',
  q3 = '',
  q4 = '',
  q5 = '',
  shortNote = ''
} = {}
) => ({
  type: "ADD_REVIEW",
  review: {
    companyName,
    q1,
    q2,
    q3,
    q4,
    q5,
    shortNote
    date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
  }
});

// Action Generator - remove existed company review by clicking a button
const removeReview = ({companyName} = {}) => ({
  type: 'REMOVE_EXPENSE',
  companyName
});

const editReview = ({})

// Deafult state for reviewReducer function
const reviewReducerDefaultState = [];
// Make a right choice by providing a user data, state = object/data
const reviewReducer = (state = reviewReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_REVIEW':
      return [
        ...state,
        action.review
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((review) => {
        console.log(review.companyName);
        return review.companyName !== action.companyName;
      });
    default:
      return state;
  }
};

// Store creation - stores function
const store = createStore(
  combineReducers({
    review: reviewReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

const firstReview = store.dispatch(addReview({
  companyName: 'comp',
  q1: '1',
  q2: '2'
}));

const secondReview = store.dispatch(addReview({
  q3: '3'
}));

store.dispatch(removeReview({companyName: firstReview.review.companyName}));
