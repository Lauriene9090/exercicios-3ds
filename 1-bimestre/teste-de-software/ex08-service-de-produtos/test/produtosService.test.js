const cadastrarProduto = require("../services/produtosService")

const {listarProdutos, limparBanco}  = require("../database/produtoDatabase")

describe("Service de Produtos", () => {

    beforeEach(() => {
        limparBanco();
    })

    test("Produto cadastrado", () => {

        const produto = {
            nome: "Controle Xbox",
            preco: 250
        }

        const resultado = cadastrarProduto(produto)

        const produtos = listarProdutos()

        expect(resultado).toBe(true)
        expect(produtos.length).toBe(1)
    })

    test("Produto sem nome", () => {

        const produto = {
            preco: 200
        }

        const resultado = cadastrarProduto(produto)

        const produtos = listarProdutos()

        expect(resultado).toBe(false)
        expect(produtos.length).toBe(0)
    })

})