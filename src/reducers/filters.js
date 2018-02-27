// Filters Reducer

// Default option
const filtersReducerDefaultState = {
  text: ''
}

export default (state = filtersReducerDefaultState, action) => {
  console.log(state, action.text, ...state);
  switch (action.type) {
    case 'SET_TEXT_FILTERS':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}
