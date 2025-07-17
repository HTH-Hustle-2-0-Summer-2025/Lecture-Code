const { add, subtract } = require('./calculator');

// Test: Does addition work?
test('adds two numbers correctly', () => {
  expect(add(3, 5)).toBe(8);
});

// Test: Does subtraction work?
test('subtracts two numbers correctly', () => {
  expect(subtract(10, 4)).toBe(6);
});
