import mysql from 'mysql2'; // importando o módulo

// Conexão Local
//const conexao = mysql.createConnection({
  //  host: 'localhost',
    //user: 'root',
    //password: '',
    //database: 'escola-api'
//});

// Conexão Remota

const conexao = mysql.createConnection({
    host: 'db4free.net',
    user: 'testebd3',
    password: 'Ph26843280.',
    database: 'bancoteste2260'
});

// Conectando e passando mensagem (de erro ou sucesso)
conexao.connect( erro => {
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}.`); // apresenta 
        // o host no qual estamos conectados.    
    }
});

//exportando o recurso
export default conexao;