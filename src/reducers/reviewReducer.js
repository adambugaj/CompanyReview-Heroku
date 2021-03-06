// Deafult state for reviewReducer function
const reviewReducerDefaultState = [];
// Make a right choice by providing a user data, state = object/data
const reviewReducer = (state = reviewReducerDefaultState, action) => {
  console.log(state);

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
      console.log(state);
      return state.filter(({companyName}) => {
        console.log(...action, ...state);
        return companyName !== action.companyName;
      });
    case 'EDIT_REVIEW':
      return state.map((company) => {
        console.log(action.companyName);
        console.log(state);
        if (company.companyName === action.companyName) {
          return {
            ...company,
            ...action.updates
          };
        } else {
          return company
          }
      });

    default:
      return state;
  }
};

export default reviewReducer;
