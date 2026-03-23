const {
    adicionarProduto,
    listarProdutos,
    limparBanco
} = require("../database/produtoDatabase")

describe("Mock de Produtos", () => {
    beforeEach(() => {
        limparBanco()
    })

    test("Banco começa vazio", () => {
        const produtos = listarProdutos()
        expect(produtos.length).toBe(0)
    })

    test("Produto é adicionado", () => {
        const novoProduto = {
            nome: "Caneta",
            quantidade: 100
        };

        adicionarProduto(novoProduto)

        const produtos = listarProdutos()

        expect(produtos.length).toBe(1)
        expect(produtos[0]).toEqual(novoProduto)
    })

})