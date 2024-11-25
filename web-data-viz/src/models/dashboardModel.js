var database = require("../database/config");

function buscarInformacoes(idade, altura) {
  console.log(
    "ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ",
    idade,
    altura
  );
  var instrucaoSql = `select altura, idade 
  from usuario`;

  return database.executar(instrucaoSql);
}

function buscarKPIs(idade, altura) {
    console.log(
      "ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ",
      idade,
      altura
    );
    var instrucaoSql = `select avg(altura) as MediaAltura, avg(idade) as MediaIdade
    from usuario`;
  
    return database.executar(instrucaoSql);
  }


module.exports = {
    buscarInformacoes,
    buscarKPIs,
};
