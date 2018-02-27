import { addReview, editReview, removeReview } from '../../actions/review-generators';

// We use toBe when bolean, numbers, strings
// We use toEqual when objects, arrays

test('should setup remove review action object', () => {
  const action = removeReview({ companyName: 'Capgemini' });
  expect(action).toEqual({
    type: 'REMOVE_REVIEW',
    companyName:'Capgemini'
  });
});

test('should setup and test edit review action object', () => {
  const editAction = editReview('Google', {
    companyName: 'Amazon',
    q1: 2,
    shortNote: 'Very nice company, great to work',
    checkboxGerman: 'Yes',
    checkboxEnglish: 'Yes'
  });

  expect(editAction).toEqual({
    type:'EDIT_REVIEW',
    companyName: 'Google',
    updates: {
      companyName: 'Amazon',
      q1: 2,
      shortNote: 'Very nice company, great to work',
      checkboxGerman: 'Yes',
      checkboxEnglish: 'Yes'
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const reviewData = {
    companyName: 'Zurich',
    q1: 1,
    q2: 1,
    q3: 2,
    checkboxEnglish: 'Yes',
    checkedEnglish: false,
    checkboxGerman: 'Yes',
    shortNote: 'Very nice to work',
  }
  const action = addReview(reviewData);
  expect(action).toEqual({
    type: 'ADD_REVIEW',
    review: {
      ...reviewData,
      companyName: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const reviewData = {
    companyName: '',
    q1: '',
    q2: '',
    q3: '',
    checkboxEnglish: '',
    checkedEnglish: false,
    checkboxGerman: '',
    shortNote: ''
  }
  const action = addReview(reviewData);
  expect(action).toEqual({
    type: "ADD_REVIEW",
    review: {
      ...reviewData
    }
  })
});
