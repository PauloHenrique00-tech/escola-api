import conexao from './banco.js';

/* FUNÇÕES PARA O CRUD */
// Função para exibir todos os alunos do banco
function ler(res){
    
    // Seleciona todos os dados da tabela "alunos", ordenando pelo nome
    const sql = "SELECT * FROM alunos ORDER BY nome";

    // Executando a query a partir da conexão
    conexao.query(sql, (erro, resultados) => {

        if (resultados === 0) {
            res.status(204).end();
            return; //forçar a interrupção do código
        }
        // Verificação básica de erro
        if(erro){
            // Se erro, exibir status 400 e informar qual foi o erro
            res.status(400).json(erro.code);
        }else {
            // se der certo, apresenta o status 200 e exibe o resultado (no formato JSON)
            res.status(200).json(resultados);
        }

    });
}

export { ler };