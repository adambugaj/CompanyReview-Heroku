const add = (a, b) => a + b;
const generateGreeting = (name) => `hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  // Making assertion to truck errors
  expect(result).toBe(7);

// Making assertion to truck errors
  // if (result !== 7) {
  //   throw new Error('The function doesn\'t add right 3 and 4')
  // }
});

test('Should show a provided name with hello', () => {
  const result = generateGreeting('Adam');
  expect(result).toBe(`hello Adam!`);
});
