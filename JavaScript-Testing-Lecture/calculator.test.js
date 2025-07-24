const { add, subtract, multiply, imAVariable } = require('./calculator');

// Test: Does addition work?
test('adds two numbers correctly', () => {
  expect(add(3, 5)).toBe(8);
});

// Test: Does subtraction work?
test('subtracts two numbers correctly', () => {
  expect(subtract(6, 4)).toBe(2);
});

// Test: get my variable
test('check variable', () => {
  expect(imAVariable).toBe("hey Victoria");
});

test('multiplies two numbers correctly', () => {
  expect(multiply(6, 4)).toBe(24);
});
