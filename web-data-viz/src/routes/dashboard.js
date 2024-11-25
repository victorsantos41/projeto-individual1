var express = require("express");
var router = express.Router();

var dashboardController = require('../controllers/dashboardController');

router.get("/informacoes", function (req, res) {
    dashboardController.buscarInformacoes(req, res);
});

router.get("/kpis", function (req, res) {
    dashboardController.buscarKPIs(req, res);
});

module.exports = router;
