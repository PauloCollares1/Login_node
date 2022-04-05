const routes = require('./routers');
const database = require('./database');
const express = require('express');
const http = require('http');
require('dotenv').config();


//---- Settings ----//
const app = express();
app.use(express.json())
const server = http.Server(app);

//---- Static pages ----//
app.use('/', express.static('Public/Login'));
app.use('/register', express.static('Public/Register'));

//---- Set Rotes ----//
app.use('/', routes.routes)


// ---- Creat Server ---- //
server.listen(process.env.PORT || 5000, () => {console.log('Node Server..........: Online')})