var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        nome: resultadoAutenticar[0].nome,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                        genero: resultadoAutenticar[0].genero,
                                        idade: resultadoAutenticar[0].idade,
                                        altura: resultadoAutenticar[0].altura,
                                    })
            
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var genero = req.body.generoServer;
    var idade = req.body.idadeServer;
    var altura = req.body.alturaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu genero está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else {


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, genero, idade, altura)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function entrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo login.html
    // var nome = req.body.nomeServer
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var genero = req.body.generoServer;
    // var idade = req.body.idadeServer;
    // var altura = req.body.alturaServer;

    // Faça as validações dos valores
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o login! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    entrar
}