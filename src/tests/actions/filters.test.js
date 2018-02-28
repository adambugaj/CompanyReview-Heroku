import { setTextFilter } from '../../actions/filters'

test('should create set text action object', () => {
  const action = setTextFilter('Google');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTERS',
    text: 'Google'
  });
});

test('should create default text action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTERS',
    text: ''
  })
});
