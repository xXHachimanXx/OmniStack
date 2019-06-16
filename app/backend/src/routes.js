//DEPENDÊNCIAS
const express = require('express');
const PostController = require('./controllers/PostController');
const multer = require('multer');
const uploadConfig = require('./config/Upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;
