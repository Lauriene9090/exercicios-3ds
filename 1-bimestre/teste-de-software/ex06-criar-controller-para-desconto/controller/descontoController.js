const calcularDesconto = require("../services/descontoService");

function descontoController(req, res) {
  const { valor } = req.body;

  const valorFinal = calcularDesconto(valor);

  return res.json({
    valorFinal
  });
}

module.exports = descontoController 