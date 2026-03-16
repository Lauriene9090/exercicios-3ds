const  multiplicar  = require('../index');

test("2 * 3 deve ser 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});