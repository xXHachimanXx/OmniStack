const post = require('../models/Post');

module.exports = {

    //retornar uma lista dos posts ja cadastrados
    async index(req, res) {

    },
    //cadastrar novos posts
    async store(req, res) {
        console.log(req.body);

        return res.json( { ok: true } );
    }
};