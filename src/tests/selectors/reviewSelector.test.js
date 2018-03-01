import reviewSelector from '../../selectors/reviewSelector';
import testDataReviews from '../fixtures/testDataReviews';

// If we type text: 'Am' we have to get back Amazon
test('should filter by text value', () => {
  const filters = { text: 'Am' }
  const reviews = reviewSelector(testDataReviews, filters);

  expect(reviews).toEqual([{
    companyName: 'Amazon',
    q1: 1,
    q2: 2,
    shortNote: 'Nice wage',
    checkboxEnglish: 'Yes'
  }]);
});
