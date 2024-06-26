const express = require('express');
const fileupload = require('express-fileupload');
const path = require('path');

const cors = require('cors');
const server = express();

const adminRouter = require('../src/routes/adminRouter');
const eventsRouter = require('../src/routes/eventsRouter');

server.use(cors());
server.use(express.json())
/* server.use(express.urlencoded({extended: false})); */
server.use(fileupload());

server.use('/admin', adminRouter);
server.use('/events', eventsRouter);


server.use((err, _req, res, _next) => {
    console.log("ERROR: " + err.message);
    res.status(err.code ?? 500);
    res.send({
        status: "Error",
        message: `${err.message}`});
});

server.use((_req, res) => {
    res.status(404);
    res.send("Página no encontrada");
});

module.exports = server;