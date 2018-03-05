import database from '../firebase/firebase';

// Setting up an object and constructor - create new review by filling the question and saving it by clicking a save button
const addReview = (review) => ({
  type: "ADD_REVIEW",
  review
});

// const addReview = ({
//   companyName = '',
//   q1 = '',
//   q2 = '',
//   q3 = '',
//   shortNote = '',
//   checkboxEnglish = '',
//   checkedEnglish = false,
//   checkboxGerman = '',
//   checkedGerman = false
// } = {}
// ) => ({
//   type: "ADD_REVIEW",
//   review: {
//     companyName,
//     q1,
//     q2,
//     q3,
//     shortNote,
//     checkboxEnglish,
//     checkedEnglish,
//     checkboxGerman,
//     checkedGerman
//   }
// });

// This function with return work only with applyMiddleware(thunk) redux-thunk
export const startAddExpense = (reviewData = {}) => {
  return (dispatch) => {
    const {
      companyName = '',
      q1 = '',
      q2 = '',
      q3 = '',
      shortNote = '',
      checkboxEnglish = '',
      checkedEnglish = false,
      checkboxGerman = '',
      checkedGerman = false
    } = expenseData;
    const review = { companyName, q1, q2, q3, shortNote, checkboxEnglish, checkedEnglish, checkboxGerman, checkedGerman}
    database.ref('reviews').push(review).then((ref) => {
      dispatch(addReview({
        id: ref.key,
        ...review
      }));
    });
  };
};

// Action Generator - remove existed company review by clicking a button
// this is made for action in reducers
// Those are normal functions without returns
const removeReview = ({companyName} = {}) => ({
  type: 'REMOVE_REVIEW',
  companyName
});

// Action Generator - edit what is needed in a review
const editReview = (companyName, updates) => ({
  type: 'EDIT_REVIEW',
  companyName,
  updates
});

export { addReview, removeReview, editReview };
