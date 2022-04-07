require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginController = require('../Controller/loginControler');



function access(req, res, next){

    const token = req.header('My-token'); 
    
    // isso aqui só me retorna indefinido
    console.log('Na rota private o token é: ' + token)

    next()
}


module.exports = {access}