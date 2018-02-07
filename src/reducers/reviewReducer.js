// Deafult state for reviewReducer function
const reviewReducerDefaultState = [];
// Make a right choice by providing a user data, state = object/data
const reviewReducer = (state = reviewReducerDefaultState, action) => {
  console.log(action.review);
  switch(action.type) {
    case 'ADD_REVIEW':
      console.log(state);
      return [
        ...state,
        action.review
      ];
    case 'REMOVE_REVIEW':
    // remember about return in every method you use!!
    // you can do it with filter((review.companyName) => {}) - without destructuring, there is two options, just to know it :)
      return state.filter(({companyName}) => {
        console.log(companyName, action.companyName);
        return companyName !== action.companyName;
      });
    default:
      return state;
  }
};

export default reviewReducer;
