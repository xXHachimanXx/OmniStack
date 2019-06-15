//DEPENDÊNCIAS
const mongoose = require('mongoose');

//para saber quais colounas estão disponíveis na nossa tabela de dados
const postSchema = new mongoose.Schema
({
    //atributos relativos ao post
    author: String, 
    place: String,  
    description: String,
    hashtags: String,
    image: String,
    likes: 
    {
        type: Number,
        default: 0,
    }
}, {timestamps: true} ); // timestamps cria registros de datas de criação e modificação de cada atributo

module.exports = mongoose.model('Post', postSchema);