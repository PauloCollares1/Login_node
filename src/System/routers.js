const routes = require('express').Router();
const loginController = require('../Controller/loginControler');
const registerController = require('../Controller/registerController');






// --- Only GET routes -----//
routes.get('/registerget', registerController.userCheck)

routes.get('/loginget', loginController.userCheck)






// --- Only POST routes -----//
routes.post('/register', registerController.register)

routes.post('/login', loginController.getAccount)


// --- Exports -----//
module.exports = {routes}