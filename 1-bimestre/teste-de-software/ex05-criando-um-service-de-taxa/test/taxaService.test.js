const calcularTaxa  = require("../service/taxaService");

describe("Taxa Service", () => {

  let valor;

  beforeEach(() => {
    valor = 0;
  });

  test("deve retornar 5% de taxa se o valor for maior que 500", () => {
    valor = 1000;

    const taxa = calcularTaxa(valor);

    expect(taxa).toBe(50);
  });

  test("deve retornar 0 se o valor for menor ou igual a 500", () => {
    valor = 400;

    const taxa = calcularTaxa(valor);

    expect(taxa).toBe(0);
  });

});