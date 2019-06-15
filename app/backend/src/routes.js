//DEPENDÊNCIAS
const express = require('express');
const routes = new express.Router();

//criar rota do tipo get acessível via navegador
//o midleware intercepta a requisição feita na rota raiz ('/')
routes.get('/', (req, res) => {
    return res.send(`Olá ${req.query.name}`);
});

module.exports = routes;
