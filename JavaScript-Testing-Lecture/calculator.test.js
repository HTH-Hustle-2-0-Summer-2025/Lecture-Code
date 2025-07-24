const { add, subtract, imAVariable } = require('./calculator');

// Test: Does addition work?
test('adds two numbers correctly', () => {
  expect(add(3, 5)).toBe(8);
});

// Test: Does subtraction work?
test('subtracts two numbers correctly', () => {
  expect(subtract(10, 4)).toBe(6);
});

// Test: get my variable
test('check variable', () => {
  expect(imAVariable).toBe("hey Victoria");
});
