import express from "express";
import { ler, inserir, lerUm, excluir, atualizar } from "./src/aluno.js";
import cors from "cors";

const app = express();
const porta = process.env.PORT || 3000;

// Habilitando para dar suporte ao formato JSON
app.use(express.json());

//Habilitando para dar suporte a dados inseridos a partir de inputs de formulário
app.use(express.urlencoded({extended:true}));
app.use (cors());


/* CONFIGURANDO ROTAS */

// raiz da API
app.get('/', (req, res) => {
    //res.send(`API utilizando Node.js, Express e MySQL`);
    res.redirect(`https://documenter.getpostman.com/view/43562423/2sB2cSi4HJ`);
});

// Exibindo TODOS os alunos
app.get('/alunos', (req, res) => {
    //res.send(`Exibindo todos os alunos`);
    ler(res);
});

// Exibindo UM aluno
app.get('/alunos/:id', (req, res) => {
   // res.send(`Exibindo dados de UM aluno`);

   // capturando o ID que vem do endpoint
   const id = parseInt(req.params.id);


   // chamando a função
   lerUm(id, res);
});

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    //res.send(`Inserindo UM aluno`);

    // capturar os dados a partir do corpo da requisição
    const novoAluno = req.body;

    // executando a função inserir e passando os parâmetros novoAluno e res
    inserir(novoAluno, res);
});

// // ATUALIZANDO aluno
app.patch('/alunos/:id', (req, res) => {
    //res.send(`Atualizando dados do aluno`);

    // capturar id
    const id = parseInt(req.params.id);
    // pegando as informações do body
    const aluno = req.body;

    atualizar(id, aluno, res);
});

// EXCLUINDO aluno
app.delete('/alunos/:id', (req, res) => {
    //res.send(`Aluno excluído com sucesso!`);

    //capturando o id
    const id = parseInt(req.params.id);

    excluir(id, res);
    
});

app.listen(porta, (req, res) => {
    console.log(`Servidor rodando na porta ${porta}`);    
});