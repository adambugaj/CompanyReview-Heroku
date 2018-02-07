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
  }
});

// Action Generator - remove existed company review by clicking a button
// this is made for action in reducers
const removeReview = ({companyName} = {}) => ({
  type: 'REMOVE_REVIEW',
  companyName
});

// Action Generator - edit what is needed in a review
const editReview = ({companyName, updates} = {}) => ({
  type: 'EDIT_REVIEW',
  companyName,
  updates
});

export { addReview, removeReview, editReview };
