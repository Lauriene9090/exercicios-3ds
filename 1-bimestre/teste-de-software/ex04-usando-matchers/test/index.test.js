test("5 é maior que 3", () => {
  expect(5).toBeGreaterThan(3);
});

test('O texto contém a palavra "Software"', () => {
  expect("Teste de Software").toContain("Software");
});

test("Objeto aprovado é igual ao esperado", () => {
  const resultado = { aprovado: true };

  expect(resultado).toEqual({ aprovado: true });
});