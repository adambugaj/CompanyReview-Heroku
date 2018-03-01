import reviewReducer from '../../reducers/reviewReducer';
import testDataReviews from '../fixtures/testDataReviews';

test('should set default state', () => {
  const state = reviewReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([])
});

test('should remove a review by id', () => {
  const action =  {
    type: 'REMOVE_REVIEW',
    companyName: 'Google'
  };
  const state = reviewReducer(testDataReviews, action)
  expect(state).toEqual([testDataReviews[0],testDataReviews[2]]);
});
