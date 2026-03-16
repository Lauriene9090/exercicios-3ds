const calcularQuadrado = require('../index');

test("calcularQuadrado(5) deve retornar 25", () => {
  expect(calcularQuadrado(5)).toBe(25);
});