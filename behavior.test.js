const {makeSandwich} = require('./behavior')



test('returns correct sandwich', () => {
    expect(makeSandwich()).toBe("PB&J");
  });