var dashboardModel = require("../models/dashboardModel");

function buscarInformacoes(req, res) {

var idade = req.body.idadeServer;
var altura = req.body.alturaServer;

dashboardModel.buscarInformacoes(idade, altura)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as infos.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}


function buscarKPIs(req, res) {

    var idade = req.body.idadeServer;
    var altura = req.body.alturaServer;
    
    dashboardModel.buscarKPIs(idade, altura)
        .then(function (resultado) {
          if (resultado.length > 0) {
            res.status(200).json(resultado);
          } else {
            res.status(204).send("Nenhum resultado encontrado!");
          }
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "Houve um erro ao buscar os KPIs.",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    }



module.exports = {
    buscarInformacoes,
    buscarKPIs,
  };