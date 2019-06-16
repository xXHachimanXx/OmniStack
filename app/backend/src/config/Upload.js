const multer = require('multer');
const path = require('path'); //biblioteca para formatar caminhos linux para windows e vice-versa

module.exports = {
    //salvar as imagens no nosso disco(HD)
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    })
};