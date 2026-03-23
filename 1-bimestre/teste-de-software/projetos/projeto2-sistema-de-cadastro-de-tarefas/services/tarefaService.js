const tarefas = require("../database/tarefaDatabase");

// Cadastrar tarefa
function cadastrarTarefa(descricao) {

    // Regra: descrição obrigatória
    if (!descricao) {
        return false;
    }

    const novaTarefa = {
        descricao: descricao
    };

    tarefas.push(novaTarefa);

    return true;
}

// Total de tarefas
function totalTarefas() {
    return tarefas.length;
}

// ⭐ EXTRA
function listarTarefas() {
    return tarefas;
}

module.exports = {
    cadastrarTarefa,
    totalTarefas,
    listarTarefas
};