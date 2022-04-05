const registerController = require('../Controller/registerController');
const loginController = require('../Controller/loginControler');
const routes = require('express').Router();






// --- Only GET routes -----//
//routes.get('/registerlist', registerController.register)
routes.get('/registerget', registerController.userCheck)

routes.get('/loginget', loginController.userCheck)



// --- Only POST routes -----//
routes.post('/register', registerController.register)

routes.post('/check', loginController.loginCheck)



// --- Exports -----//
module.exports = {routes}