const private = require('../Controller/privateController');
const cookieParser = require('cookie-parser');
const database = require('./database');
const routes = require('./routers');
const express = require('express');
const http = require('http');
require('dotenv').config();



//---- Settings ----//
const app = express();
app.use(cookieParser());
app.use(express.json());
const server = http.Server(app);

//---- Static pages ----//
app.use('/', express.static('Public/Login'));
app.use('/register', express.static('Public/Register'));
app.use('/notfound', express.static('Public/NotFound'));
app.use('/private', private.access,  express.static('Public/Private'));

//---- Set Rotes ----//
app.use('/', routes.routes)

// ---- Creat Server ---- //
server.listen(process.env.PORT || 5000, () => {console.log('Node Server..........: Online')})