const { validarPedido } = require('../index.js')

describe('Sistema de Validação de Pedido', () => {

  test('Pedido válido deve retornar true', () => {
    const pedido = {
      cliente: "Carlos",
      total: 150,
      itens: ["Produto A"]
    }

    expect(validarPedido(pedido)).toBe(true)
  })

  test('Pedido com total 0 deve retornar false', () => {
    const pedido = {
      cliente: "Carlos",
      total: 0,
      itens: ["Produto A"]
    }

    expect(validarPedido(pedido)).toBe(false)
  })

  test('Pedido sem cliente deve retornar false', () => {
    const pedido = {
      total: 150,
      itens: ["Produto A"]
    }

    expect(validarPedido(pedido)).toBe(false)
  })

  test('Pedido sem itens deve retornar false', () => {
    const pedido = {
      cliente: "Carlos",
      total: 150,
      itens: []
    }

    expect(validarPedido(pedido)).toBe(false)
  })

})