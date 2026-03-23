const {
    cadastrarTarefa,
    totalTarefas,
    listarTarefas
} = require("../services/tarefaService");

// Controller cadastrar
function cadastrar(req, res) {

    const { descricao } = req.body;

    const resultado = cadastrarTarefa(descricao);

    if (resultado) {
        return res.json({
            mensagem: "Tarefa cadastrada com sucesso"
        });
    }

    return res.json({
        mensagem: "Descrição obrigatória"
    });

}

// Controller total
function total(req, res) {
    return res.json({
        total: totalTarefas()
    });
}

// ⭐ EXTRA
function listar(req, res) {
    return res.json({
        tarefas: listarTarefas()
    });
}

module.exports = {
    cadastrar,
    total,
    listar
};