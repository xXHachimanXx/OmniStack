//DEPENDÊNCIAS
const express = require('express');
const mongoose = require('mongoose');


//criar a aplicação que não deixa de ser uma variável
const app = express();//a função express cria um servidor

mongoose.connect('mongodb+srv://teste:testando123@cluster0-zcymb.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true, }
);

app.use(require('./routes'));

//o navegador precisa ouvir uma porta para conectar com o server
//LOCAL HOST:3333
app.listen(3333); // o site será acessado da seguinte forma: localhost:3333