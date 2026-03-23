const {
    cadastrarTarefa,
    totalTarefas,
    listarTarefas
} = require("../services/tarefaService");

// Importa banco para limpar antes dos testes
const tarefas = require("../database/tarefaDatabase");

describe("Tarefa Service", () => {

    // 🔥 Banco sempre começa vazio
    beforeEach(() => {
        tarefas.length = 0;
    });

    test("Banco deve iniciar vazio", () => {
        expect(totalTarefas()).toBe(0);
    });

    test("Não deve cadastrar tarefa sem descrição", () => {
        const resultado = cadastrarTarefa();

        expect(resultado).toBe(false);
        expect(totalTarefas()).toBe(0);
    });

    test("Deve cadastrar tarefa com descrição", () => {
        const resultado = cadastrarTarefa("Estudar Jest");

        expect(resultado).toBe(true);
        expect(totalTarefas()).toBe(1);
    });

    // ⭐ EXTRA
    test("Lista deve conter tarefa cadastrada", () => {
        cadastrarTarefa("Fazer atividade");

        const lista = listarTarefas();

        expect(lista.length).toBe(1);
        expect(lista[0].descricao).toBe("Fazer atividade");
    });

});